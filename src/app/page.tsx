import About from "@/components/Pages/About/About";
import Contact from "@/components/Pages/Contact/Contact";
import Home from "@/components/Pages/Home/Home";
import Project from "@/components/Pages/Project/Project";
import Skills from "@/components/Pages/Skills/Skills";

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-2 md:px-1">
      <Home />
      <div id="aboutM" className="py-8 lg:hidden"></div>
      <About />
      <div id="skills" className="py-10 lg:py-20"></div>
      <Skills />
      <div id="projects" className="py-10 lg:py-20"></div>
      <Project />
      <div id="contact" className="py-10 lg:py-20"></div>
      <Contact />
    </div>
  );
}
