import { Amplify } from "aws-amplify";
import config from "@/amplifyconfiguration.json";

import { generateClient } from "aws-amplify/api";
import { listUsers } from "@/graphql/queries";
import Link from "next/link";

// These two lines sets up the authentication and the client
Amplify.configure(config);
const client = generateClient();

export default async function ScoreBoard() {
    // fetch the list of users from the database
    const usersList = await client.graphql({ query: listUsers });

    // sort the list with score and map each of them to a link to its id
    const sortedUsersList = usersList.data.listUsers.items
        .sort((a, b) => b.score - a.score) // Sort by score in descending order
        .map((item) => (
            <Link
                href={`/score-board/${item.id}`} //defines the id as the link of that page
                className="rounded-md bg-yellow-100 my-1 p-4 flex content-stretch"
            >
                <h1 className="text-4xl font-bold mx-1">{item.username}</h1>
                <h1 className="text-4xl font-bold mx-1">{item.score}</h1>
            </Link>
        )); // Map to a formatted string

    return sortedUsersList;
}
