"use client";
import { autoSignIn, getCurrentUser, signIn } from "aws-amplify/auth";
import BrownButton from "../../(components)/BrownButton";
import { useEffect, useState } from "react";
import BrownInput from "@/app/(components)/BrownInput";
import BrownLink from "@/app/(components)/BrownLink";
import { useRouter, useSearchParams } from "next/navigation";

import { Amplify } from "aws-amplify";
import config from "@/amplifyconfiguration.json";
import LoadingSpinner from "@/app/(components)/LoadingSpinner";
Amplify.configure(config);

export default function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [warning, setWarning] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const from = searchParams.get("from");
    useEffect(() => {
        handleAutoSignIn();
        checkSignIn();
    });

    const handleAutoSignIn = async () => {
        try {
            await autoSignIn();
            router.push(from ? "/" + from : "/");
            // handle sign-in steps
        } catch (error) {
            console.log(error);
        }
    };

    const checkSignIn = async () => {
        try {
            await getCurrentUser();
            router.push(from ? "/" + from : "/");
        } catch (error) {
            console.log(error);
        }
    };

    const handleSignIn = async () => {
        setLoading(true);
        try {
            await signIn({
                username,
                password,
            });
            router.push(from ? "/" + from : "/");
        } catch (error) {
            setWarning("Username or password is incorrect");
            console.log("error signing in", error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="flex flex-col items-start flex-shrink-0 animate-fadeIn w-full px-[120px]">
            {loading && <LoadingSpinner />}
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
                <h3 className="mr-1">Don&apos;t have an account? </h3>
                <BrownLink href={`sign-up?from=${from}`} text="Sign up" />
            </div>
            <div className="flex text-[20px] font-light leading-normal">
                <BrownLink href="/home" text="Home" />
            </div>
        </div>
    );
}
