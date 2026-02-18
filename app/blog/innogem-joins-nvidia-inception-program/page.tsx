"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
    ChevronLeft,
    Award,
    Calendar,
    User
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import Head from "next/head";

export default function NVIDIAInceptionDetailPage() {
    const router = useRouter();

    // SEO Data
    const seo = {
        title: "Innogem.ai Joins NVIDIA Inception Program",
        shortTitle: "Innogem.ai Joins NVIDIA Inception",
        description: "Innogem.ai has been officially accepted into the NVIDIA Inception Program, a global initiative supporting AI startups. Learn how this milestone strengthens 5G, AI, and cybersecurity innovation.",
        canonical: "https://innogem.ai/blog/nvidia-inception-announcement",
        publishedTime: "2026-02-18T08:00:00+00:00",
        modifiedTime: "2026-02-18T08:00:00+00:00",
        author: "Innogem.ai Team",
        keywords: "NVIDIA Inception, AI Startups, 5G Innovation, Cybersecurity, Network Intelligence, AI Program, NVIDIA Partner, Innogem.ai",
        image: "https://innogem.ai/article/nvidia.jpg",
        imageAlt: "Innogem.ai joins NVIDIA Inception Program",
        authorUrl: "https://innogem.ai/team",
        publisher: "Innogem.ai",
        publisherUrl: "https://innogem.ai",
        publisherLogo: "https://innogem.ai/images/logo.png"
    };

    useEffect(() => {
        // Set document title
        document.title = seo.title;

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', seo.description);
        }

        // Cleanup function (optional)
        return () => {
            // Reset title when component unmounts (optional)
            document.title = 'Innogem.ai';
        };
    }, [seo.title, seo.description]); // Re-run if seo data changes

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                document.title = seo.shortTitle + " - Innogem.ai";
            } else {
                document.title = seo.title;
            }
        };

        // Add visibility change listener
        document.addEventListener("visibilitychange", handleVisibilityChange);

        // Cleanup
        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, [seo.title, seo.shortTitle]);

    // Schema.org structured data
    const schemaBlogPosting = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": seo.title,
        "description": seo.description,
        "image": {
            "@type": "ImageObject",
            "url": seo.image,
            "caption": seo.imageAlt
        },
        "datePublished": seo.publishedTime,
        "dateModified": seo.modifiedTime,
        "author": {
            "@type": "Organization",
            "name": seo.author,
            "url": seo.authorUrl
        },
        "publisher": {
            "@type": "Organization",
            "name": seo.publisher,
            "logo": {
                "@type": "ImageObject",
                "url": seo.publisherLogo
            },
            "url": seo.publisherUrl
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": seo.canonical
        },
        "keywords": seo.keywords,
        "articleSection": "Announcements",
        "inLanguage": "en-US",
        "copyrightYear": "2026",
        "copyrightHolder": {
            "@type": "Organization",
            "name": "Innogem.ai"
        }
    };

    const schemaBreadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://innogem.ai"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://innogem.ai/blog"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "NVIDIA Inception Announcement",
                "item": seo.canonical
            }
        ]
    };

    const schemaOrganization = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Innogem.ai",
        "url": "https://innogem.ai",
        "logo": "https://innogem.ai/images/logo.png",
        "sameAs": [
            "https://twitter.com/innogemai",
            "https://linkedin.com/company/innogem-ai",
            "https://github.com/innogemai"
        ],
        "description": "Innogem.ai delivers intelligent, secure, and resilient digital networks across 5G, AI, and cybersecurity."
    };

    return (
        <>
            {/* Head section tetap ada untuk SSR */}
            <Head>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <meta name="keywords" content={seo.keywords} />
                <meta name="author" content={seo.author} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <link rel="canonical" href={seo.canonical} />

                {/* Open Graph */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content={seo.canonical} />
                <meta property="og:title" content={seo.title} />
                <meta property="og:description" content={seo.description} />
                <meta property="og:image" content={seo.image} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content={seo.imageAlt} />
                <meta property="og:site_name" content="Innogem.ai" />
                <meta property="article:published_time" content={seo.publishedTime} />
                <meta property="article:modified_time" content={seo.modifiedTime} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@innogemai" />
                <meta name="twitter:title" content={seo.title} />
                <meta name="twitter:description" content={seo.description} />
                <meta name="twitter:image" content={seo.image} />
            </Head>

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBlogPosting) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }}
            />

            <main className="min-h-screen relative overflow-hidden text-white">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-[#05050A] -z-20" />
                <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-teal-600/30 rounded-full blur-[220px] -z-10" />
                <div className="absolute top-40 right-[-200px] w-[500px] h-[500px] bg-amber-600/20 rounded-full blur-[220px] -z-10" />

                <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-teal-600 text-white px-4 py-2 rounded-lg z-50">
                    Skip to main content
                </a>

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
                            aria-label="Go back to previous page"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            Back
                        </Button>
                    </motion.div>

                    {/* Article Content */}
                    <motion.article
                        id="main-content"
                        initial="hidden"
                        animate="show"
                        variants={fadeUp}
                        className="pt-8 px-6 lg:px-10 pb-20"
                    >
                        <div className="max-w-3xl mx-auto">
                            {/* Header */}
                            <motion.header variants={fadeUp} className="mb-6">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500/20 to-amber-500/20 text-amber-400 rounded-full text-sm font-medium mb-4">
                                    <Award className="w-4 h-4" />
                                    <span>ARTICLE</span>
                                </div>

                                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                    Innogem.ai Joins NVIDIA Inception Program
                                </h1>
                            </motion.header>

                            {/* Author and Date */}
                            <motion.div
                                variants={fadeUp}
                                className="flex items-center gap-6 mb-8 text-gray-400 border-b border-white/10 pb-6"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-amber-500 p-0.5">
                                        <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                                            <User className="w-4 h-4 text-teal-400" />
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-sm text-gray-500">Published by</span>
                                        <p className="text-white font-medium">Innogem.ai Team</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <time dateTime="2026-02-18">February 18, 2026</time>
                                </div>
                            </motion.div>

                            {/* Image */}
                            <motion.figure variants={fadeUp} className="mb-8">
                                <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-amber-600/20" />
                                    <Image
                                        src="/article/nvidia.jpg"
                                        alt="NVIDIA Inception Program official logo and announcement banner featuring Innogem.ai as a new member"
                                        fill
                                        className="object-cover"
                                        priority
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <figcaption className="text-sm text-gray-500 mt-2 text-center">
                                    Innogem.ai officially joins NVIDIA Inception Program as a member
                                </figcaption>
                            </motion.figure>

                            {/* Content */}
                            <motion.div
                                variants={fadeUp}
                                className="space-y-6 text-gray-300 text-lg leading-relaxed"
                            >
                                <p>
                                    <strong className="text-white">Innogem.ai has been officially accepted into the NVIDIA Inception Program</strong>, a global initiative designed to support AI startups. This milestone marks a significant step forward for Innogem.ai as it continues shaping the future of intelligent, secure, and resilient digital networks across 5G, AI, and cybersecurity. By joining this global ecosystem, Innogem.ai strengthens its commitment to delivering solutions that enhance network intelligence, security posture, and operational resilience.
                                </p>

                                <p>
                                    <em className="text-white">NVIDIA Inception is a free program that guides AI startups through the NVIDIA platform and ecosystem.</em> It supports startups at every growth stage with tailored benefits that help them explore new AI opportunities, build using world-class technologies, and scale their business effectively. The program connects innovators with advanced tools, technical expertise, and a global network designed to accelerate commercialization and impact.
                                </p>

                                <p>
                                    As a member, Innogem.ai gains access to comprehensive training and technical guidance, the latest developer tools, and exclusive offers including preferred pricing on NVIDIA hardware and software. The program also opens doors to investor access and broader brand visibility within a global ecosystem of partners and industry leaders. These advantages empower Innogem.ai to further enhance its AI powered network intelligence capabilities while accelerating product development and deployment.
                                </p>

                                <p>
                                    With support from the NVIDIA Inception ecosystem, <strong className="text-white">innogem.ai is well positioned to scale its solutions, expand market reach, and drive transformative impact</strong> across telecommunications and cybersecurity industries worldwide.
                                </p>
                            </motion.div>
                        </div>
                    </motion.article>

                    <Footer />
                </div>
            </main>
        </>
    );
}