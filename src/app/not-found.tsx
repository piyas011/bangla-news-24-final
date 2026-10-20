"use client";
import "./globals.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080b14] px-4 text-white">
      {/* Background effects */}
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[100px]" />

      <div className="absolute left-[10%] top-[15%] h-2 w-2 animate-pulse rounded-full bg-red-400" />
      <div className="absolute right-[15%] top-[25%] h-3 w-3 animate-ping rounded-full bg-blue-400/70" />
      <div className="absolute bottom-[20%] left-[20%] h-2 w-2 animate-pulse rounded-full bg-yellow-400" />

      <section className="relative z-10 mx-auto max-w-2xl text-center">
        {/* Floating news icons */}
        <div className="relative mx-auto mb-4 flex h-24 w-64 items-center justify-center">
          <span className="absolute left-8 top-5 animate-[not-found-float_3s_ease-in-out_infinite] text-4xl">
            📰
          </span>
          <span className="absolute right-8 top-2 animate-[not-found-float_4s_ease-in-out_infinite] text-3xl [animation-delay:0.5s]">
            🔎
          </span>
          <span className="absolute bottom-0 animate-[not-found-float_3.5s_ease-in-out_infinite] text-2xl [animation-delay:1s]">
            ✨
          </span>
        </div>

        {/* Animated 404 */}
        <h1 className="animate-[not-found-appear_0.8s_ease-out_both] text-8xl font-black tracking-tighter text-red-500 sm:text-9xl">
          404
        </h1>

        <div className="mx-auto mb-6 mt-3 h-1 w-20 animate-[not-found-grow_1s_ease-out_both] rounded-full bg-red-500" />

        <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
          দুঃখিত! পেজটি খুঁজে পাওয়া যায়নি
        </h2>

        <p className="mx-auto mb-8 max-w-md text-sm leading-7 text-gray-400 sm:text-base">
          আপনি যে সংবাদ বা পেজটি খুঁজছেন, সেটি সরানো হয়েছে, ঠিকানা পরিবর্তন
          হয়েছে অথবা পেজটি আর উপলব্ধ নেই।
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white shadow-lg shadow-red-600/20 transition duration-300 hover:-translate-y-1 hover:bg-red-500 hover:shadow-red-500/30"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            হোমপেজে ফিরে যান
          </Link>

          <button
            onClick={() => window.history.back()}
            className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-gray-300 transition duration-300 hover:border-white/40 hover:bg-white/5 hover:text-white"
          >
            আগের পেজে ফিরে যান
          </button>
        </div>

        <p className="mt-12 text-xs tracking-widest text-gray-600">
          BANGLA NEWS 24 · STAY INFORMED
        </p>
      </section>
    </main>
  );
}
