import projectjson from '../projects.json';
import Image from 'next/image'

export const getStaticProps = async () => {
  return {
    props: {
      projects: projectjson
    }
  }
}

export default function Projects({ projects }) {
  return (
    <div>
      <h1 className="text-center text-5xl">Projects</h1>

      <div className="grid grid-cols-3 gap-3">
        {projects.map(project => (
          <div className="rounded-md border-2 border-opacity-50">
            <Image
              src="/../uploads/sans-t-pose.jpg"
              width={500}
              height={500}
            />
            <h4><b>{project.title}</b></h4>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}