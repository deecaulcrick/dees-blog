import Link from "next/link";

export interface TimelineItem {
    role: string;
    company: string;
    companyHref?: string;
    dateRange: string;
    description: string;
}

interface TimelineProps {
    items: TimelineItem[];
}

function Timeline({ items }: TimelineProps) {
    return (
        <div className="relative">
            <div className="absolute left-[5px] top-2 bottom-2 w-px bg-border" />
            <div className="flex flex-col gap-10">
                {items.map((item, index) => (
                    <div key={index} className="relative pl-8">
                        <span className="absolute left-0 top-2 size-2.5 rounded-full border-2 border-muted-foreground bg-background" />
                        <h3 className="font-serif text-xl md:text-2xl">
                            {item.role} at{" "}
                            {item.companyHref ? (
                                <Link
                                    href={item.companyHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-theme-pink hover:underline"
                                >
                                    {item.company}
                                </Link>
                            ) : (
                                <span className="text-theme-pink">{item.company}</span>
                            )}
                        </h3>
                        <p className="mt-1 text-xs font-mono uppercase tracking-wide text-muted-foreground">
                            {item.dateRange}
                        </p>
                        <p className="mt-3 max-w-2xl text-base text-foreground/80">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Timeline;
