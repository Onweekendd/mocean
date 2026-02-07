import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderCreateWithoutModelGroupsInputObjectSchema as ProviderCreateWithoutModelGroupsInputObjectSchema } from './ProviderCreateWithoutModelGroupsInput.schema';
import { ProviderUncheckedCreateWithoutModelGroupsInputObjectSchema as ProviderUncheckedCreateWithoutModelGroupsInputObjectSchema } from './ProviderUncheckedCreateWithoutModelGroupsInput.schema';
import { ProviderCreateOrConnectWithoutModelGroupsInputObjectSchema as ProviderCreateOrConnectWithoutModelGroupsInputObjectSchema } from './ProviderCreateOrConnectWithoutModelGroupsInput.schema';
import { ProviderUpsertWithoutModelGroupsInputObjectSchema as ProviderUpsertWithoutModelGroupsInputObjectSchema } from './ProviderUpsertWithoutModelGroupsInput.schema';
import { ProviderWhereUniqueInputObjectSchema as ProviderWhereUniqueInputObjectSchema } from './ProviderWhereUniqueInput.schema';
import { ProviderUpdateToOneWithWhereWithoutModelGroupsInputObjectSchema as ProviderUpdateToOneWithWhereWithoutModelGroupsInputObjectSchema } from './ProviderUpdateToOneWithWhereWithoutModelGroupsInput.schema';
import { ProviderUpdateWithoutModelGroupsInputObjectSchema as ProviderUpdateWithoutModelGroupsInputObjectSchema } from './ProviderUpdateWithoutModelGroupsInput.schema';
import { ProviderUncheckedUpdateWithoutModelGroupsInputObjectSchema as ProviderUncheckedUpdateWithoutModelGroupsInputObjectSchema } from './ProviderUncheckedUpdateWithoutModelGroupsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProviderCreateWithoutModelGroupsInputObjectSchema), z.lazy(() => ProviderUncheckedCreateWithoutModelGroupsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProviderCreateOrConnectWithoutModelGroupsInputObjectSchema).optional(),
  upsert: z.lazy(() => ProviderUpsertWithoutModelGroupsInputObjectSchema).optional(),
  connect: z.lazy(() => ProviderWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProviderUpdateToOneWithWhereWithoutModelGroupsInputObjectSchema), z.lazy(() => ProviderUpdateWithoutModelGroupsInputObjectSchema), z.lazy(() => ProviderUncheckedUpdateWithoutModelGroupsInputObjectSchema)]).optional()
}).strict();
export const ProviderUpdateOneRequiredWithoutModelGroupsNestedInputObjectSchema: z.ZodType<Prisma.ProviderUpdateOneRequiredWithoutModelGroupsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProviderUpdateOneRequiredWithoutModelGroupsNestedInput>;
export const ProviderUpdateOneRequiredWithoutModelGroupsNestedInputObjectZodSchema = makeSchema();
