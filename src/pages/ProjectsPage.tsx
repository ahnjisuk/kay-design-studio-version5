import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ProjectsPage = () => {
    const { category } = useParams();

    useEffect(() => {
        // Use a small timeout to ensure the component has rendered and the ScrollToTop logic has executed
        const timer = setTimeout(() => {
            if (category) {
                const el = document.getElementById(category);
                if (el) {
                    el.scrollIntoView({ behavior: 'auto', block: 'start' });
                }
            } else {
                window.scrollTo(0, 0);
            }
        }, 100);
        return () => clearTimeout(timer);
    }, [category]);

    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Navbar />
            <main className="pt-20">
                <Projects categoryFilter={category} />
            </main>
        </div>
    );
};

export default ProjectsPage;
