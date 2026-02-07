import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerCreateWithoutToolsInputObjectSchema as MCPServerCreateWithoutToolsInputObjectSchema } from './MCPServerCreateWithoutToolsInput.schema';
import { MCPServerUncheckedCreateWithoutToolsInputObjectSchema as MCPServerUncheckedCreateWithoutToolsInputObjectSchema } from './MCPServerUncheckedCreateWithoutToolsInput.schema';
import { MCPServerCreateOrConnectWithoutToolsInputObjectSchema as MCPServerCreateOrConnectWithoutToolsInputObjectSchema } from './MCPServerCreateOrConnectWithoutToolsInput.schema';
import { MCPServerUpsertWithoutToolsInputObjectSchema as MCPServerUpsertWithoutToolsInputObjectSchema } from './MCPServerUpsertWithoutToolsInput.schema';
import { MCPServerWhereUniqueInputObjectSchema as MCPServerWhereUniqueInputObjectSchema } from './MCPServerWhereUniqueInput.schema';
import { MCPServerUpdateToOneWithWhereWithoutToolsInputObjectSchema as MCPServerUpdateToOneWithWhereWithoutToolsInputObjectSchema } from './MCPServerUpdateToOneWithWhereWithoutToolsInput.schema';
import { MCPServerUpdateWithoutToolsInputObjectSchema as MCPServerUpdateWithoutToolsInputObjectSchema } from './MCPServerUpdateWithoutToolsInput.schema';
import { MCPServerUncheckedUpdateWithoutToolsInputObjectSchema as MCPServerUncheckedUpdateWithoutToolsInputObjectSchema } from './MCPServerUncheckedUpdateWithoutToolsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MCPServerCreateWithoutToolsInputObjectSchema), z.lazy(() => MCPServerUncheckedCreateWithoutToolsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MCPServerCreateOrConnectWithoutToolsInputObjectSchema).optional(),
  upsert: z.lazy(() => MCPServerUpsertWithoutToolsInputObjectSchema).optional(),
  connect: z.lazy(() => MCPServerWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MCPServerUpdateToOneWithWhereWithoutToolsInputObjectSchema), z.lazy(() => MCPServerUpdateWithoutToolsInputObjectSchema), z.lazy(() => MCPServerUncheckedUpdateWithoutToolsInputObjectSchema)]).optional()
}).strict();
export const MCPServerUpdateOneRequiredWithoutToolsNestedInputObjectSchema: z.ZodType<Prisma.MCPServerUpdateOneRequiredWithoutToolsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerUpdateOneRequiredWithoutToolsNestedInput>;
export const MCPServerUpdateOneRequiredWithoutToolsNestedInputObjectZodSchema = makeSchema();
