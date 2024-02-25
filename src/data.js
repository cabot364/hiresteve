import MaineLogo from "./assets/images/umaine.svg";
import AMLogo from "./assets/images/am_logo.svg";
import Design1 from "./assets/images/portfolio/design1.png"
import Design2 from "./assets/images/portfolio/design2.png"
import Dev1 from "./assets/images/portfolio/dev1.png"

export const skillsList = [
    "Designer",
    "Leader",
    "Developer",
    "Mentor"
];

export const skillsDetails = [
    {
        id: 1,
        title: "Designer",
        skills: [
            "Adobe Creative Suite",
            "UX/UI Design",
            "Figma",
            "3ds Max",
            "Maya/MEL",
            "Davinci Resolve",
            "Nuke"
        ]
    },
    {
        id: 2,
        title: "Leader",
        skills: [
            "Project Management",
            "Team Building",
            "Problem Solving",
            "Communication",
            "Adaptability",
            "Creativity",
            "Critical Thinking",
            "Active Listening",
            "Feedback",
        ]
    },
    {
        id: 3,
        title: "Developer",
        skills: [
            "HTML/CSS",
            "JavaScript",
            "Node.js",
            "React/Vite",
            "Python",
            "Django",
            "Flask",
            "REST API",
            "Linux",
            "Wordpress"
        ]
    },
    {
        id: 4,
        title: "Mentor",
        skills: [
            "Communication",
            "Encouragement",
            "Guidance",
            "Feedback",
            "Networking",
            "Resource Sharing",
            "Adaptability",
        ]
    }
];

export const educationData = [
    {
        id: 1,
        logo: AMLogo,
        degree: "Certificate of Advanced Studies in Character Animation",
        institution: "Animation Mentor",
        year: "2012 - 2014",
    },
    {
        id: 2,
        logo: MaineLogo,
        degree: "Bachelor of Arts in New Media",
        institution: "University of Maine",
        year: "2000 - 2004",
    }
];

export const portfolioItems = [
    {
        id: 1,
        category: "design",
        thumbnail: Design1,
        fullImage: Design1,
        description: 'A design for the rental portion of the Salty Spud web3 project. See the live site at: <a href="http://dev.brokenseas.io" target="_blank">dev.brokenseas.io</a>'
    },
    {
        id: 2,
        category: "development",
        thumbnail: Dev1,
        fullImage: Dev1,
        description: "Some react and tailwindCSS work from development of this website.",
    },
    {
        id: 3,
        category: "design",
        thumbnail: Design2,
        fullImage: Design2,
        description: 'A website designed and developed for high-value rental. See the live site at: <a href="http://myhavencrest.com" target="_blank">myhavencrest.com</a>',
    }


];

export const workData = [
    {
        id: 1,
        logo: "https://via.placeholder.com/150",
        title: "Lead Designer",
        name: "Salty Spud",
        startyear: "2021",
        endyear: "Present"
    },
    {
        id: 2,
        logo: "https://via.placeholder.com/150",
        title: "Lead Developer",
        name: "Broken Seas",
        startyear: "2019",
        endyear: "Present"
    },
    {
        id: 3,
        logo: "https://via.placeholder.com/150",
        title: "Lead Designer",
        name: "Havencrest",
        startyear: "2017",
        endyear: "Present"
    },
    {
        id: 4,
        logo: "https://via.placeholder.com/150",
        title: "Lead Designer",
        name: "Salty Spud",
        startyear: "2015",
        endyear: "Present"
    },
    {
        id: 5,
        logo: "https://via.placeholder.com/150",
        title: "Lead Developer",
        name: "Broken Seas",
        startyear: "2013",
        endyear: "Present"
    },
    {
        id: 6,
        logo: "https://via.placeholder.com/150",
        title: "Lead Designer",
        name: "Havencrest",
        startyear: "2011",
        endyear: "Present"
    }
];