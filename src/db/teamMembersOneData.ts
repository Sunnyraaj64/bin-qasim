export interface TeamMemberDataType {
    id: number;
    role: string;
    name: string;
    description: string;
    image: string;
    socialLinks: {
        icon: string;
        link: string;
    }[];
    delay: string;
}

export const teamMembersOneData: TeamMemberDataType[] = [
    {
        id: 1,
        role: "Glass Installation Specialist",
        name: "Ahmed Bin Qasim",
        description: "Expert in precision glass cutting and professional installation with over 10 years of experience in Dubai's glass industry.",
        image: "/img/team/hover-1.png",
        socialLinks: [
            {
                icon: 'fab fa-facebook-f',
                link: ''
            },
            {
                icon: 'fab fa-instagram',
                link: ''
            },
            {
                icon: 'fab fa-linkedin-in',
                link: ''
            },
        ],
        delay: ".3"
    },
    {
        id: 2,
        role: "Retail Manager",
        name: "Khalid Al Mansoori",
        description: "Specialized in custom mirror fabrication and design consultation for residential and commercial projects.",
        image: "/img/team/hover-1.png",
        socialLinks: [
            {
                icon: 'fab fa-facebook-f',
                link: ''
            },
            {
                icon: 'fab fa-instagram',
                link: ''
            },
            {
                icon: 'fab fa-linkedin-in',
                link: ''
            },
        ],
        delay: ".5"
    },
    {
        id: 3,
        role: "Project Manager",
        name: "Khalid Al Mansoori",
        description: "Oversees large-scale commercial glass projects ensuring quality standards and timely completion.",
        image: "/img/team/hover-1.png",
        socialLinks: [
            {
                icon: 'fab fa-facebook-f',
                link: ''
            },
            {
                icon: 'fab fa-instagram',
                link: ''
            },
            {
                icon: 'fab fa-linkedin-in',
                link: ''
            },
        ],
        delay: ".7"
    },
    {
        id: 4,
        role: "Glass Fabrication Technician",
        name: "Mohammed Hassan",
        description: "Skilled craftsman specializing in custom glass fabrication and precision cutting techniques.",
        image: "/img/team/hover-1.png",
        socialLinks: [
            {
                icon: 'fab fa-facebook-f',
                link: ''
            },
            {
                icon: 'fab fa-instagram',
                link: ''
            },
            {
                icon: 'fab fa-linkedin-in',
                link: ''
            },
        ],
        delay: ".9"
    }
];