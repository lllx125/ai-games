"use client";

import { Amplify } from "aws-amplify";
import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from "@/amplifyconfiguration.json";
Amplify.configure(config);

const formFields = {};

export default function Profile() {
    return (
        <>
            <Authenticator formFields={formFields} socialProviders={["google"]}>
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
