import Image from "next/image";
import Date from "./Date";
import { Suspense } from "react";
import SignUpLogInButton from "./Buttons";
import NewsHeadLine from "./NewsHeadLine";
import MarqueeText from "react-marquee-text";
import Navbar from "./Navbar";

export function LatestNewsBar() {
  return (
    <div className="sticky top-0 z-50 w-full bg-red-600 text-white shadow-sm">
      <div className="mx-auto flex w-full max-w-screen-xl items-center gap-3 px-3 py-2 font-semibold sm:px-4">
        <div className="shrink-0 border-r-2 border-white/70 pr-3 sm:pr-5">
          <p>সর্বশেষ</p>
        </div>
        <div className="min-w-0 flex-1 overflow-hidden">
          <Suspense fallback={<span>loading...</span>}>
            <MarqueeText direction="right" duration={15}>
              <NewsHeadLine />
            </MarqueeText>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

const MainHeader = () => {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center gap-3 px-3 py-3 sm:px-4 md:flex-row md:justify-between">
        {/*Logo And Website Name*/}
        <div className="flex min-w-0 items-center justify-center gap-2">
          <Image
            src="/logo.webp"
            alt="Website Logo"
            width={40}
            height={40}
          ></Image>
          <div className="min-w-0">
            <h1 className="text-lg font-bold text-red-600 sm:text-2xl">Bangla News 24</h1>
            <span className="text-sm text-gray-500">
              <Suspense fallback={<span>Loading date...</span>}>
                <Date />
              </Suspense>
            </span>
          </div>
        </div>

        {/* Sign In and Sign Up Button*/}
        <div className="shrink-0">
          <SignUpLogInButton />
        </div>
      </div>
      <div className="mt-1 w-full overflow-x-auto border-y border-gray-200">
        <div className="mx-auto flex w-max min-w-full justify-center py-2">
          <Suspense fallback={<span className="px-3">data loading...</span>}>
            <Navbar />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
