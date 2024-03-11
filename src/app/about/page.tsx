

import CarrerItem from "@/components/ui/carrer-item";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About // Idarcio Oliveira",
    description: "my personal website",
};

export default function About() {
    return (
        <div className="py-4 space-y-12  flex justify-center flex-col">
            <div className="flex flex-row justify-center items-center  gap-20">
                <div>
                    <img className="rounded-xl" src={`https://placehold.co/350x350`} alt="idarcio oliveira" />
                </div>
                <div className="text-md whitespace-pre text-justify tracking-widest leading-7 text-pretty">
                    <p>
                        <b>Hey, I'm Idarcio Oliveira</b> started as a software <br />
                        engineer back in 2017, working with C# and ASP.NET. <br />
                        {'\n'}
                    </p>

                    <p >
                        <b>I'm the FullStack Developer at Njilayetu</b>. Before that, I
                        was  <br /> a Backend Developer at Tecnobase and Fullstack <br />
                        Developer at Mutundo Express. I'm originally from Cabinda <br />
                        and <b>now living in Luanda, Angola</b> with my family. <br />
                        {'\n'}
                    </p>
                    <p>
                        <b>I love Hip Hop</b>, open source and side projects.  <br />
                        When I'm not working, I like cooking, <br />
                        watching anime and <b>driving karts</b>
                    </p>
                </div>
            </div>

            <div className="px-4 tracking-widest leading-7 space-y-4">
                <h2 className="font-bold text-2xl mb-8">Work Experiences</h2>
                <CarrerItem
                    jobTitle="FullStack Developer"
                    company="Njilayetu"
                    address="Angola, Luanda"
                    duration={2}
                    link="https://njilayetu.com"
                    period="Abril 2022 - Presente"

                />

                <CarrerItem
                    jobTitle="Backend & Mobile Developer"
                    company="Mutundo Express"
                    address="Angola, Luanda"
                    duration={1.5}
                    link="https://www.mutundoexpress.com"
                    period="Jan 2022 - 2023"

                />

                <CarrerItem
                    jobTitle="Tech Lead"
                    company="Tecnobase"
                    address="Angola, Huila"
                    duration={3}
                    link="https://tecnobase.co/"
                    period="Fev 2019 - 2021"

                />
            </div>

        </div>
    );
}
