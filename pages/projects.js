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
      <h1 className="text-center text-5xl p-10">Projects</h1>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 grid-rows-1">
        {projects.map(project => (
          <div key={project.title} className="flex flex-col rounded-xl border-2 border-opacity-50 overflow-hidden">
            <Image
              src={project.image}
              width={500}
              height={500}
              objectFit="cover"
            />
            <h4><b>{project.title}</b></h4>
            <p className="flex-1">{project.description}</p>
            <div className="flex justify-evenly text-3xl">
              <div className={`${!project.live == '' ? '' : 'hidden'}`}>
                <a href={project.live} rel="noreferrer" target="_blank"><FiExternalLink className="m-3"/></a>
              </div>

              <div className={`${!project.code == '' ? '' : 'hidden'}`}>
                <a href={project.code} rel="noreferrer" target="_blank"><BsCodeSlash className="m-3"/></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}