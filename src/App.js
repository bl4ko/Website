import { useContext } from 'react';
import ThemeContextProvider, { ThemeContext } from './context/ThemeContext';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFound from './pages/404';
import ProjectsPage from './pages/ProjectsPage';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Model from './components/model';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
    return (
        <ChakraProvider>
            <ThemeContextProvider>
                < BrowserRouter >
                    <Navbar />
                    <Model />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </BrowserRouter >
            </ThemeContextProvider>
        </ChakraProvider >
    );
}