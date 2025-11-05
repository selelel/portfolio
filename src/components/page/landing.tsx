
// import NavBar from './NavBar';
// import Hero from './Hero';
import About from './About';
import Careers from './Careers';
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
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}