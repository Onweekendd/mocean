"use client";

import {
  ChevronRight,
  Eye,
  EyeOff,
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
    handleAddArg,
    handleRemoveArg,
    handleArgChange,
    handleAddEnvVar,
    handleRemoveEnvVar,
    handleEnvVarChange,
    togglePasswordVisibility,
    handleSubmit
  } = useAddServerForm({ onOpenChange });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[85vh] flex-col gap-0 p-0 sm:max-w-[560px]">
        <DialogHeader className="shrink-0 px-6 pb-4 pt-6">
          <DialogTitle className="flex items-center gap-2 text-lg font-semibold">
            <Plug className="h-5 w-5 text-primary" />
            新增 MCP 服务
          </DialogTitle>
        </DialogHeader>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 pb-4">
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
                      <FormLabel>Server Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. My Research Server"
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
                      <FormLabel>Type</FormLabel>
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
                      <FormLabel>Command</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. node /path/to/mcp-server.js"
                          {...field}
                          className={cn(
                            errors.command &&
                              "border-red-500 focus-visible:ring-red-500"
                          )}
                        />
                      </FormControl>
                      <p className="text-xs text-muted-foreground">
                        The executable command to start the MCP server
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
                      <FormLabel>Base URL</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. https://your-mcp-server.com/sse"
                          {...field}
                          className={cn(
                            errors.baseUrl &&
                              "border-red-500 focus-visible:ring-red-500"
                          )}
                        />
                      </FormControl>
                      <p className="text-xs text-muted-foreground">
                        The SSE endpoint URL of the MCP server
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
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Arguments</span>
                  <span className="rounded bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">
                    Optional
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
                        placeholder="KEY"
                        value={arg.key}
                        onChange={(e) =>
                          handleArgChange(arg.id, "key", e.target.value)
                        }
                        className="h-8 text-sm"
                      />
                      <Input
                        placeholder="value"
                        value={arg.value}
                        onChange={(e) =>
                          handleArgChange(arg.id, "value", e.target.value)
                        }
                        className="h-8 text-sm"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-destructive"
                        onClick={() => handleRemoveArg(arg.id)}
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
                  onClick={handleAddArg}
                >
                  <Plus className="mr-1 h-4 w-4" />
                  Add Argument
                </Button>
              </div>

              {/* Row 5: Environment Variables */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">
                    Environment Variables
                  </span>
                  <span className="rounded bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">
                    Optional
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
                        placeholder="KEY"
                        value={envVar.key}
                        onChange={(e) =>
                          handleEnvVarChange(envVar.id, "key", e.target.value)
                        }
                        className="h-8 text-sm"
                      />
                      <div className="relative">
                        <Input
                          placeholder="value"
                          type={showPassword[envVar.id] ? "text" : "password"}
                          value={envVar.value}
                          onChange={(e) =>
                            handleEnvVarChange(
                              envVar.id,
                              "value",
                              e.target.value
                            )
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
                        onClick={() => handleRemoveEnvVar(envVar.id)}
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
                  onClick={handleAddEnvVar}
                >
                  <Plus className="mr-1 h-4 w-4" />
                  Add Environment Variable
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
                  Advanced Settings
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-4">
                  <div className="flex flex-col gap-4 pl-6">
                    <FormField
                      control={form.control}
                      name="timeout"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Timeout (seconds)</FormLabel>
                          <FormControl>
                            <Input type="number" className="w-32" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="tags"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tags</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g. search, browser (comma separated)"
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
        </div>

        {/* Fixed Bottom Action Bar */}
        <div className="flex shrink-0 items-center justify-between border-t bg-background px-6 py-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>
            <Plus className="mr-1 h-4 w-4" />
            Create Server
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
