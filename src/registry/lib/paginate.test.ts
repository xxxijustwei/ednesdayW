import { describe, expect, test } from "vitest";
import { paginate } from "./paginate";

describe("paginate function", () => {
    test.each([
        { current: 0, max: 5 },
        { current: 1, max: 0 },
    ])("should return null for invalid input: %j", (params) => {
        expect(paginate(params)).toBeNull();
    });

    test("should handle single page correctly", () => {
        expect(paginate({ current: 1, max: 1 })).toEqual({
            current: 1,
            items: [1],
            next: null,
            prev: null,
        });
    });

    test("should handle few pages correctly", () => {
        const cases = [
            {
                input: { current: 2, max: 3 },
                expected: {
                    current: 2,
                    prev: 1,
                    next: 3,
                    items: [1, 2, 3],
                },
            },
            {
                input: { current: 3, max: 3 },
                expected: {
                    current: 3,
                    prev: 2,
                    next: null,
                    items: [1, 2, 3],
                },
            },
        ];

        for (const { input, expected } of cases) {
            expect(paginate(input)).toEqual(expected);
        }
    });

    test.each([
        {
            name: "middle page",
            input: { current: 5, max: 10 },
            expected: {
                current: 5,
                prev: 4,
                next: 6,
                items: [1, "…", 3, 4, 5, 6, 7, "…", 10],
            },
        },
        {
            name: "first page",
            input: { current: 1, max: 10 },
            expected: {
                current: 1,
                prev: null,
                next: 2,
                items: [1, 2, 3, "…", 10],
            },
        },
        {
            name: "last page",
            input: { current: 10, max: 10 },
            expected: {
                current: 10,
                prev: 9,
                next: null,
                items: [1, "…", 8, 9, 10],
            },
        },
    ])("should handle $name correctly", ({ input, expected }) => {
        expect(paginate(input)).toEqual(expected);
    });

    test("should handle boundary cases correctly", () => {
        expect(paginate({ current: 4, max: 10 })).toEqual({
            current: 4,
            prev: 3,
            next: 5,
            items: [1, 2, 3, 4, 5, 6, "…", 10],
        });

        expect(paginate({ current: 9, max: 10 })).toEqual({
            current: 9,
            prev: 8,
            next: 10,
            items: [1, "…", 7, 8, 9, 10],
        });
    });

    test("should not show ellipsis for continuous pages", () => {
        expect(paginate({ current: 3, max: 5 })).toEqual({
            current: 3,
            prev: 2,
            next: 4,
            items: [1, 2, 3, 4, 5],
        });
    });
});
