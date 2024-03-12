'use client'

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Card, CardTitle } from "./card";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string;
        image: string
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  ",
                className
            )}
        >
            {items.map((item, idx) => (
                <div
                    key={item?.title}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-indigo-200/[0.2] dark:bg-slate-800/[0.3] block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <img alt={item.title} className="w-full h-60 object-cover rounded-t-xl" src={item.image} />
                        <div className="mt-2 mb-2 p-2 text-center leading-7 text-sm">
                            <CardTitle>{item.title}</CardTitle>
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    );
};
