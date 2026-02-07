import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderWhereInputObjectSchema as ProviderWhereInputObjectSchema } from './ProviderWhereInput.schema';
import { ProviderUpdateWithoutAssistantInputObjectSchema as ProviderUpdateWithoutAssistantInputObjectSchema } from './ProviderUpdateWithoutAssistantInput.schema';
import { ProviderUncheckedUpdateWithoutAssistantInputObjectSchema as ProviderUncheckedUpdateWithoutAssistantInputObjectSchema } from './ProviderUncheckedUpdateWithoutAssistantInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProviderWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProviderUpdateWithoutAssistantInputObjectSchema), z.lazy(() => ProviderUncheckedUpdateWithoutAssistantInputObjectSchema)])
}).strict();
export const ProviderUpdateToOneWithWhereWithoutAssistantInputObjectSchema: z.ZodType<Prisma.ProviderUpdateToOneWithWhereWithoutAssistantInput> = makeSchema() as unknown as z.ZodType<Prisma.ProviderUpdateToOneWithWhereWithoutAssistantInput>;
export const ProviderUpdateToOneWithWhereWithoutAssistantInputObjectZodSchema = makeSchema();
