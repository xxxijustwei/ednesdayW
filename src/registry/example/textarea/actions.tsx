"use client";

import { Button } from "@/registry/ui/button";
import { Textarea, TextareaContainer } from "@/registry/ui/textarea";
import { PencilIcon } from "lucide-react";
import { useState } from "react";

export const TextareaActionsExample = () => {
  const [message, setMessage] = useState("Hello, world!");
  const [input, setInput] = useState(message);
  const [edit, setEdit] = useState(true);

  return (
    <div
      className="w-full max-w-xl group border p-6 rounded-4xl"
      data-edit={edit.toString()}
    >
      <div className="w-full flex flex-col gap-0.5 items-end group-data-[edit=true]:hidden">
        <div className="bg-secondary rounded-2xl px-3 py-2 ml-auto">
          <span className="whitespace-pre-line">{message}</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="size-7"
          onClick={() => {
            setEdit(true);
          }}
        >
          <PencilIcon className="size-4! text-secondary-foreground" />
        </Button>
      </div>
      <TextareaContainer
        variant="faded"
        className="px-4 py-3 rounded-3xl shadow-none border-transparent group-data-[edit=false]:hidden"
      >
        <Textarea
          minRows={3}
          maxRows={8}
          disableResize
          value={input}
          className="no-scrollbar"
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full"
            onClick={() => {
              setInput(message);
              setEdit(false);
            }}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            size="sm"
            className="rounded-full"
            onClick={() => {
              setMessage(input);
              setEdit(false);
            }}
          >
            Save
          </Button>
        </div>
      </TextareaContainer>
    </div>
  );
};
