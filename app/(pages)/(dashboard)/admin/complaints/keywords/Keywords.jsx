"use client";
import React from "react";
import { AddCategoryDialog } from "@/app/(pages)/(dashboard)/admin/complaints/keywords/components/AddDialog/AddCategoryDialog";
import Search from "@/app/(pages)/(dashboard)/admin/complaints/keywords/components/SeachInput";
import { Button } from "@/components/ui/button";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { useSession } from "next-auth/react";
import { getCategoriesAndKeywords } from "@/app/api/repository/categoriesRepository";
import CategoryCard from "@/app/(pages)/(dashboard)/admin/complaints/keywords/components/CategoryCard/CategoryCard";
import CategoryCardSkeleton from "@/app/(pages)/(dashboard)/admin/complaints/keywords/components/CategoryCard/CategoryCardSkeleton";

const Keywords = () => {
  const { data: session } = useSession();
  const [categories, setCategories] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchCategories = async () => {
    // Fetch categories
    const res = await getCategoriesAndKeywords(session?.token.data.token, 10);
    if (res) {
      const categories = res.data.data.categories;
      setCategories(categories);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    setIsLoading(true);
    if (session?.token.data.token) {
      fetchCategories();
    }
  }, [session?.token.data.token]);

  return (
    <>
      <div className="w-full pt-5 lg:pt-10 px-4 sm:px-6 md:px-8 lg:ps-72 gap-5">
        {/* Header Section */}
        <div className="grid grid-cols-1 h-auto mb-6 gap-y-5">
          <header className={`col-span-1`}>
            <div className="grid gap-3 grid-cols-1 lg:grid-cols-2">
              <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl">
                Kata Kunci
              </h1>
            </div>
            <p className="mt-2 text-sm font-medium text-gray-400">
              Kelola kata kunci keluhan pengguna berdasarkan kategori.
            </p>
          </header>
          <div className="lg:col-span-1 flex lg:place-self-end space-x-3 w-full">
            <div className="flex space-x-2 sm:w-full lg:w-auto">
              <AddCategoryDialog />
              <Search />
            </div>
          </div>
        </div>
        {isLoading ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mb-5">
            <CategoryCardSkeleton />
            <CategoryCardSkeleton />
            <CategoryCardSkeleton />
            <CategoryCardSkeleton />
            <CategoryCardSkeleton />
          </div>
        ) : (
          <div className={`grid grid-cols-1 gap-5 md:grid-cols-2 mb-5`}>
            {categories.map((category) => (
              <CategoryCard data={category} key={category.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Keywords;
