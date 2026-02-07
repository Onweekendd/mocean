import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerCreateWithoutPromptsInputObjectSchema as MCPServerCreateWithoutPromptsInputObjectSchema } from './MCPServerCreateWithoutPromptsInput.schema';
import { MCPServerUncheckedCreateWithoutPromptsInputObjectSchema as MCPServerUncheckedCreateWithoutPromptsInputObjectSchema } from './MCPServerUncheckedCreateWithoutPromptsInput.schema';
import { MCPServerCreateOrConnectWithoutPromptsInputObjectSchema as MCPServerCreateOrConnectWithoutPromptsInputObjectSchema } from './MCPServerCreateOrConnectWithoutPromptsInput.schema';
import { MCPServerUpsertWithoutPromptsInputObjectSchema as MCPServerUpsertWithoutPromptsInputObjectSchema } from './MCPServerUpsertWithoutPromptsInput.schema';
import { MCPServerWhereUniqueInputObjectSchema as MCPServerWhereUniqueInputObjectSchema } from './MCPServerWhereUniqueInput.schema';
import { MCPServerUpdateToOneWithWhereWithoutPromptsInputObjectSchema as MCPServerUpdateToOneWithWhereWithoutPromptsInputObjectSchema } from './MCPServerUpdateToOneWithWhereWithoutPromptsInput.schema';
import { MCPServerUpdateWithoutPromptsInputObjectSchema as MCPServerUpdateWithoutPromptsInputObjectSchema } from './MCPServerUpdateWithoutPromptsInput.schema';
import { MCPServerUncheckedUpdateWithoutPromptsInputObjectSchema as MCPServerUncheckedUpdateWithoutPromptsInputObjectSchema } from './MCPServerUncheckedUpdateWithoutPromptsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MCPServerCreateWithoutPromptsInputObjectSchema), z.lazy(() => MCPServerUncheckedCreateWithoutPromptsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MCPServerCreateOrConnectWithoutPromptsInputObjectSchema).optional(),
  upsert: z.lazy(() => MCPServerUpsertWithoutPromptsInputObjectSchema).optional(),
  connect: z.lazy(() => MCPServerWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MCPServerUpdateToOneWithWhereWithoutPromptsInputObjectSchema), z.lazy(() => MCPServerUpdateWithoutPromptsInputObjectSchema), z.lazy(() => MCPServerUncheckedUpdateWithoutPromptsInputObjectSchema)]).optional()
}).strict();
export const MCPServerUpdateOneRequiredWithoutPromptsNestedInputObjectSchema: z.ZodType<Prisma.MCPServerUpdateOneRequiredWithoutPromptsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerUpdateOneRequiredWithoutPromptsNestedInput>;
export const MCPServerUpdateOneRequiredWithoutPromptsNestedInputObjectZodSchema = makeSchema();
