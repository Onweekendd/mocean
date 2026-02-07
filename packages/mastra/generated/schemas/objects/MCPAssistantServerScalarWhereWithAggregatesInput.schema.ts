import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const mcpassistantserverscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => MCPAssistantServerScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MCPAssistantServerScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => MCPAssistantServerScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => MCPAssistantServerScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => MCPAssistantServerScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  assistantId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  mcpServerId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const MCPAssistantServerScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerScalarWhereWithAggregatesInput> = mcpassistantserverscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.MCPAssistantServerScalarWhereWithAggregatesInput>;
export const MCPAssistantServerScalarWhereWithAggregatesInputObjectZodSchema = mcpassistantserverscalarwherewithaggregatesinputSchema;
