import { createContext } from "react";
import { Editor as EditorSDK, EditorStore } from "@video-editor/core";


// type 定义一个简单的reducer,修改state
type EditorStateAction = {
    type: "setState",
    payload: EditorStateDataType
};
type EditorStateDataType = Record<string, any>
export function ReducerEditorStateReducer(state: EditorStateDataType, action: EditorStateAction) {
    switch (action.type) {
        case "setState":
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

//  PINIA JOTAI
export class ReducerEditorState extends EditorStore {
    private dispatch: React.Dispatch<EditorStateAction>;
    private state: Record<string, any>
    constructor(
        state: Record<string, any>,
        dispatch: React.Dispatch<EditorStateAction>
    ) {
        super();
        this.state = state
        this.dispatch = dispatch;
    }
    setState(data: Record<string, any>): void {
        this.dispatch({
            type: "setState",
            payload: data
        })
        this.state = {
            ...this.state,
            ...data
        }
    }
    getState(): Record<string, any> {
        return this.state.value
    }
    syncState(state: EditorStateDataType) {
        this.state = state
    }
}

export const EditorContext = createContext<EditorSDK | null>(null);
