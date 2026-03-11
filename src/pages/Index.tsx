import { Navbar } from "../components/Navbar";
import { HeroCarousel } from "../components/HeroCarousel";
import { AboutSection } from "../components/AboutSection";
import { Services } from "../components/Services";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

const Index = () => {
    return (
        <div className="h-screen bg-background text-foreground font-sans selection:bg-stone-200 overflow-hidden">
            <Navbar />
            <main className="h-screen overflow-hidden">
                <HeroCarousel />
            </main>
        </div>
    );
};

export default Index;
