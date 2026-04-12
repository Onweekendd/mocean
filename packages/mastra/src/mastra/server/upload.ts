import { randomUUID } from "crypto";
import { mkdir, readFile, unlink, writeFile } from "fs/promises";
import { extname, join } from "path";

import { prisma } from "./index";

const WORKSPACE_DIR = process.env.MASTRA_WORKSPACE_PATH ?? "./workspace";
const UPLOADS_DIR = join(WORKSPACE_DIR, "uploads");

/** 根据扩展名返回 MIME 类型 */
function getMimeType(ext: string): string {
  const map: Record<string, string> = {
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    gif: "image/gif",
    webp: "image/webp",
    svg: "image/svg+xml",
    pdf: "application/pdf",
    txt: "text/plain",
    md: "text/markdown",
    json: "application/json"
  };
  return map[ext.toLowerCase()] ?? "application/octet-stream";
}

/**
 * 保存上传文件到本地磁盘，并在 FileType 表中创建记录
 * @param file - 上传的 File 对象（Hono/Web API）
 * @param category - 分类子目录（默认 "general"）
 */
export async function saveUploadedFile(
  file: File,
  category: string = "general"
) {
  const buffer = Buffer.from(await file.arrayBuffer());

  const rawExt = extname(file.name); // e.g. ".png"
  const ext = rawExt ? rawExt.slice(1).toLowerCase() : "bin"; // e.g. "png"
  const id = randomUUID();
  const filename = `${id}.${ext}`;

  const categoryDir = join(UPLOADS_DIR, category);
  const filePath = join(categoryDir, filename);

  await mkdir(categoryDir, { recursive: true });
  await writeFile(filePath, buffer);

  const record = await prisma.fileType.create({
    data: {
      id,
      name: filename,
      origin_name: file.name,
      path: filePath,
      size: buffer.length,
      ext,
      type: category,
      count: 0
    }
  });

  return record;
}

/** 根据 fileId 查找记录 */
export async function getFileById(fileId: string) {
  return prisma.fileType.findUnique({ where: { id: fileId } });
}

/** 根据 fileId 读取文件内容与元信息 */
export async function readUploadedFile(fileId: string) {
  const record = await getFileById(fileId);
  if (!record) return null;

  const data = await readFile(record.path);
  return { record, data, mimeType: getMimeType(record.ext) };
}

/** 根据 fileId 删除文件与记录 */
export async function deleteUploadedFile(fileId: string) {
  const record = await getFileById(fileId);
  if (!record) throw new Error("文件不存在");

  try {
    await unlink(record.path);
  } catch {
    // 文件可能已经不存在，忽略
  }

  return prisma.fileType.delete({ where: { id: fileId } });
}
