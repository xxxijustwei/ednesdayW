interface PaginateProps {
    currentPage: number;
    totalPages: number;
    siblings?: number;
}

const range = (start: number, end: number) => {
    return Array.from({ length: end - start }, (_, i) => i + start);
};

const between = (num: number, min: number, max: number) => {
    return Math.max(min, Math.min(num, max));
};

export const paginate = ({
    currentPage,
    totalPages,
    siblings = 2,
}: PaginateProps) => {
    const page = between(currentPage, 1, totalPages);
    const max = totalPages - 1;

    const left = between(
        page - siblings,
        2,
        Math.min(max - siblings * 2 - 1, max),
    );
    const right = between(
        page + siblings,
        Math.min(2 + siblings * 2 + 1, max),
        max,
    );

    const hasLeftEllipsis = left - 1 > 2;
    const hasRightEllipsis = totalPages - right > 2;

    const middle = range(
        left - 1 === 2 ? left - 1 : left,
        totalPages - right === 2 ? right + 2 : right + 1,
    );

    const items = [
        { type: "item", value: 1 },
        ...(hasLeftEllipsis
            ? [
                  {
                      type: "ellipsis",
                      value: between(page - siblings * 2 - 1, 1, totalPages),
                  },
              ]
            : []),
        ...middle.map((n) => ({ type: "item", value: n })),
        ...(hasRightEllipsis
            ? [
                  {
                      type: "ellipsis",
                      value: between(page + siblings * 2 + 1, 1, totalPages),
                  },
              ]
            : []),
        ...(totalPages >= 2 ? [{ type: "item", value: totalPages }] : []),
    ];

    return {
        prev: page > 1 ? page - 1 : null,
        next: page < totalPages ? page + 1 : null,
        current: page,
        items,
    };
};

export type PaginateReturn = ReturnType<typeof paginate>;
