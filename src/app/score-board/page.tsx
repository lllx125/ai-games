import { Amplify } from "aws-amplify";
import config from "@/amplifyconfiguration.json";

import { generateClient } from "aws-amplify/api";
import { listUsers } from "@/graphql/queries";
import Link from "next/link";

Amplify.configure(config);
const client = generateClient();

export default async function ScoreBoard() {
    const usersList = await client.graphql({ query: listUsers });
    const sortedUsersList = usersList.data.listUsers.items
        .sort((a, b) => b.score - a.score) // Sort by score in descending order
        .map((item) => (
            <Link
                href={`/score-board/${item.id}`}
                className="rounded-md bg-yellow-100 my-1 p-4 flex content-stretch"
            >
                <h1 className="text-4xl font-bold mx-1">{item.username}</h1>
                <h1 className="text-4xl font-bold mx-1">{item.score}</h1>
            </Link>
        )); // Map to a formatted string

    return sortedUsersList;
}
