export default function BlogLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <nav className="bg-cyan-400">Blog Layout</nav>
            <main>{children}</main>
        </>
    )
}
