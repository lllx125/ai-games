import Image from "next/image";
import { Suspense } from "react";

/**
 * Renders the side image on the left for every page under /home
 */
export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex bg-[#fdffef]">
            {/* image on the left */}
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
            {/* content of eac specific page on the right */}
            <div className="flex-1 items-center flex justify-center">
                <Suspense>{children}</Suspense>
            </div>
        </div>
    );
}
