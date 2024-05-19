import React from "react";
import ListComplaints from "@/app/(pages)/(dashboard)/admin/complaints/list-complaints/ListComplaints";

export const metadata = {
  title: "Daftar Keluhan | Helptix",
  description: "Daftar Keluhan Pengguna",
};

const ListComplaintsPage = async () => {
  return (
    <>
      <ListComplaints />
    </>
  );
};

export default ListComplaintsPage;
