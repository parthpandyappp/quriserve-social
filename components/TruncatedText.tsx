"use client";
import { useState } from "react";

type TruncatedTextProps = {
  content: string | null;
};

const TruncatedText = ({ content }: TruncatedTextProps) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const truncateText = (text: string, limit: number) => {
    if (text.length <= limit) {
      return text;
    }
    return text.slice(0, limit);
  };

  return (
    <p className="text-[20px] text-[#EEFFEF] font-medium w-full">
      {isTruncated ? truncateText(content ?? "", 50) : content}
      {isTruncated ? (
        <span
          className="text-[#AAAAAA] cursor-pointer"
          onClick={() => setIsTruncated((toggle) => !toggle)}
        >
          ...Show more
        </span>
      ) : (
        <span
          className="text-[#AAAAAA] cursor-pointer"
          onClick={() => setIsTruncated((toggle) => !toggle)}
        >
          ...Show less
        </span>
      )}
    </p>
  );
};

export { TruncatedText };
