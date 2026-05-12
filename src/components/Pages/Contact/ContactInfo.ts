import { IconType } from 'react-icons';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

export interface socailType{
    name: string,
    link: string,
    icon: IconType;
}

export interface contactInfoType {
    details: string;
    mail: string;
    socials: socailType[]
}

export const contactInfo:contactInfoType = {
    details:`Interested in collaborating or have a project in mind? Feel free to get in touch—I'm always open to discussing new opportunities and creative ideas.`,
    mail: 'bijan2059@gmail.com',
    socials: [
        {name:'facebook',icon:FaFacebookF,link:'https://www.facebook.com/bijan.pradhananga'},
        {name:'instagram',icon:RiInstagramFill,link:'https://www.instagram.com/bijan_pradhananga/'},
        {name:'linkedin',icon:FaLinkedin,link:'https://www.linkedin.com/in/bijan-pradhananga-947b992ab/'}
    ]
}