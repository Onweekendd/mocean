import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { ModelGroupScalarWhereInputObjectSchema as ModelGroupScalarWhereInputObjectSchema } from './ModelGroupScalarWhereInput.schema';
import { ModelGroupUpdateManyMutationInputObjectSchema as ModelGroupUpdateManyMutationInputObjectSchema } from './ModelGroupUpdateManyMutationInput.schema';
import { ModelGroupUncheckedUpdateManyWithoutGroupInputObjectSchema as ModelGroupUncheckedUpdateManyWithoutGroupInputObjectSchema } from './ModelGroupUncheckedUpdateManyWithoutGroupInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ModelGroupScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ModelGroupUpdateManyMutationInputObjectSchema), z.lazy(() => ModelGroupUncheckedUpdateManyWithoutGroupInputObjectSchema)])
}).strict();
export const ModelGroupUpdateManyWithWhereWithoutGroupInputObjectSchema: z.ZodType<Prisma.ModelGroupUpdateManyWithWhereWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.ModelGroupUpdateManyWithWhereWithoutGroupInput>;
export const ModelGroupUpdateManyWithWhereWithoutGroupInputObjectZodSchema = makeSchema();
