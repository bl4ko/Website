import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";
import { IconButton, useColorModeValue } from "@chakra-ui/react";
import SunIcon from './icons/Sun';
import MoonIcon from './icons/Moon';

export default function ThemeToggleButton() {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <AnimatePresence initial={false}>
            <AnimatePresence initial={false}>
                <motion.div
                    style={{ display: 'inline-block' }}
                    key={useColorModeValue('light', 'dark')}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <IconButton
                        aria-label="Toggle theme"
                        colorScheme={useColorModeValue('purple', 'orange')}
                        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                        onClick={toggleTheme}
                    ></IconButton>
                </motion.div>
            </AnimatePresence>
        </AnimatePresence>
    );
}