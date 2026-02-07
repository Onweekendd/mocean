import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPResourceScalarWhereInputObjectSchema as MCPResourceScalarWhereInputObjectSchema } from './MCPResourceScalarWhereInput.schema';
import { MCPResourceUpdateManyMutationInputObjectSchema as MCPResourceUpdateManyMutationInputObjectSchema } from './MCPResourceUpdateManyMutationInput.schema';
import { MCPResourceUncheckedUpdateManyWithoutServerInputObjectSchema as MCPResourceUncheckedUpdateManyWithoutServerInputObjectSchema } from './MCPResourceUncheckedUpdateManyWithoutServerInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPResourceScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => MCPResourceUpdateManyMutationInputObjectSchema), z.lazy(() => MCPResourceUncheckedUpdateManyWithoutServerInputObjectSchema)])
}).strict();
export const MCPResourceUpdateManyWithWhereWithoutServerInputObjectSchema: z.ZodType<Prisma.MCPResourceUpdateManyWithWhereWithoutServerInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPResourceUpdateManyWithWhereWithoutServerInput>;
export const MCPResourceUpdateManyWithWhereWithoutServerInputObjectZodSchema = makeSchema();
