import Layout from '../components/Layout'
import Button from '../components/Button'

export default function Experience() {
  return <Layout>
    <div className="w-full">
      <div className="m-20 flex justify-center">
        <Button>
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
          <span>Resume</span>
        </Button>
      </div>

      <h2 className="text-5xl"><b>Skills</b></h2>
      <h2><b>Experience</b></h2>
    </div>
  </Layout>
}