"use client";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  return (
    <div className="lg:ps-72">
      <h1 className="my-5">Experiment Page</h1>
    </div>
  );
};

export default Page;
