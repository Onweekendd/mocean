import React from "react";

import type { BaseElement } from "@video-editor/core";
import { Clip } from "@video-editor/core/dist/interfaces/Clip";

interface VideoSourceProviderProps {
  videoClips: Array<Clip<BaseElement>>;
  onElementUpdate: (id: string, element: { element: HTMLVideoElement }) => void;
}

export const VideoSourceProvider: React.FC<VideoSourceProviderProps> = ({
  videoClips,
  onElementUpdate,
}) => {
  return (
    <>
      {videoClips.map(
        (videoClip) =>
          videoClip.resource && (
            <video
              key={videoClip.id}
              ref={(node) => {
                if (node && videoClip.resource) {
                  onElementUpdate(videoClip.id, { element: node });
                }
              }}
              src={videoClip.resource.fileUrl}
              hidden={true}
            />
          ),
      )}
    </>
  );
};
