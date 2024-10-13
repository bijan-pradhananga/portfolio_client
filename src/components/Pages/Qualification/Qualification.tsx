import { FaGraduationCap } from "react-icons/fa6"
import { MdWork } from "react-icons/md"

const Qualification = () => {
    return (
        <section className='max-w-screen-xl mt-4 px-6'>
            <div>
                <h1 className="font-bold text-3xl lg:text-4xl mb-5">Qualification</h1>
                <div className="flex justify-center gap-5 text-lg md:text-2xl text-gray-600 font-bold mb-3">
                    <h2 className="flex items-center gap-1 cursor-pointer hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500 transition-colors duration-100 ease">
                        <FaGraduationCap className="text-2xl" />
                        <span>Education</span>
                    </h2>
                    <h2 className="flex items-center gap-1 cursor-pointer hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500 transition-colors duration-100 ease">
                        <MdWork className="text-2xl" />
                        <span>Experience</span>
                    </h2>
                </div>
            </div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-8">
                <li>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic">	2062-2075 BS</time>
                        <div className="text-lg font-black">SLC/SEE</div>
                        Akshar Academy
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic">	2076-2078 BS</time>
                        <div className="text-lg font-black">+2</div>
                        KMC
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic">2079-Present</time>
                        <div className="text-lg font-black">BCA</div>
                        Divya Gyan College
                    </div>
                </li>
            </ul>
        </section>

    )
}

export default Qualification