import { HoverEffect } from "@/components/ui/card-hover-effect"

const items = [
    {
        title: 'Gala Huíla Talento 2019 Final',
        image: './assets/events/huila-talento.jpg',
    },
    {
        title: 'GinPro Hackaton Universitário, was my first hackaton',
        image: './assets/events/hackaton.jpg',
    },
    {
        title: 'My first bootcamp about programming',
        image: './assets/events/bootcamp.jpg',
    },
    {
        title: 'Final of LISPA JUMPSTART powered by Acelera Angola & BNA',
        image: './assets/events/lispa.jpg',
    },
    {
        title: 'My first workshop as a speaker where I talked a bit about programming as a vehicle for developing local solutions.',
        image: './assets/events/workshop.jpg',
    },
    {
        title: 'The day of the launch of the first mobile application I built as Mobile Developer on a Team',
        image: './assets/events/mutundoexpress.jpg',
    },
    {
        title: 'The day of the launch of the first two products I participated in as the leader of the development team',
        image: './assets/events/tecnobase.png',
    },
    {
        title: 'Christmas charity event with the children of Criança Feliz Angola, lots of fun and play',
        image: './assets/events/natal-solidario.jpg',
    },
    {
        title: 'Winner of Huila Talent as Best Tech Project Powered By Tigra',
        image: './assets/events/huila-talento-tigra.jpg',
    }
]

export default function Moments() {
    return (
        <div className="w-full flex ">
            <HoverEffect items={items} />
        </div>
    )
}
