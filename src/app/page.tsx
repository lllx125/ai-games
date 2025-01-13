"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function App() {
    const router = useRouter();
    //redirect to home page
    useEffect(() => {
        router.push("/home");
    }, []);

    return <></>;
}
