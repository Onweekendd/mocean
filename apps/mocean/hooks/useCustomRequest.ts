import { useContext } from "react";

import { ApiResponse } from "@mocean/mastra/apiClient";

import { ToasterContext } from "@/app/context/ToasterProvider";

const useCustomRequest = () => {
  const { toast } = useContext(ToasterContext);

  const request = async <T>(
    promise: Promise<ApiResponse<T>>,
  ): Promise<{ data: T } | null> => {
    const res = await promise;
    if (res.error || !res.data) {
      toast.error(res.error || "请求失败");
      return null;
    }

    return { data: res.data as T };
  };

  return { request };
};

export default useCustomRequest;
