export type QualificationItem = {
  id: string;
  period: string;
  title: string;
  institution: string;
  type: 'education' | 'experience';
};

export const qualificationData: QualificationItem[] = [
  {
    id: '4',
    period: '4/2025 - Present',
    title: 'Junior Developer',
    institution: 'Cellapp | Kathmandu, Nepal',
    type: 'experience',
  },
  {
    id: '5',
    period: '4/2024 - 6/2024',
    title: 'React/Next.js Intern',
    institution: 'ePrabidhi | Kathmandu, Nepal',
    type: 'experience',
  },
  {
    id: '6',
    period: '10/2022 - 3/2023',
    title: 'PHP Intern',
    institution: 'IT Training Nepal | Kathmandu, Nepal',
    type: 'experience',
  },
  {
    id: '3',
    period: '2079-Present',
    title: 'BCA',
    institution: 'Divya Gyan College',
    type: 'education',
  },
  {
    id: '2',
    period: '2076-2078 BS',
    title: '+2',
    institution: 'KMC',
    type: 'education',
  },
  {
    id: '1',
    period: '2062-2075 BS',
    title: 'SLC/SEE',
    institution: 'Akshar Academy',
    type: 'education',
  },
];
