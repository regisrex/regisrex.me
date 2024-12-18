import { Rakkas } from "next/font/google";
const libre = Rakkas({ subsets: ['latin'], weight: '400' })
export default function Home() {
  return (
    <>
      <div className="text-bluish-200 pt-6 flex  flex-col gap-1 min-h-[80vh]">
        <div className="flex items-center gap-4 justify-between">

          {/* <p className="text-bluish-100 text-4xl font-black">R&eacute;gis N.</p> */}
          {/* <p className="text-bluish-100 text-4xl font-black"
         style={libre.style}
          >
            Hey👋! I&apos;m Regis,
          </p> */}
          {/* <img
            src={MeImg.src}
            alt=""
            width={60}
            height={60}
            className="object-cover w-[100px] h-[100px] rounded-full border border-white/20 ring-4 ring-white/5"
            draggable={false}
          /> */}
        </div>

        <p className="my-4">
          I'm a software developer who loves building solutions with seamless experience.
        </p>
        <p className="my-4">
          I'm passionate about building products that make a difference in the
          world like web applications, APIs, CLIs,
          Pipelines, and more other good stuff.
        </p>

        <p className="mb-4">
          I am currently working as a software engineer at ScriptyLabs Inc. where I work on building a  .rw registrar and hosting SaaS.
        </p>

        <p className="mb-4">
          I'm also a fan of open-source and I contribute to some projects on GitHub. If you have a idea in mind, feel free to reach out to me. Have a good day!
        </p>

        <div className="my-4 flex gap-4">
          <a href="https://github.com/regisrex">
            <button className="py-2 px-6  border border-bluish-200/10   rounded-full  text-bluish-200">
              Github
            </button>
          </a>
          <a href="https://linkedin.com/in/regisndizihiwe">

            <button className="py-2 px-6 border border-bluish-200/10  rounded-full text-bluish-200">
              LinkedIn
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
