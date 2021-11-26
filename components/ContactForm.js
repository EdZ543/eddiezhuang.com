import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("mknywjbw");
  if (state.succeeded) {
      return <p>Thanks for the message!</p>;
  }
  return (
    <div className="flex max-w-lg">
      <form className="flex flex-col w-full gap-2" onSubmit={handleSubmit}>
        <input
          className="bg-transparent border-2 rounded-lg border-opacity-50 p-2"
          id="name"
          type="name" 
          name="name"
          placeholder="Name"
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />
        <input
          className="bg-transparent border-2 rounded-lg border-opacity-50 p-2"
          id="email"
          type="email" 
          name="email"
          placeholder="Email"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <textarea
          className="bg-transparent border-2 rounded-lg border-opacity-50 p-2 h-36"
          id="message"
          name="message"
          placeholder="Message"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <div className="w-full flex justify-end">
          <button type="submit" disabled={state.submitting} href="/experience" className="bg-palette-blue-light font-bold py-2 px-4 rounded inline-flex items-center">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}