import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaChalkboardTeacher,
    FaBookOpen,
    FaLaptopCode,
    FaCogs,
    FaBroadcastTower,
    FaCheckCircle,
    FaGlobe,
    FaTrophy,
    FaUsers,
    FaRobot,
    FaStar,
    FaChartLine,
    FaComments,
    FaCertificate
} from 'react-icons/fa';
import { FiExternalLink } from "react-icons/fi";

// Static data (from your JSON)
const data = {
    hero: {
        titleLine1: "Transform Through Learning,",
        titleLine2: "Connection, and Community",
        subtitle: "Empowering individuals globally to lead in the digital economy with expert training, tools, and community support.",
        button: "Get Started"
    },
    why: {
        title: "Why It Matters",
        description: "In today's ever-evolving financial and digital landscape, staying ahead isn't just an advantage — it's a necessity. With IQAcademy, gaining that edge has never been easier."
    },
    getting: {
        title: "What You're Getting",
        items: [
            { title: "Full Access", desc: "Dashboard with self-paced and guided training programs", icon: <FaBookOpen className="text-4xl text-orange-500 mb-4" /> },
            { title: "Live Trainings", desc: "Weekly sessions with expert leaders", icon: <FaBroadcastTower className="text-4xl text-orange-500 mb-4" /> },
            { title: "Digital Delivery", desc: "100% online, accessible globally", icon: <FaLaptopCode className="text-4xl text-orange-500 mb-4" /> },
            { title: "Global Access", desc: "Learn anytime, anywhere in the world", icon: <FaGlobe className="text-4xl text-orange-500 mb-4" /> },
            { title: "Supportive Community", desc: "Connect with peers, mentors, and leaders", icon: <FaUsers className="text-4xl text-orange-500 mb-4" /> },
            { title: "Earn Certificates", desc: "Boost your credibility with recognized credentials", icon: <FaCertificate className="text-4xl text-orange-500 mb-4" /> },
        ]
    },
    advantage: {
        title: "The IQAcademy Advantage",
        description: "IQAcademy is at the heart of our platform — built to help you grow from student to leader. Join weekly live sessions and stay ahead with practical, real-world strategies.",
        steps: [
            { title: "Discovery and Assessment", desc: "We begin by thoroughly understanding your goals, needs, and challenges. This phase involves comprehensive discussions and assessments to lay the foundation for a tailored strategy." },
            { title: "Strategic Planning", desc: "Our team crafts a strategic plan designed to meet your specific objectives. This plan includes a roadmap with clear milestones, timelines, and key performance indicators." },
            { title: "Implementation", desc: "Once the strategy is finalized, we move into the implementation phase. This involves putting the plan into action, whether it's developing marketing campaigns, creating software solutions, or executing other agreed initiatives." },
            { title: "Completion and Delivery", desc: "Upon successful completion and your final approval, we deliver the final product or service, ready for implementation or launch." }
        ]
    },
    gamified: {
        heading: "A Gamified World of Learning & Earning",
        description: "At IQAcademy, every action matters. Our gamified platform makes learning fun,  and rewarding.",
        seeMore: "See More",
        feature: [
            { title: "Earn Rewards for Action", image: "/gaming1.jpg", desc: "Get points, unlock badges, climb the leaderboard as you progress through the Academy." },
            { title: "Level Up Your Skills", image: "/Gaming-Stats-2024.webp", desc: "Advance from \"Learner\" to \"Mentor\" by completing courses, challenges, and helping peers." },
            { title: "Track Growth Visually", image: "/gaming-blank-banner-background_23-2150390427.avif", desc: "Visual progress trackers help you stay focused and motivated every step of the way." }
        ]
    },
    support: {
        heading: "Always-On Support + Global Community",
        description: "You're never alone in your journey. Get help, find inspiration, and grow with your community.",
        seeMore: "See More",
        features: [
            { title: "24/7 AI Mentorship", desc: "Your built-in AI mentor gives real-time answers, motivation, and learning guidance.", image: "/istockphoto-1778829781-612x612.jpg" },
            { title: "Live Chat Rooms", desc: "Join topic-based rooms — Crypto, Business, Career, Mindset — and grow together.", image: "/istockphoto-2012537211-612x612.jpg" },
            { title: "Global Community", desc: "Connect with like-minded learners worldwide through challenges and meetups.", image: "/support.webp" }
        ]
    },
    license: {
        heading: "License Options & Terms",
        description: "Choose the plan that fits your pace and goals. Keep your access active by simply renewing your license before it expires. No hidden fees. No surprises.",
        purchaseButton: "Purchase Now",
        plans: [
            { title: "IQ90: 90-Day License", price: "$199", description: "Perfect for getting started and gaining rapid access to the full IQAcademy experience.", image: "/Lincense.png" },
            { title: "IQ365: 365-Day License", price: "$699", description: "Designed for long-term learners, leaders, and earners ready to go all in.", image: "/License.avif" }
        ]
    },
    keyBenefits: {
        heading: "Key Benefits",
        features: [
            "Full access to all courses and resources",
            "Community & mentorship support",
            "AI-powered learning assistant",
            "Gamified achievements and rewards",
            "Instant license activation",
            "No hidden fees, cancel anytime"
        ],
        joinNow: "Join Now",
        learnMore: "Learn More About the Opportunity",
        ctaTitle: "Ready to Level Up?",
        ctaDescription: "Join IQAcademy and unlock your potential today. Gain access to global learning, expert mentorship, and career-boosting skills.",
        ctaButton: "Explore the Opportunity"
    }
};

const SingleBlog = () => {
    const steps = data.advantage.steps;
    const feature = data.gamified.feature;
    const supportFeatures = data.support.features;
    const licenses = data.license.plans;
    const features = data.keyBenefits.features;

    return (
        <div className="min-h-screen text-gray-200 relative">
            {/* Hero Section */}
            <section className="relative w-full h-screen flex items-center justify-start">
                <img
                    src="/istockphoto-1312139041-612x612.jpg"
                    alt="IQAcademy Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 max-w-3xl px-6 md:px-16 text-left">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl font-bold mb-6 text-white"
                    >
                        {data.hero.titleLine1}<br />{data.hero.titleLine2}
                    </motion.h1>
                    <p className="text-lg text-gray-200 max-w-md">{data.hero.subtitle}</p>
                    <Link to="">
                        <motion.button
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="relative mt-8 border-2 border-white cursor-pointer text-white font-bold px-6 py-3 text-sm uppercase tracking-wide bg-transparent hover:bg-white hover:text-black transition"
                        >
                            {data.hero.button}
                        </motion.button>
                    </Link>
                </div>
            </section>

            {/* Why It Matters */}
            <section className="max-w-5xl mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-bold mb-6 text-orange-500">{data.why.title}</h2>
                <p className="text-lg leading-relaxed text-black">{data.why.description}</p>
            </section>

            {/* What You're Getting */}
            <section className="relative w-full bg-gray-50">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-stretch">
                    <div className="relative w-full lg:h-auto">
                        <img
                            src="/case-1.jpg"
                            alt="Team Meeting"
                            className="absolute inset-0 w-full h-full object-cover rounded-none lg:rounded-r-3xl"
                        />
                    </div>
                    <div className="py-20 px-6 lg:px-12 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold mb-12 text-orange-500 text-center lg:text-left">{data.getting.title}</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {data.getting.items.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.2 }}
                                    style={{ boxShadow: '0 4px 0 #1e3a8a' }}
                                >
                                    {item.icon}
                                    <h3 className="font-semibold text-xl mb-2 text-blue-900">{item.title}</h3>
                                    <p className="text-blue-900 text-sm">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* IQAcademy Advantage */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <motion.h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{data.advantage.title}</motion.h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">{data.advantage.description}</p>
                </div>

                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16">
                    <div className="lg:w-1/2 relative">
                        <div className="relative pl-12">
                            <div className="absolute left-6 top-0 bottom-0 border-l-2 border-dotted border-orange-500"></div>
                            {steps.map((step, i) => (
                                <motion.div key={i} className={`relative flex items-start ${i !== steps.length - 1 ? "mb-16" : ""}`}>
                                    <div className="w-12 h-12  bg-orange-500 text-white font-bold flex items-center justify-center rounded-full">{`0${i + 1}`}</div>
                                    <div className="ml-6">
                                        <h4 className="font-semibold text-lg text-gray-900">{step.title}</h4>
                                        <p className="text-gray-600 text-sm mt-2">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 flex justify-center items-center relative">
                        <div
                            className="absolute -top-10 -right-10 w-[95%] h-[95%] bg-[url('/pattern.png')] bg-cover bg-center -z-10"
                            style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
                        ></div>
                        <motion.img
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            src="/istockphoto-1440040207-612x612.jpg"
                            alt="IQAcademy Students"
                            className="w-[85%] max-w-2xl mx-auto shadow-lg"
                        />
                    </div>
                </div>
            </section>
            {/* Section 5: Always-On Support + Community */}
            <section>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="max-w-6xl mx-auto text-center"
                >

                    {/* Centered Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-500">
                        {data.support.heading}
                    </h2>

                    {/* Centered Paragraph */}
                    <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-black">
                        {data.support.description}
                    </p>

                    {/* Card Grid */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {supportFeatures.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-56 object-cover rounded-t-2xl"
                                />
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 mb-4 text-sm">{item.desc}</p>
                                    <a
                                        href="#"
                                        className="text-orange-500 font-semibold flex items-center justify-center gap-2 hover:underline"
                                    >
                                        {data.support.seeMore} <span>↗</span>
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

        </div>
    );
};

export default SingleBlog;
