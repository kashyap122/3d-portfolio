import React from "react";
import "../ContactUs/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="section">
      <div className="contact-us">
        <div className="left-contact-us">
          <form action="">
            <div className="title">Contact Us</div>
            <input type="text" className="name" placeholder="Name" required />
            <input type="email" className="mail" placeholder="E-mail" required/>
            <textarea
              type=""
              className="message"
              placeholder="Write your message"
              rows={10}
              required
            />
            <button className="button" type="submit">Send</button>
          </form>
        </div>
        <div className="right-contact-us">
        <iframe title="Ahmedabad" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58752.54218417793!2d72.54195452088327!3d23.02252797403173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1718866862464!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{width:"100%" ,height:"100%" ,border:"0"}}></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
