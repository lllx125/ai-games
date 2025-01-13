"use client";
import { autoSignIn, signIn } from "aws-amplify/auth";
import BrownButton from "../../(components)/BrownButton";
import { useEffect, useState } from "react";
import BrownInput from "@/app/(components)/BrownInput";
import BrownLink from "@/app/(components)/BrownLink";
import { useRouter } from "next/navigation";

import { Amplify } from "aws-amplify";
import config from "@/amplifyconfiguration.json";
Amplify.configure(config);

async function handleAutoSignIn() {
    try {
        const signInOutput = await autoSignIn();
        // handle sign-in steps
    } catch (error) {
        console.log(error);
    }
}

export default function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [warning, setWarning] = useState("");
    const router = useRouter();
    useEffect(() => {
        handleAutoSignIn();
    }, [router]);

    const handleSignIn = async () => {
        try {
            const { isSignedIn, nextStep } = await signIn({
                username,
                password,
            });
            router.push("/game-selection");
        } catch (error) {
            setWarning("Username or password is incorrect");
            console.log("error signing in", error);
        }
    };
    return (
        <div className="flex flex-col items-start flex-shrink-0 animate-fadeIn w-full px-[120px]">
            <h1 className="text-[48px] font-light leading-normal py-[35px]">
                Sign In
            </h1>
            <BrownInput
                label="Username"
                type="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <BrownInput
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {warning ? (
                <h3 className="flex leading-normal text-red-600">{warning}</h3>
            ) : (
                <></>
            )}
            <div className="py-[25px]">
                <BrownButton
                    text="Sign in"
                    w={140}
                    h={50}
                    size={20}
                    onClick={() => handleSignIn()}
                />
            </div>
            <div className="flex text-[20px] font-light leading-normal">
                <h3 className="mr-1">Don't have an account? </h3>
                <BrownLink href="sign-up" text="Sign up" />
            </div>
            <div className="flex text-[20px] font-light leading-normal">
                <BrownLink href="/home" text="Home" />
            </div>
        </div>
    );
}
