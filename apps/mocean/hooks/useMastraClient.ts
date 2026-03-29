import { MastraClient } from "@mastra/client-js";
import { API_URL } from "@mocean/mastra/apiClient";

export const mastraClient = new MastraClient({
  baseUrl: API_URL || "http://localhost:4111"
});

export const useMastraClient = () => {
  return { mastraClient };
};
