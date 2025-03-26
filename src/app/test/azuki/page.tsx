"use client";

import type { ERC721Metadata } from "@/app/api/azuki/types";
import { axiosInstance } from "@/axios";
import { useQuery } from "@tanstack/react-query";
import { Gallery } from "./_gallery";

const Page = () => {
    const { isFetched, data } = useQuery({
        queryKey: ["azuki-test"],
        queryFn: () => fetchData(),
        initialData: [],
    });

    const fetchData = async (): Promise<ERC721Metadata[]> => {
        try {
            const response =
                await axiosInstance.get<ERC721Metadata[]>("/api/azuki");
            return response.data || [];
        } catch (error) {
            console.error("Failed to fetch Azuki data:", error);
            return [];
        }
    };

    return (
        <div className="w-full">
            <div className="w-full lg:w-3/4 px-4 mx-auto">
                <div className="w-full p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
                    {isFetched && <Gallery items={data} />}
                </div>
            </div>
        </div>
    );
};

export default Page;
