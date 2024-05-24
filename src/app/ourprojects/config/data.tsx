import Image from "next/image";
import Link from "next/link";
import Prj1 from "../../../../public/imgs/projects/project-1.png"
import Prj2 from "../../../../public/imgs/projects/project-2.png"
import Prj3 from "../../../../public/imgs/projects/project-3.jpg"
import Prj4 from "../../../../public/imgs/projects/project-4.png"
import Prj5 from "../../../../public/imgs/projects/returant-imgs/landing_img.png"
import Prj6 from "../../../../public/imgs/projects/returant-imgs/about_img.png"

const data = [
    {
        title: "Zipo",
        dirName: "/ourprojects/Zipo",
        img1: Prj1,
        img2: Prj4,
        description: "The menu page showcases our culinary offerings in a clean, organized layout. Using Tailwind CSS's grid and flex utilities, the dishes are presented in categorized sections , each with mouth-watering images, detailed descriptions, and prices. Hover effects highlight each item, enhancing the user experience.",
        description2: "About Us: The About Us page tells the story of our restaurant. A combination of beautiful typography and well-placed images creates an engaging narrative about our journey, philosophy, and the team behind the magic. The use of Tailwind's spacing and text utilities ensures the content is easy to read and aesthetically pleasing.",
        livePreview: "https://restaurant-me-web.netlify.app/"
    },
    {
        title: "Greek",
        dirName: "/ourprojects/Greek",
        img1: Prj4,
        img2: Prj3,
        description: "The menu page showcases our culinary offerings in a clean, organized layout. Using Tailwind CSS's grid and flex utilities, the dishes are presented in categorized sections , each with mouth-watering images, detailed descriptions, and prices. Hover effects highlight each item, enhancing the user experience.",
        description2: "About Us: The About Us page tells the story of our restaurant. A combination of beautiful typography and well-placed images creates an engaging narrative about our journey, philosophy, and the team behind the magic. The use of Tailwind's spacing and text utilities ensures the content is easy to read and aesthetically pleasing.",
        livePreview: "https://restaurant-me-web.netlify.app/"
    },
    {
        title: "Blockchain",
        dirName: "/ourprojects/Blockchain",
        img1: Prj2,
        img2: Prj3,
        description: "The menu page showcases our culinary offerings in a clean, organized layout. Using Tailwind CSS's grid and flex utilities, the dishes are presented in categorized sections , each with mouth-watering images, detailed descriptions, and prices. Hover effects highlight each item, enhancing the user experience.",
        description2: "About Us: The About Us page tells the story of our restaurant. A combination of beautiful typography and well-placed images creates an engaging narrative about our journey, philosophy, and the team behind the magic. The use of Tailwind's spacing and text utilities ensures the content is easy to read and aesthetically pleasing.",
        livePreview: "https://restaurant-me-web.netlify.app/"
    },
    {
        title: "Resturant",
        dirName: "/ourprojects/Resturant",
        img1: Prj5,
        img2: Prj6,
        description: "The menu page showcases our culinary offerings in a clean, organized layout. Using Tailwind CSS's grid and flex utilities, the dishes are presented in categorized sections , each with mouth-watering images, detailed descriptions, and prices. Hover effects highlight each item, enhancing the user experience.",
        description2: "About Us: The About Us page tells the story of our restaurant. A combination of beautiful typography and well-placed images creates an engaging narrative about our journey, philosophy, and the team behind the magic. The use of Tailwind's spacing and text utilities ensures the content is easy to read and aesthetically pleasing.",
        livePreview: "https://restaurant-me-web.netlify.app/"
    },
]

export default data;