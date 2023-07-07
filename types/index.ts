export interface ApiResponse {
  data: {
    images?: PostImage[];
    video?: PostVideo | null;
    requoted_id: string | null;
    is_deleted: boolean;
    id: string;
    user_id: string;
    type: PostType;
    content: string | null;
    description: string | null;
    tags: string[];
    quotes_count: number;
    is_edited: boolean;
    comments_count: number;
    likes_count: number;
    created_at: number;
    updated_at: number;
  };
  users: {
    [key: string]: UserFeed;
  };
  posts: {
    [key: string]: Post;
  };
}

export type Post = {
  id: string;
  user_id: string | undefined;
  type: PostType;
  images?: PostImage[];
  video?: PostVideo;
  content?: string;
  description?: string;
  tags: string[];
  requoted_id?: string;
  quotes_count: number;
  quotesList?: {
    loading: boolean;
    nextPage?: number | null;
    data?: string[];
  };
  is_edited: boolean;
  comments_count: number;
  likes_count: number;
  is_liked: boolean;
  is_nsfw: boolean;
  score: number;
  created_at: number;
  updated_at: number;
  is_deleted: boolean;
};

export enum PostType {
  IMAGES = "IMAGES",
  VIDEO = "VIDEO",
  STREAM = "STREAM",
  QUOTE = "QUOTE",
  MICRO = "MICRO",
  BLOG = "BLOG",
  LINK = "LINK",
  POLLS = "POLLS",
  SLICE = "SLICE",
}

export class PostImage {
  media_url: MediaSource = new MediaSource();
  media_height: number = 0;
  media_width: number = 0;
}

export class PostVideo {
  media_url: MediaSource = new MediaSource();
  media_height: number = 0;
  media_width: number = 0;
  is_hls: boolean = false;
}

export class MediaSource {
  source: string = "";
  thumbnail: string = "";
}

export class UserFeed {
  id: string = "";
  first_name: string = "";
  last_name: string = "";
  username: string = "";
  bio: string = "";
  image_url: MediaSource = new MediaSource();
  cover_url: MediaSource = new MediaSource();
  is_verified: boolean = false;
  is_mod: boolean = false;
  is_staff: boolean = false;
  is_beta: boolean = false;
  is_bot: boolean = false;
  followers_count?: number;
  is_followed?: boolean;
}

export enum UserColor {
  VERMILION = "VERMILION",
  SAGE = "SAGE",
  INFERNO = "INFERNO",
  DAFFODIL = "DAFFODIL",
  ARCTIC = "ARCTIC",
  LILAC = "LILAC",
  BLUSH = "BLUSH",
  PORCELAIN = "PORCELAIN",
}

export type UsersResponse = ApiResponse["users"];
export type dataResponse = ApiResponse["data"];
