"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
    ChevronLeft,
    MapPin,
    Phone,
    Mail,
    Shield,
    FileText,
    Building,
    User,
    Globe,
    ArrowRight,
    CheckCircle,
    Home
} from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger } from "@/lib/motion";

export default function ImpressumPage() {
    const router = useRouter();

    const legalInfo = [
        {
            icon: <User className="w-5 h-5" />,
            title: "Represented by",
            value: "Yudhi Rahadian",
            color: "from-blue-500/20 to-cyan-500/20"
        },
        {
            icon: <FileText className="w-5 h-5" />,
            title: "VAT Identification Number",
            value: "DE456245131",
            color: "from-purple-500/20 to-pink-500/20"
        },
        {
            icon: <Building className="w-5 h-5" />,
            title: "Registered Authority",
            value: "Amtsgericht Düsseldorf",
            color: "from-amber-500/20 to-orange-500/20"
        },
        {
            icon: <FileText className="w-5 h-5" />,
            title: "Company Registration Number",
            value: "HRB 109359",
            color: "from-green-500/20 to-emerald-500/20"
        }
    ];

    const contactInfo = [
        {
            icon: <MapPin className="w-5 h-5" />,
            title: "Address",
            value: "Heerdter Lohweg 212, 40549 Düsseldorf, Germany",
            color: "from-red-500/20 to-orange-500/20"
        },
        {
            icon: <Phone className="w-5 h-5" />,
            title: "Phone",
            value: "+49 211 15897495",
            color: "from-blue-500/20 to-cyan-500/20"
        },
        {
            icon: <Mail className="w-5 h-5" />,
            title: "Email",
            value: "sales@innogem.ai",
            color: "from-purple-500/20 to-pink-500/20"
        }
    ];

    return (
        <main className="min-h-screen relative overflow-hidden text-white">
            {/* BASE */}
            <div className="absolute inset-0 bg-[#05050A] -z-20" />

            {/* GLOW ORBS - Professional Blue theme for Impressum */}
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[220px] -z-10" />
            <div className="absolute top-40 right-[-200px] w-[500px] h-[500px] bg-cyan-600/30 rounded-full blur-[220px] -z-10" />
            <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-600/20 rounded-full blur-[260px] -z-10" />

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
                    <div className="flex items-center justify-between">
                        <Button
                            variant="ghost"
                            onClick={() => router.back()}
                            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            Back
                        </Button>

                        <Button
                            variant="ghost"
                            onClick={() => router.push("/")}
                            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                        >
                            <Home className="w-4 h-4" />
                            Home
                        </Button>
                    </div>
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
                                LEGAL INFORMATION
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                <span className="text-blue-400">Impressum</span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                                Legal notice and company information for{" "}
                                <span className="text-white font-medium">Innogem GmbH</span> in accordance with German law.
                            </p>
                        </motion.div>
                    </div>
                </motion.section>

                {/* ================= SERVICE PROVIDER ================= */}
                <motion.section
                    id="service-provider"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeIn}
                    className="pt-20 px-6 lg:px-10"
                >
                    <div className="max-w-6xl mx-auto">
                        <motion.div variants={fadeUp} className="relative mb-16">
                            <div className="absolute -inset-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 blur-3xl rounded-3xl -z-10" />
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl text-blue-400">
                                        <Building className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold">Service Provider</h2>
                                        <p className="text-gray-400">Legal entity information</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2 text-blue-400">Innogem GmbH</h3>
                                            <p className="text-gray-300">A German limited liability company</p>
                                        </div>

                                        <div className="space-y-4">
                                            {contactInfo.map((item, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    viewport={{ once: true }}
                                                    className="flex items-start gap-4"
                                                >
                                                    <div className={`p-2 bg-gradient-to-br ${item.color} rounded-lg`}>
                                                        {item.icon}
                                                    </div>
                                                    <div>
                                                        <p className="text-sm text-gray-400">{item.title}</p>
                                                        <p className="text-white font-medium">{item.value}</p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-xl font-semibold mb-4 text-blue-400">Location</h3>
                                            <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                                                <p className="text-gray-300 mb-2">Düsseldorf, North Rhine-Westphalia</p>
                                                <p className="text-sm text-gray-400">Germany • European Union</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3 text-gray-300">
                                            <Globe className="w-4 h-4" />
                                            <span>Jurisdiction: Germany</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* ================= LEGAL INFORMATION ================= */}
                <motion.section
                    id="legal"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeIn}
                    className="pt-10 px-6 lg:px-10"
                >
                    <div className="max-w-6xl mx-auto">
                        <motion.div variants={fadeUp} className="relative mb-16">
                            <div className="absolute -inset-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-3xl rounded-3xl -z-10" />
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl text-purple-400">
                                        <Shield className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold">Legal Information</h2>
                                        <p className="text-gray-400">Official company registration details</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {legalInfo.map((item, index) => (
                                        <motion.div
                                            key={index}
                                            variants={fadeUp}
                                            className="group relative"
                                        >
                                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                                            <div className="relative bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full group-hover:border-blue-500/40 transition-all duration-300">
                                                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg text-white mb-4`}>
                                                    {item.icon}
                                                </div>
                                                <h3 className="text-sm font-medium text-gray-400 mb-2">{item.title}</h3>
                                                <p className="text-lg font-semibold">{item.value}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>



                {/* ================= CONTACT CTA ================= */}
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
                                Need to{" "}
                                <span className="text-blue-400">Contact Us?</span>
                            </motion.h3>

                            <motion.p
                                variants={fadeUp}
                                className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg"
                            >
                                For legal inquiries or official correspondence, please use the contact information provided above.
                            </motion.p>

                            <motion.div
                                variants={fadeUp}
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                            >
                                <Button
                                    onClick={() => router.push("/contact-us")}
                                    className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-xl px-8 py-6 text-lg"
                                >
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