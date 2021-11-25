import projectjson from '../projects.json';
import Image from 'next/image'
import { BsCode, BsCodeSlash } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';

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

      <div className="grid grid-cols-4 gap-3">
        {projects.map(project => (
          <div className="flex flex-col rounded-md border-2 border-opacity-50">
            <Image
              src={project.image}
              width={500}
              height={500}
              objectFit="cover"
            />
            <h4><b>{project.title}</b></h4>
            <p className="flex-1">{project.description}</p>
            <div className="flex justify-evenly text-3xl">
              <a href={project.live} target="_blank"><FiExternalLink /></a>
              <a href={project.code} target="_blank"><BsCodeSlash /></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}