import { IconType } from 'react-icons';
import { FaInstagram } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { PiLinkedinLogo } from "react-icons/pi";

export interface socialType {
    name: string,
    link: string,
    icon: IconType;
}

interface HomeInfoType {
    name: string,
    image: string,
    profession: string,
    description: string,
    socials: socialType[]
}

export const homeInfo: HomeInfoType = {
    name: 'Bijan Pradhananga',
    image: '/profile.jpg',
    profession: 'FullStack Developer',
    description: `I’m a Fullstack Developer at Cellapp Innovations Pvt. Ltd., building scalable systems across government, NGO, and consumer platforms. I’ve led core modules in products like Astro and SmartPalika, improving engagement and operational efficiency. I’m driven by building systems 
    that streamline real-world processes and currently focus on developing intelligent, scalable applications.`,
    socials: [
        { name: 'instagram', icon: FaInstagram, link: 'https://www.instagram.com/bijan_pradhananga/' },
        { name: 'linkedin', icon: PiLinkedinLogo, link: 'https://www.linkedin.com/in/bijan-pradhananga-947b992ab/' },
        { name: 'github', icon: LuGithub, link: 'https://github.com/bijan-pradhananga' },
    ]
}