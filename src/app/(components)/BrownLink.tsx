import Link from "next/link";

/**
 * A link with custom color and hover color
 */
export default function BrownLink(props: { href: string; text: string }) {
    return (
        <Link href={props.href} className="text-[#AC4F0D] hover:text-[#63422b]">
            {props.text}
        </Link>
    );
}
