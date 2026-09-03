import React from "react";

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="layout">
            <header>
            </header>

            <div className="content">
                <aside>
                </aside>

                <main>
                    {children}
                </main>
            </div>
        </div>
    );
}