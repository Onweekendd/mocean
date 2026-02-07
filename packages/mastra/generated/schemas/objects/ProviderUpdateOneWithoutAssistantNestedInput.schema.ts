import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ProviderCreateWithoutAssistantInputObjectSchema as ProviderCreateWithoutAssistantInputObjectSchema } from './ProviderCreateWithoutAssistantInput.schema';
import { ProviderUncheckedCreateWithoutAssistantInputObjectSchema as ProviderUncheckedCreateWithoutAssistantInputObjectSchema } from './ProviderUncheckedCreateWithoutAssistantInput.schema';
import { ProviderCreateOrConnectWithoutAssistantInputObjectSchema as ProviderCreateOrConnectWithoutAssistantInputObjectSchema } from './ProviderCreateOrConnectWithoutAssistantInput.schema';
import { ProviderUpsertWithoutAssistantInputObjectSchema as ProviderUpsertWithoutAssistantInputObjectSchema } from './ProviderUpsertWithoutAssistantInput.schema';
import { ProviderWhereInputObjectSchema as ProviderWhereInputObjectSchema } from './ProviderWhereInput.schema';
import { ProviderWhereUniqueInputObjectSchema as ProviderWhereUniqueInputObjectSchema } from './ProviderWhereUniqueInput.schema';
import { ProviderUpdateToOneWithWhereWithoutAssistantInputObjectSchema as ProviderUpdateToOneWithWhereWithoutAssistantInputObjectSchema } from './ProviderUpdateToOneWithWhereWithoutAssistantInput.schema';
import { ProviderUpdateWithoutAssistantInputObjectSchema as ProviderUpdateWithoutAssistantInputObjectSchema } from './ProviderUpdateWithoutAssistantInput.schema';
import { ProviderUncheckedUpdateWithoutAssistantInputObjectSchema as ProviderUncheckedUpdateWithoutAssistantInputObjectSchema } from './ProviderUncheckedUpdateWithoutAssistantInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProviderCreateWithoutAssistantInputObjectSchema), z.lazy(() => ProviderUncheckedCreateWithoutAssistantInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProviderCreateOrConnectWithoutAssistantInputObjectSchema).optional(),
  upsert: z.lazy(() => ProviderUpsertWithoutAssistantInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => ProviderWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => ProviderWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => ProviderWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProviderUpdateToOneWithWhereWithoutAssistantInputObjectSchema), z.lazy(() => ProviderUpdateWithoutAssistantInputObjectSchema), z.lazy(() => ProviderUncheckedUpdateWithoutAssistantInputObjectSchema)]).optional()
}).strict();
export const ProviderUpdateOneWithoutAssistantNestedInputObjectSchema: z.ZodType<Prisma.ProviderUpdateOneWithoutAssistantNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProviderUpdateOneWithoutAssistantNestedInput>;
export const ProviderUpdateOneWithoutAssistantNestedInputObjectZodSchema = makeSchema();
