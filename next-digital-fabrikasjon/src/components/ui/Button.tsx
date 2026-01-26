"use client";

import { useFormStatus } from "react-dom";
import { type ComponentProps } from "react";

type Props = ComponentProps<"button"> & {
  pendingText?: string;
};

export function Button({
  children,
  pendingText,
  className,
  type = "submit",
  ...props
}: Props) {
  const { pending, action } = useFormStatus();
  const isPending = pending && action === props.formAction;

  return (
    <button
      {...props}
      type={type}
      className={
        className ??
        "rounded-2xl bg-[#214C50] px-5 py-3 text-lg font-bold text-white shadow-md hover:bg-[#488B90]"
      }
      aria-disabled={pending}
    >
      <span className="leading-tight">{isPending ? pendingText : children}</span>
    </button>
  );
}
