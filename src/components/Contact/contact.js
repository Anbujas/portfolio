import './contact.css';
import ppahs from '../../assets/ppahs.png';
import legacy from '../../assets/legacy.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hio9fl8', 'template_koia0zi', form.current, 'sHk_cEpn9Uibpv01O')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent !');
            }, (error) => {
                console.log(error.text);
            });
    };
    
    return (
        <div id='contactPage'>
            <div id="clients">
                <h1 className="contactPageTitle">My clients</h1>
                <span className="clientDesc">
                    Feedback from my Valued clients
                </span>
                <div className="clientImgs">
                    <img src={ppahs} alt="Client" className="clientImg" />
                    <img src={legacy} alt="Client" className="clientImg" />           
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='from_name' />
                    <input type="text" className="email" placeholder='Your Email' name='from_email' />
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg' ></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    <div className="links">
                        
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;