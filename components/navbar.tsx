"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-5 flex items-center justify-between">
                {/* LOGO */}
                <Link href="/" className="text-white text-2xl font-bold">
                    Inno<span className="text-purple-400">gem</span>
                </Link>

                {/* DESKTOP MENU */}
                <div className="hidden lg:flex items-center gap-8 text-sm">
                    <Link
                        href="/"
                        className={isActive("/") ? "text-purple-400" : "text-gray-300 hover:text-white"}
                    >
                        Home
                    </Link>

                    <Link
                        href="/about-us"
                        className={isActive("/about-us") ? "text-purple-400" : "text-gray-300 hover:text-white"}
                    >
                        About Us
                    </Link>

                    {/* SOLUTIONS DROPDOWN */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => setOpen(false)}
                    >
                        <button
                            className={`flex items-center gap-1 transition ${isActive("/5g-connectivity") ||
                                isActive("/artificial-intelligence") ||
                                isActive("/cyber-security")
                                ? "text-purple-400"
                                : "text-gray-300 hover:text-white"
                                }`}
                        >
                            Solutions
                            <ChevronDown className="w-4 h-4 mt-0.5" />
                        </button>

                        {/* DROPDOWN */}
                        <div className="absolute left-0 top-full pt-3 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition">
                            <div className="bg-black/90 border border-white/10 rounded-xl w-56 p-2 backdrop-blur-xl shadow-xl">
                                <DropdownItem href="/5g-connectivity" active={isActive("/5g-connectivity")}>
                                    5G Connectivity
                                </DropdownItem>
                                <DropdownItem
                                    href="/artificial-intelligence"
                                    active={isActive("/artificial-intelligence")}
                                >
                                    Artificial Intelligence
                                </DropdownItem>
                                <DropdownItem
                                    href="/cyber-security"
                                    active={isActive("/cyber-security")}
                                >
                                    Cyber Security
                                </DropdownItem>
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/resources"
                        className={isActive("/resources") ? "text-purple-400" : "text-gray-300 hover:text-white"}
                    >
                        Resources
                    </Link>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-3">

                    <Button asChild className="bg-purple-500 hover:bg-purple-600 rounded-xl px-5 py-2 text-sm">
                        <Link href="/contact-us">Contact Us</Link>
                    </Button>
                </div>
            </div>
        </nav>
    );
}

/* ================= HELPER ================= */

function DropdownItem({
    href,
    active,
    children,
}: {
    href: string;
    active: boolean;
    children: React.ReactNode;
}) {
    return (
        <Link
            href={href}
            className={`block px-4 py-2 rounded-lg text-sm transition ${active
                ? "bg-purple-500/20 text-purple-400"
                : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
        >
            {children}
        </Link>
    );
}
