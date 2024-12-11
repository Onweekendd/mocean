import { createContext } from "react";
import { Editor as EditorSDK } from "@video-editor/core";

export const EditorContext = createContext<EditorSDK | null>(null);
