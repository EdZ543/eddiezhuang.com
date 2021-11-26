import { ContactForm } from '../components/ContactForm';
import { AiFillMail, AiFillPhone } from 'react-icons/ai';

export default function Contact(){
  return (
    <div className="max-w-screen-md w-full flex flex-col justify-center">
      <div className="flex sm:flex-row flex-col sm:items-start items-center gap-10">
        <div className="sm:w-1/2">
          <h1 className="text-4xl"><b>Hire Me!</b></h1>
          <p className="flex align-middle items-center"><AiFillMail className="text-2xl m-3"/>zhuang.eddie@gmail.com</p>
          <p className="flex align-middle items-center"><AiFillPhone className="text-2xl m-3"/>416-902-7518</p>
        </div>
        <div className="sm:w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}