const MostReedNews = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");

  if (!res.ok) {
    throw new Error("সংবাদ লোড করা যায়নি");
  }
  const data = await res.json();

  return <div></div>;
};

export default MostReedNews;
