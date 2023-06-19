import { readPostByName, readPosts } from "@/utils/readFiles";
import "./page.css";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

export type BlogPost = {
  filename: string;
  slug: string;
  content: string;
  data: any;
};

export default function BlogPost({ params }: { params: BlogPost }) {
  let post = readPostByName(params.slug);

  return (
    <div className="flex flex-col items-center justify-between p-24 ">
      <div className="container">
        <Image
          alt=""
          width="0"
          height="0"
          sizes="100vw"
          className="w-full bg-cover hero"
          src={post.data.hero}
        />
        <div className="flex w-full">
          {post.data.tags.map((tag: string) => (
            <button
              key={tag}
              className="px-2 mr-2 text-xs bg-green-200 rounded-md"
            >
              {tag}
            </button>
          ))}
        </div>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return readPosts();
}
