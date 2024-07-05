import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  getStatus,
  selectAllKeywords,
} from "@/app/redux/slices/keywordSlice";
import React, { useEffect } from "react";
import { getKeywords } from "@/app/api/repository/keywordsRepository";
import { useToast } from "@/components/ui/use-toast";

export default function useCategories() {
  // Session
  const { data: session } = useSession();

  // Selectors & Dispatch
  const categories = useSelector(selectAllKeywords);
  const dispatch = useDispatch();
  const getStatusInfo = useSelector(getStatus);

  // States
  const [keywords, setKeywords] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  // Fetching Data
  const fetchAllKeywords = async () => {
    const res = await getKeywords(session?.token.data.token);
    if (res) {
      const data = res.data.data.keywords;
      setKeywords(data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (session?.token.data.token) {
      if (getStatusInfo === "idle") {
        dispatch(fetchCategories(session?.token.data.token));
        fetchAllKeywords();
      }
      categories;
    }
  }, [session?.token.data.token, getStatusInfo, dispatch, categories]);

  return { categories, keywords, isLoading };
}
