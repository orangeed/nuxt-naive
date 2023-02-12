export interface Data {
  markDownInfo: MarkDownInfo;
  editorText: string;
}

export interface MarkDownInfo {
  title: string;
  author: string;
  // time: string;
  tags: string[];
  content: "";
}

export interface ArticleForm {
  articleName: string;
  beginTime: string;
  endTime: string;
  time: string;
}

export interface PageConfig {
  current: number;
  pageSize: number;
  total: number;
}
