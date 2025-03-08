'use client'

import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '../../axios';
import { Gallery } from './_gallery';

const Page = () => {
    const { isFetched, data } = useQuery({
        queryKey: ['test'],
        queryFn: () => fetchData(),
    });

    const fetchData = async () => {
        const response = await axiosInstance.get('/api/azuki');
        if (response.status !== 200) return [];
        
        return response.data;
    }
    
    return (
        <div className='w-full lg:w-3/4 mx-auto'>
            <div className='w-full p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4'>
                {isFetched && <Gallery items={data} />}
            </div>
        </div>
    )
}

export default Page;