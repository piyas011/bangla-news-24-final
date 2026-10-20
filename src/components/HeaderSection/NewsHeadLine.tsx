import { NewsHeadLines } from "@/types/newsHeadLines";

const NewsHeadLine = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news");
  const resData = await res.json();
  const newsHeadLines: NewsHeadLines[] = resData.data;

  return (
    <div>
      {newsHeadLines.map((headLines) => (
        <span key={headLines.id}>
          <span className="mx-5">✦</span>
          {headLines.title}
        </span>
      ))}
    </div>
  );
};

export default NewsHeadLine;
