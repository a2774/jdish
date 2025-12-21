"use client";

export default function Page() {
  return (
    <div className="space-y-8">
      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Welcome to <span className="text-[#f4514f]">Jdish</span>
        </h1>
        <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-2xl">
          Discover recipes, follow chefs, and share your culinary journey with a
          global food community.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <button className="bg-[#f4514f] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#e04341] transition">
            Explore Recipes
          </button>
          <button className="border border-gray-300 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
            Create Post
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition"
          >
            <div className="h-40 rounded-lg bg-gray-100 mb-4" />
            <h3 className="text-sm font-semibold text-gray-800 truncate">
              Featured Recipe #{i + 1}
            </h3>
            <p className="text-xs text-gray-500 mt-1">By Chef Community</p>
          </div>
        ))}
      </section>

      <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Trending Creators
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="min-w-[140px] bg-gray-50 rounded-xl p-3 text-center hover:bg-gray-100 transition cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-gray-200 mx-auto mb-2" />
              <p className="text-xs font-medium text-gray-700 truncate">
                Chef #{i + 1}
              </p>
              <p className="text-[11px] text-gray-500">Food Creator</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
