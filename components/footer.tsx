export default function Footer() {
    return (
        <footer className="relative mt-32">
            {/* Glow */}
            <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/30 blur-[260px] -z-10" />

            <div className="border-t border-white/10 bg-black/40 backdrop-blur-xl">
                <div className="container mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">

                    {/* BRAND */}
                    <div>
                        <h3 className="text-xl font-bold mb-3">
                            Inno<span className="text-purple-400">gem</span>
                        </h3>
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
                            <li className="hover:text-white transition cursor-pointer">
                                About Innogem
                            </li>
                            <li className="hover:text-white transition cursor-pointer">
                                Leadership
                            </li>
                            <li className="hover:text-white transition cursor-pointer">
                                Careers
                            </li>
                        </ul>
                    </div>

                    {/* SOLUTIONS */}
                    <div>
                        <h4 className="font-semibold mb-3 text-white">Solutions</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li className="hover:text-white transition cursor-pointer">
                                5G & Future Connectivity
                            </li>
                            <li className="hover:text-white transition cursor-pointer">
                                AI-Driven Intelligence
                            </li>
                            <li className="hover:text-white transition cursor-pointer">
                                Cybersecurity & Resilience
                            </li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h4 className="font-semibold mb-3 text-white">Contact</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                Email:{" "}
                                <span className="text-gray-300">
                                    contact@innogem.ai
                                </span>
                            </li>
                            <li>
                                Phone:{" "}
                                <span className="text-gray-300">
                                    +62 812 3456 7890
                                </span>
                            </li>
                            <li>Jakarta, Indonesia</li>
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
