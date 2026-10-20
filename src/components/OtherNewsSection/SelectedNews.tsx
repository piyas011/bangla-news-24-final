import { MainNews } from "@/types/MainNews";
import { NewsArticle } from "@/types/NewsArticle";
import Image from "next/image";
import Link from "next/link";

const SelectedNews = ({ newsProps }: { newsProps: MainNews[] }) => {
  const news = newsProps.slice(1);
  console.log("Selected News", news);

  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 py-8 sm:px-6 lg:px-8">
      {news.map((section, sectionIndex) => (
        <section key={section.curationId ?? sectionIndex}>
          {/* Section title with decorative underline */}
          <div className="mb-6 flex items-center gap-3">
            <div className="h-8 w-1.5 rounded-full bg-red-600" />

            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              {section.title}
            </h2>
          </div>

          {/* Responsive grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {section.articles.map((article: NewsArticle, index: number) => (
              <article
                key={article.id ?? index}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl"
              >
                {/* News image with hover zoom effect */}
                <Link
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-video overflow-hidden bg-gray-100"
                >
                  {article.imageUrl ? (
                    <Image
                      src={article.imageUrl}
                      alt={article.imageAlt || article.title}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    // ছবি না থাকলে fallback placeholder
                    <div className="flex h-full items-center justify-center text-gray-400">
                      <span className="text-sm">ছবি পাওয়া যায়নি</span>
                    </div>
                  )}

                  {/* Live news badge */}
                  {article.isLive && (
                    <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-md bg-red-600 px-3 py-1 text-xs font-bold text-white shadow">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                      LIVE
                    </span>
                  )}
                </Link>

                {/* News title and description */}
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  {/* Category label */}
                  <p className="mb-2 text-xs font-bold uppercase tracking-wide text-red-600">
                    {article.category}
                  </p>

                  {/* Clickable news headline */}
                  <h3 className="mb-3 text-lg font-bold leading-snug text-gray-900 transition-colors duration-200 group-hover:text-red-600 sm:text-xl">
                    <Link
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {article.title}
                    </Link>
                  </h3>

                  {/* News description */}
                  {article.description && (
                    <p className="line-clamp-3 text-sm leading-7 text-gray-600">
                      {article.description}
                    </p>
                  )}

                  {/* Read more link stays at the bottom */}
                  <div className="mt-auto pt-4">
                    <Link
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-gray-800 transition-colors hover:text-red-600"
                    >
                      বিস্তারিত পড়ুন
                      <span className="transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default SelectedNews;
