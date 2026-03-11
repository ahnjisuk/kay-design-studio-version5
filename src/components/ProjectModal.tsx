import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
    id: string;
    name: string;
    image: string;
    category: string;
    location?: string;
    year?: string;
    description?: string;
    details?: string[];
}

interface ProjectModalProps {
    project: Project;
    allProjects: Project[];
    onClose: () => void;
}

export const ProjectModal = ({ project: initialProject, allProjects, onClose }: ProjectModalProps) => {
    const [currentProject, setCurrentProject] = useState(initialProject);
    const [currentImg, setCurrentImg] = useState(0);

    const allImages = Array.from(new Set([currentProject.image, ...(currentProject.details || [])]));

    const next = () => setCurrentImg((p) => (p + 1) % allImages.length);
    const prev = () => setCurrentImg((p) => (p - 1 + allImages.length) % allImages.length);

    // Reset image index when project changes
    useEffect(() => {
        setCurrentImg(0);
    }, [currentProject.id]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [allImages.length, onClose]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-12 overflow-hidden"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-white/98 cursor-crosshair"
                onClick={onClose}
            />

            {/* Modal Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 10 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full bg-white shadow-2xl overflow-hidden flex flex-col"
            >
                {/* Top Navigation: Project Names List */}
                <div className="w-full bg-white border-b border-black/5 px-8 pt-10 pb-6 flex items-center justify-between">
                    <div className="flex-1 overflow-x-auto no-scrollbar">
                        <div className="flex items-center gap-12 min-w-max pr-12">
                            {allProjects.map((p) => (
                                <button
                                    key={p.id}
                                    onClick={() => setCurrentProject(p)}
                                    className={`text-[10px] tracking-widest uppercase transition-all whitespace-pre-line text-left leading-tight ${p.id === currentProject.id
                                        ? "text-black font-semibold border-b border-black pb-1"
                                        : "text-black/60 hover:text-black font-medium"
                                        }`}
                                >
                                    {p.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="p-2 ml-8 hover:bg-stone-100 transition-colors"
                    >
                        <X className="w-5 h-5 stroke-1" />
                    </button>
                </div>

                {/* Main Content Area */}
                <div className="flex-grow relative flex flex-col md:flex-row">
                    {/* Left/Center Side: Image Gallery */}
                    <div className="flex-grow h-full relative overflow-hidden bg-stone-50 group">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`${currentProject.id}-${currentImg}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 flex items-center justify-center overflow-hidden bg-black"
                            >
                                {/* Blurred Background for vertical/mismatched images */}
                                <img
                                    src={allImages[currentImg]}
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110"
                                />

                                {/* Main Image */}
                                <motion.img
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.02 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    src={allImages[currentImg]}
                                    alt={`${currentProject.name} ${currentImg + 1}`}
                                    className="relative z-10 w-full h-full object-contain shadow-2xl"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        {allImages.length > 1 && (
                            <div className="absolute inset-0 flex items-center justify-between px-8 z-30 pointer-events-none text-white">
                                <button
                                    onClick={(e) => { e.stopPropagation(); prev(); }}
                                    className="p-4 bg-black/20 hover:bg-black/60 backdrop-blur-sm transition-all pointer-events-auto rounded-full"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); next(); }}
                                    className="p-4 bg-black/20 hover:bg-black/60 backdrop-blur-sm transition-all pointer-events-auto rounded-full"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>
                        )}

                        {/* Gallery Pagination Bars - Shifted to top for visibility */}
                        {allImages.length > 1 && (
                            <div className="absolute top-8 left-8 right-8 flex gap-1 z-20">
                                {allImages.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentImg(i)}
                                        className={`h-[2px] flex-1 transition-all duration-500 ${i === currentImg ? "bg-black" : "bg-black/10 hover:bg-black/20"
                                            }`}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Counters */}
                        <div className="absolute bottom-8 right-8 text-[10px] uppercase tracking-widest font-medium text-black/40 z-20">
                            PHOTO {currentImg + 1} / {allImages.length}
                        </div>
                    </div>

                    {/* Small Bottom/Right Info (Compact fallback) */}
                    <div className="p-8 md:p-12 w-full md:w-80 bg-white border-l border-black/5 flex flex-col justify-between">
                        <div>
                            <p className="text-sm md:text-base uppercase tracking-widest font-semibold text-black/80 mb-4">{currentProject.category}</p>
                            <h2 className="text-2xl font-light tracking-tight leading-tight uppercase italic mb-8 whitespace-pre-line">
                                {currentProject.name}
                            </h2>
                            <p className="text-xs font-light text-black/60 leading-relaxed italic">
                                Architecture / Interior / Design
                            </p>
                        </div>

                        {/* Pagination info for mobile or small screens */}
                        <div className="mt-8 pt-8 border-t border-black/5">
                            <button
                                onClick={onClose}
                                className="text-[10px] uppercase tracking-widest font-medium hover:italic transition-all"
                            >
                                [ Back to Studio ]
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};
