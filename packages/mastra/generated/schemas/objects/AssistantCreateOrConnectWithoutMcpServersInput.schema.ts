import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './AssistantWhereUniqueInput.schema';
import { AssistantCreateWithoutMcpServersInputObjectSchema as AssistantCreateWithoutMcpServersInputObjectSchema } from './AssistantCreateWithoutMcpServersInput.schema';
import { AssistantUncheckedCreateWithoutMcpServersInputObjectSchema as AssistantUncheckedCreateWithoutMcpServersInputObjectSchema } from './AssistantUncheckedCreateWithoutMcpServersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AssistantWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AssistantCreateWithoutMcpServersInputObjectSchema), z.lazy(() => AssistantUncheckedCreateWithoutMcpServersInputObjectSchema)])
}).strict();
export const AssistantCreateOrConnectWithoutMcpServersInputObjectSchema: z.ZodType<Prisma.AssistantCreateOrConnectWithoutMcpServersInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantCreateOrConnectWithoutMcpServersInput>;
export const AssistantCreateOrConnectWithoutMcpServersInputObjectZodSchema = makeSchema();
