import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAssistantServerWhereUniqueInputObjectSchema as MCPAssistantServerWhereUniqueInputObjectSchema } from './MCPAssistantServerWhereUniqueInput.schema';
import { MCPAssistantServerUpdateWithoutAssistantInputObjectSchema as MCPAssistantServerUpdateWithoutAssistantInputObjectSchema } from './MCPAssistantServerUpdateWithoutAssistantInput.schema';
import { MCPAssistantServerUncheckedUpdateWithoutAssistantInputObjectSchema as MCPAssistantServerUncheckedUpdateWithoutAssistantInputObjectSchema } from './MCPAssistantServerUncheckedUpdateWithoutAssistantInput.schema';
import { MCPAssistantServerCreateWithoutAssistantInputObjectSchema as MCPAssistantServerCreateWithoutAssistantInputObjectSchema } from './MCPAssistantServerCreateWithoutAssistantInput.schema';
import { MCPAssistantServerUncheckedCreateWithoutAssistantInputObjectSchema as MCPAssistantServerUncheckedCreateWithoutAssistantInputObjectSchema } from './MCPAssistantServerUncheckedCreateWithoutAssistantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPAssistantServerWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MCPAssistantServerUpdateWithoutAssistantInputObjectSchema), z.lazy(() => MCPAssistantServerUncheckedUpdateWithoutAssistantInputObjectSchema)]),
  create: z.union([z.lazy(() => MCPAssistantServerCreateWithoutAssistantInputObjectSchema), z.lazy(() => MCPAssistantServerUncheckedCreateWithoutAssistantInputObjectSchema)])
}).strict();
export const MCPAssistantServerUpsertWithWhereUniqueWithoutAssistantInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerUpsertWithWhereUniqueWithoutAssistantInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerUpsertWithWhereUniqueWithoutAssistantInput>;
export const MCPAssistantServerUpsertWithWhereUniqueWithoutAssistantInputObjectZodSchema = makeSchema();
