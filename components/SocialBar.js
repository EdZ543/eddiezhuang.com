import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

export default function SocialBar() {
  return (
    <div className="flex justify-center text-4xl">
      <a className="m-2" href="https://github.com/EdZ543" rel="noreferrer" target="_blank"><AiFillGithub /></a>
      <a className="m-2" href="https://www.linkedin.com/in/eddie-zhuang-03288a229/" rel="noreferrer" target="_blank"><AiFillLinkedin /></a>
      <a className="m-2" href="mailto:zhuang.eddie@gmail.com" rel="noreferrer" target="_blank"><AiOutlineMail /></a>
    </div>
  )
}