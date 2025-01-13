"use client";
import { Input } from "@aws-amplify/ui-react";
import { useState } from "react";

export default function BrownInput(props: {
    label: string;
    type: string;
    value: string;
    onChange: (e: any) => void;
}) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="self-stretch my-1 max-w-[500px]">
            <h3 className="py-1">{props.label}</h3>
            <div
                className={`flex min-w-[240px] p-[12px_16px] items-center self-stretch rounded-[8px] border-[1px] 
                    border-[#522504] bg-[#FEFFF4] ${
                        isFocused
                            ? "outline outline-[3px] outline-[#522504]"
                            : ""
                    }`}
            >
                <Input
                    type={props.type}
                    placeholder={props.label}
                    value={props.value}
                    onChange={props.onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="flex-grow outline-none bg-transparent"
                />
            </div>
        </div>
    );
}
