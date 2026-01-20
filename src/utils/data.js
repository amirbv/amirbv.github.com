import linkedInSrc from "../assets/icons/linkedin-icon.svg";
import githubSrc from "../assets/icons/github-icon.svg";
// import upworkSrc from '../assets/icons/upwork-icon.svg';

// import angularSrc from '../assets/icons/tools/angular-icon.svg';
// import ionicSrc from '../assets/icons/tools/ionic-icon.svg';
import reactSrc from "../assets/icons/tools/react-icon.svg";
import NextSrc from "../assets/icons/tools/nextjs-icon.svg";
import tailwindSrc from "../assets/icons/tools/tailwindcss-icon.svg";

import mobileSrc from "../assets/icons/devices/mobile-icon.svg";
import desktopSrc from "../assets/icons/devices/desktop-icon.svg";

export const skills = [
  { id: 1, title: "React", iconSrc: reactSrc },
  { id: 2, title: "React Native", iconSrc: reactSrc },
  { id: 3, title: "Next.js", iconSrc: NextSrc },
  { id: 4, title: "Tailwind CSS", iconSrc: tailwindSrc },
];

export const projects = [
  {
    id: 1,
    type: {
      name: "desktop",
      icon: desktopSrc,
    },
    name: "SuperDapp.ai",
    description:
      "SuperDapp is an all-in-one Web3 super app that combines a secure wallet, chat, voice calls, file management, and AI assistant AIDA with a developer-friendly API and Bot SDK. Built around the SUPR token and Super Groups, it enables creators and communities to monetize, build tokens/NFTs, and interact with decentralized services seamlessly.",
    link: "https://superdapp.ai/",
  },
  {
    id: 2,
    type: {
      name: "mobile",
      icon: mobileSrc,
    },
    name: "SuperDapp PWA Application",
    description:
      "SuperDapp is an all-in-one Web3 super app that combines a secure wallet, chat, voice calls, file management, and AI assistant AIDA with a developer-friendly API and Bot SDK. Built around the SUPR token and Super Groups, it enables creators and communities to monetize, build tokens/NFTs, and interact with decentralized services seamlessly.",
    link: "https://web.superdapp.ai/",
  },
  {
    id: 3,
    type: {
      name: "desktop",
      icon: desktopSrc,
    },
    name: "Luxy.io NFT Marketplace",
    description:
      "LUXY is a user-friendly NFT marketplace and creator toolkit that makes minting, selling, and launching NFTs simple across multiple EVM-compatible chains. Backed by the LUXY token and SYSLabs, it offers low fees, token incentives, and a growing set of launchpad, creator, and API tools.",
    link: "https://luxy.io/",
  },
  {
    id: 4,
    type: {
      name: "desktop",
      icon: desktopSrc,
    },
    name: "Coolto Web Agency",
    description:
      "Coolto is a web agency specializing in crafting high-performance, user-centric websites and applications. It leverages the latest technologies and design principles to deliver tailored digital solutions that drive engagement and growth for their clients.",
    link: "https://www.cooltoagency.com/",
  },
];

export const profileLinks = [
  {
    id: 1,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/amir-bastidas/",
    iconSrc: linkedInSrc,
  },
  {
    id: 2,
    name: "Github",
    link: "https://github.com/amirbv",
    iconSrc: githubSrc,
  },
  // {
  //     id: 3,
  //     name: 'Upwork',
  //     link: '',
  //     iconSrc: upworkSrc,
  // }
];
