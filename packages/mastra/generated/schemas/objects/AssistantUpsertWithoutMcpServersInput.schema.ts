import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantUpdateWithoutMcpServersInputObjectSchema as AssistantUpdateWithoutMcpServersInputObjectSchema } from './AssistantUpdateWithoutMcpServersInput.schema';
import { AssistantUncheckedUpdateWithoutMcpServersInputObjectSchema as AssistantUncheckedUpdateWithoutMcpServersInputObjectSchema } from './AssistantUncheckedUpdateWithoutMcpServersInput.schema';
import { AssistantCreateWithoutMcpServersInputObjectSchema as AssistantCreateWithoutMcpServersInputObjectSchema } from './AssistantCreateWithoutMcpServersInput.schema';
import { AssistantUncheckedCreateWithoutMcpServersInputObjectSchema as AssistantUncheckedCreateWithoutMcpServersInputObjectSchema } from './AssistantUncheckedCreateWithoutMcpServersInput.schema';
import { AssistantWhereInputObjectSchema as AssistantWhereInputObjectSchema } from './AssistantWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AssistantUpdateWithoutMcpServersInputObjectSchema), z.lazy(() => AssistantUncheckedUpdateWithoutMcpServersInputObjectSchema)]),
  create: z.union([z.lazy(() => AssistantCreateWithoutMcpServersInputObjectSchema), z.lazy(() => AssistantUncheckedCreateWithoutMcpServersInputObjectSchema)]),
  where: z.lazy(() => AssistantWhereInputObjectSchema).optional()
}).strict();
export const AssistantUpsertWithoutMcpServersInputObjectSchema: z.ZodType<Prisma.AssistantUpsertWithoutMcpServersInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantUpsertWithoutMcpServersInput>;
export const AssistantUpsertWithoutMcpServersInputObjectZodSchema = makeSchema();
