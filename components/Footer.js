import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

export const Footer = () => {
  return (
    <div className="flex justify-center">
      <SocialIcon url="https://github.com/EdZ543" />
      <SocialIcon url="https://ca.linkedin.com/" />
      <SocialIcon url="mailto:zhuang.eddie@gmail.com" />
    </div>
  )
};