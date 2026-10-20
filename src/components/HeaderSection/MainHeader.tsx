import Image from "next/image";
import Date from "./Date";
import { Suspense } from "react";
import SignUpLogInButton from "./Buttons";
import NewsHeadLine from "./NewsHeadLine";
import MarqueeText from "react-marquee-text";
import Navbar from "./Navbar";

const MainHeader = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        {/*Logo And Website Name*/}
        <div className="flex justify-center items-center gap-2">
          <Image
            src="/logo.webp"
            alt="Website Logo"
            width={40}
            height={40}
          ></Image>
          <div>
            <h1 className="text-2xl font-bold text-red-600">Bangla News 24</h1>
            <span className="text-sm text-gray-500">
              <Suspense fallback={<span>Loading date...</span>}>
                <Date />
              </Suspense>
            </span>
          </div>
        </div>

        {/* Sign In and Sign Up Button*/}
        <div className="absolute right-4 top-4">
          <SignUpLogInButton />
        </div>
      </div>
      <div className="flex justify-center items-center mt-2">
        <Suspense fallback={<span>data loading...</span>}>
          <Navbar />
        </Suspense>
      </div>
      <div className=" bg-red-600 text-white">
        <div className="mt-3 font-semibold p-2 flex container mx-auto sticky">
          <div className="border-r-4">
            <p className="px-5">সর্বশেষ</p>
          </div>
          <Suspense fallback={<span>loading...</span>}>
            <MarqueeText direction="right" duration={15}>
              <NewsHeadLine />
            </MarqueeText>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
