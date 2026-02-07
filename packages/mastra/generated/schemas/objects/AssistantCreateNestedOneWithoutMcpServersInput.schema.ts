import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantCreateWithoutMcpServersInputObjectSchema as AssistantCreateWithoutMcpServersInputObjectSchema } from './AssistantCreateWithoutMcpServersInput.schema';
import { AssistantUncheckedCreateWithoutMcpServersInputObjectSchema as AssistantUncheckedCreateWithoutMcpServersInputObjectSchema } from './AssistantUncheckedCreateWithoutMcpServersInput.schema';
import { AssistantCreateOrConnectWithoutMcpServersInputObjectSchema as AssistantCreateOrConnectWithoutMcpServersInputObjectSchema } from './AssistantCreateOrConnectWithoutMcpServersInput.schema';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './AssistantWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AssistantCreateWithoutMcpServersInputObjectSchema), z.lazy(() => AssistantUncheckedCreateWithoutMcpServersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AssistantCreateOrConnectWithoutMcpServersInputObjectSchema).optional(),
  connect: z.lazy(() => AssistantWhereUniqueInputObjectSchema).optional()
}).strict();
export const AssistantCreateNestedOneWithoutMcpServersInputObjectSchema: z.ZodType<Prisma.AssistantCreateNestedOneWithoutMcpServersInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantCreateNestedOneWithoutMcpServersInput>;
export const AssistantCreateNestedOneWithoutMcpServersInputObjectZodSchema = makeSchema();
