import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerUpdateWithoutAgentsInputObjectSchema as MCPServerUpdateWithoutAgentsInputObjectSchema } from './MCPServerUpdateWithoutAgentsInput.schema';
import { MCPServerUncheckedUpdateWithoutAgentsInputObjectSchema as MCPServerUncheckedUpdateWithoutAgentsInputObjectSchema } from './MCPServerUncheckedUpdateWithoutAgentsInput.schema';
import { MCPServerCreateWithoutAgentsInputObjectSchema as MCPServerCreateWithoutAgentsInputObjectSchema } from './MCPServerCreateWithoutAgentsInput.schema';
import { MCPServerUncheckedCreateWithoutAgentsInputObjectSchema as MCPServerUncheckedCreateWithoutAgentsInputObjectSchema } from './MCPServerUncheckedCreateWithoutAgentsInput.schema';
import { MCPServerWhereInputObjectSchema as MCPServerWhereInputObjectSchema } from './MCPServerWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => MCPServerUpdateWithoutAgentsInputObjectSchema), z.lazy(() => MCPServerUncheckedUpdateWithoutAgentsInputObjectSchema)]),
  create: z.union([z.lazy(() => MCPServerCreateWithoutAgentsInputObjectSchema), z.lazy(() => MCPServerUncheckedCreateWithoutAgentsInputObjectSchema)]),
  where: z.lazy(() => MCPServerWhereInputObjectSchema).optional()
}).strict();
export const MCPServerUpsertWithoutAgentsInputObjectSchema: z.ZodType<Prisma.MCPServerUpsertWithoutAgentsInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerUpsertWithoutAgentsInput>;
export const MCPServerUpsertWithoutAgentsInputObjectZodSchema = makeSchema();
