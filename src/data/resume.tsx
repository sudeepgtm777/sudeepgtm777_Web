import { Icons } from '@/components/icons';
import { HomeIcon } from 'lucide-react';

export const DATA = {
  name: 'Sudeep Gautam',
  initials: 'SG',
  url: 'https://www.sudeepgautam777.com.np',
  location: 'Nepal',
  locationLink: 'https://www.google.com/maps/place/Nepal',
  description: 'Full-Stack Engineer | Web, Mobile, AI & System Design',
  summary:
    "I'm Sudeep Gautam — a full-stack engineer working on web and React Native projects. I'm learning advanced backend development and love building things that solve real-world problems.",
  avatarUrl: '/SudeepPP3.png',
  favIcon: '/favicon.svg',
  skills: [
    'React',
    'Next.js',
    'Typescript',
    'Redux',
    'Zustand',
    'Node.js',
    'Express',
    'MongoDB',
    'Postgres',
    'Docker',
    'Tailwind',
    'AWS(EC2 & s3)',
    'Git',
    'Cloudflare Workers',
    'Prisma',
    'JavaScript',
    'HTML',
    'CSS',
    'React Native',
    'MySQL',
    'C',
    'C++',
    'Postman',
  ],
  navbar: [{ href: '/', icon: HomeIcon, label: 'Home' }],
  contact: {
    email: '',
    tel: '',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/sudeepgtm777',
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/sudeepgtm777',
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: 'X',
        url: 'https://x.com/sudeepgtm777',
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: '#',
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: 'SADA Creatives',
      href: 'https://sadacreatives.com.au',
      badges: [] as string[],
      location: 'Remote',
      title: 'Fullstack Developer, Remote',
      logoUrl: 'https://i.postimg.cc/1XwBMByb/logo.png',
      start: 'Nov 2025',
      end: 'Present',
      description:
        'Building and shipping full-stack features for client products. Working across the stack with modern web technologies in a remote role.',
    },
  ],
  communityWork: [] as {
    company: string;
    href: string;
    badges: readonly string[];
    location: string;
    title: string;
    logoUrl: string;
    start: string;
    end: string;
    description: string;
  }[],
  education: [
    {
      school: 'Butwal Multiple Campus',
      href: '',
      degree: 'Bsc.CSIT',
      logoUrl: '/TU.svg',
      start: '2022',
      end: '2026',
    },
    {
      school: 'Kalika Manavagyan',
      href: '',
      degree: '+2 Science',
      logoUrl: '/Kalika.jpg',
      start: '2020',
      end: '2022',
    },
    {
      school: 'Kalika Manavagyan',
      href: '',
      degree: 'SEE',
      logoUrl: '/Kalika.jpg',
      start: '',
      end: '2020',
    },
  ],
  projects: [
    {
      title: 'Soham Inner Calm',
      href: 'https://sohaminnercalm.com',
      dates: '2025 - Present',
      active: true,
      description:
        'Meditation and mindfulness platform for courses, challenges, guided sessions, and AI-assisted inner work — bridging scalable product systems with human depth.',
      technologies: [
        'Next.js',
        'Typescript',
        'Tailwind',
        'Shadcn',
        'Lucide',
        'React',
        'Node.js',
        'Postgres',
        'Docker',
        'Git',
        'GitHub',
        'GitLab',
        'GitLab CI/CD',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://sohaminnercalm.com',
          icon: <Icons.globe className='size-3' />,
        },
        // {
        //   type: 'Source',
        //   href: 'https://github.com/sudeepgtm777/SohamInnerCalm',
        //   icon: <Icons.github className='size-3' />,
        // },
      ],
      image: '/projects/sohaminnercalm.png',
      video: '',
    },
    {
      title: 'Antaryami',
      href: 'https://jyotish.prakashbhattarai.com/',
      dates: '2025 - Present',
      active: true,
      description:
        'Vedic astrology platform for Kundali charts, Jyotishi consultations, matching, Panchang, and AI chart Q&A — in English and Nepali.',
      technologies: [
        'Next.js',
        'Typescript',
        'Tailwind',
        'Shadcn',
        'React',
        'Node.js',
        'Postgres',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://jyotish.prakashbhattarai.com/',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: '/projects/Antaryami.png',
      video: '',
    },
    {
      title: 'DineFlow',
      href: 'https://dine-flow-gamma-one.vercel.app',
      dates: '2026',
      active: true,
      description:
        'Restaurant and hotel operations app for QR dine-in ordering, kitchen tickets, POS checkout, table/room bookings, and daily sales.',
      technologies: [
        'Next.js',
        'React',
        'TypeScript',
        'Redux',
        'Tailwind',
        'Express',
        'MongoDB',
        'Cloudinary',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://dine-flow-gamma-one.vercel.app',
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: 'Source',
          href: 'https://github.com/sudeepgtm777/DineFlow',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '/projects/DineFlow.png',
      video: '',
    },
    {
      title: 'Portfolio Prisma Postgres',
      href: 'https://github.com/sudeepgtm777/Portfolio-PrismaPostgres',
      dates: 'Dec 2025',
      active: true,
      description:
        'Personal portfolio with a markdown blog and GitHub-authenticated comments, backed by Prisma ORM and PostgreSQL.',
      technologies: [
        'Next.js',
        'TypeScript',
        'Prisma',
        'PostgreSQL',
        'Tailwind',
        'Better Auth',
        'React Markdown',
      ],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/sudeepgtm777/Portfolio-PrismaPostgres',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '/projects/Portfolio-PrismaPostgres.png',
      video: '',
    },
    {
      title: 'Jobs',
      href: 'https://jobs-r4qu.vercel.app/',
      dates: 'Sep 2025',
      active: true,
      description:
        'Job board for developers — browse listings, post openings, and manage accounts with a React frontend and Express/Mongo backend.',
      technologies: [
        'React',
        'Vite',
        'Tailwind',
        'React Router',
        'Express',
        'MongoDB',
        'JWT',
        'Node.js',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://jobs-r4qu.vercel.app/',
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: 'Source',
          href: 'https://github.com/sudeepgtm777/Jobs',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '/projects/Jobs.png',
      video: '',
    },
    {
      title: 'TravelEase',
      href: 'https://https://travel-ease-bice.vercel.app',
      dates: 'Jul 2025',
      active: true,
      description:
        'Tour booking platform for Nepal trips with auth, Stripe payments, and Jaccard-similarity recommendations from booking history.',
      technologies: [
        'Node.js',
        'Express',
        'MongoDB',
        'Pug',
        'Stripe',
        'JWT',
        'JavaScript',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://travel-ease-bice.vercel.app',
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: 'Source',
          href: 'https://github.com/sudeepgtm777/TravelEase',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '/projects/travelEase.png',
      video: '',
    },
  ],
};
