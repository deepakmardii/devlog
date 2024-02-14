import { cn } from "@/lib/utils";
import React from "react";
import Markdown from "react-markdown";

const MarkdownPreview = ({
  content,
  className,
}: {
  content: string;
  className?: string;
}) => {
  return (
    <Markdown
      className={cn("space-y-6", className)}
      components={{
        h1: ({ node, ...props }) => {
          return <h1 {...props} className="text-3xl text-bold" />;
        },
        h2: ({ node, ...props }) => {
          return <h1 {...props} className="text-2xl text-bold" />;
        },
        h3: ({ node, ...props }) => {
          return <h1 {...props} className="text-xl text-bold" />;
        },
      }}
    >
      {content}
    </Markdown>
  );
};

export default MarkdownPreview;
