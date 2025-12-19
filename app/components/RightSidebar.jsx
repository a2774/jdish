"use client";

import { useEffect, useState } from "react";

export default function RightSidebar() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch("https://dummyjson.com/recipes?limit=5");
        const data = await res.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error("Failed to fetch recipes", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <aside className="hidden xl:block w-48">
      <div className="sticky top-20">


        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
          <h3 className="text-sm font-semibold mb-3">
            Trending Recipes
          </h3>

         
          {loading && (
            <p className="text-xs text-gray-500">Loading recipes...</p>
          )}

         
          <div className="space-y-1">
            {recipes.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-lg cursor-pointer transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-md object-cover"
                />

                <div>
                  <p className="text-xs font-medium line-clamp-1">
                    {item.name}
                  </p>
                  <p className="text-[11px] text-gray-500">
                    ⭐ {item.rating} • {item.cuisine}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </aside>
  );
}
