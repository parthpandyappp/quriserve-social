import Image from "next/image";
import { Carousel, Comment, TruncatedText, Tags } from "@/components";
import { ApiResponse, UserFeed, dataResponse, CommentType } from "@/types";

export const getPostData = async (): Promise<{
  props: { post: ApiResponse };
}> => {
  const response = await fetch(
    "https://api.quriverse.com/api/public-base/posts/eb2f99e2-3940-4d4a-998c-55d1a6c3e0bc",
    { cache: "no-store" }
  );
  const post: ApiResponse = await response.json();

  return {
    props: {
      post,
    },
  };
};

export const getCommentsData = async (): Promise<{
  comments: CommentType[];
}> => {
  const response = await fetch(
    "https://api.quriverse.com/api/public-base/posts/eb2f99e2-3940-4d4a-998c-55d1a6c3e0bc/comments",
    { cache: "no-store" }
  );
  const comments: CommentType[] = await response.json();

  return {
    comments,
  };
};

export default async function Home() {
  const {
    props: {
      post: { data, users },
    },
  } = await getPostData();
  const { comments }: any = await getCommentsData();

  const commentsData: CommentType[] = comments?.data;
  const otherUsers: { [key: string]: UserFeed } = comments?.users;

  const {
    user_id,
    content,
    tags,
    images,
    likes_count,
    comments_count,
    quotes_count,
  }: dataResponse = data;

  const userData: UserFeed | undefined = users[user_id];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#1e1e1e] ">
      <article className="my-[20px] w-full md:w-2/5 h-full rounded-lg bg-[#101010]">
        <section className="flex flex-col w-full">
          <div className="flex gap-[12px] py-[19px] px-[28px] justify-between items-center w-full">
            <div className="flex gap-[12px] items-center">
              <div className="border border-[1.54px] border-[#FF8A59] md:border-[#FFE162] rounded-[15.4px] w-[55.43px] h-[55.43px] p-[4.62px]">
                <Image
                  src={userData.image_url.thumbnail}
                  className="rounded-[9.24px]"
                  width={43.12}
                  height={43.12}
                  alt="user-img"
                />
              </div>
              <div className="flex justify-center flex-col gap-[5.2px]">
                <p className="text-[#FF8A59] md:text-[#FFE162] font-extrabold text-[14px]">
                  {userData.first_name}{" "}
                  <span className="hidden md:inline text-[#AAAAAA] ml-[4.38px]">
                    • 2h
                  </span>
                </p>
                <p className="text-[#AAAAAA] md:text-[#EEFFEF] font-medium text-[16px]">
                  @{userData.username}
                </p>
              </div>
            </div>

            <div className="w-[22.4px] h-[22.4px] cursor-pointer">
              <svg
                viewBox="0 0 24 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-red-600"
              >
                <path
                  d="M20.5999 3.19999L20.5999 3.21399M20.5999 13L20.5999 13.014M20.5999 22.8L20.5999 22.814M20.5999 4.59999C19.8267 4.59999 19.1999 3.97319 19.1999 3.19999C19.1999 2.42679 19.8267 1.79999 20.5999 1.79999C21.3731 1.79999 21.9999 2.42679 21.9999 3.19999C21.9999 3.97319 21.3731 4.59999 20.5999 4.59999ZM20.5999 14.4C19.8267 14.4 19.1999 13.7732 19.1999 13C19.1999 12.2268 19.8267 11.6 20.5999 11.6C21.3731 11.6 21.9999 12.2268 21.9999 13C21.9999 13.7732 21.3731 14.4 20.5999 14.4ZM20.5999 24.2C19.8267 24.2 19.1999 23.5732 19.1999 22.8C19.1999 22.0268 19.8267 21.4 20.5999 21.4C21.3731 21.4 21.9999 22.0268 21.9999 22.8C21.9999 23.5732 21.3731 24.2 20.5999 24.2Z"
                  stroke="#EEFFEF"
                  strokeWidth="2.52"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{" "}
            </div>
          </div>

          <Carousel images={images} />

          <div className="mt-[16.03px] w-full px-[28px]">
            <TruncatedText content={content} />
          </div>
          <div className="mt-[13px] flex gap-[20px] px-[28px] w-full flex-wrap">
            <Tags tags={tags} />
          </div>
          <div className="flex justify-between mt-[20px] px-[28px]">
            <div className="flex gap-[40px] ">
              <div className="flex items-center gap-[14px]">
                <div className="w-[29.1px] h-[29.1px] md:w-[26.7px] md:h-[26.7px] cursor-pointer">
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.55604 5.95399H20.2158V8.43561C20.2158 9.05949 21.0074 9.36449 21.4618 8.92085L25.5519 5.05284C25.8451 4.77556 25.8451 4.34578 25.5519 4.06851L21.4618 0.200496C21.0074 -0.229282 20.2158 0.0757222 20.2158 0.699595V3.18122H4.09007C3.28378 3.18122 2.62409 3.80509 2.62409 4.5676V10.1131C2.62409 10.8756 3.28378 11.4995 4.09007 11.4995C4.89635 11.4995 5.55604 10.8756 5.55604 10.1131V5.95399ZM20.2158 19.8178H5.55604V17.3362C5.55604 16.7123 4.76441 16.4073 4.30996 16.851L0.219896 20.719C-0.0732987 20.9962 -0.0732987 21.426 0.219896 21.7033L4.30996 25.5713C4.76441 26.0011 5.55604 25.6961 5.55604 25.0722V22.5906H21.6817C22.488 22.5906 23.1477 21.9667 23.1477 21.2042V15.6587C23.1477 14.8962 22.488 14.2723 21.6817 14.2723C20.8755 14.2723 20.2158 14.8962 20.2158 15.6587V19.8178Z"
                      fill="#DDDDDD"
                    />
                  </svg>
                </div>
                <p className="text-[#DDDDDD] font-medium text-[14.55px] md:text-[16px]">
                  {quotes_count}
                </p>
              </div>
              <div className="flex items-center gap-[14px]">
                <div className="w-[29.1px] h-[29.1px] md:w-[26.7px] md:h-[26.7px]  cursor-pointer">
                  <svg
                    width="31"
                    height="27"
                    viewBox="0 0 31 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.62443 13.2011H9.63906M15.48 13.2011H15.4946M21.3356 13.2011H21.3502M28.655 13.2011C28.655 19.568 22.7564 24.7293 15.48 24.7293C13.2267 24.7293 11.1055 24.2343 9.25065 23.3618L2.30496 24.7293L4.34708 19.3687C3.05384 17.5852 2.30496 15.4697 2.30496 13.2011C2.30496 6.8343 8.20363 1.67297 15.48 1.67297C22.7564 1.67297 28.655 6.8343 28.655 13.2011Z"
                      stroke="#DDDDDD"
                      strokeWidth="3.01144"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-[#DDDDDD] font-medium text-[14.55px] md:text-[16px]">
                  {comments_count}
                </p>
              </div>
              <div className="flex items-center gap-[14px]">
                <div className="w-[29.1px] h-[29.1px] md:w-[26.7px] md:h-[26.7px]  cursor-pointer">
                  <svg
                    width="29"
                    height="27"
                    viewBox="0 0 29 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.49365 4.33596C0.982016 6.91069 0.982016 11.0852 3.49365 13.6599L14.4729 24.915L25.452 13.6599C27.9636 11.0852 27.9636 6.91069 25.452 4.33596C22.9403 1.76122 18.8682 1.76122 16.3565 4.33596L14.4729 6.26708L12.5891 4.33596C10.0774 1.76122 6.00528 1.76122 3.49365 4.33596Z"
                      fill="#D64F4F"
                      stroke="#DDDDDD"
                      strokeWidth="3.01144"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-[#DDDDDD] font-medium text-[14.55px] md:text-[16px]">
                  {likes_count}
                </p>
              </div>
            </div>
            <div className="w-[29.1px] h-[29.1px] md:w-[26.7px] md:h-[26.7px]  cursor-pointer">
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.156 16.0915C10.4381 15.5286 10.5968 14.8931 10.5968 14.2206C10.5968 13.5481 10.4381 12.9127 10.156 12.3497M10.156 16.0915C9.46936 17.4622 8.05169 18.4032 6.41424 18.4032C4.10428 18.4032 2.23169 16.5306 2.23169 14.2206C2.23169 11.9107 4.10428 10.0381 6.41424 10.0381C8.05169 10.0381 9.46936 10.979 10.156 12.3497M10.156 16.0915L19.4026 20.7148M10.156 12.3497L19.4026 7.72643M19.4026 7.72643C20.0893 9.09712 21.507 10.0381 23.1444 10.0381C25.4544 10.0381 27.327 8.16548 27.327 5.85552C27.327 3.54557 25.4544 1.67297 23.1444 1.67297C20.8345 1.67297 18.9619 3.54557 18.9619 5.85552C18.9619 6.52803 19.1206 7.16347 19.4026 7.72643ZM19.4026 20.7148C19.1206 21.2778 18.9619 21.9132 18.9619 22.5857C18.9619 24.8957 20.8345 26.7683 23.1444 26.7683C25.4544 26.7683 27.327 24.8957 27.327 22.5857C27.327 20.2758 25.4544 18.4032 23.1444 18.4032C21.507 18.4032 20.0893 19.3441 19.4026 20.7148Z"
                  stroke="#DDDDDD"
                  strokeWidth="3.01144"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <p className="md:hidden block font-medium text-[14.55px] text-[#AAAAAA] px-[28px] mt-[26.19px]">
            6th March 2022
          </p>
          <div className="flex items-center mt-[40px] px-[28px]">
            <span>
              <p className="tracking-[4.2px] text-[#FFE162] font-extrabold text-[11.64px] md:text-[14px] w-40">
                {commentsData.length} COMMENTS
              </p>
            </span>
            <span className="border-b-2 border-[#757575] w-full"></span>
          </div>
          <div className="flex flex-col gap-[24px] px-[28px] py-[24px]">
            {commentsData.length > 0 &&
              commentsData?.map((comment: CommentType) => {
                return <Comment comment={comment} otherUsers={otherUsers} />;
              })}
          </div>
        </section>
      </article>
    </main>
  );
}
