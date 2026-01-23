"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger } from "@/lib/motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {


  return (
    <main className="min-h-screen relative overflow-hidden text-white">
      {/* BASE */}
      <div className="absolute inset-0 bg-[#05050A] -z-20" />

      {/* GLOW ORBS */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-600/60 rounded-full blur-[220px] -z-10" />
      <div className="absolute top-40 right-[-200px] w-[500px] h-[500px] bg-fuchsia-600/50 rounded-full blur-[220px] -z-10" />
      <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-600/40 rounded-full blur-[260px] -z-10" />

      {/* VIGNETTE */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none -z-10" />

      <div className="container mx-auto relative z-10">
        <Navbar />

        {/* ================= HERO ================= */}
        <section
          id="home"
          className="pt-28 sm:pt-32 lg:pt-36 px-4 sm:px-6 lg:px-10"
        >
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center"
          >
            {/* IMAGE — TOP ON MOBILE */}
            <motion.div
              variants={fadeUp}
              className="relative flex justify-center order-1 lg:order-2"
            >
              <div className="absolute inset-0 rounded-[40px] bg-purple-500/30 blur-3xl -z-10" />
              <Image
                src="/images/hero-ai.png"
                alt="AI 5G Cybersecurity"
                width={420}
                height={560}
                priority
                className="rounded-[32px] object-cover w-[240px] sm:w-[300px] lg:w-[420px]"
              />
            </motion.div>

            {/* TEXT — BELOW IMAGE ON MOBILE */}
            <motion.div
              variants={stagger}
              className="order-2 lg:order-1 text-center lg:text-left"
            >
              <motion.h1
                variants={fadeUp}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Innovation at the <br />
                Intersection of{" "}
                <span className="text-purple-400">
                  5G, AI <br /> & Cybersecurity
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-gray-400 mt-6 sm:mt-8 max-w-xl mx-auto lg:mx-0 leading-relaxed text-sm sm:text-base"
              >
                Innogem is an innovation driven company shaping the future of
                intelligent, secure, and resilient digital networks.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6 mt-8 sm:mt-10 justify-center lg:justify-start"
              >
                <Link href="#capabilities">
                  <Button className="bg-purple-500 hover:bg-purple-600 rounded-xl px-8 py-3">
                    Explore Innovation
                  </Button>
                </Link>

                <button className="text-sm text-gray-300 hover:text-white underline underline-offset-4">
                  Download Whitepaper
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ================= WHY INNOGEM ================= */}
        <section
          id="why-innogem"
          className="mt-40 px-6 lg:px-10"
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            {/* Outer Container */}
            <div className="relative rounded-[40px] bg-white/5 backdrop-blur-2xl px-8 py-16 lg:px-16 text-center overflow-hidden border border-white/10">
              {/* Subtle Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-indigo-500/10 blur-[160px] -z-10" />

              {/* Title */}
              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Why <span className="text-purple-400">Innogem</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-gray-400 max-w-2xl mx-auto mb-14 text-sm md:text-base leading-relaxed"
              >
                The future of connectivity is intelligent and secure.
                Innogem helps organizations build networks that are resilient,
                adaptive, and ready for what's next.
              </motion.p>

              {/* Cards */}
              <motion.div
                variants={stagger}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {[
                  {
                    title: "Intelligent Connectivity",
                    desc: "From 5G networks and cloud platforms to AI-powered services, connectivity is the foundation of innovation.",
                  },
                  {
                    title: "Security & Trust",
                    desc: "Growing openness and complexity introduce new challenges around security, resilience, and trust.",
                  },
                  {
                    title: "Unified Approach",
                    desc: "We integrate innovation, intelligence, and cybersecurity into a single, practical approach.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="group relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 text-left transition-all duration-300 hover:bg-white/10 hover:border-purple-500/40 hover:-translate-y-1"
                  >
                    {/* Label */}
                    <div className="text-purple-400 text-xs mb-4 tracking-wider uppercase">
                      The Big Idea
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-semibold mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-300 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-purple-500/10 opacity-0 group-hover:opacity-100 blur-xl transition pointer-events-none" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ================= WHAT INNOGEM DOES ================= */}
        <section className="mt-40 px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* IMAGE */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="relative"
          >
            <div className="absolute -inset-8 bg-purple-500/25 blur-3xl rounded-[40px] -z-10" />
            <Image
              src="/images/two-frame.png"
              alt="Next-Generation Digital Infrastructure"
              width={420}
              height={520}
              className="rounded-[32px] object-cover"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
            >
              What <span className="text-purple-400">Innogem</span> Does
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-gray-400 max-w-md mb-8 leading-relaxed text-sm md:text-base"
            >
              Innogem supports organizations building and operating
              <span className="text-white font-medium">
                {" "}next generation networks{" "}
              </span>
              and digital infrastructure that are intelligent, secure, and resilient.
            </motion.p>

            {/* CORE FOCUS */}
            <motion.div
              variants={stagger}
              className="space-y-4 mb-10"
            >
              {[
                {
                  title: "Future Connectivity",
                  desc: "Enabling innovation in 5G and future connectivity.",
                },
                {
                  title: "AI-Driven Intelligence",
                  desc: "Applying artificial intelligence to improve visibility and decision making.",
                },
                {
                  title: "Built-in Security",
                  desc: "Embedding cybersecurity and resilience into modern network environments.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4"
                >
                  <div className="font-semibold text-sm mb-1">
                    {item.title}
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ================= OUR CORE ================= */}
        <section
          id="capabilities"
          className="mt-40 px-6 lg:px-10"
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold mb-12"
            >
              Our <span className="text-purple-400">Core Capabilities</span>
            </motion.h2>

            <motion.div
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "AI Intelligence",
                  desc: "AI driven systems that understand patterns, detect changes, and support smarter decision making.",
                  img: "/images/core-1.png",
                  link: "/artificial-intelligence"
                },
                {
                  title: "5G Connectivity",
                  desc: "Ultra fast, low latency connectivity enabling realtime and mission critical digital services.",
                  img: "/images/core-2.png",
                  link: "/5g-connectivity"
                },
                {
                  title: "Cybersecurity",
                  desc: "Advanced protection for open, software defined, and highly connected environments.",
                  img: "/images/core-3.png",
                  link: "/cyber-security"
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-purple-500/50 transition-all"
                >
                  <Link
                    href={item.link}
                  >
                    {/* Image */}
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={600}
                      height={600}
                      className="h-[350px] w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Glow Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                    {/* Content */}
                    <div className="absolute bottom-0 p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
                        {item.desc}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ================= SOLUTIONS ================= */}
        <section
          id="solutions"
          className="mt-40 px-6 lg:px-10"
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* LEFT CONTENT */}
              <motion.div
                variants={fadeUp}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  A practical approach to <br />
                  <span className="text-purple-400">
                    intelligent connectivity
                  </span>
                </h2>

                <p className="text-gray-400 max-w-md leading-relaxed text-sm md:text-base">
                  Designed for real world environments, our approach helps organizations
                  understand what's happening, make sense of change, and respond faster
                  with confidence.
                </p>
              </motion.div>

              {/* CORE STEPS */}
              <motion.div
                variants={stagger}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              >
                {[
                  {
                    title: "Observe",
                    desc: "Gain visibility across networks and digital systems.",
                  },
                  {
                    title: "Interpret",
                    desc: "Use intelligence and analytics to understand meaning and risk.",
                  },
                  {
                    title: "Act",
                    desc: "Enable timely response and continuous improvement.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-purple-500/40 transition"
                  >
                    <h3 className="text-lg font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* FOOT NOTE */}
            <motion.div
              variants={fadeUp}
              className="mt-10 text-center"
            >
              <p className="text-sm text-gray-400">
                This approach enables{" "}
                <span className="text-white font-medium">
                  resilient, adaptive, and future ready networks
                </span>
                .
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ================= CTA / CONTACT ================= */}
        <section
          id="contact"
          className="mt-40 px-6 lg:px-10"
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            {/* CTA */}
            <div className="relative rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl px-10 py-14 overflow-hidden">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-transparent to-indigo-500/20 blur-[160px] -z-10" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* CTA TEXT */}
                <motion.div
                  variants={stagger}
                >
                  <motion.h3
                    variants={fadeUp}
                    className="text-2xl md:text-3xl font-bold mb-4"
                  >
                    Explore product in <br />
                    <span className="text-purple-400">new way</span>
                  </motion.h3>

                  <motion.p
                    variants={fadeUp}
                    className="text-gray-400 max-w-md mb-8 text-sm leading-relaxed"
                  >
                    Discover how intelligent technology, security, and innovation come
                    together to create meaningful digital experiences.
                  </motion.p>

                  <motion.div
                    variants={fadeUp}
                    className="flex items-center gap-4"
                  >
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500 w-64"
                    />
                    <button className="bg-purple-500 hover:bg-purple-600 transition rounded-xl px-6 py-3 text-sm font-medium">
                      Start →
                    </button>
                  </motion.div>
                </motion.div>

              </div>
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </main >
  );
}