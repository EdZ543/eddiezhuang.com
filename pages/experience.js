import Layout from '../components/Layout'

export default function Experience() {
  return <Layout>
    <div className="container max-w-screen-sm flex flex-col">
      <button className="bg-palette-blue-light font-bold py-2 px-4 rounded inline-flex items-center mx-auto my-10">
        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
        <span>Resume</span>
      </button>

      <div className="grid md:grid-cols-2 md:grid-rows-2">
        <div className="flex justify-center mb-6">
          <div className="inline-block">
            <h2 className="text-3xl">Languages</h2>
            <ul className="list-disc list-inside">
              <li>Python</li>
              <li>Javascript</li>
              <li>HTML</li>
              <li>C++</li>
              <li>CSS</li>
              <li>Java</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center mb-6">
          <div className="inline-block">
            <h2 className="text-3xl">Tools</h2>
            <ul className="list-disc list-inside">
              <li>Tensorflow</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
              <li>Unity</li>
              <li>Github</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center mb-6">
          <div className="inline-block">
            <h2 className="text-3xl">Hackathons</h2>
            <ul className="list-disc list-inside">
              <li>Hack the North</li>
              <li>Local Hack Day</li>
              <li>YR Hacks</li>
              <li>Hack the 6ix</li>
              <li>Ludum Dare 46</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center mb-6">
          <div className="inline-block">
            <h2 className="text-3xl">Awards</h2>
            <ul className="list-disc list-inside">
              <li>Skills Ontario 1st Place</li>
              <li>CIMC Certificate of Distinction</li>
              <li>Galois Honour Roll</li>
              <li>USACO Silver</li>
              <li>CCC Certifiate of Distinction</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
}