import { ContactForm } from '../components/ContactForm';
import { AiFillMail, AiFillPhone } from 'react-icons/ai';
import Layout from '../components/Layout'

export default function Contact(){
  return (
    <Layout>
      <div className="max-w-3xl w-full flex flex-col justify-center">
        <h1 className="text-4xl mb-2"><b>Contact Me!</b></h1>
        <div className="flex sm:flex-row flex-col sm:items-start items-center sm:gap-10"> 
          <div className="sm:w-7/10 w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  )
}
