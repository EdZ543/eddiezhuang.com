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

        <div className="max-w-xxl mx-auto">
          <p>
            I&apos;m a high school student with an interest in machine learning.<br />
            I enjoy building machine learning projects, as well as websites and video games.<br />
            In my free time, I like competing in Kaggle competitions, reading books, watching anime.<br />
          </p>
        </div>

        <div className="flex my-10 gap-4 justify-center">
            <Link href="/projects" passHref>
              <Button>Check Out My Projects!</Button>
            </Link>

            <Link href="/contact" passHref>
              <SecondaryButton>Contact me</SecondaryButton>
            </Link>
        </div>
      </div>
    </Layout>
  )
}