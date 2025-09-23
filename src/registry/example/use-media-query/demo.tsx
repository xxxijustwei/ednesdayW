import { useMediaQuery } from "@/registry/hooks/use-media-query";

export const UseMediaQueryDemo = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <div className="w-full max-w-48 flex flex-col items-center justify-center">
      <span>Is Mobile: {isMobile}</span>
    </div>
  );
};
