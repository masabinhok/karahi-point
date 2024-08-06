import Navbar from "./Navbar";
import { karahiLogo } from "../assets/index";

const Hero = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-green-800 text-white min-h-screen">
      <Navbar />
      <div className="max-w-[1320px] mt-10 w-full flex flex-col md:flex-row items-center justify-between text-white py-20 px-6">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to{" "}
            <span className="text-yellow-300">
              Karahi Point Construction Records
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Your trusted partner in building a better future.
          </p>
          <button className="px-6 py-3 bg-yellow-300 text-gray-800 font-semibold rounded-full shadow-md hover:bg-yellow-400 transition duration-300">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={karahiLogo}
            alt="Construction"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
