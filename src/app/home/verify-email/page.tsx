"use client";
import { autoSignIn, confirmSignUp, resendSignUpCode } from "aws-amplify/auth";
import BrownButton from "../../(components)/BrownButton";
import { Suspense, useEffect, useState } from "react";
import BrownInput from "@/app/(components)/BrownInput";
import BrownLink from "@/app/(components)/BrownLink";
import { useRouter, useSearchParams } from "next/navigation";
import { Amplify } from "aws-amplify";
import config from "@/amplifyconfiguration.json";
import LoadingSpinner from "@/app/(components)/LoadingSpinner";
Amplify.configure(config);

/**
 * Renders email verification page
 */
export default function VerifyEmail() {
    // basic inputs for email verification
    const [code, setCode] = useState("");
    // displays a loading spinner during verification
    const [loading, setLoading] = useState(false);
    // an error message to the user, whether verification code is correct
    const [warning, setWarning] = useState("");
    // router to redirect
    const router = useRouter();
    // getting the previous link from query to redirect back to this page after signing in
    const searchParams = useSearchParams();
    const from = searchParams.get("from");
    // getting the username passed from signup
    const username = "" + searchParams.get("user");
    // resends the verification code to the email
    const resendCode = () => resendSignUpCode({ username: username });

    // submit the form when `Enter` is pressed
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Enter") {
                handleSignUpConfirmation();
            }
        };

        // Add event listener
        document.addEventListener("keydown", handleKeyDown);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    });

    /**
     * verifies the user
     */
    const handleSignUpConfirmation = async () => {
        setLoading(true); //display loading spinner
        try {
            await confirmSignUp({
                username,
                confirmationCode: String(parseInt(code)),
            });
            await autoSignIn();
            router.push(from ? "/" + from : "/"); // if `from` is null go to home, or else go to previous location
        } catch (error) {
            // If fail to verify
            setWarning("Your code is incorrect");
            console.log(error);
        } finally {
            setLoading(false); //hide loading spinner
        }
    };
    return (
        <Suspense>
            <div className="flex flex-col items-start flex-shrink-0 animate-fadeIn w-full px-[120px]">
                {/* whether to show loading spinner */}
                {loading && <LoadingSpinner />}
                <h1 className="text-[48px] font-light leading-normal py-[20px]">
                    Verify your email
                </h1>
                <h3 className="text-[24px] font-light leading-normal py-[15px]">
                    We have sent a verification code to your email
                </h3>
                <BrownInput
                    label="Verification Code"
                    type="input"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                />
                {/* whether to show warning statement */}
                {warning ? (
                    <h3 className="flex leading-normal text-red-600">
                        {warning}
                    </h3>
                ) : (
                    <></>
                )}
                <div
                    className="flex text-[20px] font-light leading-normal"
                    onClick={resendCode}
                >
                    <BrownLink href="#" text="Resend Code" />
                </div>
                <div className="py-[25px]">
                    <BrownButton
                        text="Verify"
                        w={140}
                        h={50}
                        size={20}
                        onClick={() => handleSignUpConfirmation()}
                    />
                </div>
            </div>
        </Suspense>
    );
}
