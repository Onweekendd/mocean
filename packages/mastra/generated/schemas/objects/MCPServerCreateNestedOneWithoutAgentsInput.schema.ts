import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerCreateWithoutAgentsInputObjectSchema as MCPServerCreateWithoutAgentsInputObjectSchema } from './MCPServerCreateWithoutAgentsInput.schema';
import { MCPServerUncheckedCreateWithoutAgentsInputObjectSchema as MCPServerUncheckedCreateWithoutAgentsInputObjectSchema } from './MCPServerUncheckedCreateWithoutAgentsInput.schema';
import { MCPServerCreateOrConnectWithoutAgentsInputObjectSchema as MCPServerCreateOrConnectWithoutAgentsInputObjectSchema } from './MCPServerCreateOrConnectWithoutAgentsInput.schema';
import { MCPServerWhereUniqueInputObjectSchema as MCPServerWhereUniqueInputObjectSchema } from './MCPServerWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MCPServerCreateWithoutAgentsInputObjectSchema), z.lazy(() => MCPServerUncheckedCreateWithoutAgentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => MCPServerCreateOrConnectWithoutAgentsInputObjectSchema).optional(),
  connect: z.lazy(() => MCPServerWhereUniqueInputObjectSchema).optional()
}).strict();
export const MCPServerCreateNestedOneWithoutAgentsInputObjectSchema: z.ZodType<Prisma.MCPServerCreateNestedOneWithoutAgentsInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerCreateNestedOneWithoutAgentsInput>;
export const MCPServerCreateNestedOneWithoutAgentsInputObjectZodSchema = makeSchema();
