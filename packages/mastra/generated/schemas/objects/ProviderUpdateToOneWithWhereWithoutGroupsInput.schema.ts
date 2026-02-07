import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderWhereInputObjectSchema as ProviderWhereInputObjectSchema } from './ProviderWhereInput.schema';
import { ProviderUpdateWithoutGroupsInputObjectSchema as ProviderUpdateWithoutGroupsInputObjectSchema } from './ProviderUpdateWithoutGroupsInput.schema';
import { ProviderUncheckedUpdateWithoutGroupsInputObjectSchema as ProviderUncheckedUpdateWithoutGroupsInputObjectSchema } from './ProviderUncheckedUpdateWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProviderWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProviderUpdateWithoutGroupsInputObjectSchema), z.lazy(() => ProviderUncheckedUpdateWithoutGroupsInputObjectSchema)])
}).strict();
export const ProviderUpdateToOneWithWhereWithoutGroupsInputObjectSchema: z.ZodType<Prisma.ProviderUpdateToOneWithWhereWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProviderUpdateToOneWithWhereWithoutGroupsInput>;
export const ProviderUpdateToOneWithWhereWithoutGroupsInputObjectZodSchema = makeSchema();
