"use client";

import { useEffect, useMemo, useState } from "react";

import {
  CheckCircle2,
  ChevronRight,
  Copy,
  Cpu,
  Database,
  Download,
  FileCode,
  FileText,
  FolderOpen,
  GripVertical,
  Image,
  MessageSquare,
  Plug,
  Plus,
  Search,
  Settings,
  Terminal,
  Trash2,
  Wifi,
  Wrench,
  XCircle
} from "lucide-react";

import type { MCPServerFullType } from "@mocean/mastra/schemas";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useMcpServerActions } from "@/hooks/useMcpSWR";

// ==================== 类型定义 ====================

type McpServerDetail = Omit<MCPServerFullType, "assistants">;

interface ArgumentRow {
  id: string;
  key: string;
  value: string;
}

interface EnvVarRow {
  id: string;
  key: string;
  value: string;
}

interface Tool {
  id: string;
  icon: "terminal" | "chip" | "plug";
  name: string;
  description: string;
  enabled: boolean;
}

interface Prompt {
  id: string;
  name: string;
  description: string;
  params: string;
}

interface Resource {
  id: string;
  name: string;
  mime: string;
  uri: string;
  size: string;
  updated: string;
  iconType: "json" | "svg" | "js" | "sqlite" | "schema";
}

interface ServerDetailFormProps {
  server: McpServerDetail;
}

// ==================== 工具函数 ====================

const toolIconMap = {
  terminal: Terminal,
  chip: Cpu,
  plug: Plug
};

type ConnectionStatus = "idle" | "loading" | "success" | "error";

const parseJsonToRows = (json: unknown): ArgumentRow[] => {
  if (!json || typeof json !== "object" || Array.isArray(json)) {
    return [{ id: "1", key: "", value: "" }];
  }
  return Object.entries(json as Record<string, string>).map(([k, v], i) => ({
    id: String(i + 1),
    key: k,
    value: String(v)
  }));
};

const mimeToIconType = (mime?: string | null): Resource["iconType"] => {
  if (!mime) return "json";
  if (mime.includes("svg")) return "svg";
  if (mime.includes("javascript")) return "js";
  if (mime.includes("sqlite")) return "sqlite";
  if (mime.includes("schema")) return "schema";
  return "json";
};

const formatFileSize = (bytes?: number | null): string => {
  if (!bytes) return "—";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

// ==================== 主组件 ====================

export function ServerDetailForm({ server }: ServerDetailFormProps) {
  const [mounted, setMounted] = useState(false);
  const [serverName, setServerName] = useState(server.name);
  const [serverType, setServerType] = useState(server.type ?? "stdio");
  const [command, setCommand] = useState(server.command ?? "");
  const [baseUrl, setBaseUrl] = useState(server.baseUrl ?? "");
  const [enabled, setEnabled] = useState(server.isActive);
  const [connectionStatus, setConnectionStatus] =
    useState<ConnectionStatus>("idle");
  const [activeTab, setActiveTab] = useState("configuration");

  const [args, setArgs] = useState<ArgumentRow[]>(() =>
    parseJsonToRows(server.argsJson)
  );
  const [envVars, setEnvVars] = useState<EnvVarRow[]>(() =>
    parseJsonToRows(server.env)
  );

  const [promptSearch, setPromptSearch] = useState("");
  const [resourceSearch, setResourceSearch] = useState("");
  const [resourceFilter, setResourceFilter] = useState("all");
  const [assignmentSubTab, setAssignmentSubTab] = useState<
    "assistants" | "agents"
  >("assistants");

  // ---- 从 server prop 派生的关联数据 ----

  const [tools, setTools] = useState<Tool[]>(() =>
    (server.tools ?? []).map((t) => ({
      id: t.id,
      icon: "terminal" as const,
      name: t.name,
      description: t.description ?? "",
      enabled: t.isEnabled
    }))
  );

  const prompts = useMemo<Prompt[]>(
    () =>
      (server.prompts ?? []).map((p) => ({
        id: p.id,
        name: p.name,
        description: p.description ?? "",
        params: Array.isArray(p.arguments)
          ? `${p.arguments.length} params`
          : "0 params"
      })),
    [server.prompts]
  );

  const resources = useMemo<Resource[]>(
    () =>
      (server.resources ?? []).map((r) => ({
        id: r.id,
        name: r.name,
        mime: r.mimeType ?? "",
        uri: r.uri,
        size: formatFileSize(r.size),
        updated: r.updatedAt
          ? new Date(r.updatedAt).toLocaleDateString("zh-CN")
          : "—",
        iconType: mimeToIconType(r.mimeType ?? undefined)
      })),
    [server.resources]
  );

  // Assignments 暂无 API 支持，留空
  const assignedAssistants: never[] = [];
  const availableAssistants: never[] = [];
  const assignedAgents: never[] = [];
  const availableAgents: never[] = [];

  // ---- 同步 server prop 变化到表单（切换 server 时重置） ----
  useEffect(() => {
    setServerName(server.name);
    setServerType(server.type ?? "stdio");
    setCommand(server.command ?? "");
    setBaseUrl(server.baseUrl ?? "");
    setEnabled(server.isActive);
    setArgs(parseJsonToRows(server.argsJson));
    setEnvVars(parseJsonToRows(server.env));
    setTools(
      (server.tools ?? []).map((t) => ({
        id: t.id,
        icon: "terminal" as const,
        name: t.name,
        description: t.description ?? "",
        enabled: t.isEnabled
      }))
    );
  }, [server.id]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setMounted(true);
  }, []);

  // ---- Actions ----

  const { toggleTool: apiToggleTool } = useMcpServerActions();

  const toggleTool = async (toolId: string) => {
    const tool = tools.find((t) => t.id === toolId);
    if (!tool) return;
    // 乐观更新 UI
    setTools((prev) =>
      prev.map((t) => (t.id === toolId ? { ...t, enabled: !t.enabled } : t))
    );
    await apiToggleTool(server.id, tool.name);
  };

  // ---- 计算值 ----

  const activeToolsCount = tools.filter((t) => t.enabled).length;

  const filteredPrompts = prompts.filter(
    (p) =>
      p.name.toLowerCase().includes(promptSearch.toLowerCase()) ||
      p.description.toLowerCase().includes(promptSearch.toLowerCase())
  );

  const filteredResources = resources.filter((r) => {
    const matchesSearch =
      r.name.toLowerCase().includes(resourceSearch.toLowerCase()) ||
      r.uri.toLowerCase().includes(resourceSearch.toLowerCase());
    const matchesFilter =
      resourceFilter === "all" ||
      (resourceFilter === "json" &&
        (r.iconType === "json" || r.iconType === "schema")) ||
      (resourceFilter === "image" && r.iconType === "svg") ||
      (resourceFilter === "code" && r.iconType === "js") ||
      (resourceFilter === "database" && r.iconType === "sqlite");
    return matchesSearch && matchesFilter;
  });

  const getResourceIcon = (iconType: Resource["iconType"]) => {
    switch (iconType) {
      case "json":
      case "schema":
        return { icon: FileText, bg: "bg-blue-50", color: "text-blue-500" };
      case "svg":
        return { icon: Image, bg: "bg-green-50", color: "text-green-500" };
      case "js":
        return { icon: FileCode, bg: "bg-purple-50", color: "text-purple-500" };
      case "sqlite":
        return { icon: Database, bg: "bg-orange-50", color: "text-orange-500" };
      default:
        return {
          icon: FileText,
          bg: "bg-brand-secondary-50",
          color: "text-brand-secondary-500"
        };
    }
  };

  const showBaseUrl = serverType === "sse" || serverType === "streamableHttp";

  const handleTestConnection = async () => {
    setConnectionStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setConnectionStatus(Math.random() > 0.3 ? "success" : "error");
    setTimeout(() => setConnectionStatus("idle"), 3000);
  };

  const addArgument = () => {
    setArgs([...args, { id: crypto.randomUUID(), key: "", value: "" }]);
  };

  const removeArgument = (id: string) => {
    setArgs(args.filter((arg) => arg.id !== id));
  };

  const updateArgument = (
    id: string,
    field: "key" | "value",
    newValue: string
  ) => {
    setArgs(
      args.map((arg) => (arg.id === id ? { ...arg, [field]: newValue } : arg))
    );
  };

  const addEnvVar = () => {
    setEnvVars([...envVars, { id: crypto.randomUUID(), key: "", value: "" }]);
  };

  const removeEnvVar = (id: string) => {
    setEnvVars(envVars.filter((env) => env.id !== id));
  };

  const updateEnvVar = (
    id: string,
    field: "key" | "value",
    newValue: string
  ) => {
    setEnvVars(
      envVars.map((env) =>
        env.id === id ? { ...env, [field]: newValue } : env
      )
    );
  };

  // ==================== 渲染 ====================

  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-brand-text">
            MCP Server Detail: {serverName}
          </CardTitle>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Switch
                id="enabled"
                checked={enabled}
                onCheckedChange={setEnabled}
              />
              <Label htmlFor="enabled" className="text-sm font-normal">
                Enabled
              </Label>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleTestConnection}
              disabled={connectionStatus === "loading"}
            >
              {connectionStatus === "loading" ? (
                <>
                  <Spinner className="mr-2" />
                  Testing...
                </>
              ) : connectionStatus === "success" ? (
                <>
                  <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                  Connected
                </>
              ) : connectionStatus === "error" ? (
                <>
                  <XCircle className="mr-2 h-4 w-4 text-destructive" />
                  Failed
                </>
              ) : (
                <>
                  <Wifi className="mr-2 h-4 w-4" />
                  Test Connection
                </>
              )}
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-destructive hover:text-destructive"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </div>
        </div>

        {/* Stats Summary Row */}
        <div className="mt-4 flex items-center gap-6 border-t pt-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
              <Wrench className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium">{activeToolsCount}</p>
              <p className="text-xs text-brand-text-muted">active tools</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-purple-50">
              <MessageSquare className="h-4 w-4 text-purple-500" />
            </div>
            <div>
              <p className="text-sm font-medium">{prompts.length}</p>
              <p className="text-xs text-brand-text-muted">prompts</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-orange-50">
              <Database className="h-4 w-4 text-orange-500" />
            </div>
            <div>
              <p className="text-sm font-medium">{resources.length}</p>
              <p className="text-xs text-brand-text-muted">resources</p>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-6">
        {!mounted ? (
          <div className="flex h-96 items-center justify-center">
            <Spinner />
          </div>
        ) : (
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="h-auto w-full justify-start rounded-none border-b bg-transparent p-0">
              {(
                [
                  ["configuration", "Configuration"],
                  ["tools", "Tools"],
                  ["prompts", "Prompts"],
                  ["resources", "Resources"],
                  ["assignments", "Assignments"]
                ] as const
              ).map(([value, label]) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                >
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* ---- Configuration Tab ---- */}
            <TabsContent
              value="configuration"
              className="mt-6 flex flex-col gap-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="server-name">Server Name</Label>
                  <Input
                    id="server-name"
                    value={serverName}
                    onChange={(e) => setServerName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="server-type">Type</Label>
                  <Select value={serverType} onValueChange={setServerType}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="stdio">stdio</SelectItem>
                      <SelectItem value="sse">sse</SelectItem>
                      <SelectItem value="inMemory">inMemory</SelectItem>
                      <SelectItem value="streamableHttp">
                        streamableHttp
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="command">Command</Label>
                <Input
                  id="command"
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                />
              </div>

              {showBaseUrl && (
                <div className="flex flex-col gap-2">
                  <Label htmlFor="base-url">Base URL</Label>
                  <Input
                    id="base-url"
                    placeholder="https://example.com/mcp"
                    value={baseUrl}
                    onChange={(e) => setBaseUrl(e.target.value)}
                  />
                </div>
              )}

              {/* Arguments */}
              <div className="flex flex-col gap-3">
                <Label>Arguments</Label>
                <div className="grid grid-cols-[auto_1fr_1fr_auto] gap-2 text-sm text-brand-text-muted">
                  <span />
                  <span>Key</span>
                  <span>Value</span>
                  <span />
                </div>
                {args.map((arg) => (
                  <div
                    key={arg.id}
                    className="group grid grid-cols-[auto_1fr_1fr_auto] items-center gap-2"
                  >
                    <GripVertical className="h-4 w-4 cursor-grab text-brand-secondary-400" />
                    <Input
                      value={arg.key}
                      onChange={(e) =>
                        updateArgument(arg.id, "key", e.target.value)
                      }
                      placeholder="--key"
                    />
                    <Input
                      value={arg.value}
                      onChange={(e) =>
                        updateArgument(arg.id, "value", e.target.value)
                      }
                      placeholder="value"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeArgument(arg.id)}
                      className="text-brand-secondary-400 hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  variant="ghost"
                  onClick={addArgument}
                  className="w-fit text-brand-text-muted"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Argument
                </Button>
              </div>

              {/* Environment Variables */}
              <div className="flex flex-col gap-3">
                <Label>Environment Variables</Label>
                <div className="grid grid-cols-[auto_1fr_1fr_auto] gap-2 text-sm text-brand-text-muted">
                  <span />
                  <span>Key</span>
                  <span>Value</span>
                  <span />
                </div>
                {envVars.map((env) => (
                  <div
                    key={env.id}
                    className="group grid grid-cols-[auto_1fr_1fr_auto] items-center gap-2"
                  >
                    <GripVertical className="h-4 w-4 cursor-grab text-brand-secondary-400" />
                    <Input
                      value={env.key}
                      onChange={(e) =>
                        updateEnvVar(env.id, "key", e.target.value)
                      }
                      placeholder="KEY"
                    />
                    <Input
                      value={env.value}
                      onChange={(e) =>
                        updateEnvVar(env.id, "value", e.target.value)
                      }
                      placeholder="value"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeEnvVar(env.id)}
                      className="text-brand-secondary-400 hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  variant="ghost"
                  onClick={addEnvVar}
                  className="w-fit text-brand-text-muted"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Environment Variable
                </Button>
              </div>

              <div className="flex justify-end border-t pt-4">
                <Button className="bg-primary hover:bg-primary/90">
                  <Settings className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </div>
            </TabsContent>

            {/* ---- Tools Tab ---- */}
            <TabsContent value="tools" className="mt-6">
              <div className="flex flex-col gap-3">
                {tools.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                      <Wrench className="h-8 w-8 text-brand-secondary-400" />
                    </div>
                    <p className="text-brand-text-muted">暂无工具数据</p>
                  </div>
                ) : (
                  tools.map((tool) => {
                    const Icon = toolIconMap[tool.icon];
                    return (
                      <div
                        key={tool.id}
                        className={cn(
                          "flex items-start justify-between gap-4 rounded-lg border p-4 transition-colors",
                          !tool.enabled && "bg-muted/50 opacity-50"
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-sm font-semibold text-brand-text">
                              {tool.name}
                            </span>
                            <p className="line-clamp-2 text-xs text-brand-text-muted">
                              {tool.description}
                            </p>
                          </div>
                        </div>
                        <Switch
                          checked={tool.enabled}
                          onCheckedChange={() => toggleTool(tool.id)}
                          className="shrink-0 data-[state=checked]:bg-blue-500"
                        />
                      </div>
                    );
                  })
                )}
              </div>
              <div className="mt-6 flex justify-end border-t pt-6">
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export Config
                </Button>
              </div>
            </TabsContent>

            {/* ---- Prompts Tab ---- */}
            <TabsContent value="prompts" className="mt-6">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-secondary-400" />
                  <Input
                    placeholder="Search prompts..."
                    value={promptSearch}
                    onChange={(e) => setPromptSearch(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <span className="whitespace-nowrap text-sm text-brand-text-muted">
                  {prompts.length} prompts total
                </span>
              </div>

              <div className="flex flex-col gap-2">
                {filteredPrompts.length > 0 ? (
                  filteredPrompts.map((prompt) => (
                    <div
                      key={prompt.id}
                      className="flex cursor-pointer items-center gap-3 rounded-md border bg-card p-3 transition-shadow hover:shadow-sm"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-purple-50">
                        <MessageSquare className="h-4 w-4 text-purple-500" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-brand-text">
                            {prompt.name}
                          </span>
                          <span className="rounded-full border border-blue-200 px-2 py-0.5 text-xs text-blue-600">
                            {prompt.params}
                          </span>
                        </div>
                        <p className="truncate text-sm text-brand-text-muted">
                          {prompt.description}
                        </p>
                      </div>
                      <ChevronRight className="h-4 w-4 shrink-0 text-brand-secondary-400" />
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                      <MessageSquare className="h-8 w-8 text-brand-secondary-400" />
                    </div>
                    <p className="mb-4 text-brand-text-muted">
                      No prompts available. Connect to the server to load
                      prompts.
                    </p>
                    <Button variant="outline" onClick={handleTestConnection}>
                      Test Connection
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>

            {/* ---- Resources Tab ---- */}
            <TabsContent value="resources" className="mt-6">
              <div className="mb-4 flex items-center gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-secondary-400" />
                  <Input
                    placeholder="Search resources..."
                    value={resourceSearch}
                    onChange={(e) => setResourceSearch(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <Select
                  value={resourceFilter}
                  onValueChange={setResourceFilter}
                >
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="json">JSON</SelectItem>
                    <SelectItem value="image">Images</SelectItem>
                    <SelectItem value="code">Code</SelectItem>
                    <SelectItem value="database">Database</SelectItem>
                  </SelectContent>
                </Select>
                <span className="whitespace-nowrap text-sm text-brand-text-muted">
                  {resources.length} resources
                </span>
              </div>

              <div className="flex flex-col gap-2">
                {filteredResources.length > 0 ? (
                  filteredResources.map((resource) => {
                    const { icon: Icon, bg, color } =
                      getResourceIcon(resource.iconType);
                    return (
                      <div
                        key={resource.id}
                        className="flex items-start gap-3 rounded-md border bg-card p-3 transition-shadow hover:shadow-sm"
                      >
                        <div
                          className={`h-8 w-8 rounded ${bg} flex shrink-0 items-center justify-center`}
                        >
                          <Icon className={`h-4 w-4 ${color}`} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="mb-0.5 flex items-center gap-2">
                            <span className="text-sm font-medium text-brand-text">
                              {resource.name}
                            </span>
                            <span className="rounded bg-brand-secondary-100 px-2 py-0.5 font-mono text-xs text-brand-secondary-600">
                              {resource.mime}
                            </span>
                          </div>
                          <p className="mb-1 truncate font-mono text-sm text-brand-secondary-400">
                            {resource.uri}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-brand-text-muted">
                            <span>{resource.size}</span>
                            <span>{resource.updated}</span>
                          </div>
                        </div>
                        <div className="flex shrink-0 items-center gap-2">
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-brand-secondary-400 hover:text-foreground"
                            onClick={() =>
                              navigator.clipboard.writeText(resource.uri)
                            }
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                      <FolderOpen className="h-8 w-8 text-brand-secondary-400" />
                    </div>
                    <p className="mb-1 font-medium text-brand-text">
                      No resources available
                    </p>
                    <p className="text-sm text-brand-text-muted">
                      Resources will appear after a successful connection test
                    </p>
                  </div>
                )}
              </div>
            </TabsContent>

            {/* ---- Assignments Tab ---- */}
            <TabsContent value="assignments" className="mt-6">
              <div className="mb-6 inline-flex items-center gap-1 rounded-full bg-muted p-1">
                <button
                  onClick={() => setAssignmentSubTab("assistants")}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    assignmentSubTab === "assistants"
                      ? "bg-card text-foreground shadow-sm"
                      : "text-brand-text-muted hover:text-foreground"
                  }`}
                >
                  Assistants ({assignedAssistants.length})
                </button>
                <button
                  onClick={() => setAssignmentSubTab("agents")}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    assignmentSubTab === "agents"
                      ? "bg-card text-foreground shadow-sm"
                      : "text-brand-text-muted hover:text-foreground"
                  }`}
                >
                  Agents ({assignedAgents.length})
                </button>
              </div>

              {assignmentSubTab === "assistants" && (
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="mb-3 text-xs uppercase tracking-wide text-brand-text-muted">
                      Assigned Assistants
                    </p>
                    {assignedAssistants.length === 0 ? (
                      <p className="text-sm text-brand-text-muted">
                        暂无分配的 Assistant
                      </p>
                    ) : null}
                  </div>

                  <div className="border-t" />

                  <div>
                    <p className="mb-1 text-xs uppercase tracking-wide text-brand-text-muted">
                      Available Assistants
                    </p>
                    <p className="mb-3 text-sm text-brand-text-muted">
                      Add this MCP server to more assistants
                    </p>
                    {availableAssistants.length === 0 ? (
                      <p className="text-sm text-brand-text-muted">
                        暂无可分配的 Assistant（功能待实现）
                      </p>
                    ) : null}
                  </div>
                </div>
              )}

              {assignmentSubTab === "agents" && (
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="mb-3 text-xs uppercase tracking-wide text-brand-text-muted">
                      Assigned Agents
                    </p>
                    {assignedAgents.length === 0 ? (
                      <p className="text-sm text-brand-text-muted">
                        暂无分配的 Agent
                      </p>
                    ) : null}
                  </div>

                  <div className="border-t" />

                  <div>
                    <p className="mb-1 text-xs uppercase tracking-wide text-brand-text-muted">
                      Available Agents
                    </p>
                    <p className="mb-3 text-sm text-brand-text-muted">
                      Add this MCP server to more agents
                    </p>
                    {availableAgents.length === 0 ? (
                      <p className="text-sm text-brand-text-muted">
                        暂无可分配的 Agent（功能待实现）
                      </p>
                    ) : null}
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>
        )}
      </CardContent>
    </Card>
  );
}
