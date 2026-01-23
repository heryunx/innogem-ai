"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
    ChevronLeft,
    Shield,
    Lock,
    AlertTriangle,
    Zap,
    Eye,
    Cpu,
    Network,
    Users,
    FileCheck,
    Globe,
    Target,
    BarChart,
    ArrowRight,
    ShieldCheck,
    AlertCircle
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger } from "@/lib/motion";

export default function CybersecurityPage() {
    const router = useRouter();

    const securityPillars = [
        {
            icon: <Eye className="w-6 h-6" />,
            title: "Early Risk Identification",
            description: "Proactive threat detection and vulnerability assessment",
            color: "from-red-500/20 to-orange-500/20"
        },
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Resilience Against Threats",
            description: "Robust defense mechanisms for evolving cyber threats",
            color: "from-green-500/20 to-emerald-500/20"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Trust Protection",
            description: "Safeguarding digital infrastructure and service integrity",
            color: "from-blue-500/20 to-cyan-500/20"
        }
    ];

    const securityFramework = [
        {
            phase: "01",
            title: "Assess",
            description: "Comprehensive security assessment and risk analysis",
            icon: <FileCheck className="w-5 h-5" />
        },
        {
            phase: "02",
            title: "Protect",
            description: "Implement layered security controls and defenses",
            icon: <Lock className="w-5 h-5" />
        },
        {
            phase: "03",
            title: "Detect",
            description: "Continuous monitoring and threat intelligence",
            icon: <AlertTriangle className="w-5 h-5" />
        },
        {
            phase: "04",
            title: "Respond",
            description: "Rapid incident response and recovery procedures",
            icon: <Zap className="w-5 h-5" />
        },
        {
            phase: "05",
            title: "Recover",
            description: "Business continuity and restoration of operations",
            icon: <Network className="w-5 h-5" />
        }
    ];

    const threatLandscape = [
        {
            category: "Advanced Persistent Threats",
            description: "Sophisticated, long-term cyber attacks targeting specific organizations",
            severity: "High"
        },
        {
            category: "Ransomware & Malware",
            description: "Malicious software designed to disrupt operations or extort money",
            severity: "Critical"
        },
        {
            category: "Supply Chain Attacks",
            description: "Compromising trusted third-party vendors to access target networks",
            severity: "High"
        },
        {
            category: "Cloud Security Risks",
            description: "Vulnerabilities in cloud infrastructure and misconfigurations",
            severity: "Medium"
        },
        {
            category: "IoT & OT Vulnerabilities",
            description: "Security gaps in connected devices and operational technology",
            severity: "Medium"
        },
        {
            category: "Social Engineering",
            description: "Human-focused attacks like phishing and business email compromise",
            severity: "Critical"
        }
    ];

    return (
        <main className="min-h-screen relative overflow-hidden text-white">
            {/* BASE */}
            <div className="absolute inset-0 bg-[#05050A] -z-20" />

            {/* GLOW ORBS - Red/Orange theme for Cybersecurity */}
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-red-600/40 rounded-full blur-[220px] -z-10" />
            <div className="absolute top-40 right-[-200px] w-[500px] h-[500px] bg-orange-600/30 rounded-full blur-[220px] -z-10" />
            <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-amber-600/20 rounded-full blur-[260px] -z-10" />

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
                            <span className="inline-block px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-sm font-medium mb-6">
                                CYBERSECURITY
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Cybersecurity for an{" "}
                                <span className="text-red-400">Open and Connected World</span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                                As networks become more open and software-driven, cybersecurity becomes a
                                <span className="text-white font-medium"> strategic enabler of innovation</span>,
                                not just a defensive measure.
                            </p>
                        </motion.div>

                        {/* Hero Visualization */}
                        <motion.div
                            variants={fadeUp}
                            className="relative rounded-3xl overflow-hidden mb-16"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 to-orange-600/30 blur-3xl -z-10" />
                            <div className="aspect-video w-full bg-gradient-to-br from-red-900/30 via-gray-900/50 to-black rounded-3xl border border-white/10 p-8">
                                <div className="flex flex-col items-center justify-center h-full">
                                    <div className="relative mb-8">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-48 h-48 border-2 border-red-400/30 rounded-full animate-pulse" />
                                            <div className="w-32 h-32 border-2 border-orange-400/40 rounded-full animate-pulse delay-300" />
                                            <div className="w-16 h-16 border-2 border-amber-400/50 rounded-full animate-pulse delay-500" />
                                        </div>
                                        <Shield className="w-32 h-32 text-red-400 relative z-10" />
                                    </div>
                                    <div className="text-center relative z-10">
                                        <div className="text-3xl font-bold text-red-300 mb-2">Secure by Design</div>
                                        <p className="text-gray-300">Protecting Innovation, Enabling Progress</p>
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
                                    Cybersecurity as a{" "}
                                    <span className="text-red-400">Strategic Enabler</span>
                                </h2>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    In today's interconnected world, cybersecurity is no longer just about protection—it's
                                    about enabling progress. At Innogem, we believe cybersecurity should
                                    <span className="text-white font-medium"> enable innovation, not restrict it</span>.
                                </p>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    We focus on cybersecurity that helps identify risks early, supports resilience against
                                    evolving threats, and protects trust in digital infrastructure and services. Our approach
                                    ensures that security measures enhance rather than hinder your digital transformation.
                                </p>


                            </motion.div>

                            <motion.div variants={fadeUp} className="relative">
                                <div className="absolute -inset-8 bg-red-500/20 blur-3xl rounded-3xl -z-10" />
                                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                                    <h3 className="text-xl font-semibold mb-6 text-red-400">
                                        Why Modern Networks Need Advanced Security
                                    </h3>
                                    <div className="space-y-6">
                                        {[
                                            {
                                                title: "Increased Attack Surface",
                                                description: "More connected devices create more entry points for attackers"
                                            },
                                            {
                                                title: "Sophisticated Threats",
                                                description: "AI-powered attacks require intelligent defense systems"
                                            },
                                            {
                                                title: "Regulatory Compliance",
                                                description: "Complex compliance requirements across industries and regions"
                                            },
                                            {
                                                title: "Digital Transformation",
                                                description: "Security must keep pace with rapid technological adoption"
                                            }
                                        ].map((item, index) => (
                                            <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/20 transition">
                                                <h4 className="font-semibold mb-2 text-red-300">{item.title}</h4>
                                                <p className="text-sm text-gray-400">{item.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* ================= APPROACH SECTION ================= */}
                <motion.section
                    id="approach"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeIn}
                    className="pt-32 px-6 lg:px-10"
                >
                    <div className="max-w-6xl mx-auto">
                        <motion.div variants={fadeUp} className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Our Cybersecurity{" "}
                                <span className="text-red-400">Approach</span>
                            </h2>
                            <p className="text-gray-400 max-w-3xl mx-auto">
                                A proactive, intelligence-driven approach to cybersecurity that protects
                                while enabling business innovation and growth.
                            </p>
                        </motion.div>

                        <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {securityPillars.map((pillar, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeUp}
                                    className="group relative"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full group-hover:border-red-500/40 transition-all duration-300">
                                        <div className="p-3 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl w-fit mb-6">
                                            {pillar.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{pillar.description}</p>

                                        <div className="mt-6 pt-6 border-t border-white/10">
                                            <div className="flex items-center text-sm text-red-400">
                                                <ArrowRight className="w-4 h-4 mr-2" />
                                                Learn more
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.section>

                {/* ================= FRAMEWORK SECTION ================= */}
                <motion.section
                    id="framework"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeIn}
                    className="pt-32 px-6 lg:px-10"
                >
                    <div className="max-w-6xl mx-auto">
                        <motion.div variants={fadeUp} className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Comprehensive Security{" "}
                                <span className="text-red-400">Framework</span>
                            </h2>
                            <p className="text-gray-400 max-w-3xl mx-auto">
                                Our end-to-end cybersecurity framework ensures continuous protection
                                across all stages of the security lifecycle.
                            </p>
                        </motion.div>

                        <div className="relative">
                            {/* Timeline Connector */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-red-500 to-orange-500 hidden lg:block" />

                            <motion.div variants={stagger} className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                                {securityFramework.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeUp}
                                        className="relative"
                                    >
                                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full hover:border-red-500/30 transition group">
                                            <div className="flex flex-col items-center text-center">
                                                {/* Step Number */}
                                                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full text-2xl font-bold text-red-400 mb-4 group-hover:scale-110 transition">
                                                    {step.phase}
                                                </div>

                                                {/* Icon */}
                                                <div className="p-3 bg-red-500/10 rounded-xl text-red-400 mb-4">
                                                    {step.icon}
                                                </div>

                                                {/* Content */}
                                                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                                                <p className="text-sm text-gray-400">{step.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* ================= THREAT LANDSCAPE ================= */}
                {/* <motion.section
                    id="threats"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeIn}
                    className="pt-32 px-6 lg:px-10"
                >
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <motion.div variants={fadeUp}>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    Modern Threat{" "}
                                    <span className="text-red-400">Landscape</span>
                                </h2>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    Understanding the evolving cyber threat landscape is crucial for
                                    developing effective security strategies. Here are the key threats
                                    facing modern organizations.
                                </p>

                                <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-white/10 rounded-2xl p-8">
                                    <h3 className="text-xl font-semibold mb-6 text-red-300">Security Statistics</h3>
                                    <div className="grid grid-cols-2 gap-6">
                                        {[
                                            { value: "68%", label: "Increase in ransomware attacks" },
                                            { value: "4.2M", label: "New malware variants daily" },
                                            { value: "287 days", label: "Average breach detection time" },
                                            { value: "$4.35M", label: "Average breach cost" }
                                        ].map((stat, index) => (
                                            <div key={index} className="text-center p-4 bg-white/5 rounded-xl">
                                                <div className="text-2xl font-bold text-red-400 mb-2">{stat.value}</div>
                                                <div className="text-sm text-gray-400">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div variants={stagger}>
                                <div className="space-y-6">
                                    {threatLandscape.map((threat, index) => (
                                        <motion.div
                                            key={index}
                                            variants={fadeUp}
                                            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/30 transition group"
                                        >
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="flex items-center gap-3">
                                                    <AlertCircle className="w-5 h-5 text-red-400" />
                                                    <h4 className="font-semibold text-lg">{threat.category}</h4>
                                                </div>
                                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${threat.severity === 'Critical' ? 'bg-red-500/20 text-red-400' :
                                                    threat.severity === 'High' ? 'bg-orange-500/20 text-orange-400' :
                                                        'bg-yellow-500/20 text-yellow-400'
                                                    }`}>
                                                    {threat.severity}
                                                </span>
                                            </div>
                                            <p className="text-gray-400 text-sm">{threat.description}</p>

                                            <div className="mt-4 pt-4 border-t border-white/10">
                                                <div className="flex items-center gap-4 text-sm">
                                                    <span className="text-gray-500">Recommended actions:</span>
                                                    <div className="flex gap-2">
                                                        {['Detection', 'Prevention', 'Response'].map((action, i) => (
                                                            <span key={i} className="px-2 py-1 bg-white/5 rounded text-xs">
                                                                {action}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.section> */}


                {/* ================= FINAL CTA ================= */}
                <motion.section
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeIn}
                    className="pt-40 px-6 lg:px-10 pb-20"
                >
                    <div className="max-w-6xl mx-auto">
                        <div className="relative rounded-[36px] border border-white/10 bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-2xl px-10 py-16 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-orange-500/10 blur-[160px] -z-10" />

                            <div className="text-center">
                                <motion.h3
                                    variants={fadeUp}
                                    className="text-3xl md:text-4xl font-bold mb-6"
                                >
                                    Secure Your Digital Future{" "}
                                    <span className="text-red-400">Today</span>
                                </motion.h3>

                                <motion.p
                                    variants={fadeUp}
                                    className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg"
                                >
                                    Don't wait for a breach to take action. Partner with Innogem to build
                                    resilient, innovative, and secure digital infrastructure that enables
                                    your business to thrive in an open and connected world.
                                </motion.p>

                                <motion.div
                                    variants={fadeUp}
                                    className="flex flex-col sm:flex-row gap-4 justify-center"
                                >
                                    <Button onClick={() => router.push("/contact-us")} className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 rounded-xl px-8 py-6 text-lg">
                                        Contact Us
                                    </Button>
                                </motion.div>

                                <motion.div
                                    variants={fadeUp}
                                    className="mt-12 pt-12 border-t border-white/10"
                                >
                                    <p className="text-sm text-gray-500">
                                        <Shield className="w-4 h-4 inline mr-2" />
                                        All security assessments are conducted under strict confidentiality and compliance with data protection regulations.
                                    </p>
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