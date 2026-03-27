import { Instagram } from "lucide-react";

export const Footer = () => {
    return (
        <footer id="contact" className="bg-white border-t border-black/5 pt-32 pb-12 px-8 md:px-24">
            <div className="max-w-screen-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 mb-32">
                    <div className="lg:col-span-1">
                        <h3 className="text-architectural mb-12">Kay Design Studio</h3>
                        <p className="text-xs text-muted-foreground font-light leading-relaxed max-w-[200px]">
                            Let's Build Together.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <p className="text-architectural text-black/40">Headquarters</p>
                        <div className="text-xs font-light leading-relaxed space-y-2">
                            <p>4784 Cantrell Rd. Suite 200</p>
                            <p>Flowery Branch, GA 30542</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <p className="text-architectural text-black/40">Contact</p>
                        <div className="text-xs font-light space-y-4">
                            <p>770.559.3260</p>
                            <a href="mailto:info@kaydesignstudio.com" className="block hover:italic transition-all">
                                info@kaydesignstudio.com
                            </a>
                            <a
                                href="https://www.instagram.com/kaydesignstudio_/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-black hover:opacity-50 transition-all pt-4"
                            >
                                <Instagram className="w-5 h-5 stroke-1" />
                                <span className="text-[10px] uppercase tracking-architectural">Instagram</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-architectural text-black/30">
                    <p>© 2026 Kay Design Studio. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};
