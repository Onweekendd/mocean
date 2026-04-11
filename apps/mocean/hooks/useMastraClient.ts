import { MastraClient } from "@mastra/client-js";
import { BASE_URL } from "@mocean/mastra/apiClient";

export const mastraClient = new MastraClient({
  baseUrl: BASE_URL || "http://localhost:4111"
});

export const useMastraClient = () => {
  return { mastraClient };
};
