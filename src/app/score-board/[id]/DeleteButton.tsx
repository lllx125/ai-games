"use client";
import { Amplify } from "aws-amplify";
import config from "@/amplifyconfiguration.json";
import { generateClient } from "aws-amplify/api";
import { deleteUser } from "@/graphql/mutations";
Amplify.configure(config);
const client = generateClient();

export default function DeleteButton(props: { id: string }) {
    const goToParentDirectory = () => {
        const currentPath = window.location.pathname; // Get current path
        const parentPath = currentPath.split("/").slice(0, -1).join("/") || "/"; // Remove the last segment
        window.location.href = parentPath; // Navigate to the parent path
    };
    const deleteThisUser = async () => {
        await client.graphql({
            query: deleteUser,
            variables: { input: { id: props.id } },
        });
        goToParentDirectory();
    };
    return (
        <button className="bg-yellow-100 p-4" onClick={deleteThisUser}>
            Delete This User
        </button>
    );
}
