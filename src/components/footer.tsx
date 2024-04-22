
import {
    Footer,
    FooterBrand,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
} from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import "../app/globals.css"
import Logo1 from "../../public/imgs/logo/white-transparent.png"
import Image from "next/image";
import Link from "next/link";
function FooterComp() {
    return (
        <div className=" z-50 bg-black">
            <Footer style={{ backgroundColor: "black" }} container className=" bg-black z-50 px-9 md:px-16 cards-border-dark-top rounded-none">
                <div className="w-full ">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 gap-4">
                        <Link href={"/"} className="flex items-start gap-3 py-3">
                            <Image
                                alt='logo'
                                src={Logo1}
                                height={80}
                                width={80}
                                className='disable-select-drag'
                            />
                        </Link>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                            <div>
                                <FooterTitle title="about" />
                                <FooterLinkGroup col>
                                    <FooterLink href="#">Flowbite</FooterLink>
                                    <FooterLink href="#">Tailwind CSS</FooterLink>
                                </FooterLinkGroup>
                            </div>
                            <div>
                                <FooterTitle title="Follow us" />
                                <FooterLinkGroup col>
                                    <FooterLink href="#">Github</FooterLink>
                                    <FooterLink href="#">Discord</FooterLink>
                                </FooterLinkGroup>
                            </div>
                            <div>
                                <FooterTitle title="Legal" />
                                <FooterLinkGroup col>
                                    <FooterLink href="#">Privacy Policy</FooterLink>
                                    <FooterLink href="#">Terms &amp; Conditions</FooterLink>
                                </FooterLinkGroup>
                            </div>
                        </div>
                    </div>
                    <FooterDivider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <FooterCopyright href="#" by="Cayonix" year={2024} />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <FooterIcon href="#" icon={BsFacebook} />
                            <FooterIcon href="#" icon={BsInstagram} />
                            <FooterIcon href="#" icon={BsTwitter} />
                            <FooterIcon href="#" icon={BsGithub} />
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    );
}

export default FooterComp;