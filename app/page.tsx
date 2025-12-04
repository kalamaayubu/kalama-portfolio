import About from "@/components/About";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import { ArrowRight } from "lucide-react";

const RootPage = () => {
  return (
    <main className="">
      <NavBar />
      <section className="section-padding flex flex-col lg:flex-row mt-40 mb-20  gap-12 lg:items-center">
        <div className="max-w-[800px]">
          <h1 className="mx-auto text-3xl sm:text-4xl lg:text-5xl font-bold">
            Hello! Am{" "}
            <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Johana Kalama
            </span>
            ,{""}
            <br /> a professional web developer
          </h1>
          <p className="mt-4 max-w-[600px] text-gray-400 text-xl md:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            impedit obcaecati, iste quisquam magni a quo nisi nesciunt sequi,
            laboriosam est unde, aut ipsa suscipit eum esse deleniti voluptas
            repudiandae.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="px-6 group cursor-pointer py-3 bg-white transition-all duration-300 hover:bg-white/90 rounded-full text-black flex items-center justify-center gap-3">
              Contact Me{" "}
              <ArrowRight className="text-gray-800 group-hover:translate-x-1 transition-all duration-300  size-4" />
            </button>
            <button className="px-6 group cursor-pointer py-3 border border-white/10 transition-all duration-300 hover:bg-white/10 rounded-full text-white flex items-center justify-center gap-3">
              View Projects
            </button>
          </div>
        </div>
        <Hero />
      </section>
      <About />
      <Services />
      <Technologies />
    </main>
  );
};

export default RootPage;
