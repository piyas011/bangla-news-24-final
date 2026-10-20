import MostNewsCard from "@/components/NewsSection/MostNewsCard";
import MostNewsList from "@/components/NewsSection/MostNewsList";
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
    <div className="container mx-auto mt-5 h-500">
      <div className="grid grid-cols-3 gap-5 ">
        <article className="col-span-2  ">
          {/* Most News Section | প্রধান খবর */}
          <div className=" flex gap-5">
            {/* First Most News Card with Images */}
            <div className=" w-full rounded-[10px] ">
              <MostNewsCard news={firstMostNews} />
            </div>
            {/* Most News List */}
            <div className=" w-full rounded-[10px]">
              <MostNewsList news={mostNewses} />
            </div>
          </div>
        </article>
        {/* Most Reed Section | সর্বাধিক পঠিত  */}
        <aside className="col-span-1  bg-amber-300 rounded-[10px]"></aside>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<p>সংবাদ লোড হচ্ছে...</p>}>
      <NewsSection />
    </Suspense>
  );
}
