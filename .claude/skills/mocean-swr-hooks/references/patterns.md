# SWR Hooks 代码模板

## 目录
1. [列表查询 Hook](#列表查询)
2. [单项查询 Hook](#单项查询)
3. [过滤查询 Hook](#过滤查询)
4. [WithRelations 查询 Hook](#withrelations-查询)
5. [Action Hook（标准）](#action-hook-标准)
6. [Action Hook（含乐观更新）](#action-hook-含乐观更新)
7. [组合 Hook（已废弃）](#组合-hook-已废弃)

---

## 列表查询

```ts
export function useProviders() {
  const { getProviders } = useProvidersApi();

  const { data, error, isLoading, mutate } = useSWR("providers", async () => {
    const result = await getProviders();
    return result?.data || [];
  });

  return {
    providers: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}
```

带变体（如仅启用）：

```ts
export function useEnabledProviders() {
  const { getEnabledProviders } = useProvidersApi();

  const { data, error, isLoading, mutate } = useSWR(
    "providers-enabled",
    async () => {
      const result = await getEnabledProviders();
      return result?.data || [];
    }
  );

  return {
    providers: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}
```

---

## 单项查询

参数为 `null` 时不发起请求（条件性 key）：

```ts
export function useProvider(id: string | null) {
  const { getProviderById } = useProvidersApi();

  const { data, error, isLoading, mutate } = useSWR(
    id ? `provider-${id}` : null,
    async () => {
      if (!id) return null;
      const result = await getProviderById(id);
      return result?.data || null;
    }
  );

  return {
    provider: data,
    isLoading,
    error,
    refresh: mutate
  };
}
```

---

## 过滤查询

参数变化频率低时加 `dedupingInterval: 30000`：

```ts
export function useProvidersByType(type: string | null) {
  const { getProvidersByType } = useProvidersApi();

  const { data, error, isLoading, mutate } = useSWR(
    type ? `providers-type-${type}` : null,
    async () => {
      if (!type) return [];
      const result = await getProvidersByType(type as ProviderType);
      return result?.data || [];
    },
    { dedupingInterval: 30000 }
  );

  return {
    providers: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}
```

---

## WithRelations 查询

使用不同的 SWR key 前缀以独立缓存：

```ts
export function useProvidersWithModels() {
  const { getProvidersWithModels } = useProvidersApi();

  const { data, error, isLoading, mutate } = useSWR(
    "providers-with-models",
    async () => {
      const result = await getProvidersWithModels();
      return result?.data || [];
    }
  );

  return {
    providers: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}
```

---

## Action Hook（标准）

与数据获取解耦，支持三种刷新场景：

```ts
/**
 * Provider 操作 hooks - 与数据获取解耦
 * @param customMutate 可选的自定义刷新函数，不传则自动刷新所有相关缓存
 *
 * @example 场景1: 自动刷新所有相关数据
 * const { create, update, remove } = useProviderActions();
 *
 * @example 场景2: 只刷新特定列表
 * const { providers, refresh } = useProviders();
 * const { create } = useProviderActions(refresh);
 *
 * @example 场景3: 刷新多个数据源
 * const { refresh: refreshList } = useProviders();
 * const { refresh: refreshDetail } = useProvider(id);
 * const actions = useProviderActions(async () => {
 *   await Promise.all([refreshList(), refreshDetail()]);
 * });
 */
export function useProviderActions(customMutate?: () => Promise<unknown>) {
  const { mutate: globalMutate } = useSWRConfig();
  const { createProvider, updateProvider, deleteProvider } = useProvidersApi();

  const refreshData = async () => {
    if (customMutate) {
      await customMutate();
    } else {
      await globalMutate(
        (key) => typeof key === "string" && key.startsWith("provider"),
        undefined,
        { revalidate: true }
      );
    }
  };

  const create = async (data: Parameters<typeof createProvider>[0]) => {
    const result = await createProvider(data);
    if (result) await refreshData();
    return result;
  };

  const update = async (
    id: string,
    data: Parameters<typeof updateProvider>[1]
  ) => {
    const result = await updateProvider(id, data);
    if (result) await refreshData();
    return result;
  };

  const remove = async (id: string) => {
    const result = await deleteProvider(id);
    if (result) await refreshData();
    return result;
  };

  return { create, update, remove };
}
```

业务特有操作（如 toggle）直接添加到返回值中：

```ts
  const toggleEnabled = async (id: string) => {
    const result = await toggleProviderEnabled(id);
    if (result) await refreshData();
    return result;
  };

  return { create, update, remove, toggleEnabled };
```

---

## Action Hook（含乐观更新）

适用于需要立即响应 UI 的场景，用泛型 `T` 表示数据类型：

```ts
export function useAssistantActions<T = unknown>(
  customMutate?: KeyedMutator<T>
) {
  const { mutate: globalMutate } = useSWRConfig();
  const { createAssistant, updateAssistant, deleteAssistant } =
    useAssistantsApi();

  const refreshData = async () => {
    if (customMutate) {
      await customMutate();
    } else {
      await globalMutate(
        (key) => typeof key === "string" && key.startsWith("assistant"),
        undefined,
        { revalidate: true }
      );
    }
  };

  const update = async (
    id: string,
    data: Parameters<typeof updateAssistant>[1],
    optimisticData?: T
  ) => {
    if (optimisticData && customMutate) {
      // 乐观更新：fire-and-forget API + SWR 乐观写入
      void updateAssistant(id, data);
      await customMutate(() => optimisticData, {
        optimisticData,
        rollbackOnError: true,
        revalidate: false
      });
      return null;
    }
    // 无乐观数据：等待 API 完成后刷新
    const result = await updateAssistant(id, data);
    if (result) await refreshData();
    return result;
  };

  // create / remove 同标准模式...

  return { create, update, remove };
}
```

使用乐观更新时，调用方传入 `customMutate`（必须是 `KeyedMutator<T>`）和 `optimisticData`：

```ts
const { assistant, refresh } = useFullAssistant(id);  // refresh 是 KeyedMutator<AssistantFullType>
const { update } = useAssistantActions(refresh);

// 触发乐观更新
await update(id, newData, { ...assistant, name: "新名称" });
```

---

## 组合 Hook（已废弃）

**不要新建此模式**，仅用于理解旧代码：

```ts
/**
 * @deprecated 推荐使用 useAssistantsSWR() + useAssistantActions() 组合
 */
export function useAssistantsWithActions() {
  const { assistants, isLoading, error, refresh } = useAssistantsSWR();
  const actions = useAssistantActions(refresh);

  return {
    assistants,
    isLoading,
    error,
    ...actions,
    refresh
  };
}
```
