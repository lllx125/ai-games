"use client";
import { Button } from "@aws-amplify/ui-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import IconText from "@/app/(components)/IconText";
import Link from "next/link";
import { SignOutIconText } from "@/app/(components)/SignOut";
import { useAuth } from "@/app/(components)/CustomAuthenticator";

export default function Sidebar() {
    const { user } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <div className="flex items-start h-screen">
            {/* Sidebar */}
            <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={
                    isOpen
                        ? { width: "300px", opacity: 1 }
                        : { width: 0, opacity: 0 }
                }
                transition={{ duration: 0.3 }}
                className="bg-white h-full overflow-hidden"
            >
                {/* entire sidebar layout */}
                <div className="w-[300px] px-[15px] flex flex-col items-center h-full pb-10 pt-[15px]">
                    {/* close button + upper text layout */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex w-[250px] flex-col items-start gap-[14px] h-full"
                    >
                        {/* Close sidebar button */}
                        <Button
                            className="flex justify-end items-center gap-[10px] self-stretch"
                            onClick={toggleSidebar}
                        >
                            <Image
                                src="/left.svg"
                                alt="close sidebar"
                                width={32}
                                height={32}
                            />
                        </Button>

                        {/* Upper Text content */}
                        <div className="flex flex-col items-center gap-[100px] self-stretch h-full">
                            {/* Profile, username and email */}
                            <div className="flex items-center gap-[15px] self-stretch">
                                <div className="flex bg-cyan-500 w-[70px] h-[70px] pb-1 flex-col justify-center items-center gap-[10px] rounded-[35px] ">
                                    <Link
                                        className=" transition-transform duration-300 hover:scale-125 text-white text-[40px] font-bold leading-normal"
                                        href={"/the-rizz-game/dashboard"}
                                    >
                                        {user?.username[0].toUpperCase()}
                                    </Link>
                                </div>
                                {/* Display username and email, if their are too long, use ...*/}
                                <div className="flex flex-col w-[170px] h-[70px]">
                                    <Link
                                        className="text-black text-[28px] font-bold hover:text-cyan-500"
                                        href={"/the-rizz-game/dashboard"}
                                    >
                                        {user && user?.username.length > 10
                                            ? user?.username.slice(0, 10) +
                                              "..."
                                            : user?.username}
                                    </Link>
                                    <h3 className="text-gray-500 text-[16px] font-normal">
                                        {user && user?.email.length > 20
                                            ? user?.email.slice(0, 20) + "..."
                                            : user?.email}
                                    </h3>
                                </div>
                            </div>
                            {/* Middle Icon text */}
                            <div className="flex flex-col justify-between h-full">
                                <div className="flex flex-col items-start gap-[45px]">
                                    <IconText
                                        icon="/home.svg"
                                        text="Dashboard"
                                        link="/the-rizz-game/dashboard"
                                    />
                                    <IconText
                                        icon="/chat.svg"
                                        text="Past chats"
                                        link="/the-rizz-game/chats"
                                    />
                                    <IconText
                                        icon="/add.svg"
                                        text="New game"
                                        link="/the-rizz-game"
                                    />
                                    <IconText
                                        icon="/award.svg"
                                        text="Score board"
                                        link="/the-rizz-game/score-board"
                                    />
                                </div>
                                {/* Signout icon text */}
                                <SignOutIconText />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Toggle Buttons */}
            <Button onClick={toggleSidebar}>
                {isOpen ? (
                    <></>
                ) : (
                    <div className="p-4">
                        <Image
                            src="/menu.svg"
                            alt="menu icon"
                            width={40}
                            height={40}
                        />
                    </div>
                )}
            </Button>
        </div>
    );
}
