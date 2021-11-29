import projectjson from '../projects.json';
import Image from 'next/image'
import { BsCode, BsCodeSlash } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import Layout from '../components/Layout'

export const getStaticProps = async () => {
  return {
    props: {
      projects: projectjson
    }
  }
}

export default function Projects({ projects }) {
  return (
    <Layout>
      <div className=" w-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 grid-rows-1">
        {projects.map(project => (
          <div key={project.title} className="flex flex-col rounded-xl border-2 border-opacity-50 overflow-hidden">
            <Image
              src={project.image}
              width={500}
              height={500}
              objectFit="cover"
            />
              <h4 className="text-lg px-2 py-1"><b>{project.title}</b></h4>

              <p className="flex-1 px-2">{project.description}</p>

              <div className="flex justify-evenly text-3xl">
                <div className={`${!project.live == '' ? '' : 'hidden'}`}>
                  <a href={project.live} rel="noreferrer" target="_blank"><FiExternalLink className="m-2 text-gray-50 hover:text-opacity-50"/></a>
                </div>

                <div className={`${!project.code == '' ? '' : 'hidden'}`}>
                  <a href={project.code} rel="noreferrer" target="_blank"><BsCodeSlash className="m-2 text-gray-50 hover:text-opacity-50"/></a>
                </div>
              </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}