"use client";
import { Amplify } from "aws-amplify";
import config from "@/amplifyconfiguration.json";
import { createUser } from "@/graphql/mutations";
import { generateClient } from "aws-amplify/api";
import { useState } from "react";

// These two lines sets up the authentication and the client
Amplify.configure(config);
const client = generateClient();

import { signUp } from "aws-amplify/auth";
import { PasswordField } from "@aws-amplify/ui-react";

type SignUpParameters = {
    username: string;
    password: string;
    name: string;
};

async function handleSignUp({ username, password, name }: SignUpParameters) {
    try {
        const { isSignUpComplete, userId, nextStep } = await signUp({
            username,
            password,
            options: {
                userAttributes: {
                    name, // E.164 number convention
                },
                // optional
                autoSignIn: true, // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
            },
        });

        console.log(userId);
    } catch (error) {
        console.log("error signing up:", error);
    }
}

export default function AddUser() {
    // defines variable as their setters
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    /**
     * Adds a user to the database
     */
    const addUser = async (event: { preventDefault: () => void }) => {
        // prevents the page from refreshing, which is a default with onSubmit()
        event.preventDefault();
        try {
            handleSignUp({ username, password, name });
        } catch (error) {
            alert("Error");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form
                onSubmit={addUser}
                className="bg-yellow-200 items-center flex-col flex p-10"
            >
                <input
                    type="text"
                    className="m-4"
                    value={username}
                    placeholder="email"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="text"
                    className="m-4"
                    value={name}
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="password"
                    className="m-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-yellow-700 rounded-sm px-4 font-semibold"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
