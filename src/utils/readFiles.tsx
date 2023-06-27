import { dirname, join } from "path";
import fs from "fs";
import matter from "gray-matter";
import { fileURLToPath } from "url";
import { BlogPost } from "@/app/post/[postSlug]/page";

const postsDir = join(dirname(fileURLToPath(import.meta.url)), "../posts");
const delimiter = "__";
const extension = "mdx";

export function sanitiesFilename(filename: string): string {
  return filename.slice(0, -extension.length - 1).replace(/ /g, delimiter);
}

export function desensitizeName(name: string): string {
  let reg = new RegExp(delimiter, "g");
  return `${name.replace(reg, " ")}.${extension}`;
}

export function readPostByFilename(filename: string): BlogPost {
  let matterResults = matter(fs.readFileSync(join(postsDir, filename), "utf8"));
  return {
    content: matterResults.content,
    data: matterResults.data,
    filename,
    postSlug: sanitiesFilename(filename),
  };
}

export function readPostByName(name: string): BlogPost {
  return readPostByFilename(desensitizeName(name));
}

export function getPosts(): BlogPost[] {
  return fs.readdirSync(postsDir).map(readPostByFilename);
}
