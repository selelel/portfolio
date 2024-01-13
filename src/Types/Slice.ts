import { BlogReducer } from "../Store/Slices/BlogSlice";
import { AppInteractionReducer } from "../Store/Slices/Interaction";

export interface blogProps {
  blog: ReturnType<typeof BlogReducer>;
}

interface blogState {
  author: { name: string; id: string };
  content: string;
  countDate: number;
  desc: string;
  id: string;
  order: number;
  pic: string;
  posted: string;
  title: string;
}

export interface blogContents {
  props: {
    author: { name: string };
    content: string;
    desc: string;
    order: number;
    pic: string;
    posted: string;
    title: string;
  };
}

export interface blogDetail {
  error: string;
  blog: blogState[];
}

///App Iteraction///
export interface interactionProps {
  interaction: ReturnType<typeof AppInteractionReducer>;
}
