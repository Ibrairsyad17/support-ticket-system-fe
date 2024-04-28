import React from "react";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import KeywordPills from "@/app/(pages)/(dashboard)/admin/complaints/keywords/components/KeywordPills";
import { Button } from "@/components/ui/button";
import Search from "@/app/(pages)/(dashboard)/admin/complaints/keywords/components/SeachInput";
import { AddCategoryDialog } from "@/app/(pages)/(dashboard)/admin/complaints/keywords/components/AddCategoryDialog";
import { AddKeywordDialog } from "./components/AddKeywordDialog";
import RemoveCategoryDialog from "./components/RemoveCategoryDialog";

export const metadata = {
  title: "Daftar Kata Kunci | Helptix",
  description: "Daftar Kata Kunci",
};

const KeywordPage = () => {
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
              <Button variant="outline" size="icon">
                <MixerHorizontalIcon className="h-4 w-4 text-amber-500" />
              </Button>
            </div>
          </div>
        </div>
        <div className={`grid grid-cols-1 lg:grid-cols-2`}>
          <Card className="shadow-md shadow-gray-100 border-gray-100">
            <CardHeader>
              <CardTitle className="text-xl">Aplikasi</CardTitle>
              <CardDescription>
                Kata kunci pada kategori aplikasi:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex">
                <KeywordPills />
              </div>
            </CardContent>
            <CardFooter className="grid sm:grid-cols-2 gap-3">
              <AddKeywordDialog />
              <RemoveCategoryDialog />
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default KeywordPage;
