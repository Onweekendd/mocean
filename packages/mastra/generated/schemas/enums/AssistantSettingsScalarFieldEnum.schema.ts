import * as z from 'zod';

export const AssistantSettingsScalarFieldEnumSchema = z.enum(['id', 'contextCount', 'temperature', 'topP', 'maxTokens', 'enableMaxTokens', 'streamOutput', 'hideMessages', 'customParameters', 'reasoning_effort', 'qwenThinkMode', 'toolUseMode', 'assistantId', 'defaultModelId'])

export type AssistantSettingsScalarFieldEnum = z.infer<typeof AssistantSettingsScalarFieldEnumSchema>;