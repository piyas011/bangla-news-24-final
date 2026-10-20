import { NewsArticle } from "@/types/NewsArticle";
import Link from "next/link";

const MostNewsList = ({ news }: { news: NewsArticle[] }) => {
  return (
    <div>
      <ul className="flex min-w-0 flex-col gap-3 sm:gap-4">
        {news.slice(1).map((article, index) => (
          <Link
            href={article.link}
            key={index}
            className="min-w-0 border-y border-gray-300 py-2"
          >
            <span className="text-sm text-red-600">{article.category}</span>
            <h3 className="wrap-break  text-base font-semibold text-gray-800 sm:text-lg">
              {article.title}
            </h3>
            {/* <p className="text-sm text-gray-600">{article.description}</p> */}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MostNewsList;
