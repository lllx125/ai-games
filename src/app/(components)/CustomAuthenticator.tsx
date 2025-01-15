"use client";
import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { autoSignIn, getCurrentUser } from "aws-amplify/auth";
import { getUser } from "@/graphql/queries";
import { generateClient } from "@aws-amplify/api";

const client = generateClient();

interface User {
    username: string;
    email: string;
    score: number;
}

interface AuthContextProps {
    user: User | null;
    loggedIn: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
}
interface ProtectedRouteProps {
    children: ReactNode;
}

export default function CustomAuthenticator({ children }: ProtectedRouteProps) {
    const router = useRouter();
    const pathname = usePathname();
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    const checkUser = async () => {
        try {
            const currentUser = await getCurrentUser();
            const user = await client.graphql({
                query: getUser,
                variables: { id: currentUser.username },
            });
            if (user.data.getUser) {
                setUser({
                    username: user.data.getUser?.username,
                    email: user.data.getUser?.email,
                    score: user.data.getUser?.score,
                });
                setLoggedIn(true);
            } else {
                throw new Error("user not found with this username");
            }
        } catch {
            router.push(`/home/sign-in?from=${pathname.substring(1)}`);
            setLoggedIn(false);
        }
    };

    const handleAutoSignIn = async () => {
        try {
            await autoSignIn();
            setLoggedIn(true);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        checkUser();
        handleAutoSignIn();
    });

    if (!loggedIn) return <></>;

    return (
        <AuthContext.Provider value={{ user, loggedIn }}>
            {children}
        </AuthContext.Provider>
    );
}
