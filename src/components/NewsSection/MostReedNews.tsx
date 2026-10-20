import type { MostReedNews } from "@/types/MostReedNewsType";
import Link from "next/link";

const MostReedNews = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");

  if (!res.ok) {
    throw new Error("সংবাদ লোড করা যায়নি");
  }
  const data = await res.json();
  const mostReedNews: MostReedNews[] = data.data;

  return (
    <div className="rounded-lg bg-white p-4 shadow-md sm:p-5">
      <h2 className="mb-4 text-base font-bold text-red-600 sm:text-lg dark:text-white">
        সর্বাধিক পঠিত সংবাদ
      </h2>
      <ul className="flex flex-col gap-3 sm:gap-4">
        {mostReedNews.map((news, index) => (
          <Link
            href={news.link}
            key={index}
            className="flex min-w-0 items-start gap-2 border-b border-gray-100 pb-3 last:border-b-0"
          >
            <div className="shrink-0 text-2xl font-bold text-red-500 sm:text-[30px]">
              {index + 1}
            </div>
            <div className="min-w-0">
              <h3 className="wrap-break text-sm font-semibold text-gray-800 sm:text-base">
                {news.title}
              </h3>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MostReedNews;
