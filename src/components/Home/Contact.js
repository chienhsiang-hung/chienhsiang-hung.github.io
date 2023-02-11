import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"
import { Container, Row, Col } from 'react-bootstrap';

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
    <Container>
      <Row>
        <Col md={12} className="home-about-social form-parent" style={{padding: "25px 12px 50px 12px"}}>
          <>
            <div class="form">
              <div class="title">Welcome</div>
              <div class="subtitle">Let's create your account!</div>
              <div class="input-container ic1">
                <input id="firstname" class="input" type="text" placeholder=" " />
                <div class="cut"></div>
                <label for="firstname" class="placeholder">First name</label>
              </div>
              <div class="input-container ic2">
                <input id="lastname" class="input" type="text" placeholder=" " />
                <div class="cut"></div>
                <label for="lastname" class="placeholder">Last name</label>
              </div>
              <div class="input-container ic2">
                <input id="email" class="input" type="text" placeholder=" " />
                <div class="cut cut-short"></div>
                <label for="email" class="placeholder">Email</label>
              </div>
              <button type="text" class="submit">submit</button>
            </div>

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
      </Row>
    </Container>
  );
};