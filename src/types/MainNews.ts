import { NewsArticle } from "./NewsArticle";

export interface MainNews {
  title: string;
  curationId: string;
  curationType: string;
  link: string | null;
  count: number;
  articles: NewsArticle[];
}
