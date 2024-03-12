import { Metadata } from "next";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";


export const metadata: Metadata = {
    title: "Projects // Idarcio Oliveira",
    description: "my personal website",
};

type ProjectProps = {
    title: string
    description: string
    url: string
    image: string
    stacks: string[]
}
const projects: ProjectProps[] = [
    {
        title: 'Njilayetu',
        description: 'Routing and Geolocation Services Platform',
        image: './assets/projects/njila.png',
        url: 'https://njilayetu.com',
        stacks: [],
    },
    {
        title: 'Formula Sul',
        description: 'Rent a car company website',
        image: './assets/projects/formulasul.png',
        url: 'https://www.formulasul.com',
        stacks: [],
    },
    {
        title: 'Mutundo Express',
        description: 'E-commerce platform for food retail and distribuition',
        image: './assets/projects/mx.jpg',
        url: 'https://play.google.com/store/apps/details?id=com.idarciooliveirafilipe.mutundoexpress&pcampaignid=web_share',
        stacks: [],
    },
    {
        title: 'Agropsinc',
        description: 'Cattle monitoring and control service',
        image: './assets/projects/agropsinc.png',
        url: 'https://agropsinc.vercel.app/',
        stacks: [],
    },
    {
        title: 'Tecnofarma',
        description: 'Health platform that connects patients from hospital services with medications in pharmacies.',
        image: './assets/projects/tecnofarma.jpg',
        url: 'https://www.tecnofarma.co',
        stacks: [],
    },
    {
        title: 'Njilatraktor',
        description: 'Fleet management platform',
        image: '',
        url: '#',
        stacks: [],
    }
]

export default function Projects() {
    return (
        <div className="w-full grid grid-cols-3 gap-4">
            {projects.map(project => (
                <Link key={project.title} href={project.url} target="_blank">
                    <Card >
                        <img className="object-cover rounded-t-xl h-64 w-full" src={project.image} alt={project.title} />
                        <CardHeader>
                            <CardTitle>
                                {project.title}
                            </CardTitle>
                            <CardDescription>
                                {project.description}
                            </CardDescription>
                        </CardHeader>

                    </Card>
                </Link>
            ))}
        </div>
    )
}
