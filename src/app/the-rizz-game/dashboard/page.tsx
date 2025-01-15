"use client";
import { useAuth } from "@/app/(components)/CustomAuthenticator";

export default function Dashboard() {
    const { user } = useAuth();
    return <div>{user?.username}</div>;
}
