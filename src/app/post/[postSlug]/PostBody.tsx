"use client";

import { BlogPost } from "@/app/post/[postSlug]/page";
import LineText from "@/components/LineText";
import Tag from "@/components/Tag";
import Image from "next/image";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";

type PostBodyProps = { post: BlogPost };

function PostBody({ post }: PostBodyProps) {
  let router = useRouter();

  return (
    <div className="flex flex-col items-center justify-between px-24 pt-5 pb-24">
      <LineText>
        <h1 className="mx-5 text-xl font-bold">James Douitsis Blog</h1>
      </LineText>
      <div className="w-full max-w-3xl px-4 pt-8 mx-auto">
        <Image
          alt="Hero image"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full bg-cover rounded-t-lg hero"
          src={post.data.hero}
        />
        <LineText>
          <p className="mx-5 text-xs">May 1, 2023</p>
        </LineText>

        <h1 className="mt-5 mb-3 text-4xl font-bold">{post.data.title}</h1>
        <div className="flex w-full">
          {post.data.tags.map((tag: string) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      </div>

      <div className="post-container">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
      <div>
        <button onClick={() => router.push("/")} className="my-20">
          Back
        </button>
      </div>
    </div>
  );
}
export default PostBody;
