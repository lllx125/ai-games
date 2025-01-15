import Image from "next/image";
import Link from "next/link";

/**
 * A text with icon on the left
 */
export default function IconText(props: {
    icon: string;
    text: string;
    link: string;
}) {
    return (
        <div className="flex h-[42px] items-center gap-[30px] self-stretch">
            <Image src={props.icon} alt="Icon" width={30} height={30} />
            <Link
                className="text-black text-[20px] font-normal leading-[28px] hover:text-cyan-500"
                href={props.link}
            >
                {props.text}
            </Link>
        </div>
    );
}
