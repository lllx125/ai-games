"use client";
import { Button } from "@aws-amplify/ui-react";
import { useRouter } from "next/navigation";
import { signOut } from "aws-amplify/auth";

export default function SignOutButton() {
    const router = useRouter();

    const handleSignOut = async () => {
        try {
            await signOut();
            router.push("/home");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Button
            className="flex w-[200px] h-[60px] p-[5px_30px] justify-center items-center rounded-[20px] bg-red-500 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-[#e7c7be] active:shadow-none"
            onClick={handleSignOut}
        >
            <div className="font-light leading-normal text-[20px]">
                Sign out
            </div>
        </Button>
    );
}
