import About from "@/components/About";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";

const RootPage = () => {
  return (
    <>
      <NavBar />
      <section className="px-4 sm:pl-10 lg:pl-12 flex flex-col lg:flex-row mt-36 lg:mt-28 lg:items-center">
        <div className="lg:w-3/4 min-w-[500px] max-w-[800px]">
          <h1 className="leading-tight mx-auto md:text-4xl text-3xl font-bold">
            Hello! Am{" "}
            <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Johana Kalama
            </span>
            ,{""}
            <br /> a professional web developer
          </h1>
          <p className="mt-4 max-w-[600px] text-gray-400 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            impedit obcaecati, iste quisquam magni a quo nisi nesciunt sequi,
            laboriosam est unde, aut ipsa suscipit eum esse deleniti voluptas
            repudiandae.
          </p>
        </div>
        <Hero />
      </section>
      <About />
    </>
  );
};

export default RootPage;
