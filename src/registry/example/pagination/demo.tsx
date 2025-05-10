"use client";

import { useDeviceDetection } from "@/registry/hooks/use-device-detection";
import { Pagination } from "@/registry/ui/pagination";
import { useState } from "react";

export const PaginationDemo = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const device = useDeviceDetection();

    return (
        <Pagination
            currentPage={currentPage}
            totalPages={100}
            onChange={setCurrentPage}
            siblings={device === "mobile" ? 1 : 2}
        />
    );
};
