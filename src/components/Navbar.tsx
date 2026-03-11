import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, Instagram } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const navLinks = [
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        {
            name: "Projects",
            path: "/projects",
            subLinks: [
                { name: "Hospitality", path: "/projects/hospitality", desc: "EXPERIENCE THE ART OF LUXURY" },
                { name: "Residential", path: "/projects/residential", desc: "BESPOKE CABINET TAILORED TO YOUR LIFESTYLE" },
                { name: "Industrial", path: "/projects/industrial", desc: "crafting industry excellence" },
            ]
        },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 px-8 h-20 flex items-center justify-between bg-white/50 backdrop-blur-xl text-black border-b border-black/5`}
            >
                <div className="flex items-center gap-12">
                    <div
                        role="button"
                        tabIndex={0}
                        onClick={() => {
                            navigate("/");
                            window.scrollTo(0, 0);
                            setMenuOpen(false);
                        }}
                        className="text-xl font-light tracking-architectural uppercase cursor-pointer hover:opacity-70 transition-opacity select-none"
                    >
                        Kay Design Studio —
                    </div>
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group p-2 -m-2">
                                {link.subLinks ? (
                                    <span
                                        className="text-[10px] uppercase tracking-architectural cursor-default opacity-100 italic transition-all"
                                    >
                                        {link.name}
                                    </span>
                                ) : (
                                    <Link
                                        to={link.path}
                                        className="text-[10px] uppercase tracking-architectural hover:opacity-50 transition-opacity"
                                    >
                                        {link.name}
                                    </Link>
                                )}

                                {/* Dropdown Menu (Glassmorphism) */}
                                {link.subLinks && (
                                    <div className="absolute top-full left-0 pt-6 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-700 ease-out transform translate-y-4 group-hover:translate-y-0 origin-top">
                                        <div className="bg-white/95 backdrop-blur-2xl text-black px-10 py-8 flex flex-col gap-6 min-w-[550px] shadow-[0_8px_32px_rgba(0,0,0,0.05)] border border-white/50 rounded-lg overflow-hidden relative">
                                            <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

                                            <div className="relative z-10 flex flex-col gap-6">
                                                {link.subLinks.map(sub => (
                                                    <Link
                                                        key={sub.name}
                                                        to={sub.path}
                                                        className="group/sub flex items-center justify-between transition-all"
                                                    >
                                                        <div className="flex items-baseline gap-4 w-full">
                                                            <span className="text-base font-light uppercase tracking-widest group-hover/sub:italic group-hover/sub:text-black/60 transition-all whitespace-nowrap">
                                                                {sub.name}
                                                            </span>
                                                            <div className="flex flex-row items-center gap-3 flex-grow opacity-60 group-hover/sub:opacity-100 transition-all overflow-hidden border-b border-transparent group-hover/sub:border-black/10 pb-1">
                                                                <span className="w-6 h-[1px] bg-black/20 group-hover/sub:w-12 group-hover/sub:bg-black/50 transition-all duration-700 hidden sm:block" />
                                                                <span className="text-[9px] sm:text-[10px] text-black/50 group-hover/sub:text-black/80 uppercase tracking-[0.2em] font-mono text-right whitespace-nowrap transition-colors">
                                                                    {sub.desc}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-8">
                    <Search className="w-4 h-4 stroke-1 hover:opacity-50 transition-opacity cursor-pointer hidden md:block" />
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex items-center gap-3 group"
                    >
                        <span className="text-[10px] uppercase tracking-architectural group-hover:opacity-50 transition-opacity">
                            {menuOpen ? "Close" : "Menu"}
                        </span>
                        {menuOpen ? <X className="w-4 h-4 stroke-1" /> : <Menu className="w-4 h-4 stroke-1" />}
                    </button>
                </div>
            </header>

            <AnimatePresence shadow-sm>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-40 bg-white pt-32 px-8 flex flex-col md:flex-row justify-between pb-24"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i + 0.3 }}
                                    className="group relative flex flex-col items-start"
                                >
                                    {link.subLinks ? (
                                        <span
                                            className="text-5xl md:text-7xl font-extralight tracking-tighter transition-all inline-block lowercase italic cursor-default"
                                        >
                                            {link.name}
                                        </span>
                                    ) : (
                                        <Link
                                            to={link.path}
                                            onClick={() => {
                                                setMenuOpen(false);
                                                window.scrollTo(0, 0);
                                            }}
                                            className="text-5xl md:text-7xl font-extralight tracking-tighter hover:italic transition-all inline-block lowercase"
                                        >
                                            {link.name}
                                        </Link>
                                    )}

                                    {link.subLinks && (
                                        <div className="flex flex-col gap-2 md:gap-4 mt-4 md:mt-0 md:absolute md:left-full md:top-1/2 md:-translate-y-1/2 md:pl-12 opacity-100 md:opacity-0 md:group-hover:opacity-100 pointer-events-auto md:pointer-events-none md:group-hover:pointer-events-auto transition-all duration-500">
                                            {link.subLinks.map((sub) => (
                                                <Link
                                                    key={sub.name}
                                                    to={sub.path}
                                                    onClick={() => {
                                                        setMenuOpen(false);
                                                        window.scrollTo(0, 0);
                                                    }}
                                                    className="text-2xl md:text-3xl font-extralight text-black/30 hover:text-black hover:italic transition-all lowercase whitespace-nowrap"
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        <div className="max-w-xs flex flex-col justify-end gap-12 text-black/60">
                            <div className="space-y-4">
                                <p className="text-architectural text-black/40">Headquarters</p>
                                <p className="font-light text-xs leading-relaxed">
                                    4784 Cantrell Rd. Suite 200<br />Flowery Branch, GA 30542
                                </p>
                            </div>
                            <div className="space-y-4">
                                <p className="text-architectural text-black/40">Inquiries</p>
                                <a href="mailto:info@kaydesignstudio.com" className="text-sm font-light hover:underline underline-offset-4">
                                    info@kaydesignstudio.com
                                </a>
                            </div>
                            <div className="pt-8 border-t border-black/5">
                                <a
                                    href="https://www.instagram.com/kaydesignstudio_/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-black hover:opacity-50 transition-all"
                                >
                                    <Instagram className="w-6 h-6 stroke-1" />
                                    <span className="text-[10px] uppercase tracking-architectural">Instagram</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
