import BlogList from "@/components/BlogList";
import { readPosts } from "@/utils/readFiles";

export default async function Home() {
  let files = readPosts();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <p>Welcome to my blog!</p>
      <div>Main list of files</div>
      <BlogList posts={files} />
    </main>
  );
}
