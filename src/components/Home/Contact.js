import React, { useRef } from 'react';
import emailjs, { send } from '@emailjs/browser';
import "./Contact.css"
import { Col } from 'react-bootstrap';

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
    <Col md={12} className="home-about-social form-parent">
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
              <input name='from_email' id="from_email" class="input" type="text" placeholder=" " />
              <div class="cut"></div>
              <label for="from_email" class="placeholder">Email</label>
            </div>


            <div class="input-container ic2" style={{height:"100px"}}>
              <textarea name="message" id="message" class="input" type="text" placeholder=" " />
              <div class="cut"></div>
              <label for="message" class="placeholder">Message</label>
            </div>
            
            <button type="text" class="submit" value="Send">Submit</button>
          </div>
        </form>

        {/* <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="from_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form> */}
      </>
    </Col>
  );
};