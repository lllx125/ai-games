import BrownButton from "../(components)/BrownButton";

export default function Home() {
    return (
        <div className="flex flex-col items-center gap-[36px] flex-shrink-0 animate-fadeIn">
            <h1 className="text-[48px] font-light leading-normal">
                Welcome to AI Games
            </h1>
            <h2 className="text-center text-[20px] font-light leading-normal animate-fadeIn">
                Explore new forms of games with AI
            </h2>
            <BrownButton
                text="START"
                w={200}
                h={60}
                size={30}
                link="/game-selection"
            />
        </div>
    );
}
