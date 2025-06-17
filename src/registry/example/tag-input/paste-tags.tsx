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

const copyText = "Cry4Me, Die4U, Nice4What";

export const TagInputPasteTagsExample = () => {
  const [copy, isCopied] = useCopyToClipboard();
  const [values, setValues] = useState<string[]>([]);

  return (
    <div className="flex flex-col gap-2 w-full max-w-72">
      <div className="flex items-center gap-1.5">
        <span>{copyText}</span>
        <Button
          variant="outline"
          size="icon"
          onClick={() => copy(copyText)}
          disabled={isCopied}
        >
          {isCopied ? (
            <ClipboardCheckIcon size={16} />
          ) : (
            <ClipboardIcon size={16} />
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
          <TagInputBox placeholder="Paste tags here" />
        </TagInputContainer>
        <div className="flex flex-wrap gap-1.5">
          {values.map((value) => (
            <TagInputBadge key={value} value={value}>
              <span className="truncate">{value}</span>
            </TagInputBadge>
          ))}
        </div>
      </TagInput>
    </div>
  );
};
