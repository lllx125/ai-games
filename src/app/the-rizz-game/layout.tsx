import CustomAuthenticator from "../(components)/CustomAuthenticator";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <CustomAuthenticator>{children}</CustomAuthenticator>;
}
