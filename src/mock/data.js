import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Diego Vazquez | Software Engineer', // e.g: 'Name | Developer'
  lang: 'es', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Diego Vazquez.',
  subtitle: `I'm a software engineer.`,
  cta: 'See more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile-pic.jpg',
  paragraphOne: `
    I'm a software engineer who primarily works with React, 
    Redux, and Node. My specialization is in front-end development, 
    but I am also experienced in back-end development (Node & Express, 
    MongoDB, and PostgreSQL). Contact me if you need a software 
    engineer in the NYC metro area or for remote work.
  `,
  paragraphTwo: ` `,
  paragraphThree: ` `,
  resume: 'https://docs.google.com/document/d/1bPOD1h7_90PMdSehhvCrjgEtjLhJmAx9E52bIn4EzS8/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'reactype.png',
    title: `ReacType`,
    info: `
        ReacType is a developer tool that allows the user to create a fully functional
        React or NextJS application with TypeScript syntax. It runs on the Electron 
        framework and the front end is written in React. User project data is stored in
        a Mongo database.
      `,
    info2: '',
    url: 'https://reactype.io/',
    repo: 'https://github.com/open-source-labs/ReacType', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'tech-notes.png',
    title: 'Tech Notes',
    info: `
      Tech notes is a note taking application similar to Evernote.
      The front end is written in React with Redux for state management and
      Material-UI for styling. The back end is written in Node with Express 
      and PostgreSQL. Oauth along with JWT and cookies are used to 
      authenticate users and persist sessions.
    `,
    info2: '',
    url: 'https://tech-notes-app.herokuapp.com',
    repo: 'https://github.com/diegovazquezny/tech-notes', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gstor.png',
    title: 'GStor',
    info: `
      GStor grabs video game data from a .json file and displays it
      to the user. The front end uses React/Redux and vanilla CSS for
      styling. The back end is written in Node with Express.   
    `,
    info2: '',
    url: 'https://guarded-hollows-10232.herokuapp.com',
    repo: 'https://github.com/diegovazquezny/gstor', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: `Send me a message and I'll get back to you ASAP!`,
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/diegovazquezny/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/diegovazquezny',
    },
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto:diegovazquezny@gmail.com',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
