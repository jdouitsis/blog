import { BlogPost } from "@/app/post/[slug]/page";

type PostCardProps = {
  post: BlogPost;
  onClick: (name: string) => void;
};
function PostCard({ onClick, post }: PostCardProps) {
  const handleClick = () => onClick(`post/${post.slug}`);

  return (
    <li
      className="h-40 my-5 list-none bg-gray-300 rounded-md cursor-pointer"
      onClick={handleClick}
      key={post.filename}
    >
      {post.slug}
    </li>
  );
}
export default PostCard;
