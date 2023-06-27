"use client";
import { BlogPost } from "@/app/post/[postSlug]/page";
import BlogList from "@/components/BlogList";
import MainFiltering from "@/components/MainFiltering";
import RecentPosts from "@/components/RecentPosts";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const getTags = (files: BlogPost[]) => {
  let result = new Set<string>();
  files.forEach((file) => file.data.tags.forEach((tag) => result.add(tag)));
  return Array.from(result);
};

type PostDataProps = { files: BlogPost[] };
function PostData({ files }: PostDataProps) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  // useEffect(() => {
  //   const tagQueries = selectedTags.join(",");
  //   let queryParams = [];

  //   if (selectedTags.length > 0) queryParams.push(`selectedTags=${tagQueries}`);
  //   if (searchValue.length > 0) queryParams.push(`search=${searchValue}`);

  //   if (queryParams.length > 0) {
  //     router.replace(`${window.location.pathname}?${queryParams.join("&")}`);
  //   } else {
  //     router.replace("/");
  //   }
  // }, [searchValue, selectedTags]);

  const filteredFiles = files
    .filter((file) => {
      return (
        file.data.title?.toLowerCase().includes(searchValue.toLowerCase()) ||
        file.data.description?.toLowerCase().includes(searchValue.toLowerCase())
      );
    })
    .filter((file) => {
      if (selectedTags.length == 0) return true;
      return file.data.tags.some((tag) => {
        return selectedTags.includes(tag);
      });
    });

  const tags = getTags(filteredFiles);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => {
      if (selectedTags.includes(tag)) {
        return prev.filter((curTag) => curTag != tag);
      } else {
        return [...prev, tag];
      }
    });
  };

  return (
    <>
      <RecentPosts files={files} />
      <MainFiltering
        setSearchValue={setSearchValue}
        searchValue={searchValue}
        tags={tags}
        selectedTags={selectedTags}
        toggleTag={toggleTag}
      />
      <BlogList posts={filteredFiles} />
    </>
  );
}
export default PostData;
