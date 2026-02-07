import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderCreateWithoutGroupsInputObjectSchema as ProviderCreateWithoutGroupsInputObjectSchema } from './ProviderCreateWithoutGroupsInput.schema';
import { ProviderUncheckedCreateWithoutGroupsInputObjectSchema as ProviderUncheckedCreateWithoutGroupsInputObjectSchema } from './ProviderUncheckedCreateWithoutGroupsInput.schema';
import { ProviderCreateOrConnectWithoutGroupsInputObjectSchema as ProviderCreateOrConnectWithoutGroupsInputObjectSchema } from './ProviderCreateOrConnectWithoutGroupsInput.schema';
import { ProviderUpsertWithoutGroupsInputObjectSchema as ProviderUpsertWithoutGroupsInputObjectSchema } from './ProviderUpsertWithoutGroupsInput.schema';
import { ProviderWhereUniqueInputObjectSchema as ProviderWhereUniqueInputObjectSchema } from './ProviderWhereUniqueInput.schema';
import { ProviderUpdateToOneWithWhereWithoutGroupsInputObjectSchema as ProviderUpdateToOneWithWhereWithoutGroupsInputObjectSchema } from './ProviderUpdateToOneWithWhereWithoutGroupsInput.schema';
import { ProviderUpdateWithoutGroupsInputObjectSchema as ProviderUpdateWithoutGroupsInputObjectSchema } from './ProviderUpdateWithoutGroupsInput.schema';
import { ProviderUncheckedUpdateWithoutGroupsInputObjectSchema as ProviderUncheckedUpdateWithoutGroupsInputObjectSchema } from './ProviderUncheckedUpdateWithoutGroupsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProviderCreateWithoutGroupsInputObjectSchema), z.lazy(() => ProviderUncheckedCreateWithoutGroupsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProviderCreateOrConnectWithoutGroupsInputObjectSchema).optional(),
  upsert: z.lazy(() => ProviderUpsertWithoutGroupsInputObjectSchema).optional(),
  connect: z.lazy(() => ProviderWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProviderUpdateToOneWithWhereWithoutGroupsInputObjectSchema), z.lazy(() => ProviderUpdateWithoutGroupsInputObjectSchema), z.lazy(() => ProviderUncheckedUpdateWithoutGroupsInputObjectSchema)]).optional()
}).strict();
export const ProviderUpdateOneRequiredWithoutGroupsNestedInputObjectSchema: z.ZodType<Prisma.ProviderUpdateOneRequiredWithoutGroupsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProviderUpdateOneRequiredWithoutGroupsNestedInput>;
export const ProviderUpdateOneRequiredWithoutGroupsNestedInputObjectZodSchema = makeSchema();
