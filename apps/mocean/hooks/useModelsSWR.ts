import { apiClient } from "@mocean/mastra/apiClient";
import useSWR, { useSWRConfig } from "swr";

// ==================== 基础版本（不包含关联信息）====================

export function useModels() {
  const { data, error, isLoading, mutate } = useSWR("models-base", async () => {
    const res = await apiClient.customApi.models.$get();
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  });

  return {
    models: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

export function useModel(id: string | null) {
  const { data, error, isLoading, mutate } = useSWR(
    id ? `model-base-${id}` : null,
    async () => {
      if (!id) return null;
      const res = await apiClient.customApi.models[":id"].$get({
        param: { id }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    }
  );

  return {
    model: data,
    isLoading,
    error,
    refresh: mutate
  };
}

export function useModelsByProvider(providerId: string | null) {
  const { data, error, isLoading, mutate } = useSWR(
    providerId ? `models-base-provider-${providerId}` : null,
    async () => {
      if (!providerId) return [];
      const res = await apiClient.customApi.models["by-provider"][
        ":providerId"
      ].$get({ param: { providerId } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    },
    {
      dedupingInterval: 30000,
      errorRetryInterval: 3000
    }
  );

  return {
    models: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

export function useModelsByGroup(group: string | null) {
  const { data, error, isLoading, mutate } = useSWR(
    group ? `models-base-group-${group}` : null,
    async () => {
      if (!group) return [];
      const res = await apiClient.customApi.models.group[":group"].$get({
        param: { group }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    },
    {
      dedupingInterval: 30000,
      errorRetryInterval: 3000
    }
  );

  return {
    models: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

// ==================== WithProviders 版本（包含提供商信息）====================

export function useModelsWithProviders() {
  const { data, error, isLoading, mutate } = useSWR(
    "models-with-providers",
    async () => {
      const res = await apiClient.customApi.models["with-providers"].$get();
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    }
  );

  return {
    models: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

export function useModelWithProviders(id: string | null) {
  const { data, error, isLoading, mutate } = useSWR(
    id ? `model-with-providers-${id}` : null,
    async () => {
      if (!id) return null;
      const res = await apiClient.customApi.models[":id"][
        "with-providers"
      ].$get({ param: { id } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    }
  );

  return {
    model: data,
    isLoading,
    error,
    refresh: mutate
  };
}

export function useModelsByProviderWithProviders(providerId: string | null) {
  const { data, error, isLoading, mutate } = useSWR(
    providerId ? `models-provider-with-providers-${providerId}` : null,
    async () => {
      if (!providerId) return [];
      const res = await apiClient.customApi.models["by-provider"][
        ":providerId"
      ]["with-providers"].$get({ param: { providerId } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    },
    {
      dedupingInterval: 30000,
      errorRetryInterval: 3000
    }
  );

  return {
    models: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

export function useModelsByGroupWithProviders(group: string | null) {
  const { data, error, isLoading, mutate } = useSWR(
    group ? `models-group-with-providers-${group}` : null,
    async () => {
      if (!group) return [];
      const res = await apiClient.customApi.models.group[":group"][
        "with-providers"
      ].$get({ param: { group } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    },
    {
      dedupingInterval: 30000,
      errorRetryInterval: 3000
    }
  );

  return {
    models: data || [],
    isLoading,
    error,
    refresh: mutate
  };
}

// ==================== 操作 Hooks（与数据获取解耦）====================

export function useModelActions(customMutate?: () => Promise<unknown>) {
  const { mutate: globalMutate } = useSWRConfig();

  const refreshData = async () => {
    if (customMutate) {
      await customMutate();
    } else {
      await globalMutate(
        (key) => typeof key === "string" && key.startsWith("model"),
        undefined,
        { revalidate: true }
      );
    }
  };

  const create = async (
    data: Parameters<typeof apiClient.customApi.models.$post>[0]["json"]
  ) => {
    const res = await apiClient.customApi.models.$post({ json: data });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const result = await res.json();
    await refreshData();
    return result;
  };

  const update = async (
    id: string,
    data: Parameters<
      typeof apiClient.customApi.models[":id"]["$put"]
    >[0]["json"]
  ) => {
    const res = await apiClient.customApi.models[":id"].$put({
      param: { id },
      json: data
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const result = await res.json();
    await refreshData();
    return result;
  };

  const remove = async (id: string) => {
    const res = await apiClient.customApi.models[":id"].$delete({
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
    remove
  };
}
