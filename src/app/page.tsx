"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

/*
 * Redirect to /home page
 */
export default function App() {
    const router = useRouter();
    //redirect to home page
    useEffect(() => {
        router.push("/home");
    });

    return <></>;
}
