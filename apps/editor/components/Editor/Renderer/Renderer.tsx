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
    Map<string, { canvas?: Image; imageBitmap?: CanvasImageSource }>
  >(new Map());
  const frameToImageBitmapCache = useRef<Map<number, ImageBitmap>>(new Map());

  const onVideoPlay = useCallback(
    (videoClip: VideoClip, currentTime: number) => {
      const elements = videoToElement.current.get(videoClip.id);
      if (!elements?.canvas) return;

      // 找到当前时间对应的帧
      const currentFrame = videoClip.resource?.videoFrame.find(
        (frame) =>
          frame.timestamp <= currentTime &&
          frame.timestamp + frame.duration > currentTime,
      );

      if (currentFrame) {
        // 更新画布
        elements.canvas.getLayer()?.batchDraw();
      }
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
      { canvas?: Image; element?: CanvasImageSource }
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

  // 处理视频帧的逻辑
  useEffect(() => {
    const processVideoFrame = async (videoClip: VideoClip) => {
      if (!videoClip.resource?.videoFrame) return;

      for (const frame of videoClip.resource.videoFrame) {
        // 检查缓存中是否已有该帧的 ImageBitmap
        if (!frameToImageBitmapCache.current.has(frame.timestamp)) {
          try {
            const imageBitmap = await createImageBitmap(frame.frame);
            frameToImageBitmapCache.current.set(frame.timestamp, imageBitmap);

            // 更新到 KonvaImage
            videoToElement.current.set(videoClip.id, {
              ...videoToElement.current.get(videoClip.id),
              imageBitmap: imageBitmap,
            });
          } catch (error) {
            console.error("Failed to create ImageBitmap:", error);
          } finally {
            // 释放 VideoFrame 资源
            frame.frame.close();
          }
        }
      }
    };

    renderVideoClips.forEach(processVideoFrame);

    // 清理函数
    return () => {
      // 清理缓存的 ImageBitmap
      frameToImageBitmapCache.current.forEach((bitmap) => {
        bitmap.close();
      });
      frameToImageBitmapCache.current.clear();
    };
  }, [renderVideoClips]);

  const [isPlaying, setIsPlaying] = useState(false);
  const onPlayPause = useCallback(() => {
    if (!isPlaying) {
      editor.timeManager.startPlay();
      setIsPlaying(true);
    } else {
      editor.timeManager.stopPlay();
      setIsPlaying(false);
    }
  }, [isPlaying, editor.timeManager]);

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
                    draggable
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
                    image={
                      videoToElement.current.get(videoClip.id)?.imageBitmap
                    }
                  />
                ),
            )}
          </Layer>
        </Stage>
      </div>

      <PlayControl isPlaying={isPlaying} onPlayPause={onPlayPause} />
    </div>
  );
};

export default Renderer;
