import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const milestones = [
    {
        year: "2022",
        title: "Expansion & Excellence",
        description: "Major residential projects in Suwanee and Atlanta. Commercial highlights include Jinya Ramen Bar (Poncey Highland) and Waldorf Astoria Hotel Residence Penthouse."
    },
    {
        year: "2021",
        title: "Residential Growth",
        description: "Bespoke residential designs completed in Suwanee and Atlanta, GA."
    },
    {
        year: "2017",
        title: "KDS Showroom completed",
        description: "Opening of the flagship showroom in Norcross, GA. Key projects include Viewpoint Atlanta Condos and Eastern Corporation Office."
    },
    {
        year: "2015",
        title: "Relocation to Norcross",
        description: "Relocated operations to Norcross, GA. Major commercial partnerships with Kia, Hyundai Powertech, and Sejin America."
    },
    {
        year: "2013",
        title: "Commercial Milestones",
        description: "Atlanta Athletic Club Golf Pro Shop (Johns Creek, GA)."
    },
    {
        year: "2008",
        title: "Strategic Move",
        description: "Relocated to Suwanee, GA to better serve the growing Georgia market."
    },
    {
        year: "2006",
        title: "Brooklyn Expansion",
        description: "Viridian Apartment project (130 units) in Brooklyn, NY."
    },
    {
        year: "2002",
        title: "Company Founding",
        description: "Kay Design Studio founded in Englewood, New Jersey, launching a unique vision of Design, Build, and Operate."
    }
];

export const History = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="history" className="py-32 px-8 md:px-24 bg-white border-b border-black/5">
            <div className="max-w-screen-2xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-12">
                    <p className="text-architectural text-black/80 text-lg uppercase tracking-widest">The Journey</p>
                    <h3 className="text-5xl md:text-8xl font-extralight tracking-tighter lowercase max-w-2xl">
                        a legacy of <span className="italic">architectural evolution.</span>
                    </h3>
                </div>

                <div className="relative min-h-[500px]" ref={containerRef}>
                    {/* Faint Background Line */}
                    <div className="absolute left-[7px] top-0 bottom-0 w-[1px] bg-black/5 md:left-1/2" />

                    {/* Animated Foreground Line */}
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute left-[7px] top-0 w-[1px] bg-black md:left-1/2 origin-top"
                    />

                    <div className="space-y-20 py-12">
                        {milestones.map((milestone, i) => (
                            <motion.div
                                key={milestone.year}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
                                className={`relative flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Animated Dot */}
                                <motion.div
                                    className="absolute left-[3px] top-4 w-[9px] h-[9px] rounded-full border border-black bg-white z-10 md:left-1/2 md:-ml-[4px]"
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                                    viewport={{ once: true, margin: "-20%" }}
                                />

                                <div className="w-full md:w-1/2 md:px-12 ml-8 md:ml-0">
                                    <div className={`flex flex-col ${i % 2 === 0 ? "md:items-start" : "md:items-end"} gap-4`}>
                                        <motion.span
                                            className="text-architectural text-black/80 text-lg font-mono tracking-[0.2em]"
                                            whileHover={{ scale: 1.05, color: "#000" }}
                                        >
                                            {milestone.year}
                                        </motion.span>
                                        <h4 className="text-3xl font-light tracking-tight">{milestone.title}</h4>
                                        <p className={`text-base text-black/50 font-light max-w-sm leading-relaxed ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                                            {milestone.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
