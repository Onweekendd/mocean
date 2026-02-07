import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerWhereInputObjectSchema as MCPServerWhereInputObjectSchema } from './MCPServerWhereInput.schema';
import { MCPServerUpdateWithoutAgentsInputObjectSchema as MCPServerUpdateWithoutAgentsInputObjectSchema } from './MCPServerUpdateWithoutAgentsInput.schema';
import { MCPServerUncheckedUpdateWithoutAgentsInputObjectSchema as MCPServerUncheckedUpdateWithoutAgentsInputObjectSchema } from './MCPServerUncheckedUpdateWithoutAgentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPServerWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MCPServerUpdateWithoutAgentsInputObjectSchema), z.lazy(() => MCPServerUncheckedUpdateWithoutAgentsInputObjectSchema)])
}).strict();
export const MCPServerUpdateToOneWithWhereWithoutAgentsInputObjectSchema: z.ZodType<Prisma.MCPServerUpdateToOneWithWhereWithoutAgentsInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerUpdateToOneWithWhereWithoutAgentsInput>;
export const MCPServerUpdateToOneWithWhereWithoutAgentsInputObjectZodSchema = makeSchema();
