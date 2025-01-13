"use client";

import { Amplify } from "aws-amplify";
import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from "@/amplifyconfiguration.json";
Amplify.configure(config);

const formFields = {};

export default function App() {
    useEffect(() => {
        const authListener = (data) => {
            if (data.payload.event === "signIn") {
                console.log("User signed in:");
            }
        };

        Hub.listen("auth", authListener); // Listen to auth events
    }, []);

    return (
        <>
            <button onClick={handleFetchUserAttributes}>Fetch Users</button>
            <Authenticator
                formFields={formFields}
                socialProviders={["google"]}
                hideSignUp
            >
                {({ signOut, user }) => (
                    <>
                        <h1>hello {user?.username}</h1>
                        <button onClick={signOut}>Sign out</button>
                    </>
                )}
            </Authenticator>
        </>
    );
}

import { fetchUserAttributes } from "aws-amplify/auth";
import { useEffect } from "react";
import { Hub } from "aws-amplify/utils";

async function handleFetchUserAttributes() {
    try {
        const userAttributes = await fetchUserAttributes();
        console.log(userAttributes);
    } catch (error) {
        console.log(1);
    }
}
