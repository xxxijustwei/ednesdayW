"use client";

import { useMediaQuery } from "@/registry/hooks/use-media-query";
import { Pagination } from "@/registry/ui/pagination";
import { useState } from "react";

export const PaginationDemo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const isSM = useMediaQuery("(max-width: 640px)");

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={100}
      onChange={setCurrentPage}
      siblings={isSM ? 1 : 2}
    />
  );
};
