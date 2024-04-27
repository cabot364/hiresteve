import MaineLogo from "./assets/images/umaine.svg";
import AMLogo from "./assets/images/am_logo.svg";
import Design1 from "./assets/images/portfolio/design1.png"
import Design2 from "./assets/images/portfolio/design2.png"
import Dev1 from "./assets/images/portfolio/dev1.png"
import UMF1 from "./assets/images/portfolio/UMF_Recruiting_Card.jpg"
import UMF2 from "./assets/images/portfolio/UMF_Recruiting2.jpg"
import WOOD from "./assets/images/portfolio/623_2.jpg"
import RONA from "./assets/images/portfolio/Rona-4k_Full.jpg"
import TAP from "./assets/images/portfolio/2_5.jpg"
import PHANTOM from "./assets/images/portfolio/2_9.jpg"
import BIOEDGE from "./assets/images/portfolio/3_3.jpg"
import logo_kvhc from "./assets/logos/kvhc.png";
import logo_relaychain from "./assets/logos/relaychain.png";
import logo_gmm from "./assets/logos/gmm.png";
import logo_mainearts from "./assets/logos/mainearts.png";
import logo_umf from "./assets/logos/umf.png";
import logo_insyt from "./assets/logos/insyt.gif";
import logo_rmg from "./assets/logos/rg.png";
import UMF_VID_THUMB from "./assets/images/portfolio/umf_vid_thumb.jpg";
import CONCORD from "./assets/images/portfolio/crf_fb.jpg";
import SUMS from "./assets/images/portfolio/SumsItUp_Final.mp4"
import SUMS_THUMB from "./assets/images/portfolio/sums.png"
import CMB from "./assets/images/portfolio/CMB_Faucet.mp4"
import CMB_THUMB from "./assets/images/portfolio/cmb_thumb.png"

export const introData = [
    {
        id: 1,
        title: "intro1",
        text: "As a dynamic digital creator with over 20 years of experience, my expertise is deeply rooted in design and spans web development, 3D animation, and programming in JavaScript and Python. My foundational skills in graphic design and 3D visualization empower me to craft engaging visuals and immersive experiences that captivate and communicate."
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
        category: ["design"],
        type: "image",
        thumbnail: Design1,
        fullImage: Design1,
        description: 'A design for a WIP web3 project. I was responsible for the concept, design and frontend development. See the live (WIP) site at: <a href="http://dev.brokenseas.io" target="_blank">dev.brokenseas.io</a>'
    },
    {
        id: 2,
        category: ["development"],
        type: "image",
        thumbnail: Dev1,
        fullImage: Dev1,
        description: "Some react and Tailwind CSS work from development of my portfolio site. Responsible for design and development. Github link <a href='http://www.github.com/cabot364/hiresteve' target='_blank'>here</a>",
    },
    {
        id: 3,
        category: ["design", "development"],
        type: "image",
        thumbnail: Design2,
        fullImage: Design2,
        description: 'Responsible for design and frontend development (react/vite/Tailwind). Github link <a href="http://www.github.com/cabot364/havencrest" target="_blank">here</a>',
    },
    {
        id: 4,
        category: ["design"],
        type: "image",
        thumbnail: UMF1,
        fullImage: UMF1,
        description: 'A double sided rack card infographic for the University of Maine at Farmington. Responsible for all design',
    },
    {
        id: 5,
        category: ["design"],
        type: "image",
        thumbnail: UMF2,
        fullImage: UMF2,
        description: 'A page from a recruiting brochure for the University of Maine at Farmington. Responsible for all design',
    },
    {
        id: 6,
        category: ["design"],
        type: "image",
        thumbnail: WOOD,
        fullImage: WOOD,
        description: 'Responsible for all photography and design, including the logo, for a local woodworker.',
    },
    {
        id: 7,
        category: ["design"],
        type: "image",
        thumbnail: RONA,
        fullImage: RONA,
        description: 'a 3D image of the Corona Virus. Responsible for all modeling, texturing, lighting and rendering.',
    },
    {
        id: 8,
        category: ["design"],
        type: "image",
        thumbnail: TAP,
        fullImage: TAP,
        description: 'Product visualization for a brewing supply company. Responsible for all modeling, texturing, lighting and rendering.',
    },
    {
        id: 9,
        category: ["design"],
        type: "image",
        thumbnail: BIOEDGE,
        fullImage: BIOEDGE,
        description: 'Product visualization for a fishing scent company. Responsible for all modeling, texturing, lighting and rendering. Also created the creatures on the packaging.',
    },
    {
        id: 10,
        category: ["design"],
        type: "image",
        thumbnail: PHANTOM,
        fullImage: PHANTOM,
        description: 'Product previsualization for a wildlife call company. Responsible for all modeling, texturing, lighting and rendering.',
    },
    {
        id: 11,
        category: ["design"],
        type: "video",
        videoType: "hosted",
        videoUrl: "https://player.vimeo.com/video/118928509?h=c38df7d5f0",
        thumbnail: UMF_VID_THUMB,
        description: 'A promotional animation I made to advertise the class I taught at UMF. Responsible for all animation, modeling, texturing, rigging, lighting and rendering.',
    },
    {
        id: 12,
        category: ["design"],
        type: "image",
        thumbnail: CONCORD,
        fullImage: CONCORD,
        description: "Logo for a local blacksmith.",
    },

    {
        id: 13,
        category: ["design"],
        type: "video",
        videoType: "local",
        videoUrl: SUMS,
        thumbnail: SUMS_THUMB,
        description: 'Character animation, animated to an audio clip from the movie "Groundhog Day".',
    },
        {
        id: 14,
        category: ["design"],
        type: "video",
        videoType: "local",
        videoUrl: CMB,
        thumbnail: CMB_THUMB,
        description: 'Product visualization. Animation describing the functions of the product. Responsible for all modeling, animation, rendering and editing.',
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