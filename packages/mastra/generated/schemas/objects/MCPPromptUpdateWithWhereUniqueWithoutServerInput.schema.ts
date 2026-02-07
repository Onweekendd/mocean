import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPPromptWhereUniqueInputObjectSchema as MCPPromptWhereUniqueInputObjectSchema } from './MCPPromptWhereUniqueInput.schema';
import { MCPPromptUpdateWithoutServerInputObjectSchema as MCPPromptUpdateWithoutServerInputObjectSchema } from './MCPPromptUpdateWithoutServerInput.schema';
import { MCPPromptUncheckedUpdateWithoutServerInputObjectSchema as MCPPromptUncheckedUpdateWithoutServerInputObjectSchema } from './MCPPromptUncheckedUpdateWithoutServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPPromptWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MCPPromptUpdateWithoutServerInputObjectSchema), z.lazy(() => MCPPromptUncheckedUpdateWithoutServerInputObjectSchema)])
}).strict();
export const MCPPromptUpdateWithWhereUniqueWithoutServerInputObjectSchema: z.ZodType<Prisma.MCPPromptUpdateWithWhereUniqueWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPPromptUpdateWithWhereUniqueWithoutServerInput>;
export const MCPPromptUpdateWithWhereUniqueWithoutServerInputObjectZodSchema = makeSchema();
