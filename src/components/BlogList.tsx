"use client";

import { BlogPost } from "@/app/post/[slug]/page";
import PostCard from "@/components/PostCard";
import { useRouter } from "next/navigation";

type BlogList = {
  posts: Array<BlogPost>;
};

export default function BlogList({ posts }: BlogList) {
  const router = useRouter();

  const handlePostCardClick = (name: string) => {
    router.push(name);
  };

  return (
    <div className="w-full mt-10">
      <p>List of posts!</p>
      <hr className="my-3" />
      {posts.map((post) => {
        return (
          <PostCard key={post.slug} onClick={handlePostCardClick} post={post} />
        );
      })}
    </div>
  );
}
