import MostNewsCard from "@/components/NewsSection/MostNewsCard";
import MostNewsList from "@/components/NewsSection/MostNewsList";
import { NewsArticle } from "@/types/NewsArticle";

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const news = data.data;
  const mostNewses: NewsArticle[] = news[0].articles;
  const firstMostNews: NewsArticle = mostNewses[0];
  // console.log(firstMostNews);
  return (
    <div className="container mx-auto mt-5 h-500">
      <div className="grid grid-cols-3 gap-5 ">
        <article className="col-span-2  ">
          {/* Most News Section | প্রধান খবর */}
          <div className=" flex gap-5">
            {/* First Most News Card with Images */}
            <div className="bg-amber-100 w-full rounded-[10px] ">
              <MostNewsCard news={firstMostNews} />
            </div>
            {/* Most News List */}
            <div className="bg-amber-200 w-full rounded-[10px]">
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
