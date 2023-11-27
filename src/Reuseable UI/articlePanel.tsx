import React, { ReactNode } from "react";

type prop = {
  [x: string]: ReactNode;
};
function ArticlePanel({ title, desc }: prop) {
  return (
    <div className="cursor-pointer border border-black p-3">
      <h1 className="text-xl font-bold line-clamp-2">{title}</h1>
      <p className="text-xs line-clamp-2">{desc}</p>
    </div>
  );
}

export default ArticlePanel;
