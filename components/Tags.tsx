import { TagsProps } from "@/types";
export const Tags = ({ tags }: TagsProps) => {
  return (
    <>
      {tags &&
        tags.map((tag: any, index: number) => (
          <span
            key={index}
            className="p-[14.5px] md:p-[16.7px] rounded-[13.4px] bg-[#222222] text-[#aaaaaa]"
          >
            <p>#{tag}</p>
          </span>
        ))}
    </>
  );
};
