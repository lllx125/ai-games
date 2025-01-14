"use client";
import { useEffect, ReactNode, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { autoSignIn, getCurrentUser } from "aws-amplify/auth";

interface ProtectedRouteProps {
    children: ReactNode;
}

export default function CustomAuthenticator({ children }: ProtectedRouteProps) {
    const router = useRouter();
    const pathname = usePathname();
    const [loggedIn, setLoggedIn] = useState(false);
    const checkUser = async () => {
        try {
            await getCurrentUser();
            setLoggedIn(true);
        } catch {
            // Redirect if user is not authenticated
            router.push(`home/sign-in?from=${pathname.substring(1)}`);
            setLoggedIn(false);
        }
    };
    const handleAutoSignIn = async () => {
        try {
            await autoSignIn();
            setLoggedIn(true);
            // handle sign-in steps
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleAutoSignIn();
        checkUser();
    });

    return <>{loggedIn ? children : <></>}</>;
}
