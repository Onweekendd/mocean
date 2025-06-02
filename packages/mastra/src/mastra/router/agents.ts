import { registerApiRoute } from "@mastra/core/server";

import { getAgents } from "../prisma/agents";

registerApiRoute("/get-agents", {
  method: "GET",

  handler: async (req) => {
    const agents = await getAgents();

    return req.json(agents);
  },
});
