import { Textarea, TextareaContainer } from "@/registry/ui/textarea";

export const TextareaAutosizeExample = () => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-72">
      <TextareaContainer variant="bordered">
        <Textarea
          minRows={3}
          maxRows={8}
          disableResize
          placeholder="Min Rows 3, Max Rows 8"
        />
      </TextareaContainer>
    </div>
  );
};
