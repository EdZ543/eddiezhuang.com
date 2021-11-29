import Layout from '../components/Layout'
import Cool3DText from '../components/Cool3DText'
import Button from '../components/Button'
import SecondaryButton from '../components/SecondaryButton'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <div className="w-full flex flex-col justify-center text-center">
        <Cool3DText />

        <div className="max-w-xl mx-auto">
          <p>
            I&apos;m a high school student who really likes computer science and math.<br />
            I spend most of my time working on Machine Learning, Web Development, and Game Development projects.<br />
            I also enjoy competitive programming and contest math.<br />
            Some of my other hobbies include anime, youtube, and video games.<br /><br />
            This website was from scratch with Next.js (React) and Tailwind CSS
          </p>
        </div>

        <div className="flex my-10 gap-4 justify-center">
            <Link href="/projects" passHref>
              <Button>Check Out My Projects!</Button>
            </Link>

            <Link href="/contact" passHref>
              <SecondaryButton>Hire me!</SecondaryButton>
            </Link>
        </div>
      </div>
    </Layout>
  )
}