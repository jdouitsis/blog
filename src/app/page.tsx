import PostData from "@/app/PostData";
import LineText from "@/components/LineText";
import { getPosts } from "@/utils/readFiles";
import Image from "next/image";

export default async function Home() {
  let files = getPosts();

  return (
    <main className="flex flex-col items-center justify-between pt-5 pb-24 px-14">
      <div className="flex flex-col items-center w-full">
        <LineText>
          <h1 className="mx-5 text-xl font-bold">James Douitsis Blog</h1>
        </LineText>
        <div className="flex flex-col items-center my-5">
          <Image
            src="/main-pic.png"
            width={0}
            height={0}
            className="w-auto h-56"
            sizes="100vw"
            alt=""
          />
          <p className="max-w-2xl text-center opacity-50">
            Welcome to my blog! You&apos;ll get articles that range from
            Christianity to basic web development and everything in-between,
            might even throw some cooking recipes in here at some point if I
            feel like it!
          </p>
        </div>
      </div>
      <PostData files={files} />
    </main>
  );
}
