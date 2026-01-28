"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
    ChevronLeft,
    Download,
    FileText,
    BookOpen,
    BarChart,
    Shield,
    Cpu,
    Brain,
    Zap,
    Calendar,
    Clock,
    Search,
    Filter,
    ArrowRight,
    ExternalLink,
    Mail,
    Share2,
    Bookmark
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger } from "@/lib/motion";
import Link from "next/link";

export default function ResourcesPage() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortBy, setSortBy] = useState("newest");



    const categories = [
        { id: "all", label: "All Resources", icon: <FileText className="w-4 h-4" /> },
        { id: "5g", label: "5G & Connectivity", icon: <Zap className="w-4 h-4" /> },
        { id: "ai", label: "AI Intelligence", icon: <Brain className="w-4 h-4" /> },
        { id: "security", label: "Cybersecurity", icon: <Shield className="w-4 h-4" /> },
        { id: "innovation", label: "Innovation", icon: <Cpu className="w-4 h-4" /> },
        { id: "trends", label: "Industry Trends", icon: <BarChart className="w-4 h-4" /> }
    ];

    const whitepapers = [
        {
            id: 1,
            title: "NEXUS-RAN Lite: Innovation at the Intersection of 5G, AI & Cybersecurity",
            description: "This whitepaper explores how intelligent, secure design supports next-generation digital networks in an increasingly open and connected world.",
            category: "innovation",
            date: "2024-03-15",
            readTime: "25 min",
            pages: 42,
            downloads: 1247,
            featured: true,
            coverColor: "from-purple-600/20 to-blue-600/20"
        }
    ];



    const filteredWhitepapers = whitepapers.filter(paper => {
        const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            paper.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "all" || paper.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const sortedWhitepapers = [...filteredWhitepapers].sort((a, b) => {
        if (sortBy === "newest") return new Date(b.date).getTime() - new Date(a.date).getTime();
        if (sortBy === "popular") return b.downloads - a.downloads;
        return 0;
    });

    return (
        <main className="min-h-screen relative overflow-hidden text-white">
            {/* BASE */}
            <div className="absolute inset-0 bg-[#05050A] -z-20" />

            {/* GLOW ORBS - Teal/Gold theme for Resources */}
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-teal-600/30 rounded-full blur-[220px] -z-10" />
            <div className="absolute top-40 right-[-200px] w-[500px] h-[500px] bg-amber-600/20 rounded-full blur-[220px] -z-10" />
            <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-600/20 rounded-full blur-[260px] -z-10" />

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
                            <span className="inline-block px-4 py-2 bg-teal-500/20 text-teal-400 rounded-full text-sm font-medium mb-6">
                                RESOURCES & WHITEPAPERS
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Insights on{" "}
                                <span className="text-teal-400">Innovation</span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                                Innogem publishes insights to share our perspective on{" "}
                                <span className="text-white font-medium">5G innovation, artificial intelligence, and cybersecurity</span>.
                                Explore our latest research, whitepapers, and industry analysis.
                            </p>
                        </motion.div>

                        {/* Search and Filter Bar */}
                        <motion.div
                            variants={fadeUp}
                            className="mb-16"
                        >
                            <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                                <div className="relative flex-1 w-full">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                                    <input
                                        type="text"
                                        placeholder="Search resources, whitepapers, insights..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500"
                                    />
                                </div>

                                <div className="flex items-center gap-4 w-full md:w-auto">
                                    <div className="relative">
                                        <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                                        <select
                                            value={selectedCategory}
                                            onChange={(e) => setSelectedCategory(e.target.value)}
                                            className="pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-teal-500 appearance-none"
                                        >
                                            {categories.map(cat => (
                                                <option key={cat.id} value={cat.id}>{cat.label}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-teal-500"
                                    >
                                        <option value="newest">Newest First</option>
                                        <option value="popular">Most Popular</option>
                                    </select>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* ================= FEATURED WHITEPAPER ================= */}
                {/* <motion.section
                    id="whitepapers"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeIn}
                    className="pt-20 px-6 lg:px-10"
                >
                    <div className="max-w-6xl mx-auto">
                        <motion.div variants={fadeUp} className="mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Featured{" "}
                                <span className="text-teal-400">Whitepaper</span>
                            </h2>
                            <p className="text-gray-400">
                                Insights and frameworks for measuring audiences, performance, and impact
                                across modern OTT platforms.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            className="relative rounded-3xl overflow-hidden mb-16 group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 blur-3xl -z-10" />

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="p-8 lg:p-12">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 text-teal-400 rounded-full text-sm font-medium mb-6">
                                        <BookOpen className="w-4 h-4" />
                                        Featured Whitepaper
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                        OTT Media Measurement
                                    </h3>

                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        This document is intended to MNOs to share that Innogem capable to measure OTT Media (Tiktok,
                                        Netflix and Facebook) and to share why OTT Media should be measured.
                                    </p>

                                    <div className="flex flex-wrap gap-4 mb-8">
                                        <div className="flex items-center gap-2 text-sm text-gray-400">
                                            <Calendar className="w-4 h-4" />
                                            January 23, 2026
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-400">
                                            <Clock className="w-4 h-4" />
                                            20 min read
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4">
                                        <Link
                                            href="/documents/ott-media-measurement.pdf"
                                            target="_blank"
                                            download
                                        >
                                            <Button className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl px-8 py-4">
                                                <Download className="w-5 h-5 mr-2" />
                                                Download Whitepaper (PDF)
                                            </Button>
                                        </Link>

                                    </div>
                                </div>

                                <div className="relative p-8 lg:p-12 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl" />
                                    <div className="relative z-10 text-center">
                                        <div className="text-7xl font-bold text-white/10 mb-4">
                                            OTT
                                        </div>
                                        <div className="text-2xl font-bold text-teal-300 mb-2">
                                            Media Measurement
                                        </div>
                                        <p className="text-gray-300">
                                            Reach • Engagement • Attribution
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section> */}



                <Footer />
            </div>
        </main>
    );
}