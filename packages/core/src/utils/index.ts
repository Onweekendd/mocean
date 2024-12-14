export function matchVideoBaseInfo(videoInfo: string): {
  width: number;
  height: number;
  frameRate: number;
  duration: number;
  createTime: Date;
} {
  const videoInfoMatch = videoInfo.match(
    /Stream.*Video:.*?,.*?(\d+)x(\d+).*?(\d+(?:\.\d+)?)\s+fps/
  );
  const width = videoInfoMatch ? parseInt(videoInfoMatch[1] ?? "0") : 0;
  const height = videoInfoMatch ? parseInt(videoInfoMatch[2] ?? "0") : 0;
  const frameRate = videoInfoMatch ? parseFloat(videoInfoMatch[3] ?? "0") : 0;

  const videoDurationMatch = videoInfo.match(
    /Duration: (\d{2}):(\d{2}):(\d{2}.\d{2})/
  );
  const duration = videoDurationMatch
    ? parseInt(videoDurationMatch[1] ?? "0") * 3600 +
      parseInt(videoDurationMatch[2] ?? "0") * 60 +
      parseFloat(videoDurationMatch[3] ?? "0")
    : 0;

  const createTimeMatch = videoInfo.match(
    /creation_time\s*:\s*(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.?\d*Z)/
  );
  const createTime = createTimeMatch
    ? new Date(createTimeMatch[1] ?? "0")
    : new Date();

  return { width, height, frameRate, duration, createTime };
}
