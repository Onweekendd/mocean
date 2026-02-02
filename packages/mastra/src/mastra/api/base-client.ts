/// <reference lib="dom" />

export const BASE_URL = "http://localhost:4111";
export const PREFIX = "/customApi";
export const API_URL = `${BASE_URL}${PREFIX}`;

/**
 * API 响应的基础类型
 */
export interface ApiResponse<T> {
  data?: T;
  error?: string;
}

/**
 * API 客户端配置
 */
export interface ApiClientConfig {
  baseUrl?: string;
  headers?: Record<string, string>;
}

/**
 * 请求选项类型
 */
interface RequestOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
}

/**
 * 抽象API客户端基类
 * @description 提供通用的HTTP请求方法和配置管理
 */
export abstract class BaseApiClient {
  protected baseUrl: string;
  protected defaultHeaders: Record<string, string>;

  constructor(config: ApiClientConfig = {}) {
    this.baseUrl = config.baseUrl || API_URL;
    this.defaultHeaders = {
      "Content-Type": "application/json",
      ...config.headers
    };
  }

  /**
   * 发送 HTTP 请求的通用方法
   * @param endpoint - API 端点
   * @param options - 请求选项
   */
  protected async request<T>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<ApiResponse<T>> {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      const response = await fetch(url, {
        ...options,
        headers: {
          ...this.defaultHeaders,
          ...options.headers
        }
      });

      const data = await response.json();

      if (!response.ok) {
        return { error: data.error || `HTTP ${response.status}` };
      }

      return { data };
    } catch (error) {
      return { error: error instanceof Error ? error.message : "网络请求失败" };
    }
  }

  /**
   * GET 请求的便捷方法
   * @param endpoint - API 端点
   * @param headers - 额外的请求头
   */
  protected async get<T>(
    endpoint: string,
    headers?: Record<string, string>
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: "GET",
      headers
    });
  }

  /**
   * POST 请求的便捷方法
   * @param endpoint - API 端点
   * @param body - 请求体数据
   * @param headers - 额外的请求头
   */
  protected async post<T>(
    endpoint: string,
    body?: Record<string, unknown>,
    headers?: Record<string, string>
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: "POST",
      body: body ? JSON.stringify(body) : undefined,
      headers
    });
  }

  /**
   * PUT 请求的便捷方法
   * @param endpoint - API 端点
   * @param body - 请求体数据
   * @param headers - 额外的请求头
   */
  protected async put<T>(
    endpoint: string,
    body?: Record<string, unknown>,
    headers?: Record<string, string>
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: "PUT",
      body: body ? JSON.stringify(body) : undefined,
      headers
    });
  }

  /**
   * DELETE 请求的便捷方法
   * @param endpoint - API 端点
   * @param headers - 额外的请求头
   */
  protected async delete<T>(
    endpoint: string,
    headers?: Record<string, string>
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: "DELETE",
      headers
    });
  }
}
