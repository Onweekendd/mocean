import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPAssistantServerWhereUniqueInputObjectSchema as MCPAssistantServerWhereUniqueInputObjectSchema } from './MCPAssistantServerWhereUniqueInput.schema';
import { MCPAssistantServerUpdateWithoutAssistantInputObjectSchema as MCPAssistantServerUpdateWithoutAssistantInputObjectSchema } from './MCPAssistantServerUpdateWithoutAssistantInput.schema';
import { MCPAssistantServerUncheckedUpdateWithoutAssistantInputObjectSchema as MCPAssistantServerUncheckedUpdateWithoutAssistantInputObjectSchema } from './MCPAssistantServerUncheckedUpdateWithoutAssistantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPAssistantServerWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MCPAssistantServerUpdateWithoutAssistantInputObjectSchema), z.lazy(() => MCPAssistantServerUncheckedUpdateWithoutAssistantInputObjectSchema)])
}).strict();
export const MCPAssistantServerUpdateWithWhereUniqueWithoutAssistantInputObjectSchema: z.ZodType<Prisma.MCPAssistantServerUpdateWithWhereUniqueWithoutAssistantInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPAssistantServerUpdateWithWhereUniqueWithoutAssistantInput>;
export const MCPAssistantServerUpdateWithWhereUniqueWithoutAssistantInputObjectZodSchema = makeSchema();
