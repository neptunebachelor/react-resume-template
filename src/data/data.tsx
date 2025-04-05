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
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
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
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
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
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
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
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
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
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
