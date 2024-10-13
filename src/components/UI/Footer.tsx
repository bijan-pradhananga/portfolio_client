import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
const year:string = new Date().getFullYear().toString();

const Footer = () => {
    return (
        <footer className="footer footer-center bg-gray-100 dark:bg-gray-800 dark:text-white text-base-content rounded p-10 mt-20 md:mt-32">
            <nav className="grid grid-flow-col gap-4">
                <Link href='#' className="link link-hover">Home</Link>
                <Link href='#about' className="link link-hover">About</Link>
                <Link href='#skills' className="link link-hover">Skills</Link>
                <Link href='#' className="link link-hover">Project</Link>
                <Link href='#' className="link link-hover">Contact</Link>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <Link href='#'>
                        <FaInstagram className='text-2xl'/>
                    </Link>
                    <Link href='#'>
                        <FaLinkedin className='text-2xl'/>
                    </Link>
                    <Link href='#'>
                        <FaGithub className='text-2xl'/>
                    </Link>
                </div>
            </nav>
            <aside className='dark:text-gray-400'>
                <p>Copyright © {year} - All right reserved</p>
            </aside>
        </footer>
    )
}

export default Footer