import { DotFilledIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type Props = {
    jobTitle: string
    company: string
    address: string
    period: string
    duration: number
    link: string

}

export default function CarrerItem(props: Props) {
    return (
        <div>
            <h3 className="font-semibold">{props.jobTitle}</h3>
            <h4 className="flex flex-row items-center text-gray-400">
                <Link target="_blank" passHref className="decoration-solid underline text-black dark:text-white" href={props.link}>
                    {props.company}
                </Link>
                <DotFilledIcon /> {props.address}
            </h4>
            <h4 className="flex flex-row items-center text-gray-400">{props.period} <DotFilledIcon /> {props.duration} years</h4>
        </div>
    )
}
