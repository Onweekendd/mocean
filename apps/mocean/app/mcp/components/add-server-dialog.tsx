"use client";

import { useState } from "react";

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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface KeyValuePair {
  id: string;
  key: string;
  value: string;
}

interface AddServerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddServerDialog({ open, onOpenChange }: AddServerDialogProps) {
  const [serverName, setServerName] = useState("");
  const [serverType, setServerType] = useState<
    "stdio" | "sse" | "streamableHttp" | "inMemory"
  >("stdio");
  const [command, setCommand] = useState("");
  const [baseUrl, setBaseUrl] = useState("");
  const [args, setArgs] = useState<KeyValuePair[]>([
    { id: "1", key: "--config", value: "/conf/research.json" },
    { id: "2", key: "", value: "" }
  ]);
  const [envVars, setEnvVars] = useState<KeyValuePair[]>([
    { id: "1", key: "API_KEY", value: "sk-xxxxx" }
  ]);
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [timeout, setTimeout] = useState("30");
  const [tags, setTags] = useState("");
  const [showPassword, setShowPassword] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const showBaseUrl = serverType === "sse" || serverType === "streamableHttp";
  const showCommand = serverType === "stdio";

  const handleAddArg = () => {
    setArgs([...args, { id: Date.now().toString(), key: "", value: "" }]);
  };

  const handleRemoveArg = (id: string) => {
    setArgs(args.filter((arg) => arg.id !== id));
  };

  const handleArgChange = (
    id: string,
    field: "key" | "value",
    value: string
  ) => {
    setArgs(
      args.map((arg) => (arg.id === id ? { ...arg, [field]: value } : arg))
    );
  };

  const handleAddEnvVar = () => {
    setEnvVars([...envVars, { id: Date.now().toString(), key: "", value: "" }]);
  };

  const handleRemoveEnvVar = (id: string) => {
    setEnvVars(envVars.filter((v) => v.id !== id));
  };

  const handleEnvVarChange = (
    id: string,
    field: "key" | "value",
    value: string
  ) => {
    setEnvVars(
      envVars.map((v) => (v.id === id ? { ...v, [field]: value } : v))
    );
  };

  const togglePasswordVisibility = (id: string) => {
    setShowPassword((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    if (!serverName.trim()) {
      return;
    }
    // Handle form submission
    onOpenChange(false);
  };

  const hasError = submitted && !serverName.trim();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[85vh] flex-col gap-0 p-0 sm:max-w-[560px]">
        <DialogHeader className="shrink-0 px-6 pb-4 pt-6">
          <DialogTitle className="flex items-center gap-2 text-lg font-semibold">
            <Plug className="h-5 w-5 text-primary" />
            Add New MCP Server
          </DialogTitle>
        </DialogHeader>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 pb-4">
          <div className="flex flex-col gap-5">
            {/* Row 1: Server Name + Type */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="server-name">Server Name</Label>
                <Input
                  id="server-name"
                  placeholder="e.g. My Research Server"
                  value={serverName}
                  onChange={(e) => setServerName(e.target.value)}
                  className={cn(
                    hasError && "border-red-500 focus-visible:ring-red-500"
                  )}
                />
                {hasError && (
                  <p className="text-xs text-red-500">
                    Server name is required
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="server-type">Type</Label>
                <Select
                  value={serverType}
                  onValueChange={(v) => setServerType(v as typeof serverType)}
                >
                  <SelectTrigger id="server-type">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="stdio">stdio</SelectItem>
                    <SelectItem value="sse">sse</SelectItem>
                    <SelectItem value="streamableHttp">
                      streamableHttp
                    </SelectItem>
                    <SelectItem value="inMemory">inMemory</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Row 2: Command (visible when stdio) */}
            {showCommand && (
              <div className="flex flex-col gap-2">
                <Label htmlFor="command">Command</Label>
                <Input
                  id="command"
                  placeholder="e.g. node /path/to/mcp-server.js"
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  The executable command to start the MCP server
                </p>
              </div>
            )}

            {/* Row 3: Base URL (visible when sse or streamableHttp) */}
            {showBaseUrl && (
              <div className="flex flex-col gap-2">
                <Label htmlFor="base-url">Base URL</Label>
                <Input
                  id="base-url"
                  placeholder="e.g. https://your-mcp-server.com/sse"
                  value={baseUrl}
                  onChange={(e) => setBaseUrl(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  The SSE endpoint URL of the MCP server
                </p>
              </div>
            )}

            {/* Row 4: Arguments */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Label>Arguments</Label>
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
                <Label>Environment Variables</Label>
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
                          handleEnvVarChange(envVar.id, "value", e.target.value)
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
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="timeout">Timeout (seconds)</Label>
                    <Input
                      id="timeout"
                      type="number"
                      value={timeout}
                      onChange={(e) => setTimeout(e.target.value)}
                      className="w-32"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="tags">Tags</Label>
                    <Input
                      id="tags"
                      placeholder="e.g. search, browser (comma separated)"
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                    />
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
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
