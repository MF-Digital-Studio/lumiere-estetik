"use client";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <main
            style={{
                opacity: 1,
                transform: "translateY(0)",
            }}
        >
            {children}
        </main>
    );
}
