'use client'
import Link from "next/link";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";


export default function Navbar() {
    return (
        <nav className="  py-8 flex flex-row items-center space-x-2 justify-between  text-sm font-semibold">

            <Link href={'/'} className="border-2 border-slate-80 dark:border-gray-50  p-2 rounded-full border-color-white">
                IOF
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
                        {/* <NavigationMenuItem>
                            <Link href="/articles" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle({
                                    className: 'text-sm font-semibold tracking-widest'
                                })}>
                                    ARTICLES
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem> */}
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
