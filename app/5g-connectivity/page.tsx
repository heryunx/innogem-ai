"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ArrowRight, Download, Shield, Zap, Cpu, Globe } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger } from "@/lib/motion";

export default function FiveGConnectivityPage() {
    const router = useRouter();
    const [activeSection, setActiveSection] = useState("overview");

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const yOffset = -80;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
            setActiveSection(sectionId);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["overview", "benefits", "capabilities", "applications"];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const features = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Ultra-Low Latency",
            description: "Near real-time communication enabling mission-critical applications"
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Massive Connectivity",
            description: "Support for millions of devices per square kilometer"
        },
        {
            icon: <Cpu className="w-6 h-6" />,
            title: "Network Slicing",
            description: "Multiple virtual networks on a single physical infrastructure"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Enhanced Security",
            description: "Built-in security protocols for next-generation networks"
        }
    ];

    const applications = [
        {
            category: "Industry 4.0",
            items: ["Smart factories", "Predictive maintenance", "AR-assisted operations", "Autonomous logistics"]
        },
        {
            category: "Healthcare",
            items: ["Remote surgery", "Real-time patient monitoring", "Ambulance connectivity", "Medical IoT"]
        },
        {
            category: "Smart Cities",
            items: ["Traffic management", "Public safety networks", "Utility monitoring", "Environmental sensing"]
        },
        {
            category: "Entertainment",
            items: ["Immersive VR/AR", "Cloud gaming", "Ultra HD streaming", "Live event broadcasting"]
        }
    ];

    return (
        <main className="min-h-screen relative overflow-hidden text-white">
            {/* BASE */}
            <div className="absolute inset-0 bg-[#05050A] -z-20" />

            {/* GLOW ORBS */}
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600/40 rounded-full blur-[220px] -z-10" />
            <div className="absolute top-40 right-[-200px] w-[500px] h-[500px] bg-cyan-600/30 rounded-full blur-[220px] -z-10" />
            <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-600/30 rounded-full blur-[260px] -z-10" />

            {/* VIGNETTE */}
            <div className="absolute inset-0 bg-radial-gradient pointer-events-none -z-10" />

            <div className="container mx-auto relative z-10">
                <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="pt-24 px-6 lg:px-10"
                >
                    <Button
                        variant="ghost"
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        Back to Home
                    </Button>
                </motion.div>

                {/* ================= HERO SECTION ================= */}
                <motion.section
                    initial="hidden"
                    animate="show"
                    variants={stagger}
                    className="pt-8 px-6 lg:px-10"
                >
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            variants={fadeUp}
                            className="text-center mb-12"
                        >
                            <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-6">
                                5G & CONNECTIVITY
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Unlocking the Potential of{" "}
                                <span className="text-blue-400">5G and Future Networks</span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                                5G is more than faster data speeds. It enables low-latency communication,
                                massive connectivity, and new digital experiences across industries.
                            </p>
                        </motion.div>

                        {/* Hero Image */}
                        <motion.div
                            variants={fadeUp}
                            className="relative rounded-3xl overflow-hidden mb-16"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 blur-3xl -z-10" />
                            <div className="aspect-video w-full bg-gradient-to-br from-blue-900/30 via-gray-900/50 to-black rounded-3xl border border-white/10 p-8">
                                <div className="flex items-center justify-center h-full">
                                    <div className="text-center">
                                        <div className="text-8xl font-bold text-blue-400/30 mb-4">5G</div>
                                        <p className="text-2xl text-gray-300">The Foundation of Future Connectivity</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* ================= OVERVIEW SECTION ================= */}
                <motion.section
                    id="overview"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeIn}
                    className="pt-20 px-6 lg:px-10"
                >
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <motion.div variants={fadeUp}>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Beyond Speed: The{" "}
                                    <span className="text-blue-400">True Power of 5G</span>
                                </h2>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    While 5G delivers significantly faster data speeds, its real transformative
                                    power lies in enabling technologies that were previously impossible.
                                </p>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    InnoGEM supports the evolution of <span className="text-white font-medium">5G and future wireless networks</span>
                                    by focusing on reliable, resilient connectivity within open and flexible network ecosystems,
                                    providing secure foundations for long-term innovation.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Button className="bg-blue-500 hover:bg-blue-600 rounded-xl px-6 py-3">
                                        <Download className="w-4 h-4 mr-2" />
                                        Download Whitepaper
                                    </Button>
                                    <Button variant="outline" className="rounded-xl px-6 py-3 border-white/20">
                                        Schedule Consultation
                                    </Button>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeUp} className="relative">
                                <div className="absolute -inset-8 bg-blue-500/20 blur-3xl rounded-3xl -z-10" />
                                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                                    <h3 className="text-xl font-semibold mb-6 text-blue-400">
                                        Key 5G Capabilities
                                    </h3>
                                    <div className="space-y-6">
                                        {features.map((feature, index) => (
                                            <div key={index} className="flex items-start gap-4">
                                                <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
                                                    {feature.icon}
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                                                    <p className="text-sm text-gray-400">{feature.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* ================= BENEFITS SECTION ================= */}
                <motion.section
                    id="benefits"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeIn}
                    className="pt-32 px-6 lg:px-10"
                >
                    <div className="max-w-6xl mx-auto">
                        <motion.div variants={fadeUp} className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                How We Help Organizations{" "}
                                <span className="text-blue-400">Unlock 5G Potential</span>
                            </h2>
                            <p className="text-gray-400 max-w-3xl mx-auto">
                                We help organizations unlock the full potential of 5G with confidence through
                                comprehensive solutions and expertise.
                            </p>
                        </motion.div>

                        <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    title: "Reliable Connectivity",
                                    description: "Ensuring consistent, high-quality connections for critical applications",
                                    color: "from-blue-500/20 to-blue-600/20"
                                },
                                {
                                    title: "Network Resilience",
                                    description: "Building networks that can withstand disruptions and maintain operations",
                                    color: "from-cyan-500/20 to-cyan-600/20"
                                },
                                {
                                    title: "Open Ecosystems",
                                    description: "Creating flexible, interoperable network environments",
                                    color: "from-indigo-500/20 to-indigo-600/20"
                                },
                                {
                                    title: "Security Foundation",
                                    description: "Embedding security from the ground up for long-term innovation",
                                    color: "from-purple-500/20 to-purple-600/20"
                                }
                            ].map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeUp}
                                    className="group relative"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full group-hover:border-blue-500/40 transition-all duration-300">
                                        <div className="text-3xl font-bold text-blue-400/30 mb-4">0{index + 1}</div>
                                        <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.section>

                {/* ================= CAPABILITIES SECTION ================= */}
                <motion.section
                    id="capabilities"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeIn}
                    className="pt-32 px-6 lg:px-10"
                >
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <motion.div variants={fadeUp}>
                                <div className="relative rounded-2xl overflow-hidden">
                                    <div className="aspect-square bg-gradient-to-br from-blue-900/30 to-black rounded-2xl border border-white/10" />
                                </div>
                            </motion.div>

                            <motion.div variants={stagger}>
                                <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-6">
                                    Our <span className="text-blue-400">5G Capabilities</span>
                                </motion.h2>
                                <div className="space-y-6">
                                    {[
                                        {
                                            title: "Network Design & Architecture",
                                            description: "End-to-end 5G network planning and implementation"
                                        },
                                        {
                                            title: "Spectrum Management",
                                            description: "Optimizing frequency allocation for maximum efficiency"
                                        },
                                        {
                                            title: "Edge Computing Integration",
                                            description: "Bringing computation closer to data sources"
                                        },
                                        {
                                            title: "Private Network Solutions",
                                            description: "Dedicated 5G networks for enterprise use"
                                        }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            variants={fadeUp}
                                            className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition"
                                        >
                                            <div className="mt-1">
                                                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-1">{item.title}</h4>
                                                <p className="text-sm text-gray-400">{item.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* ================= APPLICATIONS SECTION ================= */}
                {/* <motion.section
                    id="applications"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeIn}
                    className="pt-32 px-6 lg:px-10"
                >
                    <div className="max-w-6xl mx-auto">
                        <motion.div variants={fadeUp} className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Transformative <span className="text-blue-400">Applications</span>
                            </h2>
                            <p className="text-gray-400 max-w-3xl mx-auto">
                                5G enables revolutionary applications across industries, creating new opportunities
                                for innovation and growth.
                            </p>
                        </motion.div>

                        <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {applications.map((app, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeUp}
                                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition"
                                >
                                    <h3 className="text-xl font-semibold mb-6 text-blue-400">{app.category}</h3>
                                    <ul className="space-y-3">
                                        {app.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-center gap-3 text-gray-300">
                                                <ArrowRight className="w-4 h-4 text-blue-400" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.section> */}

                {/* ================= CTA SECTION ================= */}
                <motion.section
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeIn}
                    className="pt-40 px-6 lg:px-10"
                >
                    <div className="max-w-6xl mx-auto">
                        <div className="relative rounded-[36px] border border-white/10 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-2xl px-10 py-16 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 blur-[160px] -z-10" />

                            <div className="text-center">
                                <motion.h3
                                    variants={fadeUp}
                                    className="text-3xl md:text-4xl font-bold mb-6"
                                >
                                    Ready to Transform Your{" "}
                                    <span className="text-blue-400">Connectivity Strategy?</span>
                                </motion.h3>

                                <motion.p
                                    variants={fadeUp}
                                    className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg"
                                >
                                    Discover how InnoGEM can help you unlock the full potential of 5G
                                    and future networks for your organization.
                                </motion.p>

                                <motion.div
                                    variants={fadeUp}
                                    className="flex justify-center"
                                >
                                    <Button className="bg-blue-500 hover:bg-blue-600 rounded-xl px-8 py-6 text-lg">
                                        Contact Us
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                <Footer />
            </div>
        </main>
    );
}