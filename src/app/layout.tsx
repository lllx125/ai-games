import "./globals.css";
import "@fontsource/inter";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <title>AI Games</title>
            </head>
            <body>{children}</body>
        </html>
    );
}
