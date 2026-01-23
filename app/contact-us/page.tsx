"use client";

import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
    ChevronLeft,
    Mail,
    Phone,
    MessageSquare,
    Users,
    Handshake,
} from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger } from "@/lib/motion";

export default function ContactPage() {
    const router = useRouter();

    const contactPoints = [
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Sales & Partnerships",
            details: ["+49 211 15897495", "sales@innogem.ai"],
            description: "Discuss solutions and partnership opportunities",
        },
    ];

    return (
        <main className="min-h-screen relative overflow-hidden text-white">
            {/* BASE */}
            <div className="absolute inset-0 bg-[#05050A] -z-20" />

            {/* GLOW */}
            <div className="absolute -top-40 -left-40 w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] bg-blue-600/40 rounded-full blur-[220px] -z-10" />
            <div className="absolute top-40 right-[-200px] w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-cyan-600/30 rounded-full blur-[220px] -z-10" />

            <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-10">
                <Navbar />

                {/* Back */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="pt-24"
                >
                    <Button
                        variant="ghost"
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-gray-400 hover:text-white text-sm sm:text-base"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        Back to Home
                    </Button>
                </motion.div>

                {/* HERO */}
                <motion.section
                    initial="hidden"
                    animate="show"
                    variants={stagger}
                    className="pt-10 text-center"
                >
                    <div className="max-w-5xl mx-auto">
                        <motion.span
                            variants={fadeUp}
                            className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-xs sm:text-sm mb-6"
                        >
                            CONTACT US
                        </motion.span>

                        <motion.h1
                            variants={fadeUp}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        >
                            Get in Touch with{" "}
                            <span className="text-blue-400">Innogem</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
                        >
                            Let’s connect and discuss innovation, intelligence, and secure
                            digital infrastructure for the future.
                        </motion.p>

                        <motion.div variants={fadeUp} className="mt-10">
                            <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 sm:px-8 py-5 text-base sm:text-lg rounded-xl">
                                <MessageSquare className="w-5 h-5 mr-2" />
                                View Contact Info
                            </Button>
                        </motion.div>
                    </div>
                </motion.section>

                {/* GET IN TOUCH */}
                <motion.section
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="pt-20 pb-24"
                >
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center lg:text-left">
                            Get in Touch
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {contactPoints.map((point, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/40 hover:bg-white/10 transition"
                                >
                                    <div className="flex gap-4 items-start">
                                        <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400 shrink-0">
                                            {point.icon}
                                        </div>

                                        <div>
                                            <h3 className="font-semibold mb-1 group-hover:text-blue-400 transition">
                                                {point.title}
                                            </h3>

                                            <div className="space-y-1 mb-2 text-gray-300 text-sm">
                                                {point.details.map((d, idx) => {
                                                    const isEmail = d.includes("@");
                                                    const isPhone = d.includes("+");

                                                    return (
                                                        <a
                                                            key={idx}
                                                            href={
                                                                isEmail
                                                                    ? `mailto:${d}`
                                                                    : isPhone
                                                                        ? `tel:${d}`
                                                                        : "#"
                                                            }
                                                            className="block hover:text-white transition"
                                                        >
                                                            {d}
                                                        </a>
                                                    );
                                                })}
                                            </div>

                                            <p className="text-xs sm:text-sm text-gray-500">
                                                {point.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                <Footer />
            </div>
        </main>
    );
}
