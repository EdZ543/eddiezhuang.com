import React from 'react';
import ReactDOM from 'react-dom';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className="flex justify-center text-5xl">
      <a className="m-2" href="https://github.com/EdZ543" target="_blank"><AiFillGithub /></a>
      <a className="m-2" href="https://ca.linkedin.com/" target="_blank"><AiFillLinkedin /></a>
      <a className="m-2" href="mailto:zhuang.eddie@gmail.com" target="_blank"><AiOutlineMail /></a>
    </div>
  )
};