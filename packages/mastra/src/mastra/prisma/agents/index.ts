import { prisma } from "../index";

const getAgents = async () => {
  const agents = await prisma.agent.findMany();
  return agents;
};

export { getAgents };
