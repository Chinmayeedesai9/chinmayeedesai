import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// 🖼️ Import your background image
import ContactBackground from '../assets/background1.jpg'; // update path if needed

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'service_0x22tel',
      'template_o8eup0v',
      form.current,
      'qwXbAr01DAOeGU8N0'
    )
    .then(() => {
      toast.success('Message sent successfully! ☄️', {
        icon: ({ theme, type }) => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-indigo-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            height="24"
            width="24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        ),
        position: 'top-center',
        style: {
          backgroundColor: '#5b7d87',
          color: '#ffffff',
          fontWeight: 'bold',
          borderRadius: '10px',
        },
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progressStyle: { background: '#c7d2fe' }, // progress bar in indigo-200
      });
      
      form.current.reset();
    })
    .catch((error) => {
      toast.error('Failed to send message ❌', {
        position: 'top-center',
        style: {
          backgroundColor: '#3e5135',
          color: '#ffffff',
          fontWeight: 'bold',
          borderRadius: '10px',
        },
        autoClose: 3000,
      });
      console.error(error);
    })
    .finally(() => {
      setIsSending(false);
    });
  };

  return (
    <div className="text-black py-20" id="contact">
      <ToastContainer />
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-5xl font-bold text-center text-brandblue mb-16 font-axy">Get in Touch</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-16">

          {/* Left Side: Contact Info */}
          <div className="flex-1 mb-12 md:mb-0 relative">

            {/* Background Card */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg"
              style={{
                backgroundImage: `url(${ContactBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.7)',
              }}
            ></div>

            {/* White Card (Foreground) */}
            <div className="relative bg-white/90 rounded-2xl p-8 m-6 md:m-10 shadow-2xl flex flex-col space-y-6 hover:scale-105 transform transition-all duration-500">
              <h3 className="text-3xl font-bold text-brandgreen mb-4 font-axy">Let’s connect 🔗</h3>
              <div className="flex flex-col space-y-1">
                <p className="text-brandblue font-small">
                  Hello!!
                </p>
                <p className="text-brandblue font-small">
                  I would love to get in touch with you for collaboration, projects, opportunities or a simple hello :)
                </p>
                <p className="text-brandblue font-bold font-small">
                  Here are a few ways u can contact me :
                </p>
              </div>


              <div className="space-y-5 text-lg">
                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-brandblue text-xl" />
                  <a href="mailto:chinmayeedesai@gmail.com" className="text-brandgreen2 font-three hover:underline">
                    chinmayeedesai@gmail.com
                  </a>
                </div>

                <div className="flex items-center space-x-4">
                  <FaPhoneAlt className="text-brandgreen2 text-xl" />
                  <a href="tel:+919172738523" className="text-brandblue font-three hover:underline">
                    +91 91727 38523
                  </a>
                </div>

                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-brandblue text-xl" />
                  <span className="text-brandgreen2 font-three">Pune, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="flex-1 w-full">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-brandgreen2 mb-2 font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-3 rounded-xl bg-white border border-brandblue2 text-black focus:outline-none focus:ring-2 focus:ring-brandblue"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-brandgreen2 mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-3 rounded-xl bg-white border border-brandblue2 text-black focus:outline-none focus:ring-2 focus:ring-brandblue"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-brandgreen2 mb-2 font-semibold">Message</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  className="w-full p-3 rounded-xl bg-white border border-brandblue2 text-black focus:outline-none focus:ring-2 focus:ring-brandblue"
                  placeholder="Type your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSending}
                className="bg-brandgreen2 text-white font-bold px-10 py-3 rounded-full hover:bg-brandgreen hover:scale-105 transition-transform duration-300 disabled:opacity-50"
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
