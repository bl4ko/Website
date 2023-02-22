import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export default function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState('dark');

    function toggleTheme() {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}