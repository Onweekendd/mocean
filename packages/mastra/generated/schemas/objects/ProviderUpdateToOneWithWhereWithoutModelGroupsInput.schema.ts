import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderWhereInputObjectSchema as ProviderWhereInputObjectSchema } from './ProviderWhereInput.schema';
import { ProviderUpdateWithoutModelGroupsInputObjectSchema as ProviderUpdateWithoutModelGroupsInputObjectSchema } from './ProviderUpdateWithoutModelGroupsInput.schema';
import { ProviderUncheckedUpdateWithoutModelGroupsInputObjectSchema as ProviderUncheckedUpdateWithoutModelGroupsInputObjectSchema } from './ProviderUncheckedUpdateWithoutModelGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProviderWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProviderUpdateWithoutModelGroupsInputObjectSchema), z.lazy(() => ProviderUncheckedUpdateWithoutModelGroupsInputObjectSchema)])
}).strict();
export const ProviderUpdateToOneWithWhereWithoutModelGroupsInputObjectSchema: z.ZodType<Prisma.ProviderUpdateToOneWithWhereWithoutModelGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProviderUpdateToOneWithWhereWithoutModelGroupsInput>;
export const ProviderUpdateToOneWithWhereWithoutModelGroupsInputObjectZodSchema = makeSchema();
