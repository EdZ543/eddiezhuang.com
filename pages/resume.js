import Layout from '../components/Layout'
import Button from '../components/Button'

const sections = [
  { name: "Projects", 
    items: [
      "Python",
      "C++",
      "HTML",
      "CSS",
      "Javascript",
      "Java"
    ]
  },
  { name: "Tools", 
    items: [
      "Tensorflow",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Firebase",
      "Unity",
      "Github"
    ]
  },
  { name: "Hackathons", 
    items: [
      "Hack the North",
      "Local Hack Day",
      "YR Hacks",
      "Hack the 6ix",
      "Ludum Dare 46"
    ]
  },
  { name: "Awards", 
    items: [
      "CIMC 2020 Certificate of Distinction",
      "Galois 2021 Honour Roll",
      "USACO Silver",
      "CCC 2021 Certificate of Distinction",
    ]
  },
];

export default function Experience() {
  return <Layout>
    <div className="w-full">
      <div className="m-10 flex justify-center">
        <Button>
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
          <span>Resume</span>
        </Button>
      </div>

      <div className="flex justify-center text-center">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 max-w-2xl">
          {sections.map((section) => (
            <div key={section.name}>
              <h2 className="text-4xl"><b>{section.name}</b></h2>
              <div className="flex justify-center">
                <ul className="list-disc list-inside">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Layout>
}