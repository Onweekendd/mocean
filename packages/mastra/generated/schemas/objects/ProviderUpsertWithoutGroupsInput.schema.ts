import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderUpdateWithoutGroupsInputObjectSchema as ProviderUpdateWithoutGroupsInputObjectSchema } from './ProviderUpdateWithoutGroupsInput.schema';
import { ProviderUncheckedUpdateWithoutGroupsInputObjectSchema as ProviderUncheckedUpdateWithoutGroupsInputObjectSchema } from './ProviderUncheckedUpdateWithoutGroupsInput.schema';
import { ProviderCreateWithoutGroupsInputObjectSchema as ProviderCreateWithoutGroupsInputObjectSchema } from './ProviderCreateWithoutGroupsInput.schema';
import { ProviderUncheckedCreateWithoutGroupsInputObjectSchema as ProviderUncheckedCreateWithoutGroupsInputObjectSchema } from './ProviderUncheckedCreateWithoutGroupsInput.schema';
import { ProviderWhereInputObjectSchema as ProviderWhereInputObjectSchema } from './ProviderWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProviderUpdateWithoutGroupsInputObjectSchema), z.lazy(() => ProviderUncheckedUpdateWithoutGroupsInputObjectSchema)]),
  create: z.union([z.lazy(() => ProviderCreateWithoutGroupsInputObjectSchema), z.lazy(() => ProviderUncheckedCreateWithoutGroupsInputObjectSchema)]),
  where: z.lazy(() => ProviderWhereInputObjectSchema).optional()
}).strict();
export const ProviderUpsertWithoutGroupsInputObjectSchema: z.ZodType<Prisma.ProviderUpsertWithoutGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProviderUpsertWithoutGroupsInput>;
export const ProviderUpsertWithoutGroupsInputObjectZodSchema = makeSchema();
