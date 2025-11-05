
// import NavBar from './NavBar';
// import Hero from './Hero';
import About from './About';
import Careers from './Careers';
import Certificate from './Certificate';
import Contact from './Contact';
import Footer from './Footer';

export default function LandingPage() {
  return (
    <div id="root">
      <div className="bg-[#040409] font-mono">
        <main className="flex flex-col items-stretch justify-start">
          {/* <NavBar /> */}
          {/* <Hero /> */}
          <About />
          <Careers />
          <Certificate />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}