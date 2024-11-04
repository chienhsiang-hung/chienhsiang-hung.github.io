import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    document.getElementById("preloader-none").id = "preloader";

    emailjs.sendForm(
      process.env.REACT_APP_EmailJS_SERVICE_ID,
      process.env.REACT_APP_EmailJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EmailJS_PUBLIC_KEY
    )
      .then((result) => {
        console.log(result.text);
        document.getElementById("from_name").value = "";
        document.getElementById("from_email").value = "";
        document.getElementById("message").value = "";

        document.getElementById("preloader").id="preloader-none";
        alert("Thank you for reaching out. I will get back to you soon!");
      }, (error) => {
        console.log(error.text);
        
        document.getElementById("preloader").id="preloader-none";
        alert(error.text);
      });
  };

  return (
    <> 
      <form ref={form} onSubmit={sendEmail}>
        <div class="form">
          <div class="title">Opportunities</div>
          <div class="subtitle">Requests or Questions?<br/>Don't hesitate to contact me.</div>
          <div class="input-container ic1">
            <input name='from_name' id="from_name" class="input" type="text" placeholder=" " />
            <div class="cut"></div>
            <label for="from_name" class="placeholder">Name</label>
          </div>

          <div class="input-container ic2">
            <input name='from_email' id="from_email" class="input" type="email" placeholder=" " required />
            <div class="cut"></div>
            <label for="from_email" class="placeholder">Your Email</label>
          </div>

          <div class="input-container ic2" style={{height:"100px"}}>
            <textarea name="message" id="message" class="input" type="text" placeholder=" " />
            <div class="cut"></div>
            <label for="message" class="placeholder">Message</label>
          </div>
          
          <button type="text" class="submit" value="Send">Submit</button>
        </div>
      </form>
    </>
  );
};