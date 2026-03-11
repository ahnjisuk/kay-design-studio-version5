import { Navbar } from "../components/Navbar";
import { AboutSection } from "../components/AboutSection";
import { Footer } from "../components/Footer";

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Navbar />
            <main className="pt-20">
                <AboutSection />
                <Footer />
            </main>
        </div>
    );
};

export default AboutPage;
