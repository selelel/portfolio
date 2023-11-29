import React, { ReactNode } from "react";

type prop = {
  [x: string]: ReactNode;
};
function ArticlePanel({ title, desc, countDays }: prop) {
  return (
    <div className="cursor-pointer border border-black p-3">
      <div className="text-xl font-bold line-clamp-2">
        {title}
        <span className="text-xs font-thin"> Day {countDays}</span>
      </div>

      <p className="text-xs line-clamp-2">{desc}</p>
    </div>
  );
}

export default ArticlePanel;
