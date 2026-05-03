import React from "react";
import { Info, AlertTriangle, Lightbulb, XCircle, Quote } from "lucide-react";

type CalloutType = "info" | "warning" | "tip" | "danger" | "quote";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  /** @deprecated use title */
  heading?: string;
  children?: React.ReactNode;
  /** @deprecated use children */
  text?: string;
}

const config: Record<
  CalloutType,
  { icon: React.ReactNode; border: string; bg: string; iconColor: string; iconBg?: string }
> = {
  info: {
    icon: <Info size={20} />,
    border: "border-[var(--blue)]",
    bg: "bg-[var(--blue)]/0",
    iconColor: "text-[var(--blue)]",
    iconBg: "bg-[var(--blue)]",
  },
  warning: {
    icon: <AlertTriangle size={20} />,
    border: "border-[var(--yellow)]",
    bg: "bg-[var(--yellow)]/0",
    iconColor: "text-[var(--yellow)]",
    iconBg: "bg-[var(--yellow)]",
  },
  tip: {
    icon: <Lightbulb size={20} />,
    border: "border-[var(--green)]",
    bg: "bg-[var(--green)]/0",
    iconColor: "text-[var(--green)]",
    iconBg: "bg-[var(--green)]",
  },
  quote: {
    icon: <Quote size={20} fill="currentColor"/>,
    border: "border-[var(--pink)]",
    bg: "bg-[var(--pink)]/0",
    iconColor: "text-[var(--pink)]",
    iconBg: "bg-[var(--pink)]",
  },
  danger: {
    icon: <XCircle size={20} />,
    border: "border-destructive",
    bg: "bg-destructive/0",
    iconColor: "text-destructive",
    iconBg: "bg-destructive",
  },
};

export function Callout({
  type = "info",
  title,
  heading,
  children,
  text,
}: CalloutProps) {
  const { icon, border, bg, iconColor, iconBg } = config[type as CalloutType] ?? config.info;
  const label = title ?? heading;
  const body = children ?? text;

  return (
    <div className={`my-6 border-l-3 px-4 py-2 rounded-r-lg ${border} ${bg}`}>
      <div className={`flex items-center gap-2 mb-1 ${iconColor}`}>
          {icon}
      

        {label && (
          <span className="font-sans font-bold text-xl lowercase tracking-wide">
            {label}
          </span>
        )}
      </div>
      <div className="text-foreground font-medium text-xl leading-relaxed">{body}</div>
    </div>
  );
}
