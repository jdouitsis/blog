import { BlogPost } from "@/app/post/[postSlug]/page";
import LineText from "@/components/LineText";
import RecentPostCard from "@/components/RecentPostCard";

type RecentPostsProps = {
  files: BlogPost[];
};
function RecentPosts({ files }: RecentPostsProps) {
  return (
    <div className="flex-col hidden w-full lg:flex">
      <LineText>
        <h3 className="mx-5 text-sm font-bold">Recent Posts</h3>
      </LineText>
      <div className="flex justify-around my-5">
        {files.slice(0, 3).map((file) => (
          <RecentPostCard key={file.filename} file={file} />
        ))}
      </div>
    </div>
  );
}
export default RecentPosts;
