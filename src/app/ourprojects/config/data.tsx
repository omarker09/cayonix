import Image from "next/image";
import Link from "next/link";
import Banner from "../../../../public/imgs/projects/odibay/banner.png"
import Prj1 from "../../../../public/imgs/projects/odibay/Black Minimalist Website Mockup Instagram Post.png"

import Main from "../../../../public/imgs/projects/odibay/main.png"
import Prj5 from "../../../../public/imgs/projects/odibay/localhost_3001_ (4).png"
import Prj6 from "../../../../public/imgs/projects/odibay/localhost_3001_.png"
import Full from "../../../../public/imgs/projects/odibay/odibay-full-vertical.png"
import CtegoryPage from "../../../../public/imgs/projects/odibay/odibay-category.png"
import CtegoryCart from "../../../../public/imgs/projects/odibay/odibay-cart.png"
import CtegoryPayment from "../../../../public/imgs/projects/odibay/odibay-payment.png"

const data = [
    {
        title: "odibay",
        dirName: "/ourprojects/odibay",
        main : Main,
        banner: Banner,
        img1: CtegoryPage,
        img2: CtegoryCart,
        img3: CtegoryPayment,
        img4: Full,
        img5: Prj5,
        img6: Prj6,
        description: "The menu page showcases our culinary offerings in a clean, organized layout. Using Tailwind CSS's grid and flex utilities, the products are presented in categorized sections , each with images, detailed descriptions.",
        description2: "About Us: The About Us page tells the story of our restaurant. A combination of beautiful typography and well-placed images creates an engaging narrative about our journey, philosophy, and the team behind the magic. The use of Tailwind's spacing and text utilities ensures the content is easy to read and aesthetically pleasing.",
        livePreview: "https://gixify.vercel.app/"
    },
  
]

export default data;