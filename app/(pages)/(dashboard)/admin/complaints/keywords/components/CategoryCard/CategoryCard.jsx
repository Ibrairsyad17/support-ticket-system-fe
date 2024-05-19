import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import KeywordPills from "@/app/(pages)/(dashboard)/admin/complaints/keywords/components/KeywordsList/KeywordPills";
import { AddKeywordDialog } from "@/app/(pages)/(dashboard)/admin/complaints/keywords/components/AddDialog/AddKeywordDialog";
import RemoveCategoryDialog from "@/app/(pages)/(dashboard)/admin/complaints/keywords/components/RemoveDialog/RemoveCategoryDialog";
import { Button } from "@/components/ui/button";
import KeywordListDialog from "@/app/(pages)/(dashboard)/admin/complaints/keywords/components/KeywordsList/KeywordListDialog";

const CategoryCard = ({ data }) => {
  const dataKeywordsPreview = data.keywords.slice(0, 3);
  console.log(data);
  return (
    <Card className="shadow-md shadow-gray-100 border-gray-100">
      <CardHeader>
        <CardTitle className="text-xl">{data.name}</CardTitle>
        <CardDescription>Kata kunci pada kategori {data.name}:</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex">
          {dataKeywordsPreview.length === 0 && (
            <span className="text-xs py-0 text-amber-400">
              Belum Memiliki Kata Kunci
            </span>
          )}
          {dataKeywordsPreview.map((keyword) => (
            <KeywordPills key={keyword.id} data={keyword} />
          ))}
          {data.keywords.length > 3 && (
            <KeywordListDialog
              more={data.keywords.length - 3}
              data={data.keywords}
              name={data.name}
            />
          )}
        </div>
      </CardContent>
      <CardFooter className="grid sm:grid-cols-2 gap-3">
        <AddKeywordDialog data={data.keywords} type="button" />
        <RemoveCategoryDialog id={data.id} />
      </CardFooter>
    </Card>
  );
};

export default CategoryCard;
