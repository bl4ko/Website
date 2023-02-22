import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Container from '../components/ui/Container';

export default function HomePage() {
    let theme = useContext(ThemeContext);
    console.log('Theme: ', theme);
    return (
        <Container>
            <div className="bg-danger p-3 rounded-3 mb-3 align-center">
                Hello I&apos;m a computer science student from slovenia
            </div>

            <div display={{ md: 'flex' }}>
                <div >
                    <p className="h1">Gasper Oblak</p>
                    <p>
                        I&apos;m a computer science student from Slovenia. I&apos;m
                    </p>
                </div>
            </div>
        </Container>
    );
}