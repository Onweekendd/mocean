import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerUpdateWithoutResourcesInputObjectSchema as MCPServerUpdateWithoutResourcesInputObjectSchema } from './MCPServerUpdateWithoutResourcesInput.schema';
import { MCPServerUncheckedUpdateWithoutResourcesInputObjectSchema as MCPServerUncheckedUpdateWithoutResourcesInputObjectSchema } from './MCPServerUncheckedUpdateWithoutResourcesInput.schema';
import { MCPServerCreateWithoutResourcesInputObjectSchema as MCPServerCreateWithoutResourcesInputObjectSchema } from './MCPServerCreateWithoutResourcesInput.schema';
import { MCPServerUncheckedCreateWithoutResourcesInputObjectSchema as MCPServerUncheckedCreateWithoutResourcesInputObjectSchema } from './MCPServerUncheckedCreateWithoutResourcesInput.schema';
import { MCPServerWhereInputObjectSchema as MCPServerWhereInputObjectSchema } from './MCPServerWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MCPServerUpdateWithoutResourcesInputObjectSchema), z.lazy(() => MCPServerUncheckedUpdateWithoutResourcesInputObjectSchema)]),
  create: z.union([z.lazy(() => MCPServerCreateWithoutResourcesInputObjectSchema), z.lazy(() => MCPServerUncheckedCreateWithoutResourcesInputObjectSchema)]),
  where: z.lazy(() => MCPServerWhereInputObjectSchema).optional()
}).strict();
export const MCPServerUpsertWithoutResourcesInputObjectSchema: z.ZodType<Prisma.MCPServerUpsertWithoutResourcesInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerUpsertWithoutResourcesInput>;
export const MCPServerUpsertWithoutResourcesInputObjectZodSchema = makeSchema();
