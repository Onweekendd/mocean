import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerCreateWithoutResourcesInputObjectSchema as MCPServerCreateWithoutResourcesInputObjectSchema } from './MCPServerCreateWithoutResourcesInput.schema';
import { MCPServerUncheckedCreateWithoutResourcesInputObjectSchema as MCPServerUncheckedCreateWithoutResourcesInputObjectSchema } from './MCPServerUncheckedCreateWithoutResourcesInput.schema';
import { MCPServerCreateOrConnectWithoutResourcesInputObjectSchema as MCPServerCreateOrConnectWithoutResourcesInputObjectSchema } from './MCPServerCreateOrConnectWithoutResourcesInput.schema';
import { MCPServerUpsertWithoutResourcesInputObjectSchema as MCPServerUpsertWithoutResourcesInputObjectSchema } from './MCPServerUpsertWithoutResourcesInput.schema';
import { MCPServerWhereUniqueInputObjectSchema as MCPServerWhereUniqueInputObjectSchema } from './MCPServerWhereUniqueInput.schema';
import { MCPServerUpdateToOneWithWhereWithoutResourcesInputObjectSchema as MCPServerUpdateToOneWithWhereWithoutResourcesInputObjectSchema } from './MCPServerUpdateToOneWithWhereWithoutResourcesInput.schema';
import { MCPServerUpdateWithoutResourcesInputObjectSchema as MCPServerUpdateWithoutResourcesInputObjectSchema } from './MCPServerUpdateWithoutResourcesInput.schema';
import { MCPServerUncheckedUpdateWithoutResourcesInputObjectSchema as MCPServerUncheckedUpdateWithoutResourcesInputObjectSchema } from './MCPServerUncheckedUpdateWithoutResourcesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MCPServerCreateWithoutResourcesInputObjectSchema), z.lazy(() => MCPServerUncheckedCreateWithoutResourcesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MCPServerCreateOrConnectWithoutResourcesInputObjectSchema).optional(),
  upsert: z.lazy(() => MCPServerUpsertWithoutResourcesInputObjectSchema).optional(),
  connect: z.lazy(() => MCPServerWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MCPServerUpdateToOneWithWhereWithoutResourcesInputObjectSchema), z.lazy(() => MCPServerUpdateWithoutResourcesInputObjectSchema), z.lazy(() => MCPServerUncheckedUpdateWithoutResourcesInputObjectSchema)]).optional()
}).strict();
export const MCPServerUpdateOneRequiredWithoutResourcesNestedInputObjectSchema: z.ZodType<Prisma.MCPServerUpdateOneRequiredWithoutResourcesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerUpdateOneRequiredWithoutResourcesNestedInput>;
export const MCPServerUpdateOneRequiredWithoutResourcesNestedInputObjectZodSchema = makeSchema();
