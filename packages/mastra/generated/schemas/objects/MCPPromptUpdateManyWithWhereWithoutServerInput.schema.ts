import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPPromptScalarWhereInputObjectSchema as MCPPromptScalarWhereInputObjectSchema } from './MCPPromptScalarWhereInput.schema';
import { MCPPromptUpdateManyMutationInputObjectSchema as MCPPromptUpdateManyMutationInputObjectSchema } from './MCPPromptUpdateManyMutationInput.schema';
import { MCPPromptUncheckedUpdateManyWithoutServerInputObjectSchema as MCPPromptUncheckedUpdateManyWithoutServerInputObjectSchema } from './MCPPromptUncheckedUpdateManyWithoutServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPPromptScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MCPPromptUpdateManyMutationInputObjectSchema), z.lazy(() => MCPPromptUncheckedUpdateManyWithoutServerInputObjectSchema)])
}).strict();
export const MCPPromptUpdateManyWithWhereWithoutServerInputObjectSchema: z.ZodType<Prisma.MCPPromptUpdateManyWithWhereWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPPromptUpdateManyWithWhereWithoutServerInput>;
export const MCPPromptUpdateManyWithWhereWithoutServerInputObjectZodSchema = makeSchema();
