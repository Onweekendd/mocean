import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelGroupScalarWhereInputObjectSchema as ModelGroupScalarWhereInputObjectSchema } from './ModelGroupScalarWhereInput.schema';
import { ModelGroupUpdateManyMutationInputObjectSchema as ModelGroupUpdateManyMutationInputObjectSchema } from './ModelGroupUpdateManyMutationInput.schema';
import { ModelGroupUncheckedUpdateManyWithoutProviderInputObjectSchema as ModelGroupUncheckedUpdateManyWithoutProviderInputObjectSchema } from './ModelGroupUncheckedUpdateManyWithoutProviderInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelGroupScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ModelGroupUpdateManyMutationInputObjectSchema), z.lazy(() => ModelGroupUncheckedUpdateManyWithoutProviderInputObjectSchema)])
}).strict();
export const ModelGroupUpdateManyWithWhereWithoutProviderInputObjectSchema: z.ZodType<Prisma.ModelGroupUpdateManyWithWhereWithoutProviderInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupUpdateManyWithWhereWithoutProviderInput>;
export const ModelGroupUpdateManyWithWhereWithoutProviderInputObjectZodSchema = makeSchema();
