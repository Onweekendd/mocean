import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPPromptWhereUniqueInputObjectSchema as MCPPromptWhereUniqueInputObjectSchema } from './MCPPromptWhereUniqueInput.schema';
import { MCPPromptUpdateWithoutServerInputObjectSchema as MCPPromptUpdateWithoutServerInputObjectSchema } from './MCPPromptUpdateWithoutServerInput.schema';
import { MCPPromptUncheckedUpdateWithoutServerInputObjectSchema as MCPPromptUncheckedUpdateWithoutServerInputObjectSchema } from './MCPPromptUncheckedUpdateWithoutServerInput.schema';
import { MCPPromptCreateWithoutServerInputObjectSchema as MCPPromptCreateWithoutServerInputObjectSchema } from './MCPPromptCreateWithoutServerInput.schema';
import { MCPPromptUncheckedCreateWithoutServerInputObjectSchema as MCPPromptUncheckedCreateWithoutServerInputObjectSchema } from './MCPPromptUncheckedCreateWithoutServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPPromptWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MCPPromptUpdateWithoutServerInputObjectSchema), z.lazy(() => MCPPromptUncheckedUpdateWithoutServerInputObjectSchema)]),
  create: z.union([z.lazy(() => MCPPromptCreateWithoutServerInputObjectSchema), z.lazy(() => MCPPromptUncheckedCreateWithoutServerInputObjectSchema)])
}).strict();
export const MCPPromptUpsertWithWhereUniqueWithoutServerInputObjectSchema: z.ZodType<Prisma.MCPPromptUpsertWithWhereUniqueWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPPromptUpsertWithWhereUniqueWithoutServerInput>;
export const MCPPromptUpsertWithWhereUniqueWithoutServerInputObjectZodSchema = makeSchema();
