"use client";

import { useEffect, useState } from "react";

import {
  Bot,
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
  X,
  XCircle
} from "lucide-react";

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

interface Prompt {
  id: string;
  name: string;
  description: string;
  params: string;
}

interface AssignmentItem {
  id: string;
  initials: string;
  name: string;
  description: string;
  color: string;
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

interface Tool {
  id: string;
  icon: "terminal" | "chip" | "plug";
  name: string;
  description: string;
  enabled: boolean;
}

const toolIconMap = {
  terminal: Terminal,
  chip: Cpu,
  plug: Plug
};

type ConnectionStatus = "idle" | "loading" | "success" | "error";

interface ServerDetailFormProps {
  serverName?: string;
}

export function ServerDetailForm({
  serverName: initialName = "Cognitive Research"
}: ServerDetailFormProps) {
  const [mounted, setMounted] = useState(false);
  const [serverName, setServerName] = useState(initialName);
  const [serverType, setServerType] = useState("stdio");
  const [command, setCommand] = useState("node /path/to/mcp.js");
  const [baseUrl, setBaseUrl] = useState("");
  const [enabled, setEnabled] = useState(true);
  const [connectionStatus, setConnectionStatus] =
    useState<ConnectionStatus>("idle");
  const [activeTab, setActiveTab] = useState("configuration");

  const [args, setArgs] = useState<ArgumentRow[]>([
    { id: "1", key: "--config", value: "/conf/research.json" },
    { id: "2", key: "--log-level", value: "debug" }
  ]);

  const [envVars, setEnvVars] = useState<EnvVarRow[]>([
    { id: "1", key: "", value: "" }
  ]);

  const [promptSearch, setPromptSearch] = useState("");
  const [resourceSearch, setResourceSearch] = useState("");
  const [resourceFilter, setResourceFilter] = useState("all");
  const [assignmentSubTab, setAssignmentSubTab] = useState<
    "assistants" | "agents"
  >("assistants");

  const [prompts] = useState<Prompt[]>([
    {
      id: "1",
      name: "research-query",
      params: "3 params",
      description:
        "Generate structured research queries based on topic and depth"
    },
    {
      id: "2",
      name: "summarize-content",
      params: "1 param",
      description: "Summarize long-form content into key bullet points"
    },
    {
      id: "3",
      name: "extract-entities",
      params: "2 params",
      description: "Extract named entities from unstructured text"
    },
    {
      id: "4",
      name: "compare-sources",
      params: "4 params",
      description: "Compare multiple research sources and highlight differences"
    },
    {
      id: "5",
      name: "generate-outline",
      params: "2 params",
      description: "Create a structured outline for research documents"
    }
  ]);

  const [assignedAssistants] = useState<AssignmentItem[]>([
    {
      id: "1",
      initials: "GA",
      name: "General Assistant",
      description: "Default research assistant",
      color: "bg-purple-500"
    },
    {
      id: "2",
      initials: "WR",
      name: "Writing Research",
      description: "Specialized in academic writing",
      color: "bg-blue-500"
    }
  ]);

  const [availableAssistants] = useState<AssignmentItem[]>([
    {
      id: "3",
      initials: "CA",
      name: "Code Assistant",
      description: "Programming and development tasks",
      color: "bg-gray-400"
    },
    {
      id: "4",
      initials: "DA",
      name: "Data Analyst",
      description: "Data analysis and visualization",
      color: "bg-gray-400"
    }
  ]);

  const [assignedAgents] = useState<AssignmentItem[]>([
    {
      id: "1",
      initials: "RA",
      name: "Research Agent",
      description: "Autonomous research operations",
      color: "bg-emerald-500"
    }
  ]);

  const [availableAgents] = useState<AssignmentItem[]>([
    {
      id: "2",
      initials: "AA",
      name: "Automation Agent",
      description: "Task automation and workflows",
      color: "bg-gray-400"
    },
    {
      id: "3",
      initials: "MA",
      name: "Monitor Agent",
      description: "System monitoring and alerts",
      color: "bg-gray-400"
    }
  ]);

  const [resources] = useState<Resource[]>([
    {
      id: "1",
      name: "Research Database",
      mime: "application/json",
      uri: "resource://cognitive/database/main",
      size: "2.4 MB",
      updated: "2 hours ago",
      iconType: "json"
    },
    {
      id: "2",
      name: "Chart Templates",
      mime: "image/svg+xml",
      uri: "resource://cognitive/templates/charts",
      size: "856 KB",
      updated: "1 day ago",
      iconType: "svg"
    },
    {
      id: "3",
      name: "Analysis Scripts",
      mime: "text/javascript",
      uri: "resource://cognitive/scripts/analysis",
      size: "124 KB",
      updated: "3 days ago",
      iconType: "js"
    },
    {
      id: "4",
      name: "Citation Index",
      mime: "application/sqlite",
      uri: "resource://cognitive/index/citations",
      size: "18.2 MB",
      updated: "5 days ago",
      iconType: "sqlite"
    },
    {
      id: "5",
      name: "Config Schema",
      mime: "application/schema+json",
      uri: "resource://cognitive/schema/config",
      size: "12 KB",
      updated: "1 week ago",
      iconType: "schema"
    }
  ]);

  const [tools, setTools] = useState<Tool[]>([
    {
      id: "1",
      icon: "terminal",
      name: "simulate-researcher",
      description: "Simulate research cognitive researcher",
      enabled: true
    },
    {
      id: "2",
      icon: "chip",
      name: "analyze-data",
      description: "Analyze process analytical data streams for deep insights",
      enabled: true
    },
    {
      id: "3",
      icon: "plug",
      name: "get-concept",
      description: "Retrieve conceptual definitions and relationships",
      enabled: false
    },
    {
      id: "4",
      icon: "terminal",
      name: "generate-report",
      description: "Generate comprehensive research reports",
      enabled: true
    },
    {
      id: "5",
      icon: "chip",
      name: "extract-keywords",
      description: "Extract key terms and phrases from text",
      enabled: true
    }
  ]);

  const toggleTool = (id: string) => {
    setTools(
      tools.map((tool) =>
        tool.id === id ? { ...tool, enabled: !tool.enabled } : tool
      )
    );
  };

  useEffect(() => {
    setMounted(true);
  }, []);

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
        return { icon: FileText, bg: "bg-gray-50", color: "text-gray-500" };
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

  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>MCP Server Detail: {serverName}</CardTitle>
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
              <p className="text-xs text-muted-foreground">active tools</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-purple-50">
              <MessageSquare className="h-4 w-4 text-purple-500" />
            </div>
            <div>
              <p className="text-sm font-medium">{prompts.length}</p>
              <p className="text-xs text-muted-foreground">prompts</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-orange-50">
              <Database className="h-4 w-4 text-orange-500" />
            </div>
            <div>
              <p className="text-sm font-medium">{resources.length}</p>
              <p className="text-xs text-muted-foreground">resources</p>
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
            <TabsTrigger
              value="configuration"
              className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Configuration
            </TabsTrigger>
            <TabsTrigger
              value="tools"
              className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Tools
            </TabsTrigger>
            <TabsTrigger
              value="prompts"
              className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Prompts
            </TabsTrigger>
            <TabsTrigger
              value="resources"
              className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Resources
            </TabsTrigger>
            <TabsTrigger
              value="assignments"
              className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
            >
              Assignments
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="configuration"
            className="mt-6 flex flex-col gap-6"
          >
            {/* Row 1: Server Name + Type */}
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

            {/* Row 2: Command */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="command">Command</Label>
              <Input
                id="command"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
              />
            </div>

            {/* Conditional: Base URL (only for sse and streamableHttp) */}
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

            {/* Arguments Section */}
            <div className="flex flex-col gap-3">
              <Label>Arguments</Label>
              <div className="grid grid-cols-[auto_1fr_1fr_auto] gap-2 text-sm text-muted-foreground">
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
                  <GripVertical className="h-4 w-4 cursor-grab text-muted-foreground" />
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
                    size="icon-sm"
                    onClick={() => removeArgument(arg.id)}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button
                variant="ghost"
                onClick={addArgument}
                className="w-fit text-muted-foreground"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add New Argument
              </Button>
            </div>

            {/* Environment Variables Section */}
            <div className="flex flex-col gap-3">
              <Label>Environment Variables</Label>
              <div className="grid grid-cols-[auto_1fr_1fr_auto] gap-2 text-sm text-muted-foreground">
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
                  <GripVertical className="h-4 w-4 cursor-grab text-muted-foreground" />
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
                    size="icon-sm"
                    onClick={() => removeEnvVar(env.id)}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button
                variant="ghost"
                onClick={addEnvVar}
                className="w-fit text-muted-foreground"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add New Environment Variable
              </Button>
            </div>

            {/* Bottom action bar */}
            <div className="flex justify-end border-t pt-4">
              <Button className="bg-primary hover:bg-primary/90">
                <Settings className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="tools" className="mt-6">
            {/* Tool list */}
            <div className="flex flex-col gap-3">
              {tools.map((tool) => {
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
                        <span className="text-sm font-semibold">
                          {tool.name}
                        </span>
                        <p className="line-clamp-2 text-xs text-muted-foreground">
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
              })}
            </div>

            {/* Export Config button */}
            <div className="mt-6 flex justify-end border-t pt-6">
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export Config
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="prompts" className="mt-6">
            {/* Search bar and count */}
            <div className="mb-4 flex items-center justify-between gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search prompts..."
                  value={promptSearch}
                  onChange={(e) => setPromptSearch(e.target.value)}
                  className="pl-9"
                />
              </div>
              <span className="whitespace-nowrap text-sm text-muted-foreground">
                {prompts.length} prompts total
              </span>
            </div>

            {/* Prompt list */}
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
                        <span className="text-sm font-medium">
                          {prompt.name}
                        </span>
                        <span className="rounded-full border border-blue-200 px-2 py-0.5 text-xs text-blue-600">
                          {prompt.params}
                        </span>
                      </div>
                      <p className="truncate text-sm text-muted-foreground">
                        {prompt.description}
                      </p>
                    </div>
                    <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                    <MessageSquare className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <p className="mb-4 text-muted-foreground">
                    No prompts available. Connect to the server to load prompts.
                  </p>
                  <Button variant="outline" onClick={handleTestConnection}>
                    Test Connection
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="resources" className="mt-6">
            {/* Top bar: Search + Filter + Count */}
            <div className="mb-4 flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search resources..."
                  value={resourceSearch}
                  onChange={(e) => setResourceSearch(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={resourceFilter} onValueChange={setResourceFilter}>
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
              <span className="whitespace-nowrap text-sm text-muted-foreground">
                {resources.length} resources
              </span>
            </div>

            {/* Resource list */}
            <div className="flex flex-col gap-2">
              {filteredResources.length > 0 ? (
                filteredResources.map((resource) => {
                  const {
                    icon: Icon,
                    bg,
                    color
                  } = getResourceIcon(resource.iconType);
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
                          <span className="text-sm font-medium">
                            {resource.name}
                          </span>
                          <span className="rounded bg-gray-100 px-2 py-0.5 font-mono text-xs text-gray-600">
                            {resource.mime}
                          </span>
                        </div>
                        <p className="mb-1 truncate font-mono text-sm text-gray-400">
                          {resource.uri}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
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
                          size="icon-sm"
                          className="text-muted-foreground hover:text-foreground"
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
                    <FolderOpen className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <p className="mb-1 font-medium">No resources available</p>
                  <p className="text-sm text-muted-foreground">
                    Resources will appear after a successful connection test
                  </p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="assignments" className="mt-6">
            {/* Sub-tabs (pill style) */}
            <div className="mb-6 inline-flex items-center gap-1 rounded-full bg-muted p-1">
              <button
                onClick={() => setAssignmentSubTab("assistants")}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  assignmentSubTab === "assistants"
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Assistants ({assignedAssistants.length})
              </button>
              <button
                onClick={() => setAssignmentSubTab("agents")}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  assignmentSubTab === "agents"
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Agents ({assignedAgents.length})
              </button>
            </div>

            {assignmentSubTab === "assistants" && (
              <div className="flex flex-col gap-6">
                {/* Assigned Assistants */}
                <div>
                  <p className="mb-3 text-xs uppercase tracking-wide text-muted-foreground">
                    Assigned Assistants
                  </p>
                  <div className="flex flex-col gap-2">
                    {assignedAssistants.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 rounded-md border bg-card p-3"
                      >
                        <div
                          className={`h-8 w-8 rounded-full ${item.color} flex items-center justify-center text-xs font-bold text-white`}
                        >
                          {item.initials}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-red-200 text-red-500 hover:bg-red-50 hover:text-red-600"
                        >
                          <X className="mr-1 h-3 w-3" />
                          Remove
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t" />

                {/* Available Assistants */}
                <div>
                  <p className="mb-1 text-xs uppercase tracking-wide text-muted-foreground">
                    Available Assistants
                  </p>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Add this MCP server to more assistants
                  </p>
                  <div className="flex flex-col gap-2">
                    {availableAssistants.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 rounded-md border bg-card p-3"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-xs font-bold text-gray-500">
                          {item.initials}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-blue-200 text-blue-500 hover:bg-blue-50 hover:text-blue-600"
                        >
                          <Plus className="mr-1 h-3 w-3" />
                          Assign
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {assignmentSubTab === "agents" && (
              <div className="flex flex-col gap-6">
                {/* Assigned Agents */}
                <div>
                  <p className="mb-3 text-xs uppercase tracking-wide text-muted-foreground">
                    Assigned Agents
                  </p>
                  <div className="flex flex-col gap-2">
                    {assignedAgents.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 rounded-md border bg-card p-3"
                      >
                        <div
                          className={`h-8 w-8 rounded-full ${item.color} flex items-center justify-center`}
                        >
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-red-200 text-red-500 hover:bg-red-50 hover:text-red-600"
                        >
                          <X className="mr-1 h-3 w-3" />
                          Remove
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t" />

                {/* Available Agents */}
                <div>
                  <p className="mb-1 text-xs uppercase tracking-wide text-muted-foreground">
                    Available Agents
                  </p>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Add this MCP server to more agents
                  </p>
                  <div className="flex flex-col gap-2">
                    {availableAgents.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 rounded-md border bg-card p-3"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                          <Bot className="h-4 w-4 text-gray-500" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-blue-200 text-blue-500 hover:bg-blue-50 hover:text-blue-600"
                        >
                          <Plus className="mr-1 h-3 w-3" />
                          Assign
                        </Button>
                      </div>
                    ))}
                  </div>
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
