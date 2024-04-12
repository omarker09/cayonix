import "../app/globals.css"
import Navbar from "@/components/navbar";
import Landing from "./components/Landing";
import Working from "./components/working";
import Divider from "@/components/divider";
import Services from "./components/services";

export default function Home() {
  return (
    <div className="flex flex-col bg-black  h-full inset-0 ">
      <div className="  size-full h-full items-center px-5 " />
      <Navbar />
      <Landing />
      <Divider className="divider-top"/>
      <Working />
      <Services/>
    </div>
  );
}
