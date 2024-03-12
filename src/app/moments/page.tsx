import Moments from "@/components/moments";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Moments // Idarcio Oliveira",
    description: "my personal website",
};

export default function MyMoments() {
    return (
        <div className="w-full flex flex-col ">
            <p className="text-2xl text-center mb-4">
                Some important moments during the beginning of my career as developer
            </p>
            <Moments />
        </div>
    )
}
