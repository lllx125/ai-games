"use client";
import { useEffect, ReactNode, useState } from "react";
import { useRouter } from "next/navigation";
import { getCurrentUser } from "aws-amplify/auth";

interface ProtectedRouteProps {
    children: ReactNode;
}

export default function CustomAuthenticator({ children }: ProtectedRouteProps) {
    const router = useRouter();
    const [loggedIn, setLoggedIn] = useState(false);
    const checkUser = async () => {
        try {
            await getCurrentUser();
            setLoggedIn(true);
        } catch {
            // Redirect if user is not authenticated
            router.push("home/sign-in");
            setLoggedIn(false);
        }
    };

    useEffect(() => {
        checkUser();
    }, [router]);

    return <>{loggedIn ? children : <></>}</>;
}
