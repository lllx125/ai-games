"use client";
import { Button } from "@aws-amplify/ui-react";
import { useRouter } from "next/navigation";

export default function BrownButton(props: {
    text: string;
    w: number;
    h: number;
    onClick?: () => void;
    size: number;
    link?: string;
}) {
    const router = useRouter();

    const handleClick = () => {
        if (props.link) {
            // Navigate to the provided link
            router.push(props.link);
        } else if (props.onClick) {
            // Execute the provided onClick handler
            props.onClick();
        }
    };

    return (
        <div style={{ fontSize: `${props.size}px` }}>
            <Button
                className={`w-[${props.w}px] h-[${props.h}px]  flex p-[8px_30px] justify-center items-center rounded-[20px] bg-[#FAE5D0] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:bg-[#e7c7be] active:shadow-none font-light`}
                onClick={handleClick}
            >
                {props.text}
            </Button>
        </div>
    );
}
