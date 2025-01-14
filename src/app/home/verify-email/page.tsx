"use client";
import {
    autoSignIn,
    confirmSignUp,
    ConfirmSignUpInput,
} from "aws-amplify/auth";
import BrownButton from "../../(components)/BrownButton";
import { useState } from "react";
import BrownInput from "@/app/(components)/BrownInput";
import BrownLink from "@/app/(components)/BrownLink";
import { useRouter, useSearchParams } from "next/navigation";

import { Amplify } from "aws-amplify";
import config from "@/amplifyconfiguration.json";
import LoadingSpinner from "@/app/(components)/LoadingSpinner";
Amplify.configure(config);

export default function VerifyEmail() {
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);
    const [warning, setWarning] = useState("");
    const router = useRouter();
    const searchParams = useSearchParams();
    const from = searchParams.get("from");
    const username = "" + searchParams.get("user");
    const handleSignUpConfirmation = async () => {
        setLoading(true);
        try {
            const { isSignUpComplete, nextStep } = await confirmSignUp({
                username,
                confirmationCode: String(parseInt(code)),
            });
            await autoSignIn();
            router.push(from ? "/" + from : "/");
        } catch (error) {
            setWarning("Your code is incorrect");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="flex flex-col items-start flex-shrink-0 animate-fadeIn w-full px-[120px]">
            {loading && <LoadingSpinner />}
            <h1 className="text-[48px] font-light leading-normal py-[35px]">
                Verify your email
            </h1>
            <BrownInput
                label="Verification Code"
                type="input"
                value={code}
                onChange={(e) => setCode(e.target.value)}
            />
            {warning ? (
                <h3 className="flex leading-normal text-red-600">{warning}</h3>
            ) : (
                <></>
            )}
            <div className="py-[25px]">
                <BrownButton
                    text="Verify"
                    w={140}
                    h={50}
                    size={20}
                    onClick={() => handleSignUpConfirmation()}
                />
            </div>
            <div className="flex text-[20px] font-light leading-normal">
                <BrownLink href={"sign-up?from=" + from} text="Back" />
            </div>
        </div>
    );
}
