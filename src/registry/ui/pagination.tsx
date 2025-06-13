"use client";

import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { paginate } from "@/registry/lib/paginate";
import { useMemo } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  siblings?: number;
  onChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  siblings = 2,
  onChange,
}: PaginationProps) => {
  const { prev, next, current, items } = useMemo(() => {
    return paginate({
      currentPage: currentPage + 1,
      totalPages,
      siblings,
    });
  }, [currentPage, totalPages, siblings]);

  return (
    <PaginationComponent>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className="cursor-pointer"
            onClick={() => {
              if (prev === null) return;
              onChange(prev - 1);
            }}
          />
        </PaginationItem>
        {items.map((item) => {
          if (item.type === "item") {
            return (
              <PaginationItem key={`${item.type}-${item.value}`}>
                <PaginationLink
                  className="cursor-pointer"
                  isActive={item.value === current}
                  onClick={() => {
                    onChange(item.value - 1);
                  }}
                >
                  {item.value}
                </PaginationLink>
              </PaginationItem>
            );
          }
          if (item.type === "ellipsis") {
            return (
              <PaginationItem key={`${item.type}-${item.value}`}>
                <PaginationEllipsis
                  className="cursor-pointer"
                  onClick={() => {
                    onChange(item.value - 1);
                  }}
                />
              </PaginationItem>
            );
          }
        })}
        <PaginationItem>
          <PaginationNext
            className="cursor-pointer"
            onClick={() => {
              if (next === null) return;
              onChange(next - 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationComponent>
  );
};
