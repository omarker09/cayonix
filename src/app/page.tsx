import "../app/globals.css"
import Landing from "./components/Landing";
import JoinSection from "./components/joinSection";
import Working from "./components/working";
export default function Home() {
  return (
    <div className="flex flex-col bg-black  h-full inset-0 ">
      <div className="fixed inset-0 z-0 size-full h-full items-center px-5  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
      <Landing />
      <JoinSection/>
      <Working/>
    </div>
  );
}
