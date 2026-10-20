import Loading from "@/components/loading";
import MostNewsCard from "@/components/NewsSection/MostNewsCard";
import MostNewsList from "@/components/NewsSection/MostNewsList";
import MostReedNews from "@/components/NewsSection/MostReedNews";
import SelectedNews from "@/components/OtherNewsSection/SelectedNews";
import { NewsArticle } from "@/types/NewsArticle";
import { Suspense } from "react";

async function NewsSection() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");

  if (!res.ok) {
    throw new Error("সংবাদ লোড করা যায়নি");
  }

  const data = await res.json();
  const news = data.data;
  const mostNewses: NewsArticle[] = news?.[0]?.articles ?? [];
  const firstMostNews: NewsArticle | undefined = mostNewses[0];

  if (!firstMostNews) {
    return <p>কোনো সংবাদ পাওয়া যায়নি।</p>;
  }

  return (
    <div className="mx-auto mt-5 w-full max-w-7xl px-3 sm:px-4 lg:px-6">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <article className="min-w-0 lg:col-span-2">
          {/* Most News Section | প্রধান খবর */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* First Most News Card with Images */}
            <div className="min-w-0 w-full rounded-[10px]">
              <MostNewsCard news={firstMostNews} />
            </div>
            {/* Most News List */}
            <div className="min-w-0 w-full rounded-[10px]">
              <MostNewsList news={mostNewses} />
            </div>
          </div>
          {/*  Selected News  */}
          <div className="my-5 ">
            <SelectedNews newsProps={news} />
          </div>
        </article>
        {/* Most Reed Section | সর্বাধিক পঠিত  */}
        <aside className="min-w-0 rounded-[10px]">
          <MostReedNews />
        </aside>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <NewsSection />
    </Suspense>
  );
}
