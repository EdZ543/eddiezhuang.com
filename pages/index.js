import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl m-10"><b>Hi, I'm Eddie!</b></h1>

      <p className="max-w-sm m-10">
        I’m a high school student who really likes computer science and math.
        I spend most of my time working on Machine Learning, Web Development, and Game Development projects.
        I also enjoy competitive programming and contest math.
        Some of my other hobbies include anime, youtube, and video games.
      </p>

      <Link href="/experience" passHref>
        <button href="/experience" className="bg-palette-blue-light font-bold py-2 px-4 rounded inline-flex items-center mx-auto">
          Check Out My Projects!
        </button>
      </Link>
    </div>
  )
}