import { useState } from "react";

import { useForm } from "react-hook-form";

import { useMcpServerActions } from "./useMcpSWR";

interface KeyValuePair {
  id: string;
  key: string;
  value: string;
}

interface FormData {
  serverName: string;
  serverType: "stdio" | "sse" | "streamableHttp" | "inMemory";
  command: string;
  baseUrl: string;
  args: KeyValuePair[];
  envVars: KeyValuePair[];
  timeout: string;
  tags: string;
}

interface UseAddServerFormProps {
  onOpenChange: (open: boolean) => void;
}

type ParsedServerConfig = {
  name?: string;
  type?: "stdio" | "sse" | "streamableHttp" | "inMemory";
  command?: string;
  baseUrl?: string;
  args?: string[];
  env?: Record<string, string>;
};

function parseMcpJson(input: string): ParsedServerConfig {
  const json = JSON.parse(input.trim());

  // Claude Desktop format: { "mcpServers": { "name": { ... } } }
  if (json.mcpServers && typeof json.mcpServers === "object") {
    const entries = Object.entries(json.mcpServers);
    if (entries.length === 0) throw new Error("mcpServers 为空");
    const [name, config] = entries[0] as [string, Record<string, unknown>];
    const result: ParsedServerConfig = { name };

    if (typeof config.command === "string") {
      result.type = "stdio";
      result.command = config.command;
    }
    if (typeof config.url === "string") {
      result.baseUrl = config.url;
      result.type = config.url.includes("/sse") ? "sse" : "streamableHttp";
    }
    if (Array.isArray(config.args)) {
      result.args = config.args.map(String);
    }
    if (config.env && typeof config.env === "object") {
      result.env = Object.fromEntries(
        Object.entries(config.env).map(([k, v]) => [k, String(v)])
      );
    }
    return result;
  }

  // Single server config: { "command": "...", ... }
  if (typeof json === "object" && !Array.isArray(json)) {
    const result: ParsedServerConfig = {};
    if (typeof json.command === "string") {
      result.type = "stdio";
      result.command = json.command;
    }
    if (typeof json.url === "string") {
      result.baseUrl = json.url;
      result.type = json.url.includes("/sse") ? "sse" : "streamableHttp";
    }
    if (Array.isArray(json.args)) {
      result.args = json.args.map(String);
    }
    if (json.env && typeof json.env === "object") {
      result.env = Object.fromEntries(
        Object.entries(json.env).map(([k, v]) => [k, String(v)])
      );
    }
    if (typeof json.name === "string") {
      result.name = json.name;
    }
    return result;
  }

  throw new Error("无法识别的 JSON 格式");
}

export function useAddServerForm({ onOpenChange }: UseAddServerFormProps) {
  const [showPassword, setShowPassword] = useState<Record<string, boolean>>({});
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [jsonInput, setJsonInput] = useState("");
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [showJsonView, setShowJsonView] = useState(false);
  const { create } = useMcpServerActions();

  const form = useForm<FormData>({
    defaultValues: {
      serverName: "",
      serverType: "stdio",
      command: "",
      baseUrl: "",
      args: [],
      envVars: [],
      timeout: "30",
      tags: ""
    },
    mode: "onBlur"
  });

  const serverType = form.watch("serverType");
  const args = form.watch("args");
  const envVars = form.watch("envVars");

  const showBaseUrl = serverType === "sse" || serverType === "streamableHttp";
  const showCommand = serverType === "stdio";

  const validateServerName = (value: string) => {
    if (!value.trim()) {
      return "请输入服务名称";
    }
    return true;
  };

  const validateCommand = (value: string) => {
    if (serverType === "stdio" && !value.trim()) {
      return "stdio 类型必须填写命令";
    }
    return true;
  };

  const validateBaseUrl = (value: string) => {
    if (showBaseUrl && !value.trim()) {
      return "此服务类型必须填写服务地址";
    }
    return true;
  };

  const onAddArg = () => {
    const currentArgs = form.getValues("args");
    form.setValue("args", [
      ...currentArgs,
      { id: Date.now().toString(), key: "", value: "" }
    ]);
  };

  const onRemoveArg = (id: string) => {
    const currentArgs = form.getValues("args");
    form.setValue(
      "args",
      currentArgs.filter((arg) => arg.id !== id)
    );
  };

  const onArgChange = (id: string, field: "key" | "value", value: string) => {
    const currentArgs = form.getValues("args");
    form.setValue(
      "args",
      currentArgs.map((arg) =>
        arg.id === id ? { ...arg, [field]: value } : arg
      )
    );
  };

  const onAddEnvVar = () => {
    const currentEnvVars = form.getValues("envVars");
    form.setValue("envVars", [
      ...currentEnvVars,
      { id: Date.now().toString(), key: "", value: "" }
    ]);
  };

  const onRemoveEnvVar = (id: string) => {
    const currentEnvVars = form.getValues("envVars");
    form.setValue(
      "envVars",
      currentEnvVars.filter((v) => v.id !== id)
    );
  };

  const onEnvVarChange = (
    id: string,
    field: "key" | "value",
    value: string
  ) => {
    const currentEnvVars = form.getValues("envVars");
    form.setValue(
      "envVars",
      currentEnvVars.map((v) => (v.id === id ? { ...v, [field]: value } : v))
    );
  };

  const togglePasswordVisibility = (id: string) => {
    setShowPassword((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const onParseJson = () => {
    setJsonError(null);
    try {
      const config = parseMcpJson(jsonInput);

      if (config.name) form.setValue("serverName", config.name);
      if (config.type) form.setValue("serverType", config.type);
      if (config.command) form.setValue("command", config.command);
      if (config.baseUrl) form.setValue("baseUrl", config.baseUrl);

      if (config.args && config.args.length > 0) {
        const pairs: { id: string; key: string; value: string }[] = [];
        for (let i = 0; i < config.args.length; i++) {
          const arg = config.args[i];
          const next = config.args[i + 1];
          if (arg && arg.startsWith("-") && next && !next.startsWith("-")) {
            pairs.push({ id: `parsed-arg-${i}`, key: arg, value: next });
            i++;
          } else if (arg) {
            pairs.push({ id: `parsed-arg-${i}`, key: "", value: arg });
          }
        }
        form.setValue("args", pairs);
      }

      if (config.env && Object.keys(config.env).length > 0) {
        form.setValue(
          "envVars",
          Object.entries(config.env).map(([key, value], i) => ({
            id: `parsed-env-${i}`,
            key,
            value
          }))
        );
      }

      setShowJsonView(false);
      setJsonInput("");
    } catch (e) {
      setJsonError(e instanceof Error ? e.message : "JSON 解析失败");
    }
  };

  const onSubmit = async () => {
    const values = form.getValues();

    // Validate server name
    if (!values.serverName.trim()) {
      form.setError("serverName", {
        type: "required",
        message: "请输入服务名称"
      });
      return;
    }

    // Validate command for stdio type
    if (values.serverType === "stdio" && !values.command.trim()) {
      form.setError("command", {
        type: "required",
        message: "stdio 类型必须填写命令"
      });
      return;
    }

    // Validate baseUrl for sse and streamableHttp types
    if (
      (values.serverType === "sse" || values.serverType === "streamableHttp") &&
      !values.baseUrl.trim()
    ) {
      form.setError("baseUrl", {
        type: "required",
        message: "此服务类型必须填写服务地址"
      });
      return;
    }

    // Convert args to JSON object
    const argsObj: Record<string, string> = {};
    for (const arg of values.args) {
      if (arg.key.trim()) {
        argsObj[arg.key] = arg.value;
      }
    }

    // Convert envVars to JSON object
    const envObj: Record<string, string> = {};
    for (const envVar of values.envVars) {
      if (envVar.key.trim()) {
        envObj[envVar.key] = envVar.value;
      }
    }

    await create({
      name: values.serverName.trim(),
      isActive: true,
      type: values.serverType,
      command: values.command.trim() || undefined,
      baseUrl: values.baseUrl.trim() || undefined,
      argsJson: Object.keys(argsObj).length > 0 ? argsObj : undefined,
      env: Object.keys(envObj).length > 0 ? envObj : undefined,
      tagsJson: values.tags.trim()
        ? values.tags
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean)
        : undefined,
      timeout: values.timeout ? parseInt(values.timeout, 10) : undefined
    });

    onOpenChange(false);
  };

  return {
    // Form
    form,
    // Form state
    errors: form.formState.errors,
    // Validators
    validateServerName,
    validateCommand,
    validateBaseUrl,
    // State
    showPassword,
    advancedOpen,
    setAdvancedOpen,
    // Computed
    serverType,
    args,
    envVars,
    showBaseUrl,
    showCommand,
    // JSON parse
    showJsonView,
    setShowJsonView,
    jsonInput,
    setJsonInput,
    jsonError,
    onParseJson,
    // Handlers
    onAddArg,
    onRemoveArg,
    onArgChange,
    onAddEnvVar,
    onRemoveEnvVar,
    onEnvVarChange,
    togglePasswordVisibility,
    onSubmit
  };
}

export type { FormData, KeyValuePair };
