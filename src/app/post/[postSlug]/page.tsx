import { readPostByName, getPosts } from "@/utils/readFiles";
import "./page.css";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Tag from "@/components/Tag";
import LineText from "@/components/LineText";
import Link from "next/link";
import moment from "moment";

export type BlogPost = {
  filename: string;
  postSlug: string;
  content: string;
  data: BlogPostData;
};

type BlogPostData = {
  hero: string;
  title: string;
  series: string;
  date: Date;
  tags: string[];
  description: string;
};

export default function BlogPost({ params }: { params: BlogPost }) {
  let post = readPostByName(params.postSlug);
  console.log(post.data.date);

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
          <p className="mx-5 my-5 text-xs">
            {moment(new Date(post.data.date)).format("YYYY-MM-DD")}
          </p>
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
      <div className="flex flex-col items-center justify-center w-full h-40 max-w-3xl px-4 mt-20 bg-gray-100">
        <p>Thank you for reading!</p>
        <div className="mt-4 font-bold">
          <Link href="/">Back</Link>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return getPosts();
}
