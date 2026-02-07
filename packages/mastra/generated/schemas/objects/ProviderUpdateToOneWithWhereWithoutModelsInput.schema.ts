import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderWhereInputObjectSchema as ProviderWhereInputObjectSchema } from './ProviderWhereInput.schema';
import { ProviderUpdateWithoutModelsInputObjectSchema as ProviderUpdateWithoutModelsInputObjectSchema } from './ProviderUpdateWithoutModelsInput.schema';
import { ProviderUncheckedUpdateWithoutModelsInputObjectSchema as ProviderUncheckedUpdateWithoutModelsInputObjectSchema } from './ProviderUncheckedUpdateWithoutModelsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProviderWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProviderUpdateWithoutModelsInputObjectSchema), z.lazy(() => ProviderUncheckedUpdateWithoutModelsInputObjectSchema)])
}).strict();
export const ProviderUpdateToOneWithWhereWithoutModelsInputObjectSchema: z.ZodType<Prisma.ProviderUpdateToOneWithWhereWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProviderUpdateToOneWithWhereWithoutModelsInput>;
export const ProviderUpdateToOneWithWhereWithoutModelsInputObjectZodSchema = makeSchema();
