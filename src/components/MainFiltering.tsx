import Tag from "@/components/Tag";

type MainFilteringProps = {
  searchValue: string;
  tags: string[];
  selectedTags: string[];
  setSearchValue: (val: string) => void;
  toggleTag: (tag: string) => void;
};

function MainFiltering({
  tags,
  selectedTags,
  searchValue,
  setSearchValue,
  toggleTag,
}: MainFilteringProps) {
  return (
    <div className="flex flex-col w-full">
      <hr className="w-full" />
      <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
        <input
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          className="w-56 px-2 my-3 border border-gray-200 rounded-2xl"
          placeholder="Search..."
        />
        <hr className="w-full" />
        <div className="flex flex-row my-3">
          {Array.from(tags.values()).map((tag) => (
            <Tag
              toggle={toggleTag}
              selected={selectedTags.includes(tag)}
              key={tag}
              tag={tag}
            />
          ))}
        </div>
        <hr className="w-full" />
      </div>
    </div>
  );
}
export default MainFiltering;
