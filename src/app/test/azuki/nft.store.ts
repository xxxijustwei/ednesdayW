import { create } from 'zustand';
import { ERC721Metadata } from '@/app/api/azuki/types';

interface TraitCount {
    key: string;
    count: number;
}

interface State {
    nfts: ERC721Metadata[];
    traitCounts: Record<string, TraitCount[]>;
}

interface Filter {
    serialNumber: number | undefined;
    traits: Record<string, string[]>;
}

interface Action {
    setNFTs: (nfts: ERC721Metadata[]) => void;
    filterSerial: (serialNumber: number) => void;
    filterTraits: (traitsType: string, traitsValue: string) => void;
    getNFTs: (isFiltered?: boolean) => ERC721Metadata[];
}

const initialState = {
    nfts: [],
    traitCounts: {},
    serialNumber: undefined,
    traits: {},
}

export const useERC721Utils = create<State & Filter & Action>((set, get) => ({
    ...initialState,
    setNFTs: (nfts: ERC721Metadata[]) => {
        const traitCounts = getTraitCounts(nfts);
        set({ nfts, traitCounts });
    },
    filterSerial: (serialNumber: number) => {
        set({ serialNumber });
    },
    filterTraits: (traitsType: string, traitsValue: string) => {
        const traits = get().traits;
        const currentTraits = [...(traits[traitsType] || [])];
        
        set({
            traits: {
                ...traits,
                [traitsType]: currentTraits.includes(traitsValue)
                    ? currentTraits.filter(trait => trait !== traitsValue)
                    : [...currentTraits, traitsValue]
            }
        });
    },
    getNFTs: (isFiltered = false) => {
        const { nfts, serialNumber, traits } = get();
        if (!isFiltered) return nfts;
        
        const hasTraits = Object.keys(traits).length > 0;
        
        return nfts.filter(nft => {
            if (serialNumber && nft.serial_number !== serialNumber) return false;
            if (!hasTraits) return true;
            
            const nftTraitMap = new Map(
                nft.attributes.map(attr => [attr.trait_type, attr.value])
            );
            
            return Object.entries(traits).every(([traitType, traitValues]) => {
                const nftValue = nftTraitMap.get(traitType);
                return traitValues.length === 0 || (nftValue && traitValues.includes(nftValue));
            });
        });
    },
}));

const getTraitCounts = (nfts: ERC721Metadata[]) => {
    const traitMap = new Map<string, Map<string, number>>();

    for (const item of nfts) {
        for (const { trait_type, value } of item.attributes) {
            if (!traitMap.has(trait_type)) {
                traitMap.set(trait_type, new Map());
            }

            const valueMap = traitMap.get(trait_type)!;
            valueMap.set(value, (valueMap.get(value) || 0) + 1);
        }
    }

    const result: Record<string, TraitCount[]> = {};

    traitMap.forEach((valueMap, trait_type) => {
        result[trait_type] = Array.from(valueMap).map(([key, count]) => ({
            key,
            count
        }));
    });

    return result;
}