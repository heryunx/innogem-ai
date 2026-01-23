import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative mt-32">
            {/* Glow */}
            <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/30 blur-[260px] -z-10" />

            <div className="border-t border-white/10 bg-black/40 backdrop-blur-xl">
                <div className="container mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">

                    {/* BRAND */}
                    <div>
                        <Link href="/" className="inline-block text-xl font-bold mb-3">
                            Inno<span className="text-purple-400">gem</span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed max-w-sm">
                            Innogem is an innovation-driven company shaping the future of
                            intelligent, secure, and resilient digital networks across 5G,
                            AI, and cybersecurity.
                        </p>
                    </div>

                    {/* COMPANY */}
                    <div>
                        <h4 className="font-semibold mb-3 text-white">Company</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link href="/about-us" className="hover:text-white transition">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/resources" className="hover:text-white transition">
                                    Resources
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* SOLUTIONS */}
                    <div>
                        <h4 className="font-semibold mb-3 text-white">Solutions</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link
                                    href="/5g-connectivity"
                                    className="hover:text-white transition"
                                >
                                    5G & Future Connectivity
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/artificial-intelligence"
                                    className="hover:text-white transition"
                                >
                                    AI-Driven Intelligence
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/cyber-security"
                                    className="hover:text-white transition"
                                >
                                    Cybersecurity & Resilience
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h4 className="font-semibold mb-3 text-white">Contact</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                Email:{" "}
                                <a
                                    href="mailto:contact@innogem.ai"
                                    className="text-gray-300 hover:text-white transition"
                                >
                                    contact@innogem.ai
                                </a>
                            </li>
                            <li>
                                Phone:{" "}
                                <a
                                    href="tel:+6281234567890"
                                    className="text-gray-300 hover:text-white transition"
                                >
                                    +62 812 3456 7890
                                </a>
                            </li>
                            <li>Jakarta, Indonesia</li>
                            <li className="pt-2">
                                <Link
                                    href="/contact-us"
                                    className="inline-block text-purple-400 hover:text-purple-300 transition"
                                >
                                    Get in Touch →
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="border-t border-white/10 py-4 text-center text-gray-500 text-xs">
                    © {new Date().getFullYear()} Innogem. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
