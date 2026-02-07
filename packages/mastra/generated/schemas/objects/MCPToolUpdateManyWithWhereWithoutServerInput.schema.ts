import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPToolScalarWhereInputObjectSchema as MCPToolScalarWhereInputObjectSchema } from './MCPToolScalarWhereInput.schema';
import { MCPToolUpdateManyMutationInputObjectSchema as MCPToolUpdateManyMutationInputObjectSchema } from './MCPToolUpdateManyMutationInput.schema';
import { MCPToolUncheckedUpdateManyWithoutServerInputObjectSchema as MCPToolUncheckedUpdateManyWithoutServerInputObjectSchema } from './MCPToolUncheckedUpdateManyWithoutServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPToolScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MCPToolUpdateManyMutationInputObjectSchema), z.lazy(() => MCPToolUncheckedUpdateManyWithoutServerInputObjectSchema)])
}).strict();
export const MCPToolUpdateManyWithWhereWithoutServerInputObjectSchema: z.ZodType<Prisma.MCPToolUpdateManyWithWhereWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPToolUpdateManyWithWhereWithoutServerInput>;
export const MCPToolUpdateManyWithWhereWithoutServerInputObjectZodSchema = makeSchema();
