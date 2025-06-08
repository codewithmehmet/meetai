"use client";

import { AlertCircle } from "lucide-react";

interface ErrorStateProps {
  title?: string;
  description?: string;
}

export const ErrorState = ({
  title = "An error occurred",
  description = "Something went wrong. Please try again later.",
}: ErrorStateProps) => {
  return (
    <div className="flex flex-1 items-center justify-center py-4 px-8">
      <div className="flex flex-col items-center justify-center gap-y-6 bg-background rounded-lg p-10 shadow-sm">
        <AlertCircle className="size-6 text-destructive" />
        <div className="flex flex-col gap-y-2 text-center">
          <h6 className="text-lg font-medium">{title}</h6>
          {description && <p className="text-sm">{description}</p>}
        </div>
      </div>
    </div>
  );
};
