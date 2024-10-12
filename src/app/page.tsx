import About from "@/components/Pages/About/About";
import Contact from "@/components/Pages/Contact/Contact";
import Home from "@/components/Pages/Home/Home";
import Skills from "@/components/Pages/Skills/Skills";

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-2 md:px-1">
      <Home />
      <div id="about" className="py-8"></div>
      <About />
      <div id="skills" className="py-10 lg:py-20"></div>
      <Skills />
      <div id="contact" className="py-10 lg:py-20"></div>
      <Contact />
    </div>
  );
}
