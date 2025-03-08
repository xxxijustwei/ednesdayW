import React, { HTMLAttributes, useState } from "react";
import { ERC721Metadata } from "../../api/azuki/types";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

interface Props {
    items: ERC721Metadata[];
}

export const Gallery = ({ items }: Props) => {

    return (
        items.slice(0, 100).map((item, index) => {
            const { name, image, attributes } = item;
            const imageUrl = image.replace("ipfs://", "https://ipfs.io/ipfs/");
            return (
                <div
                    key={index}
                    className="group relative border border-gray-200 rounded-lg overflow-hidden"
                >
                    <div className="aspect-square rounded-b-lg overflow-hidden">
                        <NFTImage
                            name={name}
                            imageUrl={imageUrl}
                            className="group-hover:scale-105 transition-all duration-300"
                        />
                    </div>
                    <div className="flex flex-col gap-1 px-2 py-3">
                        <p className="tracking-wider uppercase font-mono">{name}</p>
                        <p className="text-sm uppercase font-mono opacity-50">0xabcd...888</p>
                    </div>
                </div>
            )
        })
    )
}

interface NFTImageProps extends HTMLAttributes<HTMLDivElement> {
    name: string;
    imageUrl: string;
}

const NFTImage = ({ name, imageUrl, ...props }: NFTImageProps) => {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <div className="relative w-full h-full" {...props}>
            <Image
                src={imageUrl}
                alt={name}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
                onLoad={() => setIsLoading(false)}
                onError={() => setIsLoading(false)}
            />
            {isLoading && (
                <Skeleton className="absolute inset-0 w-full h-full" />
            )}
        </div>
    )
}