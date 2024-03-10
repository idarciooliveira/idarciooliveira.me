'use client'
import Link from "next/link";
import Image from "next/image";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/mode-toggle";

import Logo from '../assets/LOGO.svg'


export default function Navbar() {
    return (
        <nav className="flex flex-row items-center space-x-2 justify-between  text-sm font-semibold">

            <div>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/about" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle({
                                    className: 'text-sm font-semibold tracking-widest'
                                })}>
                                    ABOUT
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/articles" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle({
                                    className: 'text-sm font-semibold tracking-widest'
                                })}>
                                    ARTICLES
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/projects" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle({
                                    className: 'text-sm font-semibold tracking-widest'
                                })}>
                                    PROJECTS
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

            </div>

            <Link href={'/'}>
                <Image priority width={50} height={50} src={Logo} alt="idarcio oliveira filipe" />
            </Link>


            <div className="flex flex-row items-center space-x-12">
                <a target="_blank" href='https://github.com/idarciooliveira'>
                    <img height="24" width="24" src="https://cdn.simpleicons.org/github" />
                </a>
                <a target="_blank" href='www.linkedin.com/in/idarciooliveira'>
                    <img height="24" width="24" src="https://cdn.simpleicons.org/linkedin" />
                </a>
                <a href="mailto:idarciooliveira@gmail.com">
                    <img height="24" width="24" src="https://cdn.simpleicons.org/gmail" />
                </a>
                <a target="_blank" href='https://www.youtube.com/channel/UCcFx9D0sM4EbVkZ8jvo1-Tw'>
                    <img height="24" width="24" src="https://cdn.simpleicons.org/youtube" />
                </a>
                <ModeToggle />
            </div>
        </nav>
    );
}
