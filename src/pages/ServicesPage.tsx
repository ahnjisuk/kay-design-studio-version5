import { Navbar } from "../components/Navbar";
import { Services } from "../components/Services";
import { Footer } from "../components/Footer";

const ServicesPage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Navbar />
            <main className="pt-20">
                <Services />
                <Footer />
            </main>
        </div>
    );
};

export default ServicesPage;
