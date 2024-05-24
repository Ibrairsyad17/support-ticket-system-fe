"use client";
import React from "react";
import { AddCategoryDialog } from "@/app/(pages)/(dashboard)/admin/complaints/keywords/components/AddDialog/AddCategoryDialog";
import Search from "@/app/(pages)/(dashboard)/admin/complaints/keywords/components/SeachInput";
import { useSession } from "next-auth/react";
import CategoryCard from "@/app/(pages)/(dashboard)/admin/complaints/keywords/components/CategoryCard/CategoryCard";
import CategoryCardSkeleton from "@/app/(pages)/(dashboard)/admin/complaints/keywords/components/CategoryCard/CategoryCardSkeleton";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  getError,
  getStatus,
  selectAllKeywords,
} from "@/app/redux/slices/keywordSlice";

const Keywords = () => {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = React.useState(true);
  const dispatch = useDispatch();
  const categoriesData = useSelector(selectAllKeywords);
  const categoriesDataStatus = useSelector(getStatus);
  const error = useSelector(getError);

  React.useEffect(() => {
    setIsLoading(true);
    if (session?.token.data.token) {
      if (categoriesDataStatus === "idle") {
        dispatch(fetchCategories(session?.token.data.token));
      }
    }
    setIsLoading(false);
  }, [session?.token.data.token, categoriesDataStatus, dispatch]);

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
            <div className="flex justify-between space-x-2 sm:w-full">
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
            {categoriesData.map((category) => (
              <CategoryCard data={category} key={category.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Keywords;
