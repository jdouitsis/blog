"use client";
import { BlogPost } from "@/app/post/[postSlug]/page";
import BlogList from "@/components/BlogList";
import LineText from "@/components/LineText";
import MainFiltering from "@/components/MainFiltering";
import RecentPosts from "@/components/RecentPosts";
import Image from "next/image";
// import { useParams } from "next/navigation";
// import { useState } from "react";

type ClientPage = {
  files: BlogPost[];
};

export default async function ClientPage({ files }: ClientPage) {
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
      <RecentPosts />
      {/* {searchValue} */}
      {/* <MainFiltering searchValue={searchValue} /> */}
      <BlogList posts={files} />
    </main>
  );
}
