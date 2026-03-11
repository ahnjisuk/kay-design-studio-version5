import { Navbar } from "../components/Navbar";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Navbar />
            <main className="pt-20">
                <Contact />
                <Footer />
            </main>
        </div>
    );
};

export default ContactPage;
