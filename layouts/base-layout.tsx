import Nav from "@/components/common/nav";
import Pad from "./pad";

export default function BaseLayout({ children }: any) {
  return (
    <div
      className="flex flex-col bg-blur-md  bg-neutral-950 gap-4 w-full  min-h-screen color-bluish-200   font-medium scrollbar-w-0px leading-7   flex flex-col gap-4   bg-top bg-cover bg-center bg-fixed"
      style={{
        // backgroundImage: `url(${BBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "fixed",
      }}
    >
      <div className=" flex flex-col justify-between z-20">
        <Nav />
        <Pad className="mb-10">
          {children}
        </Pad>
        {/* <Footer /> */}
      </div>
      {/* <img src={BlurImg.src} className="fixed mx-auto bottom-0 z-0 aspect-square"></img> */}
      {/* <div className="w-[40vw] h-[40vh] bg-gradient-to-br from-transparent via-blue-600/30 to-transparent  fixed right-0 top-0 blur-3xl" /> */}
      {/* <div className="w-[40vw] h-[40vh] bg-gradient-to-br from-transparent via-orange-400/20 to-transparent  fixed left-0 bottom-0 blur-3xl" /> */}
    </div>
  );
}
