import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { Button } from "@/registry/ui/button";
import {
  TagInput,
  TagInputBadge,
  TagInputBox,
  TagInputContainer,
} from "@/registry/ui/tag-input";
import { ClipboardCheckIcon, ClipboardIcon } from "lucide-react";
import { useState } from "react";

const copyText = "Cry For Me, Die For You, Nice For What";

export const TagInputPasteTagsExample = () => {
  const [copy, isCopied] = useCopyToClipboard();
  const [values, setValues] = useState<string[]>([]);

  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      <div className="flex items-center justify-between gap-1.5">
        <span>{copyText}</span>
        <Button
          variant="outline"
          size="icon"
          onClick={() => copy(copyText)}
          disabled={isCopied}
        >
          {isCopied ? (
            <ClipboardCheckIcon className="w-4 h-4" />
          ) : (
            <ClipboardIcon className="w-4 h-4" />
          )}
        </Button>
      </div>
      <TagInput
        values={values}
        onValuesChange={setValues}
        size="md"
        pasteDelimiter=","
      >
        <TagInputContainer variant="bordered">
          {values.map((value) => (
            <TagInputBadge key={value} value={value}>
              <span className="truncate">{value}</span>
            </TagInputBadge>
          ))}
          <TagInputBox placeholder="Paste tags here" />
        </TagInputContainer>
      </TagInput>
    </div>
  );
};
