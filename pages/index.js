import Cool3DText from '../components/Cool3DText';

export default function Home() {
  return (
    <div className="flex w-full">
      <div className="w-2/3 bg-red-300">
        <Cool3DText/>
      </div>

      <div className="w-1/3 bg-blue-400">
        <p>
          I’m a high school student who really likes computer science and math.<br /><br />
          I spend most of my time working on Machine Learning, Web Development, and Game Development projects.<br /><br />
          I also enjoy competitive programming and contest math.<br /><br />
          Some of my other hobbies include anime, youtube, and video games.
        </p>
      </div>

    </div>
  )
}
