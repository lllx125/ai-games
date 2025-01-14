import CustomAuthenticator from "../(components)/CustomAuthenticator";
import SignOutButton from "../(components)/SignOutButton";

export default function GameSelection() {
    return (
        <div className="h-full w-full bg-[#fdffef]">
            <div className="flex flex-col items-center gap-[36px] flex-shrink-0">
                <h1 className="text-[48px] font-light leading-normal">
                    Welcome to AI Games
                </h1>
                <h2 className="text-center text-[20px] font-light leading-normal">
                    Explore new forms of games with AI
                </h2>
                <SignOutButton />
            </div>
        </div>
    );
}
