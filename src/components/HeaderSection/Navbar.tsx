import { NewsCategory } from "@/types/NewsCategory";
import Link from "next/link";

const Navbar = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const allCategoryLink: NewsCategory[] = data.data;
  const mainCategoryLink = allCategoryLink.filter((link) => link.scrapable);
  return (
    <div>
      {mainCategoryLink.map((link, i) => (
        <Link className=" mx-4" key={i} href={link.slug}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
