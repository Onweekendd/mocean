import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelGroupScalarWhereInputObjectSchema as ModelGroupScalarWhereInputObjectSchema } from './ModelGroupScalarWhereInput.schema';
import { ModelGroupUpdateManyMutationInputObjectSchema as ModelGroupUpdateManyMutationInputObjectSchema } from './ModelGroupUpdateManyMutationInput.schema';
import { ModelGroupUncheckedUpdateManyWithoutModelInputObjectSchema as ModelGroupUncheckedUpdateManyWithoutModelInputObjectSchema } from './ModelGroupUncheckedUpdateManyWithoutModelInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelGroupScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ModelGroupUpdateManyMutationInputObjectSchema), z.lazy(() => ModelGroupUncheckedUpdateManyWithoutModelInputObjectSchema)])
}).strict();
export const ModelGroupUpdateManyWithWhereWithoutModelInputObjectSchema: z.ZodType<Prisma.ModelGroupUpdateManyWithWhereWithoutModelInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupUpdateManyWithWhereWithoutModelInput>;
export const ModelGroupUpdateManyWithWhereWithoutModelInputObjectZodSchema = makeSchema();
