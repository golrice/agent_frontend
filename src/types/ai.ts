export enum AIType {
  Base = "基础款模型",
}

export interface GenerateAsk {
  is_user: Boolean;
  msg: string;
}

export interface GenerateBlock {
  msg: string;
}

export interface StreamID {
  id: string;
}
