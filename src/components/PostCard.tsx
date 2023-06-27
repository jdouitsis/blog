import { BlogPost } from "@/app/post/[postSlug]/page";
import Tag from "@/components/Tag";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

type PostCardProps = {
  post: BlogPost;
};
function PostCard({ post }: PostCardProps) {
  return (
    <Link
      className="flex w-full h-40 my-5 list-none bg-gray-100 border border-gray-200 shadow-sm cursor-pointer first-letter:overflow-hidden rounded-2xl"
      href={`post/${post.postSlug}`}
      key={post.filename}
    >
      <Image
        src={post.data.hero}
        height={0}
        width={0}
        alt="Hero image"
        sizes="100vw"
        className="object-cover w-40 h-full mr-5"
      />
      <div className="flex flex-col w-full my-3">
        <div className="flex flex-row items-center justify-between w-full">
          <h2 className="mb-1 text-lg font-semibold">{post.data.title}</h2>
          <p className="mr-5 text-xs italic opacity-75">
            {moment(post.data.date).format("MMM DD, YYYY")}
          </p>
        </div>
        <p className="flex-grow text-sm">{post.data.description}</p>
        <div className="flex w-full ">
          {post.data.tags.map((tag: string) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </Link>
  );
}
export default PostCard;
