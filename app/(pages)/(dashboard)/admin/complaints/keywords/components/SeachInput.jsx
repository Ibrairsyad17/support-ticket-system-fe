import { Input } from "@/components/ui/input";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { filteredCategories } from "@/app/redux/slices/keywordSlice";

const Search = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const filterCategories = () => {
    dispatch(filteredCategories(inputRef.current.value));
  };
  return (
    <div className="flex space-x-4 items-center">
      <span className="text-gray-500 text-sm">Cari Kata Kunci:</span>
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] lg:w-[400px]"
        ref={inputRef}
        onChange={filterCategories}
      />
    </div>
  );
};

export default Search;
