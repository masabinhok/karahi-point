import Navbar from "../components/Navbar";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <main className="w-full bg-gradient-to-r from-green-400 to-green-800 flex flex-col items-center">
      <Navbar />
      <div className="mt-36 w-full ">
        <Contact />
      </div>
    </main>
  );
};

export default ContactPage;
