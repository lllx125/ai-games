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

/**
 * Renders the signin page
 */
export default function SignIn() {
    // basic inputs for sign in
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // an error message to the user, whether signin is successful
    const [warning, setWarning] = useState("");
    // displays a loading spinner during sign in
    const [loading, setLoading] = useState(false);
    // router to redirect
    const router = useRouter();
    // getting the previous link from query to redirect back to this page after signing in
    const searchParams = useSearchParams();
    const from = searchParams.get("from");
    // do auto signin and checks whether the user has already signed in
    useEffect(() => {
        checkSignIn();
        handleAutoSignIn();
    });
    /**
     * auto signin
     */
    const handleAutoSignIn = async () => {
        try {
            await autoSignIn();
            router.push(from ? "/" + from : "/"); // if `from` is null go to home, or else go to previous location
            // handle sign-in steps
        } catch (error) {
            console.log(error);
        }
    };
    /**
     * check signin status
     */
    const checkSignIn = async () => {
        try {
            await getCurrentUser();
            router.push(from ? "/" + from : "/"); // if `from` is null go to home, or else go to previous location
        } catch (error) {
            console.log(error);
        }
    };

    // submit the form when `Enter` is pressed
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Enter") {
                handleSignIn();
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
     * signin the user
     */
    const handleSignIn = async () => {
        setLoading(true); //display loading spinner
        try {
            await signIn({
                username,
                password,
            });
            //redirect if signin successful
            router.push(from ? "/" + from : "/"); // if `from` is null go to home, or else go to previous location
        } catch (error) {
            // if sign in is not successful
            setWarning("Username or password is incorrect");
            console.log("error signing in", error);
        } finally {
            setLoading(false); //hide loading spinner
        }
    };
    return (
        <div className="flex flex-col items-start flex-shrink-0 animate-fadeIn w-full px-[120px]">
            {/* whether to show loading spinner */}
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
            {/* whether to show warning statement */}
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
                {/* the href passes a from link to the signup page using query */}
                <BrownLink href={`sign-up?from=${from}`} text="Sign up" />
            </div>
            <div className="flex text-[20px] font-light leading-normal">
                <BrownLink href="/home" text="Home" />
            </div>
        </div>
    );
}
