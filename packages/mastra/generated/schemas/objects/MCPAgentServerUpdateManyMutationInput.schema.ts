import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  
}).strict();
export const MCPAgentServerUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.MCPAgentServerUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAgentServerUpdateManyMutationInput>;
export const MCPAgentServerUpdateManyMutationInputObjectZodSchema = makeSchema();
