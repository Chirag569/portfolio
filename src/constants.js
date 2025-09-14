// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Information Technology Intern",
      company: "Indian Aviation Academy",
      date: "July 2025 - Present",
      desc: "Developed a WhatsApp-integrated Helpdesk Chatbot to automate course inquiries and enhance support efficiency, complemented by a responsive Admin Dashboard for real-time monitoring with user analytics and message logs. Also built a dynamic HTML-based web form connected to MongoDB for manual data entry and fallback cases, leveraging Next.js, Node.js, and Tailwind CSS for seamless end-to-end development and deployment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Meta Cloud API",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "DialogFlow",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Tech Research Intern - Vice Captain",
      company: "To-Let Globe",
      date: "Jan 2025 - April 2025",
      desc: "Conducted market research on proptech innovations by analyzing 5+ competitors to identify emerging industry trends, while leading a team of 6+ members to streamline research workflows and improve efficiency by 30%. Additionally, evaluated AI-driven automation tools and proposed solutions to enhance user engagement by 25%.",
      skills: [
        "Collaboration & Teamwork",
        "Team Leadership (6+ members)",
        "Market Research & Analysis",
        "AI-driven Automation Tools Evaluation",
        "Data-driven Decision Making",
      ],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "Web Developer Trainee",
      company: "AICT Computer Education",
      date: "Jun 2024 - Aug 2024",
      desc: "Completed summer training in web development with 100+ hours of hands-on practice, gaining skills in HTML, CSS, JavaScript, React.js, Next.js, and backend development. Built and deployed projects like a Blog App with authentication and dynamic rendering, and an Ochi Design Clone with responsive, pixel-perfect UI.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "Guru Tegh Bahadur 4th Centenary Engineering College",
      date: "Nov 2022 - Aug 2026",
      grade: "8.6 CGPA",
      desc: "I am pursuing a Bachelor of Technology in Computer Science and Engineering, where I have maintained a strong academic record with a CGPA of 8.6. My coursework and projects have helped me build a solid foundation in programming, problem-solving, and emerging technologies, preparing me to contribute effectively to real-world challenges.",
      degree: "Btech Computer Science",
    },
   /* {
      id: 1,
      img: bsaLogo,
      school: "BSA College, Mathura",
      date: "Sept 2018 - Aug 2021",
      grade: "73.2%",
      desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Science - BSC (Computer Science)",
    },*/
    {
      id: 2,
      img: vpsLogo,
      school: "Rashtra Shakti Vidyalaya",
      date: "Apr 2021 - Jun 2022",
      grade: "91.8%",
      desc: "I completed my Class 12 education from Rashtra Shakti Vidyalaya, New Delhi, under the CBSE board, with a focus on Physics, Chemistry, Mathematics (PCM), and Computer Science, securing an impressive 91.8%.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "Rashtra Shakti Vidyalaya",
      date: "Apr 2019 - March 2020",
      grade: "90%",
      desc: "I completed my Class 10 education in 2020 from Rashtra Shakti Vidyalaya under the CBSE board, securing 90%.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "IAA Whatsapp Chatbot",
      description:
        "Developed a WhatsApp-integrated Helpdesk Chatbot to automate course inquiries and enhance support efficiency, complemented by a responsive Admin Dashboard for real-time monitoring with user analytics and message logs. Also built a dynamic HTML-based web form connected to MongoDB for manual data entry and fallback cases, leveraging Next.js, Node.js, and Tailwind CSS for seamless end-to-end development and deployment",
      image: githubdetLogo,
      tags: ["Dialog Flow", "Meta Cloud API", "JavaScript", "React JS", "Node.js"],
      github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "Cobbrate",
      description:
        "I founded Cobbtrate, a startup project designed as a web platform for 1000+ content creators to collaborate and connect with brands. The platform was built using Next.js, JavaScript, Supabase, and Tailwind CSS, focusing on delivering a modern, creator-first user experience. I developed responsive, mobile-optimized dashboards, collaboration request systems, and in-app chat features, along with a brand discovery section to enhance engagement. To ensure scalability and reliability, I integrated Supabase for database, authentication, real-time messaging, and notifications, making Cobbtrate a comprehensive ecosystem for creators and brands.",
      image: csprepLogo,
      tags: ["Next.js", "Node.js", "Supabase", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/CSPrep",
      webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "Physiaura-Clinic Website",
      description:
        "I developed Physiaura, a freelance web project aimed at creating a modern physiotherapy clinic website to boost online visibility and user engagement. Using Next.js, Tailwind CSS, and Framer Motion, I designed a responsive, SEO-optimized platform with an intuitive booking system and clear call-to-action flow. Within the first month of launch, the site achieved a 35% increase in appointment requests, while delivering a fully mobile-friendly experience that aligned with modern web practices.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Chirag569",
      webapp: "https://www.physiaura.co.in/",
    },
    {
      id: 3,
      title: "Expense Tracker",
      description:
        "I built an Expense Tracker application using Next.js, TypeScript, Prisma, and Tailwind CSS, designed to help users efficiently manage and analyze their personal finances. The platform enables users to log, categorize, and visualize income and expenses through an intuitive and responsive interface. With Prisma as the ORM, it ensures reliable data management, while TypeScript provides type safety and scalability. This project highlights my ability to develop full-stack, data-driven applications with clean UI, robust backend integration, and real-world usability.",
      image: npmLogo,
      tags: ["Next.js", "Node.js", "NPM","TypeScript","Prisma","Shadcn UI"],
      github: "https://github.com/Chirag569/ExpenseTracker-main",
      webapp: "",
    },
    {
      id: 4,
      title: "Moosic-Music Recommendation Platform",
      description:
        "Moosic – Emotion-based Music Recommendation Platform – Developed a Streamlit web app that uses OpenCV, MediaPipe, and a CNN (Keras/TensorFlow) to detect user emotions from facial expressions and recommend personalized songs via YouTube integration.",
      image: taskremLogo,
      tags: ["Pyhton", "Tenser Flow", "Keras", "Meadiapipe","Numpy"],
      github: "https://github.com/codingmastr/Task-Reminder-Tool",
      webapp: "",
    },
    {
      id: 5,
      title: "Image Classification Dog vs Cat by CNN",
      description:
        "Cat vs Dog Image Classification – Built a deep learning model using CNN with Keras/TensorFlow, trained on the Kaggle Cats vs Dogs dataset, achieving 90%+ accuracy. Integrated with a simple Python (Tkinter/Gradio) UI to allow users to upload images and get real-time predictions.",
      image: webverLogo,
      tags: ["TensorFlow", "Keras", "Python", "Jupyter Notebook"],
      github: "https://github.com/Chirag569/Image-Classification_project",
      webapp: "https://webversedigital.com/",
    },
    /*{
      id: 6,
      title: "Coding Master",
      description:
        "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
      image: cmLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
      github: "https://codingmasterweb.in/",
      webapp: "https://codingmasterweb.in/",
    },
    {
      id: 7,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Search-App",
      webapp: "https://imagsearch.netlify.app/",
    },
    {
      id: 8,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Background-Remover",
      webapp: "https://removeyourbg.netlify.app/",
    },*/
  ];  