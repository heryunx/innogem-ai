"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
    ChevronLeft,
    Brain,
    Eye,
    Shield,
    Zap,
    TrendingUp,
    Cpu,
    Target,
    BarChart3,
    Users,
    Sparkles,
    ArrowRight
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger } from "@/lib/motion";

export default function AIIntelligencePage() {
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
            const sections = ["overview", "approach", "capabilities", "benefits", "applications"];
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

    const aiPillars = [
        {
            icon: <Eye className="w-6 h-6" />,
            title: "Clear Insight",
            description: "Transform complex network data into actionable intelligence",
            color: "from-purple-500/20 to-pink-500/20"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Risk Detection",
            description: "Identify anomalies and emerging threats in real-time",
            color: "from-blue-500/20 to-cyan-500/20"
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Fast Decisions",
            description: "Accelerate response times with AI-powered recommendations",
            color: "from-green-500/20 to-emerald-500/20"
        }
    ];

    const corePrinciples = [
        {
            title: "Transparency",
            description: "AI decisions are explainable and auditable",
            icon: <Target className="w-5 h-5" />
        },
        {
            title: "Adaptability",
            description: "Systems that learn and evolve with your network",
            icon: <TrendingUp className="w-5 h-5" />
        },
        {
            title: "Human Oversight",
            description: "AI augments human expertise, not replaces it",
            icon: <Users className="w-5 h-5" />
        }
    ];

    const applications = [
        {
            category: "Network Optimization",
            items: [
                "Predictive traffic management",
                "Dynamic resource allocation",
                "Performance anomaly detection",
                "Automated capacity planning"
            ]
        },
        {
            category: "Security Intelligence",
            items: [
                "Behavioral threat detection",
                "Zero-day attack prediction",
                "Automated incident response",
                "Risk assessment modeling"
            ]
        },
        {
            category: "Customer Experience",
            items: [
                "Personalized service delivery",
                "Proactive issue resolution",
                "Quality of experience analytics",
                "Churn prediction & prevention"
            ]
        },
        {
            category: "Operational Efficiency",
            items: [
                "Automated network provisioning",
                "Predictive maintenance",
                "Energy consumption optimization",
                "Workflow automation"
            ]
        }
    ];

    return (
        <main className="min-h-screen relative overflow-hidden text-white">
            {/* BASE */}
            <div className="absolute inset-0 bg-[#05050A] -z-20" />

            {/* GLOW ORBS - Purple theme for AI */}
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-600/50 rounded-full blur-[220px] -z-10" />
            <div className="absolute top-40 right-[-200px] w-[500px] h-[500px] bg-pink-600/40 rounded-full blur-[220px] -z-10" />
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
                            <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium mb-6">
                                AI INTELLIGENCE
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Artificial Intelligence for{" "}
                                <span className="text-purple-400">Smarter Networks</span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                                Artificial intelligence is transforming how networks and digital systems operate,
                                turning complexity into clarity and uncertainty into confidence.
                            </p>
                        </motion.div>

                        {/* Hero Image with AI Visualization */}
                        <motion.div
                            variants={fadeUp}
                            className="relative rounded-3xl overflow-hidden mb-16"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 blur-3xl -z-10" />
                            <div className="aspect-video w-full bg-gradient-to-br from-purple-900/30 via-gray-900/50 to-black rounded-3xl border border-white/10 p-8">
                                <div className="flex flex-col items-center justify-center h-full">
                                    <div className="relative mb-8">
                                        <Brain className="w-32 h-32 text-purple-400/50" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Sparkles className="w-16 h-16 text-purple-300 animate-pulse" />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-purple-300 mb-2">Intelligent Networks</div>
                                        <p className="text-gray-300">Powered by Adaptive AI</p>
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
                                    Transforming Complexity into{" "}
                                    <span className="text-purple-400">Clear Insight</span>
                                </h2>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    Innogem uses AI to turn complex network information into clear, actionable insight.
                                    Our intelligent systems monitor, analyze, and interpret vast amounts of data in real-time,
                                    providing unprecedented visibility into network operations.
                                </p>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    We identify unusual behavior and emerging risks before they impact your operations,
                                    supporting faster, better-informed decisions that keep your networks secure, efficient,
                                    and future-ready.
                                </p>

                                <div className="space-y-4 mb-8">
                                    {corePrinciples.map((principle, index) => (
                                        <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                            <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                                                {principle.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-1">{principle.title}</h4>
                                                <p className="text-sm text-gray-400">{principle.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div variants={fadeUp} className="relative">
                                <div className="absolute -inset-8 bg-purple-500/20 blur-3xl rounded-3xl -z-10" />
                                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                                    <h3 className="text-xl font-semibold mb-6 text-purple-400">
                                        AI Transformation Process
                                    </h3>
                                    <div className="space-y-8">
                                        <div className="relative">
                                            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500" />
                                            {[
                                                { step: "01", title: "Data Collection", desc: "Aggregate network telemetry from multiple sources" },
                                                { step: "02", title: "Pattern Recognition", desc: "Identify trends and anomalies using ML algorithms" },
                                                { step: "03", title: "Insight Generation", desc: "Transform raw data into actionable intelligence" },
                                                { step: "04", title: "Decision Support", desc: "Provide recommendations for optimal actions" }
                                            ].map((item, index) => (
                                                <div key={index} className="relative flex items-start gap-4 mb-8 last:mb-0">
                                                    <div className="w-12 h-12 flex items-center justify-center bg-purple-500/20 rounded-xl text-purple-400 font-bold z-10">
                                                        {item.step}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold mb-1">{item.title}</h4>
                                                        <p className="text-sm text-gray-400">{item.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
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
                                Our AI Approach:{" "}
                                <span className="text-purple-400">Building Trust Through Intelligence</span>
                            </h2>
                            <p className="text-gray-400 max-w-3xl mx-auto">
                                Our AI approach emphasizes transparency, adaptability, and human oversight,
                                ensuring intelligence builds trust rather than uncertainty.
                            </p>
                        </motion.div>

                        <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {aiPillars.map((pillar, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeUp}
                                    className="group relative"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full group-hover:border-purple-500/40 transition-all duration-300">
                                        <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl w-fit mb-6">
                                            {pillar.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">{pillar.description}</p>
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
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            <motion.div variants={stagger}>
                                <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-6">
                                    Advanced AI{" "}
                                    <span className="text-purple-400">Capabilities</span>
                                </motion.h2>

                                <div className="space-y-6">
                                    {[
                                        {
                                            icon: <Brain className="w-5 h-5" />,
                                            title: "Machine Learning Models",
                                            description: "Advanced algorithms for predictive analytics and pattern recognition"
                                        },
                                        {
                                            icon: <BarChart3 className="w-5 h-5" />,
                                            title: "Real-time Analytics",
                                            description: "Process and analyze streaming data with sub-second latency"
                                        },
                                        {
                                            icon: <Cpu className="w-5 h-5" />,
                                            title: "Edge AI Processing",
                                            description: "Distributed intelligence at the network edge for faster responses"
                                        },
                                        {
                                            icon: <Sparkles className="w-5 h-5" />,
                                            title: "Natural Language Processing",
                                            description: "Understand and generate human language for intuitive interfaces"
                                        }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            variants={fadeUp}
                                            className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition group"
                                        >
                                            <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400 group-hover:scale-110 transition">
                                                {item.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold mb-2 text-lg">{item.title}</h4>
                                                <p className="text-gray-400">{item.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div variants={fadeUp} className="relative">
                                <div className="sticky top-32">
                                    <div className="absolute -inset-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-3xl rounded-3xl -z-10" />
                                    <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-white/10 rounded-2xl p-8">
                                        <h3 className="text-2xl font-semibold mb-6 text-purple-300">
                                            Why Choose Innogem AI?
                                        </h3>
                                        <ul className="space-y-4">
                                            {[
                                                "Proven experience in AI-driven network solutions",
                                                "Ethical AI framework with built-in transparency",
                                                "Seamless integration with existing infrastructure",
                                                "Continuous learning and improvement cycles",
                                                "Comprehensive support and training programs",
                                                "Industry-specific customization available"
                                            ].map((item, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <div className="mt-1 w-2 h-2 bg-purple-400 rounded-full flex-shrink-0" />
                                                    <span className="text-gray-300">{item}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-8 pt-8 border-t border-white/10">
                                            <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl py-6 text-lg">
                                                Request AI Assessment
                                                <ArrowRight className="ml-2 w-5 h-5" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                {/* ================= APPLICATIONS SECTION ================= */}
                <motion.section
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
                                AI-Powered{" "}
                                <span className="text-purple-400">Applications</span>
                            </h2>
                            <p className="text-gray-400 max-w-3xl mx-auto">
                                Discover how AI intelligence transforms network operations across various domains.
                            </p>
                        </motion.div>

                        <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {applications.map((app, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeUp}
                                    className="group relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full group-hover:border-purple-500/30 transition">
                                        <h3 className="text-xl font-semibold mb-6 text-purple-400">{app.category}</h3>
                                        <ul className="space-y-3">
                                            {app.items.map((item, itemIndex) => (
                                                <li key={itemIndex} className="flex items-center gap-3 text-gray-300 group/item">
                                                    <div className="p-1 bg-purple-500/20 rounded-md">
                                                        <ArrowRight className="w-3 h-3 text-purple-400" />
                                                    </div>
                                                    <span className="group-hover/item:text-white transition">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
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
                        <div className="relative rounded-[36px] border border-white/10 bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-2xl px-10 py-16 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 blur-[160px] -z-10" />

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <motion.div variants={fadeUp}>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-6">
                                        Measurable{" "}
                                        <span className="text-purple-400">Business Benefits</span>
                                    </h3>

                                    <div className="space-y-6">
                                        {[
                                            { metric: "40%", label: "Reduction in network incidents" },
                                            { metric: "60%", label: "Faster threat detection and response" },
                                            { metric: "35%", label: "Improvement in operational efficiency" },
                                            { metric: "50%", label: "Reduction in manual monitoring tasks" }
                                        ].map((benefit, index) => (
                                            <div key={index} className="flex items-center gap-6 p-4 rounded-xl bg-white/5 border border-white/10">
                                                <div className="text-3xl font-bold text-purple-400">{benefit.metric}</div>
                                                <div className="text-gray-300">{benefit.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                <motion.div variants={fadeUp}>
                                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                                        <h4 className="text-xl font-semibold mb-6 text-purple-300">Get Started with AI Intelligence</h4>
                                        <p className="text-gray-400 mb-6">
                                            Ready to transform your network operations with AI? Start with a
                                            comprehensive assessment of your current infrastructure and AI readiness.
                                        </p>

                                        <div className="space-y-4">
                                            <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl py-6">
                                                Schedule AI Consultation
                                            </Button>
                                            <Button variant="outline" className="w-full rounded-xl py-6 border-white/20">
                                                Download AI Strategy Guide
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* ================= FINAL CTA ================= */}
                <motion.section
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeIn}
                    className="pt-40 px-6 lg:px-10"
                >
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center">
                            <motion.h3
                                variants={fadeUp}
                                className="text-3xl md:text-4xl font-bold mb-6"
                            >
                                Transform Your Network with{" "}
                                <span className="text-purple-400">Intelligent AI</span>
                            </motion.h3>

                            <motion.p
                                variants={fadeUp}
                                className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg"
                            >
                                Discover how Innogem's AI Intelligence solutions can help you build smarter,
                                more efficient, and more secure networks.
                            </motion.p>

                            <motion.div
                                variants={fadeUp}
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                            >
                                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl px-8 py-6 text-lg">
                                    Start Your AI Journey
                                </Button>
                                <Button variant="outline" className="rounded-xl px-8 py-6 text-lg border-white/20">
                                    View Success Stories
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