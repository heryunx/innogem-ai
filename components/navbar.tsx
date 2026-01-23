"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NavbarProps {
    activeSection: string;
    scrollToSection: (sectionId: string) => void;
}

export default function Navbar({ activeSection, scrollToSection }: NavbarProps) {
    const navItems = [
        { id: "home", label: "Home" },
        { id: "why-innogem", label: "Why Innogem" },
        { id: "capabilities", label: "Capabilities" },
        { id: "solutions", label: "Solutions" },
    ];

    const handleClick = (e: React.MouseEvent, sectionId: string) => {
        e.preventDefault();
        scrollToSection(sectionId);
    };

    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-black">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10 py-6">
                {/* LOGO */}
                <Link
                    href="/"
                    className="text-white text-2xl font-bold tracking-wide cursor-pointer"
                >
                    Inno<span className="text-purple-400">gem</span>
                </Link>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex items-center gap-10 text-sm text-gray-300">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={(e) => handleClick(e, item.id)}
                            className={`transition ${activeSection === item.id
                                ? "text-purple-400 border-b-2 border-purple-400 pb-1"
                                : "hover:text-white"
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={(e) => handleClick(e, "contact")}
                        className="hidden sm:block text-sm text-gray-300 hover:text-white transition"
                    >
                        Contact
                    </button>

                    <Button
                        onClick={(e) => handleClick(e, "contact")}
                        className="bg-purple-500 hover:bg-purple-600 rounded-xl px-5 py-2 text-sm"
                    >
                        Get Started
                    </Button>
                </div>
            </div>
        </nav>
    );
}