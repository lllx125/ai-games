import Link from "next/link";
import "./globals.css";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                {/* The navigation bar, it shows up in all pages. Next.js has its link structure the same as the folder structure, so make the href accordingly */}
                <nav className="bg-gray-300 p-4">
                    <Link className="m-4" href="/">
                        Home
                    </Link>
                    <Link className="m-4" href="/score-board">
                        Score Board
                    </Link>
                    <Link className="m-4" href="/add-user">
                        Add User
                    </Link>
                </nav>
                {/* The content of all the pages comes here */}
                {children}
            </body>
        </html>
    );
}
