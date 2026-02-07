import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerCreateWithoutAgentsInputObjectSchema as MCPServerCreateWithoutAgentsInputObjectSchema } from './MCPServerCreateWithoutAgentsInput.schema';
import { MCPServerUncheckedCreateWithoutAgentsInputObjectSchema as MCPServerUncheckedCreateWithoutAgentsInputObjectSchema } from './MCPServerUncheckedCreateWithoutAgentsInput.schema';
import { MCPServerCreateOrConnectWithoutAgentsInputObjectSchema as MCPServerCreateOrConnectWithoutAgentsInputObjectSchema } from './MCPServerCreateOrConnectWithoutAgentsInput.schema';
import { MCPServerUpsertWithoutAgentsInputObjectSchema as MCPServerUpsertWithoutAgentsInputObjectSchema } from './MCPServerUpsertWithoutAgentsInput.schema';
import { MCPServerWhereUniqueInputObjectSchema as MCPServerWhereUniqueInputObjectSchema } from './MCPServerWhereUniqueInput.schema';
import { MCPServerUpdateToOneWithWhereWithoutAgentsInputObjectSchema as MCPServerUpdateToOneWithWhereWithoutAgentsInputObjectSchema } from './MCPServerUpdateToOneWithWhereWithoutAgentsInput.schema';
import { MCPServerUpdateWithoutAgentsInputObjectSchema as MCPServerUpdateWithoutAgentsInputObjectSchema } from './MCPServerUpdateWithoutAgentsInput.schema';
import { MCPServerUncheckedUpdateWithoutAgentsInputObjectSchema as MCPServerUncheckedUpdateWithoutAgentsInputObjectSchema } from './MCPServerUncheckedUpdateWithoutAgentsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MCPServerCreateWithoutAgentsInputObjectSchema), z.lazy(() => MCPServerUncheckedCreateWithoutAgentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MCPServerCreateOrConnectWithoutAgentsInputObjectSchema).optional(),
  upsert: z.lazy(() => MCPServerUpsertWithoutAgentsInputObjectSchema).optional(),
  connect: z.lazy(() => MCPServerWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => MCPServerUpdateToOneWithWhereWithoutAgentsInputObjectSchema), z.lazy(() => MCPServerUpdateWithoutAgentsInputObjectSchema), z.lazy(() => MCPServerUncheckedUpdateWithoutAgentsInputObjectSchema)]).optional()
}).strict();
export const MCPServerUpdateOneRequiredWithoutAgentsNestedInputObjectSchema: z.ZodType<Prisma.MCPServerUpdateOneRequiredWithoutAgentsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerUpdateOneRequiredWithoutAgentsNestedInput>;
export const MCPServerUpdateOneRequiredWithoutAgentsNestedInputObjectZodSchema = makeSchema();
