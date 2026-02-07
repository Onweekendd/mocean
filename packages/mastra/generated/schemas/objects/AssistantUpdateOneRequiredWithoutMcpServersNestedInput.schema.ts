import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { AssistantCreateWithoutMcpServersInputObjectSchema as AssistantCreateWithoutMcpServersInputObjectSchema } from './AssistantCreateWithoutMcpServersInput.schema';
import { AssistantUncheckedCreateWithoutMcpServersInputObjectSchema as AssistantUncheckedCreateWithoutMcpServersInputObjectSchema } from './AssistantUncheckedCreateWithoutMcpServersInput.schema';
import { AssistantCreateOrConnectWithoutMcpServersInputObjectSchema as AssistantCreateOrConnectWithoutMcpServersInputObjectSchema } from './AssistantCreateOrConnectWithoutMcpServersInput.schema';
import { AssistantUpsertWithoutMcpServersInputObjectSchema as AssistantUpsertWithoutMcpServersInputObjectSchema } from './AssistantUpsertWithoutMcpServersInput.schema';
import { AssistantWhereUniqueInputObjectSchema as AssistantWhereUniqueInputObjectSchema } from './AssistantWhereUniqueInput.schema';
import { AssistantUpdateToOneWithWhereWithoutMcpServersInputObjectSchema as AssistantUpdateToOneWithWhereWithoutMcpServersInputObjectSchema } from './AssistantUpdateToOneWithWhereWithoutMcpServersInput.schema';
import { AssistantUpdateWithoutMcpServersInputObjectSchema as AssistantUpdateWithoutMcpServersInputObjectSchema } from './AssistantUpdateWithoutMcpServersInput.schema';
import { AssistantUncheckedUpdateWithoutMcpServersInputObjectSchema as AssistantUncheckedUpdateWithoutMcpServersInputObjectSchema } from './AssistantUncheckedUpdateWithoutMcpServersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AssistantCreateWithoutMcpServersInputObjectSchema), z.lazy(() => AssistantUncheckedCreateWithoutMcpServersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AssistantCreateOrConnectWithoutMcpServersInputObjectSchema).optional(),
  upsert: z.lazy(() => AssistantUpsertWithoutMcpServersInputObjectSchema).optional(),
  connect: z.lazy(() => AssistantWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AssistantUpdateToOneWithWhereWithoutMcpServersInputObjectSchema), z.lazy(() => AssistantUpdateWithoutMcpServersInputObjectSchema), z.lazy(() => AssistantUncheckedUpdateWithoutMcpServersInputObjectSchema)]).optional()
}).strict();
export const AssistantUpdateOneRequiredWithoutMcpServersNestedInputObjectSchema: z.ZodType<Prisma.AssistantUpdateOneRequiredWithoutMcpServersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AssistantUpdateOneRequiredWithoutMcpServersNestedInput>;
export const AssistantUpdateOneRequiredWithoutMcpServersNestedInputObjectZodSchema = makeSchema();
