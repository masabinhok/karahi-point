import Contact from "../components/Contact";
import Hero from "../components/Hero";
import MonthlyRecords from "../components/MonthlyRecords";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <MonthlyRecords />
      <Contact />
    </>
  );
}
