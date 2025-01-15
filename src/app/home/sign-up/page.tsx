"use client";
import { signUp } from "aws-amplify/auth";
import BrownButton from "../../(components)/BrownButton";
import { useEffect, useState } from "react";
import BrownInput from "@/app/(components)/BrownInput";
import BrownLink from "@/app/(components)/BrownLink";
import { useRouter, useSearchParams } from "next/navigation";
import { Amplify } from "aws-amplify";
import config from "@/amplifyconfiguration.json";
import { createUser } from "@/graphql/mutations";
import { generateClient } from "aws-amplify/api";
import LoadingSpinner from "@/app/(components)/LoadingSpinner";
Amplify.configure(config);
const client = generateClient();

/**
 * Renders the signup page
 */
export default function SignUp() {
    // basic inputs for sign up
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // an error message to the user, whether email is in correct format, whether password matches
    const [warning, setWarning] = useState("");
    // displays a loading spinner during sign up
    const [loading, setLoading] = useState(false);
    // Regex to check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // router to redirect
    const router = useRouter();
    // getting the previous link from query to redirect back to this page after signing in
    const searchParams = useSearchParams();
    const from = searchParams.get("from");

    // submit the form when `Enter` is pressed
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Enter") {
                handleSignUp();
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
     * signup the user
     */
    const handleSignUp = async () => {
        //test email format
        if (emailRegex.test(email)) {
            setWarning("");
        } else {
            setWarning("Invalid email");
            return;
        }
        //test password length
        if (password.length >= 8) {
            setWarning("");
        } else {
            setWarning("Password must contain at least 8 characters");
            return;
        }
        //test password match
        if (password == confirmPassword) {
            setWarning("");
        } else {
            setWarning("Password do not match");
            return;
        }
        setLoading(true); //display loading spinner
        try {
            await signUp({
                username,
                password,
                options: {
                    userAttributes: {
                        email,
                    },
                    autoSignIn: true, // setup auto signin
                },
            });
            // also upload the user to Dynamo database for easier management
            const newUser = {
                id: username.toLowerCase(),
                username: username,
                email: email,
                score: 0,
            };
            // upload the user
            await client.graphql({
                query: createUser,
                variables: { input: newUser },
            });
            // next step: verify email, amplify will automatically send an email with code to the user
            // pass username and previous link to the page
            router.push("verify-email?from=" + from + "&user=" + username);
        } catch (error) {
            if (
                error instanceof Error &&
                error.name == "UsernameExistsException"
            ) {
                // if the username is registered
                setWarning("Username already exists");
            }
            if (error instanceof Error && error.name == "EmptySignUpUsername") {
                // if the username is registered
                setWarning("Username cannot be empty");
            }
            console.log(error);
        } finally {
            setLoading(false); //hide loading bar
        }
    };

    return (
        <div className="flex flex-col items-start flex-shrink-0 animate-fadeIn w-full px-[120px]">
            {/* whether to show loading spinner */}
            {loading && <LoadingSpinner />}
            <h1 className="text-[48px] font-light leading-normal py-[35px]">
                Sign Up
            </h1>
            <BrownInput
                label="Username"
                type="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <BrownInput
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <BrownInput
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <BrownInput
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {/* whether to show warning statement */}
            {warning ? (
                <h3 className="flex leading-normal text-red-600">{warning}</h3>
            ) : (
                <></>
            )}
            <div className="py-[25px]">
                <BrownButton
                    text="Sign up"
                    w={140}
                    h={50}
                    size={20}
                    onClick={() => handleSignUp()}
                />
            </div>
            <div className="flex text-[20px] font-light leading-normal">
                <h3 className="mr-1">Already have an account? </h3>
                {/* the href passes a from link to the signin page using query */}
                <BrownLink href={`sign-in?from=${from}`} text="Sign in" />
            </div>
            <div className="flex text-[20px] font-light leading-normal">
                <BrownLink href="/home" text="Home" />
            </div>
        </div>
    );
}
