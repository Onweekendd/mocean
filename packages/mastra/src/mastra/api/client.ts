/// <reference lib="dom" />
import { hc } from "hono/client";

import type { AppType } from "../router/index";

export const BASE_URL = `http://localhost:${process.env["NEXT_PUBLIC_DEV_PORT"] ?? process.env["DEV_PORT"] ?? 4112}`;
export const API_URL = `${BASE_URL}/customApi`;

export const apiClient = hc<AppType>(BASE_URL);

export const useApiClient = () => apiClient;

export { type StorageThreadType } from "@mastra/core/memory";

export interface FileRecord {
  id: string;
  name: string;
  origin_name: string;
  path: string;
  size: number;
  ext: string;
  type: string;
  count: number;
  tokens: number | null;
  created_at: string;
}

export class UploadsClient {
  async upload(file: File, category: string = "general"): Promise<FileRecord> {
    const res = await apiClient.customApi.uploads.$post({
      form: { file, category }
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`上传失败 (${res.status}): ${text}`);
    }

    return res.json() as Promise<FileRecord>;
  }

  getFileUrl(fileId: string): string {
    return `${API_URL}/uploads/${fileId}`;
  }

  async deleteFile(fileId: string): Promise<FileRecord> {
    const res = await apiClient.customApi.uploads[":fileId"].$delete({
      param: { fileId }
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`删除失败 (${res.status}): ${text}`);
    }

    return res.json() as Promise<FileRecord>;
  }
}

export const uploadsClient = new UploadsClient();
