import Link from 'next/link'
import Layout from '../components/Layout'
import Cool3DText from '../components/Cool3DText'

export default function Home() {
  return (
    <Layout>
      <div className="flex  flex-col w-full items-center justify-center">
        <div className="flex items-center w-full">
          <Cool3DText />
        </div>

        <div className="flex flex-col justify-center w-full max-w-lg">
          <p className="sm:text-lg text-sm text-center">
            I&apos;m a high school student who really likes computer science and math.
            I spend most of my time working on Machine Learning, Web Development, and Game Development projects.
            I also enjoy competitive programming and contest math.
            Some of my other hobbies include anime, youtube, and video games.<br /><br />
            This website was from scratch with Next.js (React) and Tailwind CSS.
          </p>

          <Link href="/projects" passHref>
            <button href="/experience" className="bg-blue-400 font-bold py-2 px-4 rounded inline-flex items-center mx-auto m-5">
              Check Out My Projects!
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}