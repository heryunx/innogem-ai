"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
    ChevronLeft,
    Target,
    Eye,
    Users,
    Zap,
    Globe,
    Award,
    TrendingUp,
    Shield,
    Cpu,
    Brain,
    Rocket,
    Handshake,
    Lightbulb,
    ArrowRight,
    Mail,
    Phone,
    MapPin,
    Calendar,
    CheckCircle
} from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger } from "@/lib/motion";

export default function AboutPage() {
    const router = useRouter();


    const coreValues = [
        {
            icon: <Lightbulb className="w-6 h-6" />,
            title: "Innovation Driven",
            description: "Constantly pushing boundaries to create cutting edge solutions",
            color: "from-purple-500/20 to-pink-500/20"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Security First",
            description: "Building trust through robust security foundations",
            color: "from-red-500/20 to-orange-500/20"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Collaboration",
            description: "Partnering with clients for mutual success",
            color: "from-blue-500/20 to-cyan-500/20"
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Excellence",
            description: "Delivering exceptional quality in everything we do",
            color: "from-green-500/20 to-emerald-500/20"
        }
    ];

    return (
        <main className="min-h-screen relative overflow-hidden text-white">
            {/* BASE */}
            <div className="absolute inset-0 bg-[#05050A] -z-20" />

            {/* GLOW ORBS - Gold/Purple theme for About */}
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-amber-600/30 rounded-full blur-[220px] -z-10" />
            <div className="absolute top-40 right-[-200px] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[220px] -z-10" />
            <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-violet-600/20 rounded-full blur-[260px] -z-10" />

            {/* VIGNETTE */}
            <div className="absolute inset-0 bg-radial-gradient pointer-events-none -z-10" />

            <div className="container mx-auto relative z-10">
                <Navbar />

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
                            <span className="inline-block px-4 py-2 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium mb-6">
                                ABOUT INNOGEM
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Advancing{" "}
                                <span className="text-amber-400">Secure, Intelligent Connectivity</span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                                Innogem is an innovation focused company dedicated to bridging{" "}
                                <span className="text-white font-medium">technology, strategy, and real world deployment</span>{" "}
                                to help organizations move confidently into the future.
                            </p>
                        </motion.div>
                    </div>
                </motion.section>

                {/* ================= MISSION & VISION ================= */}
                <motion.section
                    id="mission"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeIn}
                    className="pt-20 px-6 lg:px-10"
                >
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Mission */}
                            <motion.div variants={fadeUp} className="relative">
                                <div className="absolute -inset-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-3xl rounded-3xl -z-10" />
                                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl text-purple-400">
                                            <Target className="w-6 h-6" />
                                        </div>
                                        <h2 className="text-2xl font-bold">Our Mission</h2>
                                    </div>
                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        Enable innovation where{" "}
                                        <span className="text-white font-medium">5G, AI, and cybersecurity converge</span>.
                                        We create solutions that transform how organizations connect, communicate,
                                        and secure their digital future.
                                    </p>
                                    <div className="space-y-4">
                                        {[
                                            "Drive technological advancement",
                                            "Foster secure digital ecosystems",
                                            "Enable intelligent connectivity",
                                            "Accelerate digital transformation"
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center gap-3 text-gray-300">
                                                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Vision */}
                            <motion.div variants={fadeUp} className="relative">
                                <div className="absolute -inset-8 bg-gradient-to-br from-amber-500/10 to-orange-500/10 blur-3xl rounded-3xl -z-10" />
                                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl text-amber-400">
                                            <Eye className="w-6 h-6" />
                                        </div>
                                        <h2 className="text-2xl font-bold">Our Vision</h2>
                                    </div>
                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        A world of{" "}
                                        <span className="text-white font-medium">open, intelligent, and trusted digital networks</span>.
                                        We envision a future where connectivity empowers innovation, security builds trust,
                                        and technology serves humanity.
                                    </p>
                                    <div className="space-y-4">
                                        {[
                                            "Universal access to secure networks",
                                            "Seamless human technology interaction",
                                            "Sustainable digital infrastructure",
                                            "Trusted global connectivity"
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center gap-3 text-gray-300">
                                                <div className="w-2 h-2 bg-amber-400 rounded-full" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* ================= CORE VALUES ================= */}
                <motion.section
                    id="values"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeIn}
                    className="pt-32 px-6 lg:px-10"
                >
                    <div className="max-w-6xl mx-auto">
                        <motion.div variants={fadeUp} className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Our <span className="text-amber-400">Core Values</span>
                            </h2>
                            <p className="text-gray-400 max-w-3xl mx-auto">
                                The principles that guide our decisions, shape our culture,
                                and drive our commitment to excellence.
                            </p>
                        </motion.div>

                        <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {coreValues.map((value, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeUp}
                                    className="group relative"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full group-hover:border-amber-500/40 transition-all duration-300 text-center">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500/20 to-purple-500/20 rounded-2xl text-amber-400 mb-6 mx-auto">
                                            {value.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.section>


                {/* ================= FINAL CTA ================= */}
                <motion.section
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeIn}
                    className="pt-20 px-6 lg:px-10 pb-20"
                >
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center">
                            <motion.h3
                                variants={fadeUp}
                                className="text-3xl md:text-4xl font-bold mb-6"
                            >
                                Ready to{" "}
                                <span className="text-amber-400">Innovate Together?</span>
                            </motion.h3>

                            <motion.p
                                variants={fadeUp}
                                className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg"
                            >
                                Join us in shaping the future of secure, intelligent connectivity.
                                Let's build something extraordinary.
                            </motion.p>

                            <motion.div
                                variants={fadeUp}
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                            >
                                <Button onClick={() => router.push("/contact-us")} className="bg-gradient-to-r from-amber-500 to-purple-500 hover:from-amber-600 hover:to-purple-600 rounded-xl px-8 py-6 text-lg">
                                    Contact Us
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                <Footer />
            </div>
        </main>
    );
}