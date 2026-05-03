import React from "react";

interface DividerProps extends React.HTMLAttributes<HTMLElement> {
  label?: string;
}

export function Divider({ label, ...props }: DividerProps) {
  if (label) {
    return (
      <div className="relative my-8 flex items-center" role="separator">
        <div className="flex-1 border-t border-border" />
        <span className="mx-4 text-xs font-mono text-muted-foreground uppercase tracking-widest">
          {label}
        </span>
        <div className="flex-1 border-t border-border" />
      </div>
    );
  }
  return <hr className="my-8 border-border" {...props} />;
}
