import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // If there's no hash (like #about), scroll to the very top.
        // If there is a hash, we might need a small delay or let the browser handle it,
        // but since we want the "top image" (Hero or Page top), window.scrollTo(0,0) is usually best.
        if (!hash) {
            window.scrollTo(0, 0);
        } else {
            const id = hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [pathname, hash]);

    return null;
}
