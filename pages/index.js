import Layout from '../components/Layout'
import Cool3DText from '../components/Cool3DText'
import Button from '../components/Button'
import SocialBar from '../components/SocialBar'

export default function Home() {
  return (
    <Layout>
      <div className="w-full">
        <Cool3DText />

        <p>
          I&apos;m a high school student who really likes computer science and math.<br />
          I spend most of my time working on Machine Learning, Web Development, and Game Development projects.<br />
          I also enjoy competitive programming and contest math.<br />
          Some of my other hobbies include anime, youtube, and video games.<br /><br />
          This website was from scratch with Next.js (React) and Tailwind CSS!
        </p>

        <h2>Latest Projects</h2>
        <h2>Latest Posts</h2>
        <h2>Skills</h2>
      </div>
    </Layout>
  )
}