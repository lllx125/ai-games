import Image from "next/image";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex bg-[#fdffef]">
            <div className="flex-none w-auto h-full">
                <Image
                    src="/villageBackground.png"
                    alt="village background"
                    width={800}
                    height={1024}
                    className="h-full w-auto"
                    priority
                />
            </div>

            <div className="flex-1 items-center flex justify-center">
                {children}
            </div>
        </div>
    );
}
