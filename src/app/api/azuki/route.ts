import { axiosInstance } from "@/app/axios";
import { NextResponse } from "next/server";
import { AzukiTokenConfig, ERC721Metadata } from "./types";

export const GET = async () => {
    const response = await axiosInstance.get('https://www.azuki.com/api/azuki_token_configs');
    const data = response.data["AZUKIS"] as AzukiTokenConfig[];

    const metadata: ERC721Metadata[] = data.map((token) => {
        const imageUrl = token.image; // "https://ipfs.io/ipfs/QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/0.png"
        const ipfsHash = imageUrl.replace("https://ipfs.io/ipfs/", "");

        return {
            serial_number: Number(token.name.split('#')[1]),
            name: token.name,
            image: `ipfs://${ipfsHash}`,
            attributes: Object.entries(token.attributes).map(([key, value]) => ({
                trait_type: key,
                value: value
            }))
        }
    });
    
    return NextResponse.json(metadata);
}