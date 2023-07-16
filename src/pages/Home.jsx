import '../index.css';
import { Navbar } from './components/homeComponents/Navbar';
import { AppleMusic } from './components/homeComponents/AppleMusic'
import { ZeroSugar } from './components/homeComponents/ZeroSugar';
import { Nitro } from './components/homeComponents/Nitro';
import { PepsiVideo } from './components/homeComponents/PepsiVideo';
import { PepsiLike } from './components/homeComponents/PepsiLike';
import { ViewProducts } from './components/homeComponents/ViewProducts';
import { SocialMedia } from './components/homeComponents/SocialMedia';
import { Footer } from './components/homeComponents/Footer';

export function Home() {
    return(
        <>
            <Navbar />
            <AppleMusic />
            <ZeroSugar />
            <Nitro />
            <PepsiVideo />
            <PepsiLike />
            <ViewProducts />
            <SocialMedia />
            <Footer />
        </>
    )
}

export default Home;
