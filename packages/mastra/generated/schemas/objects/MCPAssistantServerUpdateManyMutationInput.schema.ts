import * as z from 'zod';
import type { Prisma } from '../../prisma/client';


const makeSchema = () => z.object({
  
}).strict();
export const MCPAssistantServerUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerUpdateManyMutationInput>;
export const MCPAssistantServerUpdateManyMutationInputObjectZodSchema = makeSchema();
