import { NewsArticle } from "@/types/NewsArticle";

const MostNewsList = ({ news }: { news: NewsArticle[] }) => {
  return (
    <div>
      <ul className="flex flex-col gap-4">
        {news.slice(1).map((article, index) => (
          <li key={index} className="border-y border-gray-300 pb-2">
            <span className="text-md text-red-600">{article.category}</span>
            <h3 className="text-lg font-semibold text-gray-800">
              {article.title}
            </h3>
            {/* <p className="text-sm text-gray-600">{article.description}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MostNewsList;
