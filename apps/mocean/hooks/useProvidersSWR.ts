import type { ProviderType } from "@mocean/mastra/prismaType";
import { apiClient } from "@mocean/mastra/apiClient";
import useSWR, { useSWRConfig } from "swr";

// ==================== 基础版本（不包含关联模型）====================

export function useProviders() {
  const { data, error, isLoading, mutate } = useSWR("providers", async () => {
    const res = await apiClient.customApi.providers.$get();
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  });

  return {
    providers: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

export function useEnabledProviders() {
  const { data, error, isLoading, mutate } = useSWR(
    "providers-enabled",
    async () => {
      const res = await apiClient.customApi.providers.enabled.$get();
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    }
  );

  return {
    providers: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

export function useProvider(id: string | null) {
  const { data, error, isLoading, mutate } = useSWR(
    id ? `provider-${id}` : null,
    async () => {
      if (!id) return null;
      const res = await apiClient.customApi.providers[":id"].$get({
        param: { id }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    }
  );

  return {
    provider: data,
    isLoading,
    error,
    refresh: mutate
  };
}

export function useProvidersByType(type: string | null) {
  const { data, error, isLoading, mutate } = useSWR(
    type ? `providers-type-${type}` : null,
    async () => {
      if (!type) return [];
      const res = await apiClient.customApi.providers.type[":type"].$get({
        param: { type }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
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

// ==================== WithModels 版本（包含模型列表）====================

export function useProvidersWithModels() {
  const { data, error, isLoading, mutate } = useSWR(
    "providers-with-models",
    async () => {
      const res = await apiClient.customApi.providers["with-models"].$get();
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    }
  );

  return {
    providers: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

export function useEnabledProvidersWithModels() {
  const { data, error, isLoading, mutate } = useSWR(
    "providers-enabled-with-models",
    async () => {
      const res =
        await apiClient.customApi.providers.enabled["with-models"].$get();
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    }
  );

  return {
    providers: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

export function useProviderWithModels(id: string | null) {
  const { data, error, isLoading, mutate } = useSWR(
    id ? `provider-with-models-${id}` : null,
    async () => {
      if (!id) return null;
      const res = await apiClient.customApi.providers[":id"]["with-models"].$get(
        { param: { id } }
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    }
  );

  return {
    provider: data,
    isLoading,
    error,
    refresh: mutate
  };
}

export function useProvidersByTypeWithModels(type: string | null) {
  const { data, error, isLoading, mutate } = useSWR(
    type ? `providers-type-with-models-${type}` : null,
    async () => {
      if (!type) return [];
      const res = await apiClient.customApi.providers.type[":type"][
        "with-models"
      ].$get({ param: { type } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
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

// ==================== 操作 Hooks（与数据获取解耦）====================

export function useProviderActions(customMutate?: () => Promise<unknown>) {
  const { mutate: globalMutate } = useSWRConfig();

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

  const create = async (
    data: Parameters<typeof apiClient.customApi.providers.$post>[0]["json"]
  ) => {
    const res = await apiClient.customApi.providers.$post({ json: data });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const result = await res.json();
    await refreshData();
    return result;
  };

  const update = async (
    id: string,
    data: Parameters<
      typeof apiClient.customApi.providers[":id"]["$put"]
    >[0]["json"]
  ) => {
    const res = await apiClient.customApi.providers[":id"].$put({
      param: { id },
      json: data
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const result = await res.json();
    await refreshData();
    return result;
  };

  const remove = async (id: string) => {
    const res = await apiClient.customApi.providers[":id"].$delete({
      param: { id }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const result = await res.json();
    await refreshData();
    return result;
  };

  const toggleEnabled = async (id: string) => {
    const res = await apiClient.customApi.providers[":id"].toggle.$put({
      param: { id }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const result = await res.json();
    await refreshData();
    return result;
  };

  return {
    create,
    update,
    remove,
    toggleEnabled
  };
}
