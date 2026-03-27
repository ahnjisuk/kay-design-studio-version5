import { motion } from "framer-motion";

// Image
import singleSlide from "../assets/about/1.png";
import philosophyBg from "../assets/about/philosophy-bg.jpg";

export const AboutSection = () => {

    return (
        <section className="min-h-screen px-8 md:px-24 bg-white overflow-hidden relative flex items-center py-32">
            {/* Background for Philosophy section */}
            <div className="absolute top-0 left-0 w-full h-[600px] pointer-events-none opacity-[0.03] grayscale transition-opacity duration-1000">
                <img
                    src={philosophyBg}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="max-w-screen-2xl mx-auto relative z-10 w-full">
                <div className="flex flex-col gap-12 lg:gap-24">
                    <div className="w-full">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="text-architectural text-black/80 text-lg mb-8"
                        >
                            The Philosophy
                        </motion.p>

                        <h2 className="font-light tracking-tight leading-[1.1] mb-12 uppercase max-w-6xl">
                            <motion.span
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true }}
                                className="block text-4xl md:text-6xl lg:text-[4.5rem] text-black/90 mb-4 md:mb-8"
                            >
                                I don't divide Design,
                                <br className="hidden md:block" /> Build and Operate;
                            </motion.span>

                            <motion.span
                                initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)", x: 20 }}
                                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)", x: 0 }}
                                transition={{ duration: 1.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
                                viewport={{ once: true }}
                                className="block italic text-black/40 text-3xl md:text-5xl lg:text-7xl mt-8 md:mt-12 md:ml-32"
                            >
                                "to me they are one."
                            </motion.span>
                        </h2>
                    </div>

                    {/* Main Image */}
                    <div className="w-full aspect-[4/3] md:aspect-[16/10] bg-stone-100 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl border border-black/5">
                        <img
                            src={singleSlide}
                            alt="About Studio"
                            className="absolute inset-0 w-full h-full object-contain p-4 brightness-[0.98]"
                        />
                        {/* Subtle overlay to soften the transition */}
                        <div className="absolute inset-0 bg-black/[0.02] pointer-events-none" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start w-full">
                        <div className="flex flex-col space-y-8 text-base text-black/60 font-light leading-relaxed">
                            <div className="space-y-6">
                                <p>
                                    Kay Design Studio was founded in 2002 with a unified vision, where design, build, and operate seamlessly merge into one cohesive entity.
                                </p>
                                <p>
                                    With extensive expertise in interior design, construction management, and architectural woodworking, our studio has redefined standards for exceptional interiors and brand excellence.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-8 text-base text-black/60 font-light leading-relaxed">
                            <div className="space-y-6">
                                <p>
                                    Over the years, we've crafted some of the most exciting and innovative brands, while also expanding our services to become a strategic marketing partner, helping our clients target specific niche markets.
                                </p>
                                <p>
                                    Today, our studio remains committed to this holistic approach, offering comprehensive solutions in Design, Construction, Operations, and Unique visual design.
                                </p>
                                <div className="pt-12 border-t border-black/5">
                                    <p className="text-sm uppercase tracking-architectural opacity-40">Established 2002</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
