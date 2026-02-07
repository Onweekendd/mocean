import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerWhereUniqueInputObjectSchema as MCPServerWhereUniqueInputObjectSchema } from './MCPServerWhereUniqueInput.schema';
import { MCPServerCreateWithoutAgentsInputObjectSchema as MCPServerCreateWithoutAgentsInputObjectSchema } from './MCPServerCreateWithoutAgentsInput.schema';
import { MCPServerUncheckedCreateWithoutAgentsInputObjectSchema as MCPServerUncheckedCreateWithoutAgentsInputObjectSchema } from './MCPServerUncheckedCreateWithoutAgentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPServerWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MCPServerCreateWithoutAgentsInputObjectSchema), z.lazy(() => MCPServerUncheckedCreateWithoutAgentsInputObjectSchema)])
}).strict();
export const MCPServerCreateOrConnectWithoutAgentsInputObjectSchema: z.ZodType<Prisma.MCPServerCreateOrConnectWithoutAgentsInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerCreateOrConnectWithoutAgentsInput>;
export const MCPServerCreateOrConnectWithoutAgentsInputObjectZodSchema = makeSchema();
