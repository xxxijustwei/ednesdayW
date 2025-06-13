import { Index } from "@/__registry__";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Loader2, RotateCcw } from "lucide-react";
import * as React from "react";
import { ComponentWrapper } from "./component-wrapper";
import { OpenInV0Button } from "./open-in-v0-button";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  align?: "center" | "start" | "end";
  preview?: boolean;
}

export const ComponentPreview = ({
  name,
  children,
  className,
  align = "center",
  preview = false,
  ...props
}: ComponentPreviewProps) => {
  const [key, setKey] = React.useState(0);
  const Codes = React.Children.toArray(children) as React.ReactElement[];
  const Code = Codes[0];

  const Preview = React.useMemo(() => {
    const Component = Index[name]?.component;

    if (!Component) {
      console.error(`Component with name "${name}" not found in registry.`);
      return (
        <p className="text-sm text-muted-foreground">
          Component{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {name}
          </code>{" "}
          not found in registry.
        </p>
      );
    }

    return <Component />;
  }, [name]);

  return (
    <div
      className={cn(
        "relative my-4 flex flex-col space-y-2 lg:max-w-[120ch]",
        className,
      )}
      {...props}
    >
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        {!preview && (
          <div className="flex items-center justify-between pb-1">
            <TabsList className="w-full justify-start rounded-none bg-transparent p-0">
              <TabsTrigger
                value="preview"
                className="flex-none relative h-8 rounded-none border-0 border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary dark:data-[state=active]:border-b-primary dark:data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none data-[state=inactive]:hover:text-accent-foreground hover:cursor-pointer"
              >
                Preview
              </TabsTrigger>
              <TabsTrigger
                value="code"
                className="flex-none relative h-8 rounded-none border-0 border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary dark:data-[state=active]:border-b-primary dark:data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none data-[state=inactive]:hover:text-accent-foreground hover:cursor-pointer"
              >
                Code
              </TabsTrigger>
            </TabsList>
            <div className="flex items-center justify-end gap-2">
              <Button
                onClick={() => setKey((prev) => prev + 1)}
                className="flex items-center rounded-lg px-3 py-1"
                variant="ghost"
                size="icon"
              >
                <RotateCcw aria-label="restart-btn" size={16} />
              </Button>
              <OpenInV0Button url={`${siteConfig.url}/r/${name}.json`} />
            </div>
          </div>
        )}
        <TabsContent value="preview" className="relative rounded-md">
          <ComponentWrapper uniqueKey={key}>
            <React.Suspense
              fallback={
                <div className="flex items-center text-sm text-muted-foreground">
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Loading...
                </div>
              }
            >
              {Preview}
            </React.Suspense>
          </ComponentWrapper>
        </TabsContent>
        <TabsContent value="code">
          <div className="flex flex-col">
            <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[480px] [&_pre]:overflow-auto">
              {Code}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
