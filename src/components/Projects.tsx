import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Instagram } from "lucide-react";
import { useState, useMemo } from "react";
import { ProjectModal } from "./ProjectModal";

// Category Top Images
import hospTop from "../assets/projects/hospital/top.png";
import resTop from "../assets/projects/residential/top.png";
import indTop from "../assets/projects/industrial/top.png";

// Hospitality Images
import hospFeat1 from "../assets/projects/hospital/1,2025_Malone_PJ_Showroom/top.jpg";
import hospFeat3 from "../assets/projects/hospital/3,Jinya_Ramen_Bar_Alpharetta_GA/top.avif";
import hosp4 from "../assets/projects/hospital/1010_Midtown_Lobby_Atlanta_Georgia/top.avif";
import hosp5 from "../assets/projects/hospital/Pit_Stop_Convenience_Store_SugarHill_GA/top.avif";
import hosp6 from "../assets/projects/hospital/White_Windmill_Bakery_Cafe_Sugarloaf_GA/top.avif";
import hosp7 from "../assets/projects/hospital/Yuki_Restaurant_Duluth_GA/top.avif";
import hosp8 from "../assets/projects/hospital/Anjoo_Korean_Barbq_Suwanee_GA/top.avif";
import hospIlly from "../assets/projects/hospital/2023_Illy_Cafe/top.png";

// Residential Images
import resFeat1 from "../assets/projects/residential/1,2024_Geter/top.jpg";
import resFeat2 from "../assets/projects/residential/2,Lenox_Dr_Residence_Atlanta_GA/top.avif";
import resFeat3 from "../assets/projects/residential/3,2023_Gary_Cooper/top.png";
import resFeat4 from "../assets/projects/residential/2,2023_LeahA_Bradford/top.jpg";
import res4 from "../assets/projects/residential/Sugarloaf_Country_Club_Duluth_GA/top.avif";
import res5 from "../assets/projects/residential/The_Manor_Country_Club_Milton_GA/top.avif";
import res6 from "../assets/projects/residential/The_River_Club_Residence_Suwanee_GA/top.avif";
import res7 from "../assets/projects/residential/Waldorf_Astoria_Hotel_Atlanta_GA/top.avif";
import res8 from "../assets/projects/residential/Waldorf_Astoria_Penthouse_Atlanta_GA/top.avif";
import resDM1 from "../assets/projects/residential/Mr_and_Mrs_Meister_Residence_Duluth_GA/top.avif";
import resDM2 from "../assets/projects/residential/Mr_and_Mrs_Miller_Residence_Atlanta_GA/top.avif";
import resDM3 from "../assets/projects/residential/2023_KMS_Vaughn_Imbornone/top.jpg";

// Industrial Images
import indFeat1 from "../assets/projects/industrial/1,2024_HMGMA_Lobby/top.png";
import indFeat2 from "../assets/projects/industrial/2,Atlanta_Classic_Cars_Duluth_GA/top.avif";
import indFeat3 from "../assets/projects/industrial/3,KIA_Souvenir_Shop_Lobby_West_Point_GA/top.png";
import indDM1 from "../assets/projects/industrial/Hyundai_PowerTech_West_Point_GA/top.avif";
import indDM2 from "../assets/projects/industrial/KIA_Paint_West_Point_GA/top.avif";
import indDM3 from "../assets/projects/industrial/LS_Cable_System_USA_Showroom_Sandy_Spring_GA/top.avif";
import indDM4 from "../assets/projects/industrial/Viasat_Duluth_GA/top.avif";

const detailImages = import.meta.glob<string>('../assets/projects/**/*.{png,jpg,jpeg,avif,webp}', { eager: true, as: 'url' });

interface Project {
    id: string;
    name: string;
    image: string;
    category: string;
    folderName: string;
    details?: string[];
}

const categoriesData = [
    {
        id: "hospitality",
        title: "Hospitality",
        description: "EXPERIENCE THE ART OF LUXURY",
        topImage: hospTop,
        projects: [
            { id: "h1", category: "Hospitality", name: "White Windmill\nSugarloaf GA", image: hosp6, folderName: "White_Windmill_Bakery_Cafe_Sugarloaf_GA" },
            { id: "h2", category: "Hospitality", name: "PJ Showroom\nAtlanta GA", image: hospFeat1, folderName: "1,2025_Malone_PJ_Showroom" },
            { id: "h3", category: "Hospitality", name: "Jinya Ramen Bar\nAlpharetta GA", image: hospFeat3, folderName: "3,Jinya_Ramen_Bar_Alpharetta_GA" },
            { id: "h4", category: "Hospitality", name: "1010 Midtown Lobby\nAtlanta GA", image: hosp4, folderName: "1010_Midtown_Lobby_Atlanta_Georgia" },
            { id: "h5", category: "Hospitality", name: "Pit Stop\nSugar Hill GA", image: hosp5, folderName: "Pit_Stop_Convenience_Store_SugarHill_GA" },
            { id: "h6", category: "Hospitality", name: "Yuki Restaurant\nDuluth GA", image: hosp7, folderName: "Yuki_Restaurant_Duluth_GA" },
            { id: "h7", category: "Hospitality", name: "Anjoo Korean BarBQ\nSuwanee GA", image: hosp8, folderName: "Anjoo_Korean_Barbq_Suwanee_GA" },
            { id: "h8", category: "Hospitality", name: "Illy Cafe\nAtlanta GA", image: hospIlly, folderName: "2023_Illy_Cafe" },
        ]
    },
    {
        id: "residential",
        title: "Residential",
        description: "BESPOKE CABINET TAILORED TO YOUR LIFESTYLE",
        topImage: resTop,
        projects: [
            { id: "r5", category: "Residential", name: "Private Residence\nAtlanta GA", image: resDM2, folderName: "Mr_and_Mrs_Miller_Residence_Atlanta_GA" },
            { id: "r2", category: "Residential", name: "Private Residence\nAtlanta GA", image: resFeat1, folderName: "1,2024_Geter" },
            { id: "r3", category: "Residential", name: "Private Residence\nAtlanta GA", image: resFeat3, folderName: "3,2023_Gary_Cooper" },
            { id: "r12", category: "Residential", name: "Private Residence\nAtlanta GA", image: resFeat4, folderName: "2,2023_LeahA_Bradford" },
            { id: "r4", category: "Residential", name: "Private Residence\nDuluth GA", image: resDM1, folderName: "Mr_and_Mrs_Meister_Residence_Duluth_GA" },
            { id: "r1", category: "Residential", name: "Private Residence\nAtlanta GA", image: resFeat2, folderName: "2,Lenox_Dr_Residence_Atlanta_GA" },
            { id: "r6", category: "Residential", name: "Private Residence\nDuluth GA", image: res4, folderName: "Sugarloaf_Country_Club_Duluth_GA" },
            { id: "r7", category: "Residential", name: "Private Residence\nMilton GA", image: res5, folderName: "The_Manor_Country_Club_Milton_GA" },
            { id: "r9", category: "Residential", name: "Private Residence\nAtlanta GA", image: res7, folderName: "Waldorf_Astoria_Hotel_Atlanta_GA" },
            { id: "r10", category: "Residential", name: "Private Residence\nAtlanta GA", image: res8, folderName: "Waldorf_Astoria_Penthouse_Atlanta_GA" },
            { id: "r11", category: "Residential", name: "Private Residence\nAtlanta GA", image: resDM3, folderName: "2023_KMS_Vaughn_Imbornone" },
        ]
    },
    {
        id: "industrial",
        title: "Industrial",
        description: "crafting industry excellence",
        topImage: indTop,
        projects: [
            { id: "i1", category: "Industrial", name: "Hyundai PowerTech\nWest Point GA", image: indDM1, folderName: "Hyundai_PowerTech_West_Point_GA" },
            { id: "i2", category: "Industrial", name: "HMGMA Lobby\nSavannah GA", image: indFeat1, folderName: "1,2024_HMGMA_Lobby" },
            { id: "i3", category: "Industrial", name: "LS Cable Showroom\nSandy Spring GA", image: indDM3, folderName: "LS_Cable_System_USA_Showroom_Sandy_Spring_GA" },
            { id: "i4", category: "Industrial", name: "KIA Souvenir Shop\nWest Point GA", image: indFeat3, folderName: "3,KIA_Souvenir_Shop_Lobby_West_Point_GA" },
            { id: "i5", category: "Industrial", name: "KIA Paint Shop\nWest Point GA", image: indDM2, folderName: "KIA_Paint_West_Point_GA" },
            { id: "i6", category: "Industrial", name: "Atlanta Classic Cars\nDuluth GA", image: indFeat2, folderName: "2,Atlanta_Classic_Cars_Duluth_GA" },
            { id: "i7", category: "Industrial", name: "Viasat\nDuluth GA", image: indDM4, folderName: "Viasat_Duluth_GA" },
        ]
    }
];

export const Projects = ({ categoryFilter }: { categoryFilter?: string }) => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredCategories = useMemo(() => {
        let cats = categoriesData;
        if (categoryFilter) {
            cats = categoriesData.filter(cat => cat.id === categoryFilter);
        }
        const processed = cats.map(cat => ({
            ...cat,
            projects: cat.projects.map(project => {
                const safeCategoryPath = cat.id === "hospitality" ? "hospital" : cat.id;
                // Use a more relaxed path fragment to ensure matching across different build systems
                const expectedPathFragment = `projects/${safeCategoryPath}/${project.folderName}/`.toLowerCase();

                const images: string[] = Object.entries(detailImages)
                    .filter(([path]) => {
                        const decodedPath = path.toLowerCase().replace(/\\/g, '/');
                        return decodedPath.includes(expectedPathFragment);
                    })
                    .map(([_, moduleUrl]) => moduleUrl as string);

                return { ...project, details: images };
            })
        }));

        return processed;
    }, [categoryFilter]);

    return (
        <section id="projects" className="bg-stone-50">
            {filteredCategories.map((cat) => (
                <div
                    key={cat.id}
                    id={cat.id}
                    className="min-h-screen flex flex-col justify-between px-8 md:px-24 pt-32 pb-12 border-b border-black/5 last:border-0 scroll-mt-20"
                >
                    <div className="max-w-screen-2xl mx-auto w-full flex-grow">

                        {/* 1. Category Hero (Era Header) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="mb-20"
                        >
                            <p className="text-architectural text-black/80 text-xl mb-8 uppercase tracking-[0.2em]">{cat.title}</p>
                            {cat.topImage && (
                                <div className="relative w-full aspect-[4/3] md:aspect-[21/9] mb-12 overflow-hidden flex items-center justify-center group">
                                    <img
                                        src={cat.topImage}
                                        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1500ms]"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                                    <h3 className="relative z-10 text-center uppercase tracking-[0.3em] font-light text-3xl md:text-5xl lg:text-7xl text-white px-8">
                                        {cat.description}
                                    </h3>
                                </div>
                            )}
                        </motion.div>

                        {/* 2. Featured Grid - Top 3 Immersive Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
                            {cat.projects.slice(0, 3).map((project, idx) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    onClick={() => setSelectedProject(project)}
                                    className="group aspect-[3/4] md:aspect-[4/5] relative bg-white border border-black/5 flex flex-col justify-between hover:bg-black transition-all duration-700 cursor-pointer overflow-hidden"
                                >
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000"
                                    />
                                    <div className="relative z-10 p-12 h-full flex flex-col justify-between">
                                        <span className="text-[10px] text-black group-hover:text-white opacity-30 font-mono">0{idx + 1}</span>
                                        {cat.id !== "residential" && (
                                            <h4 className="text-3xl font-light uppercase italic group-hover:not-italic text-black group-hover:text-white transition-all tracking-tighter whitespace-pre-line">
                                                {project.name}
                                            </h4>
                                        )}
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/20 to-transparent group-hover:from-black/40 transition-all duration-700" />
                                </motion.div>
                            ))}
                        </div>

                        {/* 3. Horizontal Archive (Discover More) for Remaining Projects */}
                        {cat.projects.length > 3 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="flex items-center gap-6 mb-8">
                                    <span className="text-architectural text-black/40">Discover More Archive</span>
                                    <div className="h-[1px] bg-black/10 flex-grow" />
                                    <ChevronRight className="w-4 h-4 text-black/20" />
                                </div>
                                <div className="flex overflow-x-auto pb-8 gap-8 no-scrollbar scroll-smooth">
                                    {cat.projects.slice(3).map((project, idx) => (
                                        <div
                                            key={project.id}
                                            onClick={() => setSelectedProject(project)}
                                            className="group flex-shrink-0 w-80 aspect-video border border-black/5 hover:border-black/20 transition-all cursor-pointer bg-white/50 overflow-hidden relative"
                                        >
                                            <img
                                                src={project.image}
                                                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                            <div className="relative z-10 p-6 flex items-end h-full">
                                                {cat.id !== "residential" && (
                                                    <p className="text-xs font-light tracking-[0.2em] uppercase text-black group-hover:italic transition-all whitespace-pre-line">
                                                        {project.name}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Section Footer */}
                    <div className="max-w-screen-2xl mx-auto w-full mt-24 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-6">
                            <a
                                href="https://www.instagram.com/kaydesignstudio_/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-50 transition-all"
                            >
                                <Instagram className="w-6 h-6 stroke-1 text-black" />
                            </a>
                        </div>
                        <p className="text-[10px] uppercase tracking-architectural text-black/30">
                            © 2026 Kay Design Studio. All Rights Reserved.
                        </p>
                    </div>
                </div>
            ))}

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        allProjects={filteredCategories.flatMap(c => c.projects)}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};
