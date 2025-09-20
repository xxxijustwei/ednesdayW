"use client";

import { Pagination } from "@/registry/ui/pagination";
import { useState } from "react";

export const PaginationDemo = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={100}
      onChange={setCurrentPage}
      siblings={2}
    />
  );
};
