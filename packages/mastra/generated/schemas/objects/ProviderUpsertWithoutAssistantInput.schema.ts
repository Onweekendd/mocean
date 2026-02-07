import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderUpdateWithoutAssistantInputObjectSchema as ProviderUpdateWithoutAssistantInputObjectSchema } from './ProviderUpdateWithoutAssistantInput.schema';
import { ProviderUncheckedUpdateWithoutAssistantInputObjectSchema as ProviderUncheckedUpdateWithoutAssistantInputObjectSchema } from './ProviderUncheckedUpdateWithoutAssistantInput.schema';
import { ProviderCreateWithoutAssistantInputObjectSchema as ProviderCreateWithoutAssistantInputObjectSchema } from './ProviderCreateWithoutAssistantInput.schema';
import { ProviderUncheckedCreateWithoutAssistantInputObjectSchema as ProviderUncheckedCreateWithoutAssistantInputObjectSchema } from './ProviderUncheckedCreateWithoutAssistantInput.schema';
import { ProviderWhereInputObjectSchema as ProviderWhereInputObjectSchema } from './ProviderWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProviderUpdateWithoutAssistantInputObjectSchema), z.lazy(() => ProviderUncheckedUpdateWithoutAssistantInputObjectSchema)]),
  create: z.union([z.lazy(() => ProviderCreateWithoutAssistantInputObjectSchema), z.lazy(() => ProviderUncheckedCreateWithoutAssistantInputObjectSchema)]),
  where: z.lazy(() => ProviderWhereInputObjectSchema).optional()
}).strict();
export const ProviderUpsertWithoutAssistantInputObjectSchema: z.ZodType<Prisma.ProviderUpsertWithoutAssistantInput> = makeSchema() as unknown as z.ZodType<Prisma.ProviderUpsertWithoutAssistantInput>;
export const ProviderUpsertWithoutAssistantInputObjectZodSchema = makeSchema();
