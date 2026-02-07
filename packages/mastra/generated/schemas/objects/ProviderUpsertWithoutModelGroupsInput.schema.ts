import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderUpdateWithoutModelGroupsInputObjectSchema as ProviderUpdateWithoutModelGroupsInputObjectSchema } from './ProviderUpdateWithoutModelGroupsInput.schema';
import { ProviderUncheckedUpdateWithoutModelGroupsInputObjectSchema as ProviderUncheckedUpdateWithoutModelGroupsInputObjectSchema } from './ProviderUncheckedUpdateWithoutModelGroupsInput.schema';
import { ProviderCreateWithoutModelGroupsInputObjectSchema as ProviderCreateWithoutModelGroupsInputObjectSchema } from './ProviderCreateWithoutModelGroupsInput.schema';
import { ProviderUncheckedCreateWithoutModelGroupsInputObjectSchema as ProviderUncheckedCreateWithoutModelGroupsInputObjectSchema } from './ProviderUncheckedCreateWithoutModelGroupsInput.schema';
import { ProviderWhereInputObjectSchema as ProviderWhereInputObjectSchema } from './ProviderWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProviderUpdateWithoutModelGroupsInputObjectSchema), z.lazy(() => ProviderUncheckedUpdateWithoutModelGroupsInputObjectSchema)]),
  create: z.union([z.lazy(() => ProviderCreateWithoutModelGroupsInputObjectSchema), z.lazy(() => ProviderUncheckedCreateWithoutModelGroupsInputObjectSchema)]),
  where: z.lazy(() => ProviderWhereInputObjectSchema).optional()
}).strict();
export const ProviderUpsertWithoutModelGroupsInputObjectSchema: z.ZodType<Prisma.ProviderUpsertWithoutModelGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.ProviderUpsertWithoutModelGroupsInput>;
export const ProviderUpsertWithoutModelGroupsInputObjectZodSchema = makeSchema();
