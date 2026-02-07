import * as z from 'zod';
import type { Prisma } from '../../prisma/client';
import { MCPConfigSampleSelectObjectSchema as MCPConfigSampleSelectObjectSchema } from './MCPConfigSampleSelect.schema';
import { MCPConfigSampleIncludeObjectSchema as MCPConfigSampleIncludeObjectSchema } from './MCPConfigSampleInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MCPConfigSampleSelectObjectSchema).optional(),
  include: z.lazy(() => MCPConfigSampleIncludeObjectSchema).optional()
}).strict();
export const MCPConfigSampleArgsObjectSchema = makeSchema();
export const MCPConfigSampleArgsObjectZodSchema = makeSchema();
