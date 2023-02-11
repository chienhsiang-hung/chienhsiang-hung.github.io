import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        process.env.REACT_APP_EmailJS_SERVICE_ID,
        process.env.REACT_APP_EmailJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EmailJS_PUBLIC_KEY
    )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="from_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};