import React from "react";
import Footer from "@/components/Footer";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Blog posts',
}

export default function PostLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main>{children}
            <div className="w-full">
                <Footer />
            </div>
        </main>
    );
}