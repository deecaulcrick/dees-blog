"use client";
import { useTheme } from "next-themes";
import { useSoundStore } from "@/stores/soundStore";
import Sun from "../icons/Sun";
import Moon from "../icons/Moon";

export default function DarkModeToggle() {
    const { theme, setTheme } = useTheme();
    const { playClick } = useSoundStore();
    return (
        <button
            onClick={() => {
                playClick();
                setTheme(theme === "dark" ? "light" : "dark");
            }}
            className=" dark:text-white"
        >
            {theme === "dark" ? (<Moon />) : (<Sun />)}
        </button>
    );
}
