import Hero from "@/app/Home/hero";
import About from "@/app/about/about";
import Projects from "@/app/projects/projects";
import Services from "@/app/contact/services";

export default function Home() {
  return (
    <main className="pt-24">
      <Hero />
      <About />
      <Projects />
      <Services />
    </main>
  );
}
