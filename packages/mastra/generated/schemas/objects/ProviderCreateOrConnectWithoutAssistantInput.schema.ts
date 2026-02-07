import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderWhereUniqueInputObjectSchema as ProviderWhereUniqueInputObjectSchema } from './ProviderWhereUniqueInput.schema';
import { ProviderCreateWithoutAssistantInputObjectSchema as ProviderCreateWithoutAssistantInputObjectSchema } from './ProviderCreateWithoutAssistantInput.schema';
import { ProviderUncheckedCreateWithoutAssistantInputObjectSchema as ProviderUncheckedCreateWithoutAssistantInputObjectSchema } from './ProviderUncheckedCreateWithoutAssistantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProviderWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProviderCreateWithoutAssistantInputObjectSchema), z.lazy(() => ProviderUncheckedCreateWithoutAssistantInputObjectSchema)])
}).strict();
export const ProviderCreateOrConnectWithoutAssistantInputObjectSchema: z.ZodType<Prisma.ProviderCreateOrConnectWithoutAssistantInput> = makeSchema() as unknown as z.ZodType<Prisma.ProviderCreateOrConnectWithoutAssistantInput>;
export const ProviderCreateOrConnectWithoutAssistantInputObjectZodSchema = makeSchema();
