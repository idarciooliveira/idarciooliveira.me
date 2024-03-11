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
import Logo from '../assets/LOGO.svg'
import { ModeToggle } from "./mode-toggle";


export default function Navbar() {
    return (
        <nav className="  py-8 flex flex-row items-center space-x-2 justify-between  text-sm font-semibold">

            <Link href={'/'}>
                <Image priority width={38} height={38} src={Logo} alt="idarcio oliveira filipe" />
            </Link>

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
                        <NavigationMenuItem>
                            <Link href="/moments" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle({
                                    className: 'text-sm font-semibold tracking-widest'
                                })}>
                                    MOMENTS
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

            </div>

            <ModeToggle />
        </nav>
    );
}
