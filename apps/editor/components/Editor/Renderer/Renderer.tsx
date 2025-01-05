import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import type { Image } from "konva/lib/shapes/Image";
import { Image as KonvaImage, Layer, Stage } from "react-konva";

import { VideoClip } from "@video-editor/core";

import { EditorContext } from "..";
import PlayControl from "../components/PlayControl";
import { VideoSourceProvider } from "./provider/VideoSourceProvider";

const Renderer = () => {
  const editor = useContext(EditorContext)!;

  const tracks = editor.state.getTracks();
  const currentTime = editor.state.getCurrentTime();

  const renderVideoClips = useMemo(
    () =>
      tracks
        .map((track) => track.getRenderElementsAtTime(currentTime))
        .flat()
        .filter((element) => element !== null && element instanceof VideoClip),
    [tracks, currentTime],
  );

  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const videoToElement = useRef<
    Map<string, { canvas?: Image; element?: HTMLVideoElement }>
  >(new Map());

  const onVideoPlay = useCallback(
    (videoClip: VideoClip, currentTime: number) => {
      const elements = videoToElement.current.get(videoClip.id);

      if (!elements) return;
      const { element: videoElement, canvas } = elements;

      if (!videoElement || !canvas) {
        return;
      }

      canvas.getLayer()?.batchDraw();
    },
    [],
  );

  useEffect(() => {
    editor.initRenderer({
      width: canvasContainerRef.current?.clientWidth ?? 0,
      height: canvasContainerRef.current?.clientHeight ?? 0,
      onVideoPlay,
    });
  }, [editor, onVideoPlay]);

  useEffect(() => {
    const newMap = new Map<
      string,
      { canvas?: Image; element?: HTMLVideoElement }
    >();

    (renderVideoClips ?? []).forEach((renderVideo) => {
      if (!renderVideo.resource) return;
      if (!videoToElement.current.has(renderVideo.id)) {
        newMap.set(renderVideo.id, {
          canvas: undefined,
          element: undefined,
        });
      } else {
        newMap.set(renderVideo.id, videoToElement.current.get(renderVideo.id)!);
      }
    });

    videoToElement.current = newMap;
  }, [renderVideoClips?.length]);

  const [isPlaying, setIsPlaying] = useState(false);
  const onPlayPause = useCallback(() => {
    if (!isPlaying) {
      renderVideoClips?.forEach((videoClip) => {
        const elements = videoToElement.current.get(videoClip.id);
        if (!elements) return;
        const { element: videoElement } = elements;
        if (videoElement) {
          videoElement.play();
        }
      });
      editor.timeManager.startPlay();
      setIsPlaying(true);
    } else {
      renderVideoClips?.forEach((videoClip) => {
        const elements = videoToElement.current.get(videoClip.id);

        if (!elements) return;
        const { element: videoElement } = elements;
        if (videoElement) {
          videoElement.pause();
        }
      });
      editor.timeManager.stopPlay();
      setIsPlaying(false);
    }
  }, [isPlaying, renderVideoClips]);

  const onElementUpdate = useCallback(
    (id: string, { element }: { element: HTMLVideoElement }) => {
      videoToElement.current.set(id, {
        ...videoToElement.current.get(id),
        element,
      });
    },
    [],
  );

  return (
    <div className="flex h-full w-full flex-col">
      <div className="w-full flex-1" ref={canvasContainerRef}>
        <Stage
          width={canvasContainerRef.current?.clientWidth ?? 0}
          height={canvasContainerRef.current?.clientHeight ?? 0}
        >
          <Layer>
            {renderVideoClips?.map(
              (videoClip) =>
                videoClip.resource && (
                  <KonvaImage
                    key={videoClip.id}
                    x={videoClip.x}
                    y={videoClip.y}
                    width={videoClip.renderWidth}
                    height={videoClip.renderHeight}
                    ref={(node) => {
                      if (node && videoClip.resource) {
                        videoToElement.current.set(videoClip.id, {
                          ...videoToElement.current.get(videoClip.id),
                          canvas: node,
                        });
                      }
                    }}
                    image={videoToElement.current.get(videoClip.id)?.element}
                  />
                ),
            )}
          </Layer>
        </Stage>
      </div>

      <PlayControl isPlaying={isPlaying} onPlayPause={onPlayPause} />

      <VideoSourceProvider
        videoClips={renderVideoClips}
        onElementUpdate={onElementUpdate}
      />
    </div>
  );
};

export default Renderer;
