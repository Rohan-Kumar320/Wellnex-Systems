    import { useEffect, useState } from "react";

    export default function ThemeToggle({ className = "" }) {
    const [isDark, setIsDark] = useState(() => {
        try {
        const s = localStorage.getItem("wellnex:theme");
        if (s === "dark") return true;
        if (s === "light") return false;
        if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) return true;
        } catch (e) {}
        return false;
    });

    useEffect(() => {
        try {
        const root = document.documentElement;
        if (isDark) root.classList.add("dark");
        else root.classList.remove("dark");
        localStorage.setItem("wellnex:theme", isDark ? "dark" : "light");
        } catch (e) {}
    }, [isDark]);

    return (
        <button
        type="button"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        title={isDark ? "Light mode" : "Dark mode"}
        onClick={() => setIsDark((s) => !s)}
        className={`${className} inline-flex items-center justify-center w-10 h-10 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40 transition-transform hover:scale-105`}
        >
        {isDark ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="text-cyan-300">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor" />
            </svg>
        ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden className="text-yellow-400">
            <path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="12" r="3" fill="currentColor" />
            </svg>
        )}
        </button>
    );
    }
