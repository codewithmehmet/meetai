"use client";

import { Loader2 } from "lucide-react";

interface LoadingStateProps {
  title?: string;
  description?: string;
}

export const LoadingState = ({
  title = "Loading...",
  description,
}: LoadingStateProps) => {
  return (
    <div className="flex flex-1 items-center justify-center py-4 px-8">
      <div className="flex flex-col items-center justify-center gap-y-6 bg-background rounded-lg p-10 shadow-sm">
        <Loader2 className="size-6 animate-spin text-primary" />
        <div className="flex flex-col gap-y-2 text-center">
          <h6 className="text-lg font-medium">{title}</h6>
          {description && <p className="text-sm">{description}</p>}
        </div>
      </div>
    </div>
  );
};
