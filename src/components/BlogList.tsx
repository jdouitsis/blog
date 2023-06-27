"use client";
import { BlogPost } from "@/app/post/[postSlug]/page";
import PostCard from "@/components/PostCard";

type BlogList = {
  posts: Array<BlogPost>;
};

export default function BlogList({ posts }: BlogList) {
  return (
    <div className="w-full">
      <div className="flex flex-col w-full max-w-3xl mx-auto">
        {posts.map((post) => {
          return <PostCard key={post.postSlug} post={post} />;
        })}
        {posts.length == 0 && (
          <div className="flex items-center justify-center w-full h-64">
            There are no articles that match your search criteria
          </div>
        )}
      </div>
    </div>
  );
}
