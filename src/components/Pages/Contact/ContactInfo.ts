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
    details:`  Have some big idea or brand to develop and need help? Then reach out we'd
               love to hear about your project and provide help.`,
    mail: 'bijan2059@gmail.com',
    socials: [
        {name:'facebook',icon:FaFacebookF,link:'https://www.facebook.com/bijan.pradhananga'},
        {name:'instagram',icon:RiInstagramFill,link:'https://www.instagram.com/bijan_pradhananga/'},
        {name:'linkedin',icon:FaLinkedin,link:'https://www.linkedin.com/in/bijan-pradhananga-947b992ab/'}
    ]
}