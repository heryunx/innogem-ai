"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
    ChevronLeft,
    Search,
    Calendar,
    Clock,
    ArrowRight,
    Award,
    Cpu,
    Brain,
    Shield,
    Eye,
    Share2,
    Bookmark,
    Tag,
    Star,
    ExternalLink,
    Filter,
    Download
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger } from "@/lib/motion";
import Link from "next/link";

export default function NVIDIAInceptionBlogPage() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortBy, setSortBy] = useState("newest");

    // Categories for filtering
    const categories = [
        { id: "all", label: "All Posts", icon: <Tag className="w-4 h-4" /> },
        { id: "article", label: "Article", icon: <Award className="w-4 h-4" /> },
    ];

    const blogPosts = [
        {
            id: 1,
            slug: "innogem-joins-nvidia-inception-program",
            title: "Innogem.ai Joins NVIDIA Inception Program",
            fullTitle: "Innogem.ai Joins NVIDIA Inception Program: A New Chapter in AI Innovation",
            excerpt: "Innogem.ai has been officially accepted into the NVIDIA Inception Program, a global initiative designed to support AI startups. This milestone marks a significant step forward for Innogem.ai as it continues shaping the future of intelligent, secure, and resilient digital networks across 5G, AI, and cybersecurity. By joining this global ecosystem, Innogem.ai strengthens its commitment to delivering solutions that enhance network intelligence, security posture, and operational resilience.",
            category: "Article",
            date: "February 18, 2026",
            author: {
                name: "Innogem.ai Team",
                title: "Official Announcement",
                avatar: "/images/logo/innogem-icon.png"
            },
            featured: true,
            coverImage: "/images/blog/nvidia-announcement.jpg",
            coverColor: "from-teal-600/20 to-amber-600/20",
            tags: ["NVIDIA", "Inception Program", "AI", "Startup", "5G", "Cybersecurity"],
        },

    ];

    // Filter and sort posts
    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const sortedPosts = [...filteredPosts].sort((a, b) => {
        if (sortBy === "newest") return new Date(b.date).getTime() - new Date(a.date).getTime();
        return 0;
    });

    // Featured post (first one)
    const featuredPost = sortedPosts.find(post => post.featured) || sortedPosts[0];
    const regularPosts = sortedPosts.filter(post => post.id !== featuredPost?.id);

    return (
        <main className="min-h-screen relative overflow-hidden text-white">
            {/* Meta Tags */}
            <title>Innogem.ai Joins NVIDIA Inception Program | Official Blog</title>
            <meta name="description" content="Innogem.ai has been officially accepted into the NVIDIA Inception Program, a global initiative designed to support AI startups. Read the full announcement and explore related articles." />

            {/* Background Elements */}
            <div className="absolute inset-0 bg-[#05050A] -z-20" />
            <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-teal-600/30 rounded-full blur-[220px] -z-10" />
            <div className="absolute top-40 right-[-200px] w-[500px] h-[500px] bg-amber-600/20 rounded-full blur-[220px] -z-10" />
            <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-600/20 rounded-full blur-[260px] -z-10" />
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

                {/* Header Section */}
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
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500/20 to-amber-500/20 text-amber-400 rounded-full text-sm font-medium mb-6">
                                <Award className="w-4 h-4" />
                                NVIDIA INCEPTION PROGRAM
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                Innogem.ai Joins{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400">
                                    NVIDIA Inception
                                </span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                                Official announcement and related articles about Innogem.ai's acceptance into
                                the NVIDIA Inception Program, a global initiative supporting AI startups.
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
                                        placeholder="Search articles..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500 transition-colors"
                                    />
                                </div>

                                <div className="flex items-center gap-4 w-full md:w-auto">
                                    <div className="relative">
                                        <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                                        <select
                                            value={selectedCategory}
                                            onChange={(e) => setSelectedCategory(e.target.value)}
                                            className="pl-10 pr-8 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-teal-500 appearance-none cursor-pointer"
                                        >
                                            {categories.map(cat => (
                                                <option key={cat.id} value={cat.id} className="bg-gray-900">
                                                    {cat.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-teal-500 appearance-none cursor-pointer"
                                    >
                                        <option value="newest" className="bg-gray-900">Newest First</option>
                                        <option value="popular" className="bg-gray-900">Most Popular</option>
                                        <option value="most-liked" className="bg-gray-900">Most Liked</option>
                                    </select>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Blog Posts Grid */}
                <motion.section
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeIn}
                    className="pt-8 pb-20 px-6 lg:px-10"
                >
                    <div className="max-w-6xl mx-auto">
                        {/* Results Count */}
                        <motion.div variants={fadeUp} className="mb-6 flex justify-between items-center">
                            <p className="text-gray-400">
                                Showing <span className="text-white font-medium">{sortedPosts.length}</span> articles
                                {selectedCategory !== "all" && ` in ${categories.find(c => c.id === selectedCategory)?.label}`}
                            </p>
                        </motion.div>

                        {sortedPosts.length > 0 ? (
                            <div className="space-y-8">
                                {/* Featured Post - Larger Card */}
                                {featuredPost && (
                                    <motion.div
                                        variants={fadeUp}
                                        className="group relative"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-amber-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <Link href={`/blog/${featuredPost.slug}`}>
                                            <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-teal-500/50 transition-all duration-300">
                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                                    {/* Content */}
                                                    <div className="p-8 lg:p-10">
                                                        <div className="flex items-center gap-3 mb-4">
                                                            <span className="px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-xs font-medium">
                                                                FEATURED
                                                            </span>
                                                            <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-xs font-medium">
                                                                {featuredPost.category}
                                                            </span>
                                                        </div>

                                                        <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-teal-400 transition-colors">
                                                            {featuredPost.fullTitle || featuredPost.title}
                                                        </h2>

                                                        <p className="text-gray-400 mb-6 leading-relaxed">
                                                            {featuredPost.excerpt}
                                                        </p>

                                                        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500">
                                                            <div className="flex items-center gap-2">
                                                                <Calendar className="w-4 h-4" />
                                                                {featuredPost.date}
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-wrap gap-2 mb-6">
                                                            {featuredPost.tags.map((tag, index) => (
                                                                <span key={index} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">
                                                                    #{tag}
                                                                </span>
                                                            ))}
                                                        </div>

                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-center gap-3">
                                                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-amber-500 p-0.5">
                                                                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                                                                        <span className="text-xs font-bold text-teal-400">
                                                                            {featuredPost.author.name.split(' ').map(n => n[0]).join('')}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <p className="font-medium text-sm">{featuredPost.author.name}</p>
                                                                    <p className="text-xs text-gray-500">{featuredPost.author.title}</p>
                                                                </div>
                                                            </div>

                                                            <Button className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl">
                                                                Read Article
                                                                <ArrowRight className="w-4 h-4 ml-2" />
                                                            </Button>
                                                        </div>
                                                    </div>

                                                    {/* Image */}
                                                    <div className="relative p-8 lg:p-10 flex items-center justify-center bg-gradient-to-br from-teal-900/20 to-amber-900/20">
                                                        <div className="relative w-full h-48 lg:h-64">
                                                            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/30 to-amber-600/30 rounded-2xl blur-2xl" />
                                                            <div className="relative z-10 w-full h-full flex items-center justify-center">
                                                                <div className="text-center">
                                                                    <Award className="w-20 h-20 text-amber-400/50 mx-auto mb-4" />
                                                                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400">
                                                                        NVIDIA
                                                                    </div>
                                                                    <div className="text-lg text-gray-400">
                                                                        Inception Program
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                )}

                                {/* Regular Posts Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {regularPosts.map((post, index) => (
                                        <motion.div
                                            key={post.id}
                                            variants={fadeUp}
                                            custom={index}
                                            className="group relative"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-amber-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            <Link href={`/blog/nvidia-inception/${post.slug}`}>
                                                <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-teal-500/50 transition-all duration-300 h-full flex flex-col">
                                                    {/* Header with gradient */}
                                                    <div className={`h-32 bg-gradient-to-r ${post.coverColor} relative`}>
                                                        <div className="absolute inset-0 flex items-center justify-center">
                                                            <Award className="w-12 h-12 text-white/20" />
                                                        </div>
                                                    </div>

                                                    {/* Content */}
                                                    <div className="p-5 flex-grow">
                                                        <div className="flex items-center gap-2 mb-3">
                                                            <span className="px-2 py-1 bg-amber-500/20 text-amber-400 rounded-full text-xs font-medium">
                                                                {post.category}
                                                            </span>
                                                            {post.featured && (
                                                                <span className="px-2 py-1 bg-teal-500/20 text-teal-400 rounded-full text-xs font-medium">
                                                                    Featured
                                                                </span>
                                                            )}
                                                        </div>

                                                        <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-teal-400 transition-colors">
                                                            {post.title}
                                                        </h3>

                                                        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                                            {post.excerpt}
                                                        </p>

                                                        <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                                                            <div className="flex items-center gap-1">
                                                                <Calendar className="w-3 h-3" />
                                                                {post.date}
                                                            </div>
                                                        </div>

                                                        <div className="flex items-center justify-between mt-auto">
                                                            <div className="flex items-center gap-2">
                                                                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-teal-500 to-amber-500 p-0.5">
                                                                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                                                                        <span className="text-[8px] font-bold text-teal-400">
                                                                            {post.author.name.split(' ').map(n => n[0]).join('')}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <span className="text-xs text-gray-400 truncate max-w-[100px]">
                                                                    {post.author.name.split(' ')[0]}
                                                                </span>
                                                            </div>

                                                            <Button variant="ghost" size="sm" className="text-teal-400 hover:text-teal-300 p-0">
                                                                Read More
                                                                <ArrowRight className="w-3 h-3 ml-1" />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            // No Results State
                            <motion.div variants={fadeUp} className="text-center py-20">
                                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 mb-6">
                                    <Search className="w-10 h-10 text-gray-500" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">No articles found</h3>
                                <p className="text-gray-400 mb-6">
                                    Try adjusting your search or filter criteria
                                </p>
                                <Button
                                    onClick={() => {
                                        setSearchQuery("");
                                        setSelectedCategory("all");
                                        setSortBy("newest");
                                    }}
                                    className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-xl"
                                >
                                    Clear All Filters
                                </Button>
                            </motion.div>
                        )}
                    </div>
                </motion.section>

                <Footer />
            </div>
        </main>
    );
}