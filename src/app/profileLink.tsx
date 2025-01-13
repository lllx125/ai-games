"use client";

import Link from "next/link";
import "./globals.css";
import { getCurrentUser } from "aws-amplify/auth";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import config from "@/amplifyconfiguration.json";
import { useEffect, useState } from "react";
Amplify.configure(config);

export default function ProfileLink() {
    const [user, setUser] = useState(""); // Initialize as an empty string

    useEffect(() => {
        // Check if a user is signed in
        getCurrentUser()
            .then((authUser) => setUser(authUser.username)) // Store username directly
            .catch(() => setUser("")); // Reset to empty string if not authenticated
    }, []);

    return (
        <>
            {user ? (
                <span>{user}</span> // Display the username
            ) : (
                <Link href="/signin">Sign In</Link>
            )}
        </>
    );
}
