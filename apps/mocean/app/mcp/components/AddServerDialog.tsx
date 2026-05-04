"use client";

import { useCallback } from "react";

import {
  ChevronRight,
  Eye,
  EyeOff,
  FileJson,
  GripVertical,
  Plug,
  Plus,
  Trash2
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useAddServerForm } from "@/hooks/useAddServerForm";
import { cn } from "@/lib/utils";

const JSON_PLACEHOLDER = `{
  "mcpServers": {
    "server-name": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem"],
      "env": {
        "API_KEY": "your-api-key"
      }
    }
  }
}`;

interface AddServerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddServerDialog({ open, onOpenChange }: AddServerDialogProps) {
  const {
    form,
    errors,
    validateServerName,
    validateCommand,
    validateBaseUrl,
    showPassword,
    advancedOpen,
    setAdvancedOpen,
    serverType,
    args,
    envVars,
    showBaseUrl,
    showCommand,
    showJsonView,
    setShowJsonView,
    jsonInput,
    setJsonInput,
    jsonError,
    onParseJson,
    onAddArg,
    onRemoveArg,
    onArgChange,
    onAddEnvVar,
    onRemoveEnvVar,
    onEnvVarChange,
    togglePasswordVisibility,
    onSubmit
  } = useAddServerForm({ onOpenChange });

  const handlePaste = useCallback(
    (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
      const text = e.clipboardData.getData("text");
      if (text) {
        e.preventDefault();
        setJsonInput(text);
      }
    },
    [setJsonInput]
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[85vh] flex-col gap-0 p-0 sm:max-w-[560px]">
        <DialogHeader className="shrink-0 px-6 pb-4 pt-6">
          <DialogTitle className="flex items-center justify-between text-lg font-semibold">
            <div className="flex items-center gap-2">
              <Plug className="h-5 w-5 text-primary" />
              新增 MCP 服务
            </div>
            {!showJsonView && (
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground"
                onClick={() => setShowJsonView(true)}
              >
                <FileJson className="mr-1 h-4 w-4" />从 JSON 解析
              </Button>
            )}
          </DialogTitle>
        </DialogHeader>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 pb-4">
          {showJsonView ? (
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  粘贴 Claude Desktop 或 Cursor 的 MCP 配置 JSON
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground"
                  onClick={() => {
                    setShowJsonView(false);
                    setJsonInput("");
                  }}
                >
                  返回表单
                </Button>
              </div>
              <textarea
                className={cn(
                  "h-64 resize-none rounded-md border bg-muted/50 p-3 font-mono text-sm outline-none focus:ring-2 focus:ring-ring",
                  jsonError && "border-red-500"
                )}
                placeholder={JSON_PLACEHOLDER}
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                onPaste={handlePaste}
                spellCheck={false}
              />
              {jsonError && (
                <p className="text-xs text-red-600 dark:text-red-400">
                  {jsonError}
                </p>
              )}
              <Button
                onClick={onParseJson}
                disabled={!jsonInput.trim()}
                className=": :hover:bg-brand-primary-600 :focus-visible:ring-brand-primary-600 bg-brand-primary-500"
              >
                解析并填入表单
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <div className="flex flex-col gap-5">
                {/* Row 1: Server Name + Type */}
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="serverName"
                    rules={{
                      validate: validateServerName
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>服务名称</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="例如：我的研究服务"
                            {...field}
                            className={cn(
                              errors.serverName &&
                                "border-red-500 focus-visible:ring-red-500"
                            )}
                          />
                        </FormControl>
                        {errors.serverName?.message && (
                          <p className="text-xs text-red-600 dark:text-red-400">
                            {errors.serverName.message}
                          </p>
                        )}
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="serverType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>类型</FormLabel>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <FormControl>
                            <SelectTrigger
                              className={cn(
                                errors.serverType &&
                                  "border-red-500 focus-visible:ring-red-500"
                              )}
                            >
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="stdio">stdio</SelectItem>
                            <SelectItem value="sse">sse</SelectItem>
                            <SelectItem value="streamableHttp">
                              streamableHttp
                            </SelectItem>
                            <SelectItem value="inMemory">inMemory</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.serverType?.message && (
                          <p className="text-xs text-red-600 dark:text-red-400">
                            {errors.serverType.message}
                          </p>
                        )}
                      </FormItem>
                    )}
                  />
                </div>

                {/* Row 2: Command (visible when stdio) */}
                {showCommand && (
                  <FormField
                    control={form.control}
                    name="command"
                    rules={{
                      validate: validateCommand
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>命令</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="例如：node /path/to/mcp-server.js"
                            {...field}
                            className={cn(
                              errors.command &&
                                "border-red-500 focus-visible:ring-red-500"
                            )}
                          />
                        </FormControl>
                        <p className="text-xs text-muted-foreground">
                          MCP 服务的可执行命令
                        </p>
                        {errors.command?.message && (
                          <p className="text-xs text-red-600 dark:text-red-400">
                            {errors.command.message}
                          </p>
                        )}
                      </FormItem>
                    )}
                  />
                )}

                {/* Row 3: Base URL (visible when sse or streamableHttp) */}
                {showBaseUrl && (
                  <FormField
                    control={form.control}
                    name="baseUrl"
                    rules={{
                      validate: validateBaseUrl
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>服务地址</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="例如：https://your-mcp-server.com/sse"
                            {...field}
                            className={cn(
                              errors.baseUrl &&
                                "border-red-500 focus-visible:ring-red-500"
                            )}
                          />
                        </FormControl>
                        <p className="text-xs text-muted-foreground">
                          MCP 服务的 SSE 端点地址
                        </p>
                        {errors.baseUrl?.message && (
                          <p className="text-xs text-red-600 dark:text-red-400">
                            {errors.baseUrl.message}
                          </p>
                        )}
                      </FormItem>
                    )}
                  />
                )}

                {/* Row 4: Arguments */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1">
                    <span className="font-medium">参数</span>
                    <span className="rounded bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">
                      可选
                    </span>
                  </div>
                  <div className="overflow-hidden rounded-md border">
                    <div className="grid grid-cols-[auto_1fr_1fr_auto] gap-2 bg-muted/50 px-3 py-2 text-xs font-medium text-muted-foreground">
                      <div className="w-6" />
                      <div>Key</div>
                      <div>Value</div>
                      <div className="w-8" />
                    </div>
                    {args.map((arg) => (
                      <div
                        key={arg.id}
                        className="grid grid-cols-[auto_1fr_1fr_auto] items-center gap-2 border-t px-3 py-2"
                      >
                        <GripVertical className="h-4 w-4 cursor-grab text-muted-foreground" />
                        <Input
                          placeholder="key"
                          value={arg.key}
                          onChange={(e) =>
                            onArgChange(arg.id, "key", e.target.value)
                          }
                          className="h-8 text-sm"
                        />
                        <Input
                          placeholder="value"
                          value={arg.value}
                          onChange={(e) =>
                            onArgChange(arg.id, "value", e.target.value)
                          }
                          className="h-8 text-sm"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-destructive"
                          onClick={() => onRemoveArg(arg.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-fit text-muted-foreground"
                    onClick={onAddArg}
                  >
                    <Plus className="mr-1 h-4 w-4" />
                    添加参数
                  </Button>
                </div>

                {/* Row 5: Environment Variables */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1">
                    <span className="font-medium">环境变量</span>
                    <span className="rounded bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">
                      可选
                    </span>
                  </div>
                  <div className="overflow-hidden rounded-md border">
                    <div className="grid grid-cols-[1fr_1fr_auto] gap-2 bg-muted/50 px-3 py-2 text-xs font-medium text-muted-foreground">
                      <div>Key</div>
                      <div>Value</div>
                      <div className="w-16" />
                    </div>
                    {envVars.map((envVar) => (
                      <div
                        key={envVar.id}
                        className="grid grid-cols-[1fr_1fr_auto] items-center gap-2 border-t px-3 py-2"
                      >
                        <Input
                          placeholder="key"
                          value={envVar.key}
                          onChange={(e) =>
                            onEnvVarChange(envVar.id, "key", e.target.value)
                          }
                          className="h-8 text-sm"
                        />
                        <div className="relative">
                          <Input
                            placeholder="value"
                            type={showPassword[envVar.id] ? "text" : "password"}
                            value={envVar.value}
                            onChange={(e) =>
                              onEnvVarChange(envVar.id, "value", e.target.value)
                            }
                            className="h-8 pr-8 text-sm"
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-0 h-8 w-8 text-muted-foreground"
                            onClick={() => togglePasswordVisibility(envVar.id)}
                          >
                            {showPassword[envVar.id] ? (
                              <EyeOff className="h-3.5 w-3.5" />
                            ) : (
                              <Eye className="h-3.5 w-3.5" />
                            )}
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-destructive"
                          onClick={() => onRemoveEnvVar(envVar.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-fit text-muted-foreground"
                    onClick={onAddEnvVar}
                  >
                    <Plus className="mr-1 h-4 w-4" />
                    添加环境变量
                  </Button>
                </div>

                {/* Row 6: Advanced Settings */}
                <Collapsible open={advancedOpen} onOpenChange={setAdvancedOpen}>
                  <CollapsibleTrigger className="flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                    <ChevronRight
                      className={cn(
                        "h-4 w-4 transition-transform",
                        advancedOpen && "rotate-90"
                      )}
                    />
                    高级设置
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-4">
                    <div className="flex flex-col gap-4 pl-6">
                      <FormField
                        control={form.control}
                        name="timeout"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>超时时间（秒）</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                className="w-32"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="tags"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>标签</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="例如：搜索、浏览器（逗号分隔）"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </Form>
          )}
        </div>

        {/* Fixed Bottom Action Bar */}
        {!showJsonView && (
          <div className="flex shrink-0 items-center justify-between border-t bg-background px-6 py-4">
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              取消
            </Button>
            <Button
              onClick={onSubmit}
              className=": :hover:bg-brand-primary-600 :focus-visible:ring-brand-primary-600 bg-brand-primary-500"
            >
              <Plus className="mr-1 h-4 w-4" />
              添加服务
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
