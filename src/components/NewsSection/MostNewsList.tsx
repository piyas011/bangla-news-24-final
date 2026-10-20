import { NewsArticle } from "@/types/NewsArticle";

const MostNewsList = ({ news }: { news: NewsArticle[] }) => {
  console.log(news);
  return <div>Most News List</div>;
};

export default MostNewsList;
