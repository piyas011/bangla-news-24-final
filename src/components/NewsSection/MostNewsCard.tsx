import { NewsArticle } from "@/types/NewsArticle";
import Image from "next/image";

const MostNewsCard = ({ news }: { news: NewsArticle }) => {
  return (
    <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
      {/* News Image */}
      <div className="relative overflow-hidden">
        <Image
          src={news.imageUrl}
          alt={news.imageAlt}
          width={600}
          height={350}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-56"
        />

        <span className="absolute left-3 top-3 rounded-md bg-red-600 px-3 py-1 text-xs font-bold text-white shadow">
          {news.category}
        </span>
      </div>

      {/* News Content */}
      <div className="p-4 sm:p-5">
        <h2 className="mb-3 line-clamp-2 text-lg font-bold leading-snug text-gray-900 transition-colors duration-200 group-hover:text-red-600 sm:text-xl dark:text-white">
          {news.title}
        </h2>

        <p className="line-clamp-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
          {news.description}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 dark:border-gray-800">
          <span className="text-xs font-medium text-gray-500">
            Bangla News 24
            {/* <span>{news.firstPublished}</span> */}
          </span>

          <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-600 transition-transform duration-200 group-hover:translate-x-1 sm:text-sm">
            বিস্তারিত পড়ুন
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MostNewsCard;
