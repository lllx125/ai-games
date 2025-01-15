import CustomAuthenticator from "../(components)/CustomAuthenticator";
import Sidebar from "./(components)/sidebar";

export default async function RizzGameLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <CustomAuthenticator>
            <div className="h-screen flex bg-[#F4F4F4]">
                <Sidebar />
                <div className="flex-1 relative overflow-auto">{children}</div>
            </div>
        </CustomAuthenticator>
    );
}
