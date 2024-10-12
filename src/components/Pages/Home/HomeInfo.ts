import { IconType } from 'react-icons';
import { FaInstagram } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { PiLinkedinLogo } from "react-icons/pi";

export interface socialType{
    name: string,
    link: string,
    icon: IconType;
}

interface HomeInfoType  {
    name:string,
    image:string,
    profession:string,
    description:string,
    socials: socialType[]
}

export const homeInfo:HomeInfoType = {
    name: 'Bijan Pradhananga',
    image: '/profile.jpg',
    profession: 'FullStack Developer',
    description: `Lorem ipsum dolor sit amet consectetur erro
        ra officiis, quis praesentium perferendis nam quas 
        magni ea autem ipsa obcaecati temporibus totam doloribus molestias.`,
        socials: [
            {name:'instagram',icon:FaInstagram,link:'https://www.instagram.com/bijan_pradhananga/'},
            {name:'linkedin',icon:PiLinkedinLogo,link:'https://www.linkedin.com/in/bijan-pradhananga-947b992ab/'},
            {name:'github',icon:LuGithub,link:'https://github.com/bijan-pradhananga'},
        ]
}