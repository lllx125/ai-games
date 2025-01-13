"use client";
import { signUp } from "aws-amplify/auth";
import BrownButton from "../../(components)/BrownButton";
import { useState } from "react";
import BrownInput from "@/app/(components)/BrownInput";
import BrownLink from "@/app/(components)/BrownLink";
import { useRouter } from "next/navigation";

import { Amplify } from "aws-amplify";
import config from "@/amplifyconfiguration.json";
import { createUser } from "@/graphql/mutations";
import { generateClient } from "aws-amplify/api";
Amplify.configure(config);
const client = generateClient();

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [warning, setWarning] = useState("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const router = useRouter();

    const handleSignUp = async () => {
        if (emailRegex.test(email)) {
            setWarning("");
        } else {
            setWarning("Invalid email");
            return;
        }
        if (password == confirmPassword) {
            setWarning("");
        } else {
            setWarning("Password do not match");
            return;
        }
        try {
            const { isSignUpComplete, userId, nextStep } = await signUp({
                username,
                password,
                options: {
                    userAttributes: {
                        email, // E.164 number convention
                    },
                    // optional
                    autoSignIn: true, // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
                },
            });
            const newUser = {
                username: username,
                email: email,
                score: 0,
            };
            await client.graphql({
                query: createUser,
                variables: { input: newUser },
            });
            router.push("/verify-email");
        } catch (error: any) {
            if (error.name == "UsernameExistsException") {
                setWarning("Username already exists");
            }
            console.log(error);
        }
    };

    return (
        <div className="flex flex-col items-start flex-shrink-0 animate-fadeIn w-full px-[120px]">
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
                <BrownLink href="sign-in" text="Sign in" />
            </div>
            <div className="flex text-[20px] font-light leading-normal">
                <BrownLink href="/home" text="Home" />
            </div>
        </div>
    );
}
