export interface ServiceDataType {
    id: number | string;
    title: string;
    description: string;
    icon: string;
    link: string;
    delay: string;
    active?:boolean;
    image?:string;
}

export const serviceOneData: ServiceDataType[] = [
    {
        id: 1,
        title: "Glass Installation",
        description: "Professional installation of windows, doors, and glass partitions for residential and commercial properties",
        icon: "/img/service/icon/s-icon-1.svg",
        link: "/service-details",
        delay:'.3'
    },
    {
        id: 2,
        title: "Mirror Services",
        description: "Custom mirror installation and fabrication for bathrooms, bedrooms, and decorative applications",
        icon: "/img/service/icon/s-icon-2.svg",
        link: "/service-details",
        delay:'.5',
        active:true
    },
    {
        id: 3,
        title: "Glass Cutting & Fabrication",
        description: "Precision glass cutting and custom fabrication to meet your specific design requirements",
        icon: "/img/service/icon/s-icon-3.svg",
        link: "/service-details",
        delay:'.7'
    },
    {
        id: 4,
        title: "Shower Glass",
        description: "Elegant frameless and semi-frameless shower enclosures for modern bathrooms",
        icon: "/img/service/icon/s-icon-4.svg",
        link: "/service-details",
        delay:'.9'
    },
    {
        id: 5,
        title: "Glass Repair & Replacement",
        description: "Expert repair and replacement services for damaged or broken glass panels",
        icon: "/img/service/icon/s-icon-10.svg",
        link: "/service-details",
        delay:'.3'
    },
    {
        id: 6,
        title: "Custom Glass Solutions",
        description: "Tailored glass solutions designed to enhance the aesthetics and functionality of your space",
        icon: "/img/service/icon/s-icon-11.svg",
        link: "/service-details",
        delay:'.5'
    },
    {
        id: 7,
        title: "Glass Partitions",
        description: "Modern glass partition systems to create flexible and open office or residential spaces",
        icon: "/img/service/icon/s-icon-1.svg",
        link: "/service-details",
        delay:'.7'
    },
    {
        id: 8,
        title: "Commercial Glass",
        description: "Comprehensive glass solutions for retail stores, offices, and commercial buildings",
        icon: "/img/service/icon/s-icon-2.svg",
        link: "/service-details",
        delay:'.9'
    }
];
