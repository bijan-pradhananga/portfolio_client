import Home from "@/components/Pages/Home/Home";
import Skills from "@/components/Pages/Skills/Skills";

export default function Page() {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-2 md:px-1">
      <Home />
      <div id="skills" className="py-10 lg:py-0"></div>
      <Skills />
    </div>
  );
}
