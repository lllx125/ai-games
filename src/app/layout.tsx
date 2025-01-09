import Link from "next/link";
import "./globals.css";
import { Amplify } from "aws-amplify";
import config from "@/amplifyconfiguration.json";
import { generateClient } from "aws-amplify/api";
Amplify.configure(config);
const client = generateClient();

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
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
                {children}
            </body>
        </html>
    );
}
