declare module "@webav/mp4box.js" {
  /**
   * 媒体轨道的基本信息接口
   */
  export interface MP4MediaTrack {
    /** @description 轨道ID，用于唯一标识媒体轨道 */
    id: number;

    /** @description 轨道创建时间 */
    created: Date;

    /** @description 轨道最后修改时间 */
    modified: Date;

    /** @description 在整个影片时间线上的持续时间 */
    movie_duration: number;

    /** @description 轨道的层级，用于确定轨道的叠加顺序 */
    layer: number;

    /** @description 备选轨道组ID，用于切换不同语言或视角的轨道 */
    alternate_group: number;

    /** @description 音量大小，1.0表示正常音量 */
    volume: number;

    /** @description 轨道的显示宽度 */
    track_width: number;

    /** @description 轨道的显示高度 */
    track_height: number;

    /** @description 时间刻度，表示一秒钟包含的时间单位数 */
    timescale: number;

    /** @description 轨道的实际持续时间，以timescale为单位 */
    duration: number;

    /** @description 比特率，表示每秒传输的比特数 */
    bitrate: number;

    /** @description 编解码器标识符，如 'avc1.64001e' 表示H.264编码 */
    codec: string;

    /** @description 轨道使用的语言代码，遵循ISO 639-2标准 */
    language: string;

    /** @description 采样数量，即视频帧数或音频采样数 */
    nb_samples: number;
  }

  /**
   * 视频轨道特有的信息接口，继承自MP4MediaTrack
   */
  export interface MP4VideoTrack extends MP4MediaTrack {
    /** @description 视频相关的具体参数 */
    video: {
      /** @description 视频原始宽度，以像素为单位 */
      width: number;

      /** @description 视频原始高度，以像素为单位 */
      height: number;
    };
  }

  /**
   * 音频轨道特有的信息接口，继承自MP4MediaTrack
   */
  export interface MP4AudioTrack extends MP4MediaTrack {
    /** @description 音频相关的具体参数 */
    audio: {
      /** @description 采样率，表示每秒采样次数，如44100Hz */
      sample_rate: number;

      /** @description 声道数量，如2表示立体声 */
      channel_count: number;

      /** @description 采样位深，表示每个采样的比特数，如16表示16bit */
      sample_size?: number;
    };
  }

  /**
   * MP4文件的整体信息接口
   */
  export interface MP4Info {
    /** @description 视频总时长，以timescale为单位 */
    duration: number;

    /** @description 时间刻度，表示一秒钟包含的时间单位数 */
    timescale: number;

    /** @description 分片持续时间，用于流媒体传输 */
    fragment_duration: number;

    /** @description 是否为分片MP4 */
    isFragmented: boolean;

    /** @description 是否为渐进式下载MP4 */
    isProgressive: boolean;

    /** @description 是否包含初始对象描述符 */
    hasIOD: boolean;

    /** @description 文件品牌标识符列表，如'isom'、'mp42'等 */
    brands: string[];

    /** @description 文件创建时间 */
    created: Date;

    /** @description 文件最后修改时间 */
    modified: Date;

    /** @description 所有轨道信息数组 */
    tracks: Array<MP4VideoTrack | MP4AudioTrack>;

    /** @description 视频轨道信息数组 */
    videoTracks: MP4VideoTrack[];

    /** @description 音频轨道信息数组 */
    audioTracks: MP4AudioTrack[];
  }

  /** @description MP4文件缓冲区类型，扩展了ArrayBuffer，添加了文件起始位置信息 */
  export type MP4ArrayBuffer = ArrayBuffer & { fileStart: number };

  /** @description 数据流操作类，用于处理二进制数据的读写 */
  const DataStream: {
    /** @description 大端字节序标识 */
    BIG_ENDIAN: unknown;

    /** @description 字节序结束标识 */
    END_ENDIAN: unknown;

    prototype: DataStream;
    new (
      size?: number | ArrayBufferView,
      byteOffset?: number,
      // @ts-expect-error
      endianness?: DataStream.BIG_ENDIAN | DataStream.END_ENDIAN,
    ): DataStream;
  };

  /** @description 数据流接口定义 */
  interface DataStream {
    /** @description 底层的ArrayBuffer数据 */
    buffer: ArrayBuffer;

    /** @description 字节序类型 */
    endianness: unknown;
  }

  /**
   * 视频轨道配置选项接口
   */
  export interface VideoTrackOpts {
    /** @description 时间刻度，表示一秒钟包含的时间单位数 */
    timescale: number;

    /** @description 视频时长 */
    duration?: number;

    /** @description 视频编码类型，如'avc1'表示H.264 */
    type?: string;

    /** @description 视频宽度，以像素为单位 */
    width: number;

    /** @description 视频高度，以像素为单位 */
    height: number;

    /** @description 文件品牌标识符列表 */
    brands: string[];

    /** @description AVC编解码器配置盒子数组 */
    description_boxes?: AVCCBox[];

    /** @description AVC解码器配置记录，包含SPS和PPS等参数 */
    avcDecoderConfigRecord?: AllowSharedBufferSource | undefined | null;
  }

  /**
   * 音频轨道配置选项接口
   */
  export interface AudioTrackOpts {
    /** @description 时间刻度，表示一秒钟包含的时间单位数 */
    timescale: number;

    /** @description 媒体时长 */
    media_duration?: number;

    /** @description 音频时长 */
    duration?: number;

    /** @description 采样率，如44100Hz */
    samplerate: number;

    /** @description 声道数量，如2表示立体声 */
    channel_count: number;

    /** @description 采样位深，如16表示16bit */
    samplesize?: number;

    /** @description 音频描述信息 */
    description?: ESDSBoxParser;

    /** @description 处理器类型标识符 */
    hdlr: string;

    /** @description 音频编码类型，如'mp4a'表示AAC */
    type: string;
  }

  /**
   * 采样配置选项接口
   */
  export interface SampleOpts {
    /** @description 采样持续时间 */
    duration: number;

    /** @description 解码时间戳(Decoding Time Stamp) */
    dts?: number;

    /** @description 合成时间戳(Composition Time Stamp) */
    cts: number;

    /** @description 采样描述索引 */
    sample_description_index?: number;

    /** @description 是否为同步采样(关键帧) */
    is_sync: boolean;

    /** @description 采样描述信息 */
    description?: MP4ABoxParser | AVC1BoxParser | HVCBoxParser;
  }

  /**
   * MP4采样数据接口
   */
  export interface MP4Sample {
    /** @description 轨道ID */
    track_id: number;

    /** @description 采样描述信息 */
    description: MP4ABoxParser | AVC1BoxParser | HVCBoxParser;

    /** @description 是否为随机访问点(Random Access Point) */
    is_rap: boolean;

    /** @description 是否为同步采样(关键帧) */
    is_sync: boolean;

    /** @description 时间刻度 */
    timescale: number;

    /** @description 解码时间戳 */
    dts: number;

    /** @description 合成时间戳 */
    cts: number;

    /** @description 采样持续时间 */
    duration: number;

    /** @description 数据偏移量 */
    offset: number;

    /** @description 数据大小 */
    size: number;

    /** @description 实际的采样数据 */
    data: Uint8Array;
  }

  /**
   * MP4盒子解析器基础接口
   * MP4文件由一系列盒子(Box)组成，每个盒子包含特定的媒体信息
   */
  interface BoxParser {
    /** @description 子盒子数组 */
    boxes: BoxParser[];

    /** @description 盒子大小（字节） */
    size: number;

    /** @description 盒子头部大小（字节） */
    hdr_size: number;

    /** @description 盒子在文件中的起始位置 */
    start: number;

    /** @description 盒子类型标识符 */
    type: string;

    /** @description 盒子数据 */
    data?: Uint8Array;

    /** @description 将盒子写入数据流 */
    write: (dataStream: DataStream) => void;

    /** @description 从数据流解析盒子内容 */
    parse: (dataStream: DataStream) => void;

    /** @description 添加子盒子 */
    add: (name: string) => BoxParser;

    /** @description 添加条目 */
    addEntry: (value: string, name: string) => BoxParser;
  }

  /**
   * 轨道盒子解析器接口
   * 包含了媒体轨道的所有相关信息
   */
  export interface TrakBoxParser extends BoxParser {
    /** @description 盒子类型为'trak' */
    type: "trak";

    /** @description 轨道的采样数组 */
    samples: MP4Sample[];

    /** @description 下一个要处理的采样索引 */
    nextSample: number;

    /** @description 采样大小（字节） */
    sample_size: number;

    /** @description 所有采样的总持续时间 */
    samples_duration: number;

    /** @description 媒体信息盒子 */
    mdia: MDIABoxParser;

    /** @description 轨道头部盒子 */
    tkhd: TKHDBoxParser;
  }

  /**
   * 媒体数据盒子解析器接口
   * 存储实际的媒体数据
   */
  interface MDATBoxParser extends BoxParser {
    /** @description 盒子类型为'mdat' */
    type: "mdat";

    /** @description 媒体数据 */
    data: Uint8Array;
  }

  /**
   * 影片片段盒子解析器接口
   * 用于流媒体传输中的视频片段
   */
  interface MOOFBoxParser extends BoxParser {
    /** @description 盒子类型为'moof' */
    type: "moof";
  }

  /**
   * 媒体信息盒子解析器接口
   * 包含媒体的通用信息
   */
  interface MDIABoxParser extends BoxParser {
    /** @description 盒子类型为'mdia' */
    type: "mdia";

    /** @description 媒体信息盒子 */
    minf: MINFBoxParser;
  }

  /**
   * 媒体信息盒子解析器接口
   * 存储媒体类型特定的信息
   */
  interface MINFBoxParser extends BoxParser {
    /** @description 盒子类型为'minf' */
    type: "minf";

    /** @description 采样表盒子 */
    stbl: STBLBoxParser;
  }

  /**
   * 采样表盒子解析器接口
   * 包含媒体数据采样的信息
   */
  interface STBLBoxParser extends BoxParser {
    /** @description 盒子类型为'stbl' */
    type: "stbl";

    /** @description 采样描述盒子 */
    stsd: STSDBoxParser;
  }

  /**
   * 基础描述符盒子解析器接口
   * 用于音频编解码器配置
   */
  interface ESDBoxParser extends BoxParser {
    /** @description 描述符标签 */
    tag: number;

    /** @description 解码器配置描述符数组 */
    descs: [DecoderConfigDescriptor, SLConfigDescriptor];
  }

  /**
   * 解码器配置描述符接口
   */
  interface DecoderConfigDescriptor {
    /** @description 特定解码器描述符数组 */
    descs: [DecoderSpecificInfo] | [];
  }

  /**
   * 解码器特定信息接口
   */
  interface DecoderSpecificInfo {
    /** @description 解码器配置数据 */
    data: Uint8ArrayBuffer;
  }

  /**
   * SL配置描述符接口
   * 用于同步层配置
   */
  interface SLConfigDescriptor {
    /** @description 配置数据 */
    data: Uint8ArrayBuffer;
  }

  /**
   * 基本流描述符盒子解析器接口
   * 包含音频编解码器配置信息
   */
  export interface ESDSBoxParser extends BoxParser {
    /** @description 盒子类型为'esds' */
    type: "esds";

    /** @description 版本号 */
    version: number;

    /** @description 标志位 */
    flags: number;

    /** @description 基本流描述符 */
    esd: ESDBoxParser;

    /** @description 构造函数 */
    new (size: number): ESDSBoxParser;
  }

  /**
   * 影片盒子解析器接口
   * 包含影片的整体信息
   */
  interface MOOVBoxParser extends BoxParser {
    /** @description 盒子类型为'moov' */
    type: "moov";

    /** @description 轨道盒子数组 */
    traks: TrakBoxParser[];

    /** @description 影片头部盒子 */
    mvhd: MVHDBoxParser;
  }

  /**
   * 影片头部盒子解析器接口
   * 包含影片的全局信息
   */
  interface MVHDBoxParser extends BoxParser {
    /** @description 盒子类型为'mvhd' */
    type: "mvhd";

    /** @description 影片总时长 */
    duration: number;

    /** @description 时间刻度 */
    timescale: number;
  }

  /**
   * 轨道头部盒子解析器接口
   * 包含单个轨道的全局信息
   */
  interface TKHDBoxParser extends BoxParser {
    /** @description 盒子类型为'tkhd' */
    type: "tkhd";

    /** @description 轨道ID */
    track_id: number;
  }

  /**
   * 采样描述盒子解析器接口
   * 包含媒体数据格式信息
   */
  type STSDBoxParser = Omit<
    BoxParser & {
      /** @description 盒子类型为'stsd' */
      type: "stsd";

      /** @description 编解码器条目数组 */
      entries: Array<AVC1BoxParser | HVCBoxParser | MP4ABoxParser>;
    },
    "boxes"
  >;

  /**
   * H.264视频编码配置盒子解析器接口
   */
  export interface AVC1BoxParser extends BoxParser {
    /** @description 盒子类型为'avc1' */
    type: "avc1";

    /** @description 配置盒子数组 */
    boxes: AVCCBox[];

    /** @description AVC配置盒子 */
    avcC: AVCCBox;

    /** @description 压缩器名称 */
    compressorname: string;

    /** @description 帧数 */
    frame_count: number;

    /** @description 视频高度 */
    height: number;

    /** @description 盒子大小 */
    size: number;

    /** @description 起始位置 */
    start: number;

    /** @description 视频宽度 */
    width: number;
  }

  /**
   * HEVC(H.265)视频编码配置盒子解析器接口
   */
  export interface HVCBoxParser extends BoxParser {
    /** @description 盒子类型为'hvc1' */
    type: "hvc1";

    /** @description 配置盒子数组 */
    boxes: HVCCBox[];

    /** @description HEVC配置盒子 */
    hvcC: HVCCBox;

    /** @description 压缩器名称 */
    compressorname: string;

    /** @description 帧数 */
    frame_count: number;

    /** @description 视频高度 */
    height: number;

    /** @description 盒子大小 */
    size: number;

    /** @description 起始位置 */
    start: number;

    /** @description 视频宽度 */
    width: number;
  }

  /**
   * AVC(H.264)编解码器配置盒子接口
   */
  interface AVCCBox extends BoxParser {
    /** @description 图像参数集数组 */
    PPS: Array<{ length: number; nalu: Uint8Array }>;

    /** @description 序列参数集数组 */
    SPS: Array<{ length: number; nalu: Uint8Array }>;

    /** @description 盒子类型为'avcC' */
    type: "avcC";
  }

  /**
   * HEVC(H.265)编解码器配置盒子接口
   */
  interface HVCCBox extends BoxParser {
    /** @description 图像参数集数组 */
    PPS: Array<{ length: number; nalu: Uint8Array }>;

    /** @description 序列参数集数组 */
    SPS: Array<{ length: number; nalu: Uint8Array }>;

    /** @description 盒子类型为'hvcC' */
    type: "hvcC";
  }

  /**
   * AAC音频编码配置盒子解析器接口
   */
  export interface MP4ABoxParser extends BoxParser {
    /** @description 盒子类型为'mp4a' */
    type: "mp4a";

    /** @description 声道数 */
    channel_count: number;

    /** @description 采样率 */
    samplerate: number;

    /** @description 采样大小 */
    samplesize: number;

    /** @description 盒子大小 */
    size: number;

    /** @description 起始位置 */
    start: number;

    /** @description 子盒子数组 */
    boxes: [];

    /** @description 基本流描述符盒子 */
    esds?: ESDSBoxParser;

    /** @description 获取编解码器标识符 */
    getCodec: () => string;
  }

  /**
   * MP4文件操作接口
   * 提供了完整的MP4文件解析和处理功能
   */
  export interface MP4File {
    /** @description 所有盒子数组 */
    boxes: BoxParser[];

    /** @description 媒体数据盒子数组 */
    mdats: MDATBoxParser[];

    /** @description 影片片段盒子数组 */
    moofs: MOOFBoxParser[];

    /** @description 影片信息盒子 */
    moov?: MOOVBoxParser;

    /** @description 添加盒子 */
    add: (name: string) => BoxParser;

    /** @description 添加轨道 */
    addTrack: (opts: VideoTrackOpts | AudioTrackOpts) => number;

    /** @description 添加采样数据 */
    addSample: (trackId: number, buf: ArrayBuffer, sample: SampleOpts) => void;

    /** @description 释放已使用的采样 */
    releaseUsedSamples(id: number, usedCount: number): void;

    /** @description 根据ID获取轨道 */
    getTrackById: (id: number) => TrakBoxParser;

    /** @description 设置数据提取选项 */
    setExtractionOptions: (
      id: number,
      user?: unknown,
      opts?: {
        /** @description 要提取的采样数量 */
        nbSamples?: number;
        /** @description 是否对齐到随机访问点 */
        rapAlignement?: boolean;
      },
    ) => void;

    /** @description moov盒子开始解析的回调 */
    onMoovStart?: () => void;

    /** @description 文件解析完成的回调 */
    onReady?: (info: MP4Info) => void;

    /** @description 采样数据就绪的回调 */
    onSamples: (id: number, user: any, samples: MP4Sample[]) => void;

    /** @description 错误处理回调 */
    onError?: (e: string) => void;

    /** @description 追加数据缓冲区 */
    appendBuffer: (data: MP4ArrayBuffer) => number | undefined;

    /** @description 开始解析 */
    start: () => void;

    /** @description 定位到指定时间点 */
    seek: (time: number, useRAP?: boolean) => { offset: number; time: number };

    /** @description 停止解析 */
    stop: () => void;

    /** @description 将数据写入流 */
    write: (ds: DataStream) => void;

    /** @description 刷新缓冲区 */
    flush: () => void;

    /** @description 刷新完成的回调 */
    onFlush?: () => void;
  }

  /**
   * MPEG-4描述符解析器接口
   */
  interface MPEG4DescriptorParser {
    new (): MPEG4DescriptorParser;
    parseOneDescriptor(stream: DataStream): ESDBoxParser;
  }

  /** @description 创建新的MP4文件实例 */
  export function createFile(): MP4File;

  /** @description 默认导出对象 */
  const DefExp: {
    /** @description MP4文件类 */
    MP4File: MP4File;

    /** @description 创建MP4文件的工厂函数 */
    createFile: (keepMdta?: boolean) => MP4File;

    /** @description 盒子解析器 */
    BoxParser: {
      /** @description ESDS盒子解析器 */
      esdsBox: ESDSBoxParser;
    };

    /** @description 数据流类 */
    DataStream: typeof DataStream;

    /** @description MPEG-4描述符解析器 */
    MPEG4DescriptorParser: MPEG4DescriptorParser;

    /** @description 日志工具 */
    Log: {
      /** @description 输出调试信息 */
      debug: () => void;

      /** @description 设置日志级别 */
      setLogLevel: (fn: () => void) => void;
    };
  };

  export default DefExp;
}
