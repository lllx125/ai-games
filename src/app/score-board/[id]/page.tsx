import { Amplify } from "aws-amplify";
import config from "@/amplifyconfiguration.json";
import { generateClient } from "aws-amplify/api";
import { getUser } from "@/graphql/queries";
Amplify.configure(config);
const client = generateClient();

export default async function UserPage({ params }: any) {
    const ID = params.id;
    const user = await client.graphql({
        query: getUser,
        variables: { id: ID },
    });
    return (
        <div>
            <h1 className="text-4xl font-bold">
                {user.data.getUser?.username}
            </h1>
            <h1 className="text-4xl font-bold">{user.data.getUser?.score}</h1>
        </div>
    );
}
