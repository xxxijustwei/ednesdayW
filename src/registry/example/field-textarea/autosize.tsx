import { FieldTextarea } from "@/registry/ui/field-textarea";

export const FieldTextareaAutosizeExample = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      <FieldTextarea
        id="field-textarea-autosize"
        label="Bio"
        variant="bordered"
        minRows={3}
        maxRows={8}
        disableResize
        placeholder="Min Rows 3, Max Rows 8"
      />
    </div>
  );
};
