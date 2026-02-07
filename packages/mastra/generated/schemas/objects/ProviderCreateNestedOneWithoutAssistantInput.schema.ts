import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderCreateWithoutAssistantInputObjectSchema as ProviderCreateWithoutAssistantInputObjectSchema } from './ProviderCreateWithoutAssistantInput.schema';
import { ProviderUncheckedCreateWithoutAssistantInputObjectSchema as ProviderUncheckedCreateWithoutAssistantInputObjectSchema } from './ProviderUncheckedCreateWithoutAssistantInput.schema';
import { ProviderCreateOrConnectWithoutAssistantInputObjectSchema as ProviderCreateOrConnectWithoutAssistantInputObjectSchema } from './ProviderCreateOrConnectWithoutAssistantInput.schema';
import { ProviderWhereUniqueInputObjectSchema as ProviderWhereUniqueInputObjectSchema } from './ProviderWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProviderCreateWithoutAssistantInputObjectSchema), z.lazy(() => ProviderUncheckedCreateWithoutAssistantInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProviderCreateOrConnectWithoutAssistantInputObjectSchema).optional(),
  connect: z.lazy(() => ProviderWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProviderCreateNestedOneWithoutAssistantInputObjectSchema: z.ZodType<Prisma.ProviderCreateNestedOneWithoutAssistantInput> = makeSchema() as unknown as z.ZodType<Prisma.ProviderCreateNestedOneWithoutAssistantInput>;
export const ProviderCreateNestedOneWithoutAssistantInputObjectZodSchema = makeSchema();
