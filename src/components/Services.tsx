import { motion } from "framer-motion";
import kitchenDetail3 from "../assets/kitchen-detail-3.png";
import kitchenDetail4 from "../assets/kitchen-detail-4.png";

const services = [
    {
        id: "01",
        category: "Operation",
        title: "Field Operation",
        image: kitchenDetail3,
        items: ["quality control", "job site safety", "design team communication", "schedule compliance"]
    },
    {
        id: "02",
        category: "Architecture",
        title: "Architecture & Bespoke Design",
        image: kitchenDetail4,
        items: ["architectural woodworking", "bespoke kitchen design", "customizable modular cabinets", "signature look transformation"]
    },
];

export const Services = () => {
    return (
        <section className="h-full bg-muted/30 py-12 md:py-0 px-8 md:px-24 overflow-hidden relative flex flex-col justify-center">
            <div className="max-w-screen-2xl mx-auto">
                <div className="flex flex-col md:flex-row gap-24 items-end mb-40">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 0.8, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="text-architectural text-black text-2xl rotate-180 [writing-mode:vertical-lr] uppercase tracking-widest"
                    >
                        Services
                    </motion.h2>
                    <div className="space-y-12">
                        <motion.h3
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-5xl md:text-8xl font-extralight tracking-tighter max-w-4xl leading-tight lowercase"
                        >
                            we design spaces that <span className="italic">reflect your life.</span>
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="text-black/40 font-light max-w-sm leading-relaxed"
                        >
                            From pre-construction planning to meticulous field operations, we offer professional solutions for the entire lifecycle of your project.
                        </motion.p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 border-t border-black/5">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="p-0 border-b border-r border-black/5 last:border-r-0 lg:even:border-r group hover:bg-stone-50 transition-colors duration-700"
                        >
                            {service.image && (
                                <div className="aspect-[4/3] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                                    <motion.img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 1.5 }}
                                    />
                                </div>
                            )}
                            <div className="p-10">
                                <div className="flex items-baseline justify-between mb-16">
                                    <span className="text-[10px] font-mono text-black/20">{service.id}</span>
                                    <p className="text-architectural text-black/80 text-lg transition-opacity duration-700">
                                        {service.category}
                                    </p>
                                </div>
                                <h4 className="text-2xl font-light mb-10 tracking-tight lowercase">{service.title}</h4>
                                <ul className="space-y-4">
                                    {service.items.map((item, idx) => (
                                        <li key={idx} className="text-[12px] uppercase tracking-widest text-black/80 font-medium flex items-center gap-3">
                                            <span className="w-1 h-[1px] bg-black/10 group-hover:bg-black/30 transition-colors" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
