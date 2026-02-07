import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerWhereInputObjectSchema as MCPServerWhereInputObjectSchema } from './MCPServerWhereInput.schema';
import { MCPServerUpdateWithoutResourcesInputObjectSchema as MCPServerUpdateWithoutResourcesInputObjectSchema } from './MCPServerUpdateWithoutResourcesInput.schema';
import { MCPServerUncheckedUpdateWithoutResourcesInputObjectSchema as MCPServerUncheckedUpdateWithoutResourcesInputObjectSchema } from './MCPServerUncheckedUpdateWithoutResourcesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPServerWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MCPServerUpdateWithoutResourcesInputObjectSchema), z.lazy(() => MCPServerUncheckedUpdateWithoutResourcesInputObjectSchema)])
}).strict();
export const MCPServerUpdateToOneWithWhereWithoutResourcesInputObjectSchema: z.ZodType<Prisma.MCPServerUpdateToOneWithWhereWithoutResourcesInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerUpdateToOneWithWhereWithoutResourcesInput>;
export const MCPServerUpdateToOneWithWhereWithoutResourcesInputObjectZodSchema = makeSchema();
