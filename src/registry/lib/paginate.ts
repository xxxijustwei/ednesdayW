interface PaginateProps {
    current: number;
    max: number;
}

interface PaginateReturn {
    prev: number | null;
    next: number | null;
    current: number;
    items: (number | "…")[];
}

export const paginate = ({
    current,
    max,
}: PaginateProps): PaginateReturn | null => {
    if (!current || !max) {
        return null;
    }

    const prev = current === 1 ? null : current - 1;
    const next = current === max ? null : current + 1;
    const items: (number | "…")[] = [1];

    if (current === 1 && max === 1) {
        return { current, prev, next, items };
    }

    if (current > 4) {
        items.push("…");
    }

    const RANGE = 2;
    const rangeStart = current - RANGE;
    const rangeEnd = current + RANGE;

    for (
        let i = rangeStart > 2 ? rangeStart : 2;
        i <= Math.min(max, rangeEnd);
        i++
    ) {
        items.push(i);
    }

    if (rangeEnd + 1 < max) {
        items.push("…");
    }
    if (rangeEnd < max) {
        items.push(max);
    }

    return { current, prev, next, items };
};
