import { Amplify } from "aws-amplify";
import config from "@/amplifyconfiguration.json";
import { generateClient } from "aws-amplify/api";
import { getUser } from "@/graphql/queries";
import DeleteButton from "./DeleteButton";

// These two lines sets up the authentication and the client
Amplify.configure(config);
const client = generateClient();

export default async function UserPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const ID = (await params).id; // This gets the "id" in the url

    try {
        // This gets the user by its id
        const user = await client.graphql({
            query: getUser,
            variables: { id: ID },
        });

        return (
            <div>
                <h1 className="text-4xl font-bold">
                    {user.data.getUser?.username}
                </h1>
                <h1 className="text-4xl font-bold">
                    {user.data.getUser?.score}
                </h1>
                {/* The ID of the user is passed to the button in props */}
                {/* The reason for separating button and the page is because we want to render the user info on the server side */}
                {/* The interactive parts, like buttons, we want it on the client side, so we separate them */}
                <DeleteButton id={ID} />
            </div>
        );
    } catch (error) {
        console.log(error);
        return <h1 className="text-4xl font-bold">user not found</h1>;
    }
}
