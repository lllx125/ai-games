import Image from "next/image";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex items-center bg-[#fdffef]">
            <Image
                src="/villageBackground.png"
                alt="village background"
                width={800}
                height={1024}
            />

            <div className="items-center">{children}</div>
        </div>
    );
}
