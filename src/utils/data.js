import linkedInSrc from '../assets/icons/linkedin-icon.svg';
import githubSrc from '../assets/icons/github-icon.svg';
// import upworkSrc from '../assets/icons/upwork-icon.svg';

import angularSrc from '../assets/icons/tools/angular-icon.svg';
import ionicSrc from '../assets/icons/tools/ionic-icon.svg';
import reactSrc from '../assets/icons/tools/react-icon.svg';
import flutterSrc from '../assets/icons/tools/flutter-icon.svg';

import mobileSrc from '../assets/icons/devices/mobile-icon.svg';
// import desktopSrc from '../assets/icons/devices/desktop-icon.svg';

export const skills = [
    { id: 1, title: 'Angular', iconSrc: angularSrc },
    { id: 2, title: 'Ionic', iconSrc: ionicSrc },
    { id: 3, title: 'React', iconSrc: reactSrc },
    { id: 4, title: 'React Native', iconSrc: reactSrc },
    { id: 5, title: 'Flutter', iconSrc: flutterSrc },
];

export const projects = [
    {
        id: 1,
        type: {
            name: 'mobile',
            icon: mobileSrc
        },
        name: 'Child support for divorced parents',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        id: 2,
        type: {
            name: 'mobile',
            icon: mobileSrc
        },
        name: 'Trucks GPS tracking and routes tracing',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        id: 3,
        type: {
            name: 'mobile',
            icon: mobileSrc
        },
        name: 'Heavy equipment rental',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        id: 4,
        type: {
            name: 'mobile',
            icon: mobileSrc
        },
        name: 'Heavy equipment rental',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
];

export const profileLinks = [
    {
        id: 1,
        name: 'LinkedIn',
        link: '',
        iconSrc: linkedInSrc,
    },
    {
        id: 2,
        name: 'Github',
        link: '',
        iconSrc: githubSrc,
    },
    // {
    //     id: 3,
    //     name: 'Upwork',
    //     link: '',
    //     iconSrc: upworkSrc,
    // }
];