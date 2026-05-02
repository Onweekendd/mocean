/// <reference lib="dom" />
import { hc } from "hono/client";

import type { AppType } from "../router/index";

export const BASE_URL = `http://localhost:${process.env["DEV_PORT"] ?? 4111}`;
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
  private apiUrl: string;

  constructor(baseUrl: string = BASE_URL) {
    this.apiUrl = `${baseUrl}/customApi`;
  }

  async upload(file: File, category: string = "general"): Promise<FileRecord> {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("category", category);

    const response = await fetch(`${this.apiUrl}/uploads`, {
      method: "POST",
      body: formData
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      throw new Error(`上传失败 (${response.status}): ${text}`);
    }

    return response.json() as Promise<FileRecord>;
  }

  getFileUrl(fileId: string): string {
    return `${this.apiUrl}/uploads/${fileId}`;
  }

  async deleteFile(fileId: string): Promise<FileRecord> {
    const response = await fetch(`${this.apiUrl}/uploads/${fileId}`, {
      method: "DELETE"
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      throw new Error(`删除失败 (${response.status}): ${text}`);
    }

    return response.json() as Promise<FileRecord>;
  }
}

export const uploadsClient = new UploadsClient();
