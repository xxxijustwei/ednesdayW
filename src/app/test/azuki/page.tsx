'use client'

import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '../../axios';
import { Gallery } from './_gallery';
import { ERC721Metadata } from '@/app/api/azuki/types';

const Page = () => {
    const { isFetched, data } = useQuery({
        queryKey: ['test'],
        queryFn: () => fetchData(),
    });

    const fetchData = async () => {
        const response = await axiosInstance.get<ERC721Metadata[]>('/api/azuki');
        if (response.status !== 200) return [];

        return response.data;
    }

    return (
        <div className='w-full'>
            <div className='w-full lg:w-3/4 px-4 mx-auto'>
                <div className='w-full p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4'>
                    {isFetched && <Gallery items={data} />}
                </div>
            </div>
        </div>
    )
}

export default Page;