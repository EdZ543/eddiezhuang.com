import React from 'react';
import ReactDOM from 'react-dom';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className="flex justify-center text-4xl">
      <a className="m-5" href="https://github.com/EdZ543" rel="noreferrer" target="_blank"><AiFillGithub /></a>
      <a className="m-5" href="https://ca.linkedin.com/" rel="noreferrer" target="_blank"><AiFillLinkedin /></a>
      <a className="m-5" href="mailto:zhuang.eddie@gmail.com" rel="noreferrer" target="_blank"><AiOutlineMail /></a>
    </div>
  )
};