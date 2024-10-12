import Image from "next/image"
import { aboutInfo } from "./AboutInfo"
const About = () => {
    return (
        <section className="sm:flex items-center px-4 max-w-screen-xl">
            <AboutImage/>
            <AboutDetails />
        </section>

    )
}

const AboutImage = () => {
    return (
        <div className="sm:w-1/2 p-10">
            <div className="image object-center text-center">
                <Image src={aboutInfo.imageLink} width={450} height={450} alt="about" />
            </div>
        </div>
    )
}

const AboutDetails = () => {
    return (
        <div className="sm:w-1/2 p-2">
            <div>
                <h2 className="my-4 font-bold text-3xl md:text-4xl ">
                    About <span className="text-blue-500">Me</span>
                </h2>
                <p className="text-gray-500 font-semibold ">
                    {aboutInfo.description}
                </p>
            </div>
        </div>
    )
}

export default About