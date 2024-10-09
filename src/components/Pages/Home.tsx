import Image from "next/image";
import Link from "next/link";
import { BsMouse } from "react-icons/bs";
import { FaChevronDown, FaInstagram } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { PiLinkedinLogo, PiReadCvLogo } from "react-icons/pi";

const Home = () => {
  return ( 
    <section id="home" className="lg:h-screen relative flex flex-col md:items-center lg:justify-center  dark:bg-gray-900 px-4">
      <div id="homeContainer" className=" grid grid-cols-2 lg:flex gap-x-2 gap-y-12 justify-center mt-5 lg:-mt-24 lg:gap-28">
        <HomeIcons />
        <HomeImage />
        <HomeInfo />
      </div>
    </section>
  );
};

const HomeIcons = () => {
  return (
    <div className="flex flex-col justify-center gap-6 text-2xl mr-2 dark:text-white">
      <Link href="https://www.instagram.com/bijan_pradhananga/" className="hover:shadow-lg transition-all ease-in">
        <FaInstagram />
      </Link>
      <Link href="https://www.linkedin.com/in/bijan-pradhananga-947b992ab/" className="hover:shadow-lg transition-all ease-in">
        <PiLinkedinLogo />
      </Link>
      <Link href="https://github.com/bijan-pradhananga" className="hover:shadow-lg transition-all ease-in">
        <LuGithub />
      </Link>
    </div>
  );
};

const HomeInfo = () => {
  return (
    <div className="col-span-2 relative lg:col-span-1 lg:order-2 max-w-xl">
      <h1 className="font-bold text-3xl mb-2 lg:mb-4 lg:text-5xl">Bijan Pradhananga<span>👋</span></h1>
      <h3 className="text-lg font-semibold text-gray-500">------- FullStack Developer</h3>
      <p className="text-gray-500 mt-2  ">
        Lorem ipsum dolor sit amet consectetur error a officiis, quis praesentium perferendis nam quas magni ea autem ipsa obcaecati temporibus totam doloribus molestias.
      </p>
      <button className="mt-8 p-4 lg:p-5 flex gap-2 bg-black dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-950 transition ease-in">
        <span>See Resume</span>
         <PiReadCvLogo className="text-2xl"/>
      </button>
      <button className="hidden lg:flex mt-28 p-2 gap-2 absolute hover:bg-gray-100 dark:hover:bg-gray-800 transition ease-in dark:text-white font-semibold rounded-lg ">
          <BsMouse className="text-2xl"/>
         <span className="mr-2">Scroll Down</span>
         <FaChevronDown className="mt-1"/>
      </button>
    </div>
  );
};

const HomeImage = () => {
  return (
    <div className="overflow-hidden -ml-28 lg:-ml-6 lg:md:order-3">
      <Image src="/profile.jpg" width={250} height={250} alt="profile" className="rounded-full"/>
    </div>
  );
};

export default Home;
