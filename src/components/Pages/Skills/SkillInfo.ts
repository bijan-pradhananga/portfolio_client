import { IconType } from 'react-icons';  
import { DiPhp } from 'react-icons/di';
import { FaGithub, FaGitAlt } from 'react-icons/fa';
import { FaHtml5, FaBootstrap, FaReact, FaCss3Alt, FaJs, FaNodeJs, FaLaravel, FaPython } from 'react-icons/fa6';
import { FiFigma } from 'react-icons/fi';
import { GrMysql } from 'react-icons/gr';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiMongodb, SiExpress, SiLinux, SiDaisyui, SiAdobephotoshop, SiCanva } from 'react-icons/si';
import { TbBrandRedux } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';

// Type for individual skill
interface Skill {
  name: string;
  icon: IconType;
}

// Type for skill category
export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    title: "Frontend Skills",
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt, },
      { name: "JavaScript", icon: FaJs },
      { name: "BootStrap", icon: FaBootstrap },
      { name: "Tailwind", icon: RiTailwindCssFill },
      { name: "React", icon: FaReact },
      { name: "Next", icon: TbBrandRedux },
      { name: "NextJS", icon: RiNextjsFill },
      { name: "Daisy UI", icon: SiDaisyui },
    ]
  },
  {
    title: "Backend Skills",
    skills: [
      { name: 'PHP', icon: DiPhp },
      { name: 'Python', icon: FaPython },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: 'Laravel', icon: FaLaravel },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: GrMysql },
    ]
  },
  {
    title: "Other Skills",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Linux", icon: SiLinux },
      { name: "VS Code", icon: VscVscode },
      { name: "PhotoShop", icon: SiAdobephotoshop },
      { name: "Figma", icon: FiFigma },
      { name: "Canva", icon: SiCanva },
    ]
  }
];

