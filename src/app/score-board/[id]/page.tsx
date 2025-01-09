import { Amplify } from "aws-amplify";
import config from "@/amplifyconfiguration.json";
import { generateClient } from "aws-amplify/api";
import { getUser } from "@/graphql/queries";
import DeleteButton from "./DeleteButton";
Amplify.configure(config);
const client = generateClient();

export default async function UserPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const ID = (await params).id;
    try {
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
                <DeleteButton id={ID} />
            </div>
        );
    } catch (error) {
        console.log(error);
        return <h1 className="text-4xl font-bold">user not found</h1>;
    }
}
