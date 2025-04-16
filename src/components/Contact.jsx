import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'service_0x22tel',           // Your Service ID
      'template_o8eup0v',          // Your Template ID
      form.current,                // Form reference
      'qwXbAr01DAOeGU8N0'          // Your Public Key (User ID)
    )
    .then((result) => {
      alert('Message sent successfully!');
      form.current.reset();
    })
    .catch((error) => {
      alert('Failed to send message. Please try again later.');
      console.error(error);
    })
    .finally(() => {
      setIsSending(false);
    });
  };

  return (
    <div className="bg-white text-black py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-5xl font-bold text-center text-red-500 mb-16 font-axy">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Contact Info */}
          <div className="flex-1 mb-12 md:mb-0">
            <h3 className='text-3xl font-bold bg-gradient-to-r from-red-400 to-pink-500 text-transparent bg-clip-text mb-4 font-axy'>Let's Talk</h3>
            <p className='text-red-600 font-small mb-8'>
              I'm open to discussing web development projects or partnership opportunities.
            </p>
            <div className='mb-4 flex items-center'>
              <FaEnvelope className='text-red-500 mr-3' />
              <a href="mailto:chinmayeedesai@gmail.com" className='text-red-600 hover:underline font-small'>
                chinmayeedesai@gmail.com
              </a>
            </div>
            <div className='mb-4 flex items-center'>
              <FaPhone className='text-red-500 mr-3' />
              <span className='text-red-600 font-small'>+91 91727 38523</span>
            </div>
            <div className='mb-4 flex items-center'>
              <FaMapMarkedAlt className='text-red-500 mr-3' />
              <span className='text-red-600 font-small'>Pune, Maharashtra, India</span>
            </div>
          </div>


          {/* Contact Form */}
          <div className='flex-1 w-full'>
            <form ref={form} onSubmit={sendEmail} className='space-y-6'>
              <div>
                <label htmlFor="user_name" className='block text-pink-600 mb-2 font-three font-semibold'>Your Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className='w-full p-3 rounded bg-white border border-red-300 text-black font-small focus:outline-none focus:ring-2 focus:ring-pink-400'
                  placeholder='Enter your name'
                />
              </div>
              <div>
                <label htmlFor="user_email" className='block text-pink-600 mb-2 font-three font-semibold'>Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className='w-full p-3 rounded bg-white border border-red-300 text-black font-small focus:outline-none focus:ring-2 focus:ring-pink-400'
                  placeholder='Enter your email'
                />
              </div>
              <div>
                <label htmlFor="message" className='block text-pink-600 mb-2 font-semibold font-three'>Message</label>
                <textarea
                  name="message"
                  required
                  className='w-full p-3 rounded bg-white border border-red-300 text-black font-small focus:outline-none focus:ring-2 focus:ring-pink-400'
                  rows="5"
                  placeholder='Enter your message'
                />
              </div>
              <button
                type="submit"
                disabled={isSending}
                className='bg-gradient-to-r from-pink-400 to-red-500 text-white font-semibold px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 disabled:opacity-50'
              >
                {isSending ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
