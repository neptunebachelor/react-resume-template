import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-01.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-02.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-03.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-04.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-05.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-06.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-07.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-08.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-09.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import porfolioImage12 from '../images/portfolio/portfolio-12.jpg';
import porfolioImage13 from '../images/portfolio/portfolio-13.jpg';
import porfolioImage14 from '../images/portfolio/portfolio-14.jpg';
import porfolioImage15 from '../images/portfolio/portfolio-15.jpg';
import porfolioImage16 from '../images/portfolio/portfolio-16.jpg';
import porfolioImage17 from '../images/portfolio/portfolio-17.jpg';
import porfolioImage18 from '../images/portfolio/portfolio-18.jpg';
import porfolioImage19 from '../images/portfolio/portfolio-19.jpg';
import porfolioImage20 from '../images/portfolio/portfolio-20.jpg';
import porfolioImage21 from '../images/portfolio/portfolio-21.jpg';
import porfolioImage22 from '../images/portfolio/portfolio-22.jpg';
import porfolioImage23 from '../images/portfolio/portfolio-23.jpg';
import porfolioImage24 from '../images/portfolio/portfolio-24.jpg';
import profilepic from '../images/selfie.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Jian Chang | Portfolio',
  description: 'A personal portfolio project.',
};


/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Jian Chang.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a San Jose-based <strong className="text-stone-100">Backend Software Engineer</strong> with a focus on building scalable, 
        reliable systems using <strong className="text-stone-100">Java</strong>. 
        I also have hands-on experience with <strong className="text-stone-100">Python</strong>, <strong className="text-stone-100">Go</strong>, 
        and a growing passion for <strong className="text-stone-100">SRE practices</strong> I thrive on speed, strategy, and clean code..
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `
  I love hitting the road on my motorcycle and exploring the Bay Area. When I’m not riding, I’m probably deep in a Dota 2 match.
`,
  aboutItems: [
    {label: 'Location', text: 'San Jose, CA', Icon: MapIcon},
    {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Chinese', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Dota2', Icon: SparklesIcon},
    {label: 'Study', text: 'University of North Alabama', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Vibrant Wellness LLC', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {name: 'Java', level: 9},
      {name: 'Python', level: 6},
      {name: 'Go', level: 5},
    ],
  },
  {
    name: 'Backend & DevOps',
    skills: [
      {name: 'Spring Boot', level: 8},
      {name: 'MySQL / PostgreSQL', level: 7},
      {name: 'Redis / Kafka', level: 6},
      {name: 'Docker / Kubernetes', level: 6},
    ],
  },
  {
    name: 'SRE & Infrastructure',
    skills: [
      {name: 'Monitoring (Prometheus / Grafana)', level: 6},
      {name: 'CI/CD (GitHub Actions)', level: 5},
      {name: 'Terraform', level: 4},
    ],
  },
];


/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: '../images/portfolio/portfolio-01.jpg',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: '../images/portfolio/portfolio-02.jpg',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: '../images/portfolio/portfolio-03.jpg',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: '../images/portfolio/portfolio-04.jpg',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: '../images/portfolio/portfolio-05.jpg',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: '../images/portfolio/portfolio-06.jpg',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: '../images/portfolio/portfolio-07.jpg',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: '../images/portfolio/portfolio-08.jpg',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: '../images/portfolio/portfolio-09.jpg',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: '../images/portfolio/portfolio-10.jpg',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: '../images/portfolio/portfolio-11.jpg',
    image: porfolioImage11,
  },
  {
    title: 'Project title 12',
    description: 'Give a short description of your project here.',
    url: '../images/portfolio/portfolio-12.jpg',
    image: porfolioImage12,
  },
  {
    title: 'Project title 13',
    description: 'Give a short description of your project here.',
    url: '../images/portfolio/portfolio-13.jpg',
    image: porfolioImage13,
  },
  {
    title: 'Project title 14',
    description: 'Give a short description of your project here.',
    url: '../images/portfolio/portfolio-14.jpg',
    image: porfolioImage14,
  },
  {
    title: 'Project title 15',
    description: 'Give a short description of your project here.',
    url: '../images/portfolio/portfolio-15.jpg',
    image: porfolioImage15,
  },
  {
    title: 'Project title 16',
    description: 'Give a short description of your project here.',
    url: '../images/portfolio/portfolio-16.jpg',
    image: porfolioImage16,
  },
  {
    title: 'Project title 17',
    description: 'Give a short description of your project here.',
    url: '../images/portfolio/portfolio-17.jpg',
    image: porfolioImage17,
  },
  {
    title: 'Project title 18',
    description: 'Give a short description of your project here.',
    url: '../images/portfolio/portfolio-18.jpg',
    image: porfolioImage18,
  },
  {
    title: 'Project title 19',
    description: 'Give a short description of your project here.',
    url: '../images/portfolio/portfolio-19.jpg',
    image: porfolioImage19,
  },
  {
    title: 'Project title 20',
    description: 'Give a short description of your project here.',
    url: '../images/portfolio/portfolio-20.jpg',
    image: porfolioImage20,
  },
  {
    title: 'Project title 21',
    description: 'Give a short description of your project here.',
    url: '../images/portfolio/portfolio-21.jpg',
    image: porfolioImage21,
  },
  {
    title: 'Project title 22',
    description: 'Give a short description of your project here.',
    url: '../images/portfolio/portfolio-22.jpg',
    image: porfolioImage22,
  },
  {
    title: 'Project title 23',
    description: 'Give a short description of your project here.',
    url: '../images/portfolio/portfolio-23.jpg',
    image: porfolioImage23,
  },
  {
    title: 'Project title 24',
    description: 'Give a short description of your project here.',
    url: '../images/portfolio/portfolio-24.jpg',
    image: porfolioImage24,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2020',
    location: 'University of North Alabama',
    title: 'Bachelor of Science in Computer Science',
    content: <p></p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'Aug 2021 – Feb 2025',
    location: 'Vibrant Wellness LLC, San Jose, CA',
    title: 'Software Engineer',
    content: (
      <p>
        Developed backend for a medical order system using Java and Spring Boot. Built a chatbot for wellness test recommendations. 
        Migrated services to Kubernetes and set up CI/CD. Used Kafka, Redis Pub/Sub, and Python for data analysis and monitoring.
      </p>
    ),
  },
  {
    date: 'Sep 2020 – July 2021',
    location: 'Yeaher Inc, New Castle, DE',
    title: 'Java Developer',
    content: (
      <p>
        Developed an ERP and warehouse management system using Spring Boot and MyBatis, improving
        operational efficiency.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out if you’d like to connect, collaborate, or just say hi.',
  items: [
    {
      type: ContactType.Email,
      text: 'neptunebachelor@gmail.com',
      href: 'mailto:neptunebachelor@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'San Jose, CA, US',
      href: 'https://www.google.ca/maps/@37.3734304,-121.9329403,12.29z?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/neptunebachelor',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/neptunebachelor'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/jian-chang-9445b0150'}
];
