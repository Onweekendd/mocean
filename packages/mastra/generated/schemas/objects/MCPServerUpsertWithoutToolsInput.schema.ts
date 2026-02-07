import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerUpdateWithoutToolsInputObjectSchema as MCPServerUpdateWithoutToolsInputObjectSchema } from './MCPServerUpdateWithoutToolsInput.schema';
import { MCPServerUncheckedUpdateWithoutToolsInputObjectSchema as MCPServerUncheckedUpdateWithoutToolsInputObjectSchema } from './MCPServerUncheckedUpdateWithoutToolsInput.schema';
import { MCPServerCreateWithoutToolsInputObjectSchema as MCPServerCreateWithoutToolsInputObjectSchema } from './MCPServerCreateWithoutToolsInput.schema';
import { MCPServerUncheckedCreateWithoutToolsInputObjectSchema as MCPServerUncheckedCreateWithoutToolsInputObjectSchema } from './MCPServerUncheckedCreateWithoutToolsInput.schema';
import { MCPServerWhereInputObjectSchema as MCPServerWhereInputObjectSchema } from './MCPServerWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MCPServerUpdateWithoutToolsInputObjectSchema), z.lazy(() => MCPServerUncheckedUpdateWithoutToolsInputObjectSchema)]),
  create: z.union([z.lazy(() => MCPServerCreateWithoutToolsInputObjectSchema), z.lazy(() => MCPServerUncheckedCreateWithoutToolsInputObjectSchema)]),
  where: z.lazy(() => MCPServerWhereInputObjectSchema).optional()
}).strict();
export const MCPServerUpsertWithoutToolsInputObjectSchema: z.ZodType<Prisma.MCPServerUpsertWithoutToolsInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerUpsertWithoutToolsInput>;
export const MCPServerUpsertWithoutToolsInputObjectZodSchema = makeSchema();
