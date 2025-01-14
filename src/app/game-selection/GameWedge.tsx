import Image from "next/image";
import BrownButton from "../(components)/BrownButton";
export default function GameWedge(props: {
    img: string;
    title: string;
    subtitle: string;
    text: string;
    link: string;
}) {
    return (
        <div className="inline-flex items-end gap-[37px]">
            <div className="group relative w-[450px] h-[320px] overflow-hidden rounded-[20px]">
                <Image
                    src={props.img}
                    alt={props.title}
                    width={450}
                    height={320}
                    className=" w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
                    priority
                />
            </div>

            <div className="flex w-[600px] flex-col items-start gap-[16px] self-stretch ">
                <div className="flex flex-col items-start gap-[2px] self-stretch">
                    <h1 className="text-black  text-[48px]  leading-normal">
                        {props.title}
                    </h1>
                    <h2 className="text-gray-500  text-[24px] font-light leading-normal pl-1">
                        {props.subtitle}
                    </h2>
                    <p className="text-gray-500  text-[20px] font-extralight leading-[30px] tracking-[0.6px] pl-1 self-stretch">
                        {props.text}
                    </p>
                </div>
                <BrownButton
                    text={"START"}
                    w={170}
                    h={40}
                    size={20}
                    link={props.link}
                />
            </div>
        </div>
    );
}

export function TheRizzGameWedge() {
    return (
        <GameWedge
            img="/rizzGameCover.png"
            link="/the-rizz-game"
            title="The Rizz Game"
            subtitle="Try to reach 100% affection level"
            text="This game lets you chat with a girl in various contexts, aiming to reach 100% affection. You'll receive feedback on your performance and a summary to help improve your communication skills. Time to show your charm!"
        />
    );
}
