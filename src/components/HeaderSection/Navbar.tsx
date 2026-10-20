import { NewsCategory } from "@/types/NewsCategory";
import Link from "next/link";

const Navbar = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const allCategoryLink: NewsCategory[] = data.data;
  const mainCategoryLink = allCategoryLink.filter((link) => link.scrapable);
  return (
    <nav className="flex w-max items-center whitespace-nowrap">
      {mainCategoryLink.map((link, i) => (
        <Link
          className="mx-2 rounded px-2 py-1 text-sm hover:text-red-600 sm:mx-3 sm:text-base"
          key={i}
          href={link.slug}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
