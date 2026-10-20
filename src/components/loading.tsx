export default function Loading() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-4 dark:bg-gray-950">
      {/* Website Logo */}
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-2xl font-black text-white">
          B
        </div>

        <h1 className="text-xl font-extrabold text-gray-900 dark:text-white">
          Bangla News <span className="text-red-600">24</span>
        </h1>
      </div>
      {/* Spinner */}
      <div className="h-14 w-14 animate-spin rounded-full border-4 border-gray-200 border-t-red-600 dark:border-gray-800 dark:border-t-red-500" />

      <h2 className="mt-6 animate-pulse text-lg font-bold text-gray-800 dark:text-white">
        সংবাদ লোড হচ্ছে...
      </h2>

      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        সর্বশেষ খবর জানতে একটু অপেক্ষা করুন
      </p>

      {/* Skeleton Cards */}
      <div className="mt-10 grid w-full max-w-4xl grid-cols-1 gap-5 sm:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="animate-pulse rounded-xl border border-gray-200 p-3 dark:border-gray-800"
          >
            <div className="h-36 rounded-lg bg-gray-200 dark:bg-gray-800" />
            <div className="mt-4 h-3 w-1/3 rounded bg-red-100 dark:bg-red-950" />
            <div className="mt-3 h-4 rounded bg-gray-200 dark:bg-gray-800" />
            <div className="mt-2 h-4 w-4/5 rounded bg-gray-200 dark:bg-gray-800" />
            <div className="mt-4 h-3 w-full rounded bg-gray-100 dark:bg-gray-900" />
          </div>
        ))}
      </div>
    </main>
  );
}
