"use client";
import { Amplify } from "aws-amplify";
import config from "@/amplifyconfiguration.json";
import { createUser } from "@/graphql/mutations";
import { generateClient } from "aws-amplify/api";
import { useState } from "react";
import { listUsers } from "@/graphql/queries";

Amplify.configure(config);
const client = generateClient();

export default function AddUser() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [score, setScore] = useState(0);
    const addUser = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        try {
            const u = {
                username: username,
                email: email,
                score: score,
            };
            const newUser = await client.graphql({
                query: createUser,
                variables: { input: u },
            });
            console.log("User created successfully:", newUser);
            alert("User added successfully!");
        } catch (error) {
            console.error("Error creating user:", error);
            alert("Error creating user. Check console for details.");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form
                onSubmit={addUser}
                className="bg-yellow-200 items-center flex-col flex p-10"
            >
                <input
                    type="text"
                    className="m-4"
                    value={username}
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="text"
                    className="m-4"
                    value={email}
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="number"
                    className="m-4"
                    value={score}
                    placeholder="score"
                    onChange={(e) => setScore(parseInt(e.target.value))}
                />
                <button
                    type="submit"
                    className="bg-yellow-700 rounded-sm px-4 font-semibold"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
