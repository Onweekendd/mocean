import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantWhereInputObjectSchema as AssistantWhereInputObjectSchema } from './AssistantWhereInput.schema';
import { AssistantUpdateWithoutMcpServersInputObjectSchema as AssistantUpdateWithoutMcpServersInputObjectSchema } from './AssistantUpdateWithoutMcpServersInput.schema';
import { AssistantUncheckedUpdateWithoutMcpServersInputObjectSchema as AssistantUncheckedUpdateWithoutMcpServersInputObjectSchema } from './AssistantUncheckedUpdateWithoutMcpServersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AssistantWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AssistantUpdateWithoutMcpServersInputObjectSchema), z.lazy(() => AssistantUncheckedUpdateWithoutMcpServersInputObjectSchema)])
}).strict();
export const AssistantUpdateToOneWithWhereWithoutMcpServersInputObjectSchema: z.ZodType<Prisma.AssistantUpdateToOneWithWhereWithoutMcpServersInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantUpdateToOneWithWhereWithoutMcpServersInput>;
export const AssistantUpdateToOneWithWhereWithoutMcpServersInputObjectZodSchema = makeSchema();
