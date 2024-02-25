import MaineLogo from "./assets/images/umaine.svg";
import AMLogo from "./assets/images/am_logo.svg";
import Design1 from "./assets/images/portfolio/design1.png"
import Design2 from "./assets/images/portfolio/design2.png"
import Dev1 from "./assets/images/portfolio/dev1.png"
import logo_kvhc from "./assets/logos/kvhc.png";
import logo_relaychain from "./assets/logos/relaychain.png";
import logo_gmm from "./assets/logos/gmm.png";
import logo_mainearts from "./assets/logos/mainearts.png";
import logo_umf from "./assets/logos/umf.png";
import logo_insyt from "./assets/logos/insyt.gif";
import logo_rmg from "./assets/logos/rg.png";

export const introData = [
    {
        id: 1,
        title: "intro1",
        text: "Design"
    },
    {
        id: 2,
        title: "intro2",
        text: "Fuelled by a passion for transformative solutions, I thrive on the collaborative energy of teams, mentoring peers, and elevating projects beyond their initial scope. With a vision to blend my diverse design and technical skills, I am committed to driving projects from concept to completion with a relentless pursuit of excellence. My adaptability and forward-thinking approach make me an invaluable asset to any team looking to redefine the boundaries of digital creation."
    }
]

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
        logo: logo_rmg,
        title: "Blockchain Consultant",
        name: "Rainmaker Games",
        startyear: "2023",
        endyear: "2024"
    },
    {
        id: 2,
        logo: logo_relaychain,
        title: "Business Development",
        name: "Relay Chain",
        startyear: "2019",
        endyear: "2024"
    },
    {
        id: 3,
        logo: logo_gmm,
        title: "Creative Director/Owner",
        name: "Green Minnow Media",
        startyear: "2018",
        endyear: "2020"
    },
    {
        id: 4,
        logo: logo_kvhc,
        title: "Marketing Manager",
        name: "Katahdin Valley Health Center",
        startyear: "2016",
        endyear: "2018"
    },
    {
        id: 5,
        logo: logo_umf,
        title: "Lecturer - Introduction to 3D Animation",
        name: "University of Maine at Farmington",
        startyear: "2015",
        endyear: "2015"
    },
    {
        id: 6,
        logo: logo_umf,
        title: "Marketing Media Designer",
        name: "University of Maine at Farmington",
        startyear: "2013",
        endyear: "2015"
    },
    {
        id: 7,
        logo: logo_mainearts,
        title: "Technology Director",
        name: "Maine Arts Commission",
        startyear: "2010",
        endyear: "2013"
    },
    {
        id: 8,
        logo: "https://via.placeholder.com/150",
        title: "Freelance Designer",
        name: "Freelance",
        startyear: "2009",
        endyear: "2010"
    },
    {
        id: 9,
        logo: logo_insyt,
        title: "Frontend Developer/3d Generalist",
        name: "Insyt New Media",
        startyear: "2005",
        endyear: "2009"
    }
];

const data = {
  introData,
  skillsList,
  skillsDetails,
  educationData,
  portfolioItems,
  workData,
};

export default data;