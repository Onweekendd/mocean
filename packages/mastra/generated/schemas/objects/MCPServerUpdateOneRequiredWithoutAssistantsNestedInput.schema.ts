import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerCreateWithoutAssistantsInputObjectSchema as MCPServerCreateWithoutAssistantsInputObjectSchema } from './MCPServerCreateWithoutAssistantsInput.schema';
import { MCPServerUncheckedCreateWithoutAssistantsInputObjectSchema as MCPServerUncheckedCreateWithoutAssistantsInputObjectSchema } from './MCPServerUncheckedCreateWithoutAssistantsInput.schema';
import { MCPServerCreateOrConnectWithoutAssistantsInputObjectSchema as MCPServerCreateOrConnectWithoutAssistantsInputObjectSchema } from './MCPServerCreateOrConnectWithoutAssistantsInput.schema';
import { MCPServerUpsertWithoutAssistantsInputObjectSchema as MCPServerUpsertWithoutAssistantsInputObjectSchema } from './MCPServerUpsertWithoutAssistantsInput.schema';
import { MCPServerWhereUniqueInputObjectSchema as MCPServerWhereUniqueInputObjectSchema } from './MCPServerWhereUniqueInput.schema';
import { MCPServerUpdateToOneWithWhereWithoutAssistantsInputObjectSchema as MCPServerUpdateToOneWithWhereWithoutAssistantsInputObjectSchema } from './MCPServerUpdateToOneWithWhereWithoutAssistantsInput.schema';
import { MCPServerUpdateWithoutAssistantsInputObjectSchema as MCPServerUpdateWithoutAssistantsInputObjectSchema } from './MCPServerUpdateWithoutAssistantsInput.schema';
import { MCPServerUncheckedUpdateWithoutAssistantsInputObjectSchema as MCPServerUncheckedUpdateWithoutAssistantsInputObjectSchema } from './MCPServerUncheckedUpdateWithoutAssistantsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MCPServerCreateWithoutAssistantsInputObjectSchema), z.lazy(() => MCPServerUncheckedCreateWithoutAssistantsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MCPServerCreateOrConnectWithoutAssistantsInputObjectSchema).optional(),
  upsert: z.lazy(() => MCPServerUpsertWithoutAssistantsInputObjectSchema).optional(),
  connect: z.lazy(() => MCPServerWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MCPServerUpdateToOneWithWhereWithoutAssistantsInputObjectSchema), z.lazy(() => MCPServerUpdateWithoutAssistantsInputObjectSchema), z.lazy(() => MCPServerUncheckedUpdateWithoutAssistantsInputObjectSchema)]).optional()
}).strict();
export const MCPServerUpdateOneRequiredWithoutAssistantsNestedInputObjectSchema: z.ZodType<Prisma.MCPServerUpdateOneRequiredWithoutAssistantsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerUpdateOneRequiredWithoutAssistantsNestedInput>;
export const MCPServerUpdateOneRequiredWithoutAssistantsNestedInputObjectZodSchema = makeSchema();
