export interface AzukiTokenConfig {
    name: string;
    image: string;
    attributes: {
        Type: string;
        Hair: string;
        Clothing: string;
        Eyes: string;
        Mouth: string;
        Offhand: string;
        Background: string;
    }
}

export interface ERC721Attribute {
    trait_type: string;
    value: string;
}

export interface ERC721Metadata {
    name: string;
    image: `ipfs://${string}` | `https://${string}`;
    attributes: ERC721Attribute[];
}