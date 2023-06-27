import { ReactElement } from "react";

type LineTextProps = { children: ReactElement };
function LineText({ children }: LineTextProps) {
  return (
    <div className="flex flex-row items-center w-full">
      <hr className="flex-grow" />
      {children}
      <hr className="flex-grow" />
    </div>
  );
}
export default LineText;
