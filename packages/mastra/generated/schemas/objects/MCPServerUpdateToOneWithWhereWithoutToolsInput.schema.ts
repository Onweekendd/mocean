import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPServerWhereInputObjectSchema as MCPServerWhereInputObjectSchema } from './MCPServerWhereInput.schema';
import { MCPServerUpdateWithoutToolsInputObjectSchema as MCPServerUpdateWithoutToolsInputObjectSchema } from './MCPServerUpdateWithoutToolsInput.schema';
import { MCPServerUncheckedUpdateWithoutToolsInputObjectSchema as MCPServerUncheckedUpdateWithoutToolsInputObjectSchema } from './MCPServerUncheckedUpdateWithoutToolsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MCPServerWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => MCPServerUpdateWithoutToolsInputObjectSchema), z.lazy(() => MCPServerUncheckedUpdateWithoutToolsInputObjectSchema)])
}).strict();
export const MCPServerUpdateToOneWithWhereWithoutToolsInputObjectSchema: z.ZodType<Prisma.MCPServerUpdateToOneWithWhereWithoutToolsInput> = makeSchema() as unknown as z.ZodType<Prisma.MCPServerUpdateToOneWithWhereWithoutToolsInput>;
export const MCPServerUpdateToOneWithWhereWithoutToolsInputObjectZodSchema = makeSchema();
