"use client";
type TagProps = {
  tag: string;
  selected?: boolean;
  toggle?: (val: string) => void | undefined;
};

function Tag({ tag, toggle, selected = false }: TagProps) {
  const classes = `flex flex-row mr-2 rounded-md ${
    selected ? "bg-green-400" : "bg-green-200"
  } ${toggle ? "cursor-pointer" : ""}
  `;

  const handleClick = () => {
    if (toggle) {
      toggle(tag);
    }
  };
  return (
    <p className={classes} onClick={handleClick}>
      <span className="px-2 text-xs">{tag}</span>
    </p>
  );
}

export default Tag;
