import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram } from "lucide-react";
import heroImage1 from "../assets/hero_new/1.avif";
import heroImage2 from "../assets/hero_new/2.png";
import heroImage3 from "../assets/hero_new/3.png";
import heroImage4 from "../assets/hero_new/4.jpg";

const slides = [
    { image: heroImage1, label: "Slide 1" },
    { image: heroImage2, label: "Slide 2" },
    { image: heroImage3, label: "Slide 3" },
    { image: heroImage4, label: "Slide 4" },
];

export const HeroCarousel = () => {
    const [current, setCurrent] = useState(0);

    const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);

    useEffect(() => {
        const timer = setInterval(next, 4000);
        return () => clearInterval(timer);
    }, [next]);

    return (
        <section className="relative h-screen w-full bg-black overflow-hidden select-none">
            <AnimatePresence>
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0"
                >
                    <motion.img
                        src={slides[current].image}
                        alt={slides[current].label}
                        className="w-full h-full object-cover opacity-60"
                        initial={{ scale: 1.05 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 6, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
                </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 flex flex-col justify-end pb-24 px-8 md:px-24 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute bottom-12 md:bottom-24 left-8 md:left-24 right-8 md:right-24 pointer-events-auto max-w-[90vw] lg:max-w-7xl"
                >
                    <h1 className="text-hero-heading text-white mb-6 md:mb-10 whitespace-pre-line  leading-none tracking-tighter">
                        {["Let's", "Build", "Together."].map((line, i) => (
                            <span key={i} className="block overflow-hidden pb-8">
                                <motion.span
                                    initial={{ y: "100%", opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                                    animate={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
                                    transition={{
                                        duration: 2.5,
                                        delay: 0.8 + i * 1.0,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    className="inline-block"
                                >
                                    {line}
                                </motion.span>
                            </span>
                        ))}
                    </h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="flex items-center gap-12"
                    >
                        <span className="text-[10px] uppercase tracking-architectural text-white/30">
                            {String(current + 1).padStart(2, '0')} — {String(slides.length).padStart(2, '0')}
                        </span>
                        <div className="h-[1px] bg-white/10 flex-grow max-w-[200px] overflow-hidden relative">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "0%" }}
                                transition={{ duration: 4, ease: "linear" }}
                                key={current}
                                className="absolute inset-0 bg-white/40"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <div className="absolute top-1/2 right-8 -translate-y-1/2 flex flex-col gap-6">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-[1px] h-12 transition-all duration-700 ${i === current ? "bg-white h-20" : "bg-white/20"
                            }`}
                    />
                ))}
            </div>

            <div className="absolute bottom-6 left-8 right-8 flex justify-between items-center z-20 pointer-events-auto">
                <a
                    href="https://www.instagram.com/kaydesignstudio_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white transition-colors"
                >
                    <Instagram className="w-5 h-5 stroke-1" />
                </a>
                <p className="text-[10px] uppercase tracking-architectural text-white/20">
                    © 2026 Kay Design Studio
                </p>
            </div>
        </section>
    );
};
