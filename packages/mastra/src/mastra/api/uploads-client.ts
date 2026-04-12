/// <reference lib="dom" />
import { BASE_URL, PREFIX } from "./base-client";

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

/**
 * 文件上传 API 客户端
 *
 * 使用示例：
 *   const client = new UploadsClient();
 *   const record = await client.upload(file, "images");
 *   const url = client.getFileUrl(record.id);
 *   await client.deleteFile(record.id);
 */
export class UploadsClient {
  private baseUrl: string;

  constructor(baseUrl: string = BASE_URL) {
    this.baseUrl = baseUrl;
  }

  /**
   * 上传文件
   * @param file     要上传的 File 对象
   * @param category 分类子目录，默认 "general"
   */
  async upload(file: File, category: string = "general"): Promise<FileRecord> {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("category", category);

    const response = await fetch(`${this.baseUrl}${PREFIX}/uploads`, {
      method: "POST",
      body: formData
      // 不要手动设置 Content-Type，让浏览器自动加上 boundary
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      throw new Error(`上传失败 (${response.status}): ${text}`);
    }

    return response.json() as Promise<FileRecord>;
  }

  /**
   * 返回可直接用于 <img src> 或 fetch 的文件 URL
   */
  getFileUrl(fileId: string): string {
    return `${this.baseUrl}${PREFIX}/uploads/${fileId}`;
  }

  /**
   * 删除文件
   */
  async deleteFile(fileId: string): Promise<FileRecord> {
    const response = await fetch(`${this.baseUrl}${PREFIX}/uploads/${fileId}`, {
      method: "DELETE"
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      throw new Error(`删除失败 (${response.status}): ${text}`);
    }

    return response.json() as Promise<FileRecord>;
  }
}

/** 默认单例，直接导入使用 */
export const uploadsClient = new UploadsClient();
