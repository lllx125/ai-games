"use client";
import { Button } from "@aws-amplify/ui-react";
import { useRouter } from "next/navigation";
import { signOut } from "aws-amplify/auth";
import Image from "next/image";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

/*
 * a button to signout
 */
export default function SignOutButton() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const handleSignOut = async () => {
        setLoading(true);
        try {
            await signOut();
            router.push("/home");
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            {loading && <LoadingSpinner />}
            <Button
                className="flex w-[200px] h-[60px] p-[5px_30px] justify-center items-center rounded-[20px] bg-red-500 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-[#e7c7be] active:shadow-none"
                onClick={handleSignOut}
            >
                <div className="font-light leading-normal text-[20px]">
                    Sign out
                </div>
            </Button>
        </>
    );
}

/*
 * a text with an icon on the left for signout
 */
export function SignOutIconText() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const handleSignOut = async () => {
        setLoading(true);
        try {
            await signOut();
            router.push("/home");
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            {loading && <LoadingSpinner />}
            <div className="flex h-[42px] items-center gap-[30px] self-stretch">
                <Image src="/logout.svg" alt="Icon" width={30} height={30} />
                <div onClick={handleSignOut} className="cursor-pointer">
                    <h3 className="text-black text-[20px] font-normal leading-[28px] hover:text-cyan-500">
                        Logout
                    </h3>
                </div>
            </div>
        </>
    );
}
