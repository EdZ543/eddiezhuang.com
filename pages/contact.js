import { ContactForm } from '../components/ContactForm';
import { AiFillMail, AiFillPhone } from 'react-icons/ai';
import Layout from '../components/Layout'

export default function Contact(){
  return (
    <Layout>
        <div className="max-w-3xl w-full flex flex-col justify-center">
        <div className="flex sm:flex-row flex-col sm:items-start items-center sm:gap-10">
          <div className="sm:w-1/3 w-full sm:text-left text-center">
            <h1 className="text-4xl mb-2"><b>Hire Me!</b></h1>
            <p className="flex align-middle items-center sm:justify-start justify-center"><AiFillMail className="text-2xl m-2 flex-none"/>zhuang.eddie@gmail.com</p>
            <p className="flex align-middle items-center sm:justify-start justify-center"><AiFillPhone className="text-2xl m-2 flex-none"/>416-902-7518</p>
          </div>
          
          <div className="sm:w-2/3 w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  )
}