"use client";

import { useEffect, useLayoutEffect, useState } from "react";

type UseMediaQueryOptions = {
  defaultValue?: boolean;
  initializeWithValue?: boolean;
};

type MediaSize =
  | "(max-width: 640px)" // sm
  | "(max-width: 768px)" // md
  | "(max-width: 1024px)" // lg
  | "(max-width: 1280px)" // xl
  | "(max-width: 1536px)"; // 2xl

const IS_SERVER = typeof window === "undefined";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function useMediaQuery(
  query: MediaSize,
  options?: UseMediaQueryOptions,
): boolean;

export function useMediaQuery(
  query: string,
  options?: UseMediaQueryOptions,
): boolean;

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {},
) {
  const getMatches = (query: string) => {
    if (IS_SERVER) {
      return defaultValue;
    }
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState(() => {
    if (initializeWithValue) {
      return getMatches(query);
    }
    return defaultValue;
  });

  const handleChange = () => {
    setMatches(getMatches(query));
  };

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query);

    handleChange();

    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
  }, [query]);

  return matches;
}

export type UseMediaQueryReturn = ReturnType<typeof useMediaQuery>;
