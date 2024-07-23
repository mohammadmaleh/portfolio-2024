import { memo } from "react";
import About from "./components/Sections/About";
import Contact from "./components/Sections/Contact";
import Hero from "./components/Sections/Hero";
import Portfolio from "./components/Sections/Portfolio";
import Resume from "./components/Sections/Resume";
import Testimonials from "./components/Sections/Testimonials";

const Home = memo(() => {
  return (
    <div>
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
});
Home.displayName = "Home";

export default Home;
