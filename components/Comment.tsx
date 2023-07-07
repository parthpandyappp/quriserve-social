import { CommentProps } from "@/types";
const Comment = ({ comment, otherUsers }: CommentProps) => {
  return (
    <div className="flex gap-2  w-full">
      <div className="border border-[1.54px] border-[#FFE162] rounded-[5.94px] flex items-center min-w-max p-[2.62px] self-start">
        <img
          src={otherUsers[comment.user_id].image_url.source}
          className="rounded-[9.9px] object-cover w-[35px] h-[35px]"
          alt="user-img"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex h-[35px] self-start">
          <p className="flex items-center gap-1.5 text-[#FFE162] text-[14.55px] md:text-[14px] font-semibold">
            {otherUsers[comment.user_id].username}
            <span className="text-[#AAAAAA] font-medium">
              <span className="md:hidden inline"> • </span>
              {10}
              <span className="md:inline hidden">min</span>
              <span className="inline md:hidden">m</span>
            </span>
          </p>
        </div>
        <p className="text-[#EEFFEF] text-[14.55px] md:text-[16px] w-full">
          {comment.content}
        </p>
        <div className="flex gap-[33px] mt-[24px]">
          <div className="flex gap-2 items-center">
            <div className="h-[23.3px] w-[23.3px] md:w-[19.8px] md:h-[19.8px] cursor-pointer">
              <svg
                width="23"
                height="24"
                viewBox="0 0 23 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.4 6.49985H19.6C20.815 6.49985 21.8 7.48483 21.8 8.69985V15.2999C21.8 16.5149 20.815 17.4999 19.6 17.4999H17.4V21.8999L13 17.4999H8.6C7.99249 17.4999 7.44249 17.2536 7.04436 16.8555M7.04436 16.8555L10.8 13.0999H15.2C16.415 13.0999 17.4 12.1149 17.4 10.8999V4.29985C17.4 3.08483 16.415 2.09985 15.2 2.09985H4.2C2.98497 2.09985 2 3.08483 2 4.29985V10.8999C2 12.1149 2.98497 13.0999 4.2 13.0999H6.4V17.4999L7.04436 16.8555Z"
                  stroke="#DDDDDD"
                  strokeWidth="2.31"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-[#AAAAAA] text-[16.5px] font-medium">
              {comment.replies_count}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="h-[23.3px] w-[23.3px] md:w-[19.8px] md:h-[16.9px] cursor-pointer">
              <svg
                width="23"
                height="20"
                viewBox="0 0 23 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.34978 3.09985C1.41669 5.03294 1.41669 8.16711 3.34978 10.1002L11.8 18.5504L20.2501 10.1002C22.1832 8.16711 22.1832 5.03294 20.2501 3.09985C18.317 1.16675 15.1829 1.16675 13.2498 3.09985L11.8 4.54973L10.3501 3.09985C8.41705 1.16675 5.28288 1.16675 3.34978 3.09985Z"
                  stroke="#DDDDDD"
                  strokeWidth="2.31"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-[#AAAAAA] text-[16.5px] font-medium">
              {comment.likes_count}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Comment };
