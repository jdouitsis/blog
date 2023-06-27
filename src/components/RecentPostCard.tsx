import { BlogPost } from "@/app/post/[postSlug]/page";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

type RecentPostCardProps = {
  file: BlogPost;
};

function RecentPostCard({ file }: RecentPostCardProps) {
  return (
    <Link
      href={`post/${file.postSlug}`}
      className="mx-auto overflow-hidden border border-gray-200 cursor-pointer rounded-2xl lg:w-72 h-60"
    >
      <Image
        src={file.data.hero}
        height={0}
        width={0}
        sizes="100vw"
        alt=""
        className="w-full h-1/2"
      />
      <div className="flex flex-col items-center pt-2">
        <h3 className="text-lg font-bold">{file.data.title}</h3>
        <p className="py-2 text-xs italic">
          {moment(file.data.date).format("MMMM DD, YYYY")}
        </p>
        <p className="px-2 text-sm text-center">{file.data.description}</p>
      </div>
    </Link>
  );
}
export default RecentPostCard;
