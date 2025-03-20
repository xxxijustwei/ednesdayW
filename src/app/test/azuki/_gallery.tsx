'use client'

import React, { HTMLAttributes, useState } from "react";
import { ERC721Metadata } from "../../api/azuki/types";
import { Skeleton } from "@/components/ui/skeleton";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface GalleryProps {
    initCount?: number;
    itemLoadCount?: number;
    items: ERC721Metadata[] | undefined;
}

export const Gallery = ({ items, initCount = 72, itemLoadCount = 32 }: GalleryProps) => {
    const [visibleScope, setVisibleScope] = useState<number>(initCount);
    const [ref] = useInView({
        threshold: 0,
        rootMargin: '0px 0px 300px 0px',
        onChange: (inView) => {
            if (inView) {
                setVisibleScope(prev => prev + itemLoadCount);
            }
        }
    });

    return (
        <>
            {
                items?.slice(0, visibleScope).map((item, index) => {
                    const { name, image } = item;
                    const imageUrl = image.replace("ipfs://", "https://ipfs.io/ipfs/");
                    return (
                        <div
                            key={index}
                            className="group relative border border-gray-200 rounded-lg"
                        >
                            <NFTImage
                                name={name}
                                imageUrl={imageUrl}
                            />
                            <div className="flex flex-col gap-1 px-2 py-3">
                                <p className="tracking-wider uppercase font-mono">{name}</p>
                                <p className="text-sm uppercase font-mono opacity-50">0xabcd...888</p>
                            </div>
                        </div >
                    )
                })
            }
            <div ref={ref} />
        </>
    )
}

interface NFTImageProps extends HTMLAttributes<HTMLDivElement> {
    name: string;
    imageUrl: string;
}

const NFTImage = ({ name, imageUrl, ...props }: NFTImageProps) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div
            className="relative aspect-square rounded-lg overflow-hidden group-hover:scale-102 transition-all duration-300"
            style={{
                boxShadow: '0 1px 1px rgba(0,0,0,.075),0 2px 2px rgba(0,0,0,.075),0 4px 4px rgba(0,0,0,.075),0 8px 8px rgba(0,0,0,.075),0 16px 16px rgba(0,0,0,.075)'
            }}
            {...props}
        >
            <Skeleton className={cn(
                "absolute inset-0 w-full h-full hidden",
                isLoading && "block"
            )} />
            <Image
                src={imageUrl}
                alt={name}
                width={0}
                height={0}
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="w-full h-auto"
                onLoad={() => setIsLoading(false)}
                onError={() => setIsLoading(false)}
            />
        </div>
    )
}