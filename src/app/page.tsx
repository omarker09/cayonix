import "../app/globals.css"
import Navbar from "@/components/navbar";
import ScrollTop from "@/components/scrollTop";
import Landing from "./components/Landing";
import Working from "./components/working";
import Divider from "@/components/divider";
import Services from "./components/services";
import Details from "./components/details";
import ClientsReview from "./components/clientsReview";
import Faq from "./components/faq";
import OurProjects from "./components/ourprojects";
import SugarSection from "./components/sugarSection";
import FooterComp from "../components/footer"
export default function Home() {
  return (
    <div className="flex flex-col bg-black  h-full inset-0 ">
      <div className="  size-full h-full items-center " />
      <Navbar />
      <ScrollTop />
      <Landing />
      <Divider className="divider-top" />
      <Working />
      <Services />
      <Details />
      <Divider className="divider-sections" />
      <OurProjects />
      <ClientsReview />
      <Divider className="divider-sections" />
      <div className="px-9 md:px-16 bg-black z-50">
        <Faq />
      </div>
      <SugarSection />
      <FooterComp />
    </div>
  );
}
