import {
  LocalFilesystem,
  LocalSandbox,
  Workspace
} from "@mastra/core/workspace";

const WORKSPACE_DIR = process.env.MASTRA_WORKSPACE_PATH ?? "./workspace";

export const workspace = new Workspace({
  filesystem: new LocalFilesystem({ basePath: WORKSPACE_DIR }),
  sandbox: new LocalSandbox({ workingDirectory: WORKSPACE_DIR })
});
