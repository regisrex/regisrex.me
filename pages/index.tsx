import Link from "next/link";
import { GithubIcon, TwitterIcon } from "@/components/icons";
import { works as allWorks } from "@/content/works";
import blogs from "@/content/content";
import Work from "@/components/works/work";
import Blog from "@/components/blogs/blog";

export default function Home() {
  const featuredWorks = allWorks.slice(0, 3);
  const latestBlogs = blogs.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="text-bluish-200 pt-10 flex flex-col gap-6 min-h-[60vh]">
        <div className="flex flex-col gap-3">
          <h1 className="text-bluish-100 font-bold text-4xl sm:text-5xl leading-tight">
            Hey, I&apos;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Regis</span>.
          </h1>
          <p className="text-bluish-200 max-w-[60ch]">
            Software engineer crafting fast, thoughtful experiences across web apps, APIs, and CLI tools. I like building products end‑to‑end and writing about the lessons along the way.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <Link href="#work" className="py-2 px-5 rounded-full bg-white/5 border border-white/10 text-bluish-100 hover:bg-white/10">
              View work
            </Link>
            <Link href="#blog" className="py-2 px-5 rounded-full border border-white/10 text-bluish-200 hover:text-bluish-100">
              Read blog
            </Link>
            <a href="https://github.com/regisrex" aria-label="GitHub" className="ml-1 text-bluish-200 hover:text-bluish-100">
              <GithubIcon />
            </a>
            <a href="https://x.com/regissrex" aria-label="Twitter" className="text-bluish-200 hover:text-bluish-100">
              <TwitterIcon />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="mt-10">
        <h2 className="text-bluish-100 text-2xl font-semibold mb-4">Selected work</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {featuredWorks.map((w, i) => (
            <Work key={i} {...w} />
          ))}
        </div>
        <div className="mt-4">
          <Link href="/work" className="text-sm text-bluish-200 hover:text-bluish-100 underline underline-offset-4">
            See all work →
          </Link>
        </div>
      </section>

      {/* Latest Articles */}
      <section id="blog" className="mt-12">
        <h2 className="text-bluish-100 text-2xl font-semibold mb-2">Latest articles</h2>
        <div className="flex flex-col">
          {latestBlogs.map((b, i) => (
            <Blog key={i} {...b} />
          ))}
        </div>
        <div className="mt-2">
          <Link href="/blog" className="text-sm text-bluish-200 hover:text-bluish-100 underline underline-offset-4">
            Browse all articles →
          </Link>
        </div>
      </section>
    </>
  );
}
