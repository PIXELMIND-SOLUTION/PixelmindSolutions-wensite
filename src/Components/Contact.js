import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn
} from 'react-icons/fa';


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({}); // For form validation errors

  // Handle form input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Validate form inputs
  const validateForm = () => {
    let formErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\+?\d{10,15}$/;

    if (!formData.name.trim()) formErrors.name = "Name is required.";
    if (!formData.email.trim() || !emailPattern.test(formData.email))
      formErrors.email = "Valid email is required.";
    if (!formData.subject.trim()) formErrors.subject = "Subject is required.";
    if (!formData.phone.trim() || !phonePattern.test(formData.phone))
      formErrors.phone = "Valid phone number is required.";
    if (!formData.message.trim())
      formErrors.message = "Message cannot be empty.";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      axios
        .post("https://678cb478f067bf9e28e7ff6a.mockapi.io/api/v1/info/contact", formData)
        .then((response) => {
          console.log("Data submitted successfully:", response.data);
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
          setFormData({ name: "", email: "", subject: "", phone: "", message: "" }); // Clear the form
        })
        .catch((error) => {
          console.error("Error submitting data:", error);
          toast.error("An error occurred. Please try again.", {
            position: "top-right",
            autoClose: 3000,
          });
        });
    } else {
      toast.warn("Please fix the errors in the form.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div>
      <Header />
      <main>
        {/* Page banner area start here */}
        <section
          className="banner__inner-page bg-image pt-100 pb-100 bg-image"
          // data-background="/assets/images/banner/banner-inner-page.jpg"
          style={{
            backgroundImage: `url(${"/assets/images/banner/banner-inner-page.jpg"})`,
          }}
        >
          <div
            className="shape2 wow slideInLeft"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
          >
            <img src="/assets/images/banner/inner-banner-shape2.png" alt="shape" />
          </div>
          <div
            className="shape1 wow slideInLeft"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <img src="/assets/images/banner/inner-banner-shape1.png" alt="shape" />
          </div>
          <div
            className="shape3 wow slideInRight"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <img
              className="sway__animationX"
              src="/assets/images/banner/inner-banner-shape3.png"
              alt="shape"
            />
          </div>
          <div className="container">
            <h2
              className="wow fadeInUp"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              Contact
            </h2>
            <div
              className="breadcrumb-list wow fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <Link to="/">Home</Link>
              <span>
                <i className="fa-regular fa-angles-right mx-2" />
                Contact
              </span>
            </div>
          </div>
        </section>
        <>
          {/* Contact area start here */}
          <section className="contact-area pt-80 pb-80">
            <div className="container">
              <div className="row g-4">
                <div className="col-lg-5">
                  <div className="contact__left-item primary-bg p-4">
                    <h3 className="text-white mb-3">Contact Information</h3>
                    <p className="text-white">
                      Whether you're looking for a full-scale digital transformation, need help with web or mobile development, or simply want to say hello, our team is ready to connect.
                    </p>

                    <ul className="mt-4 mb-4 list-unstyled">
                      <li className="mb-4">
                        <div className="d-flex align-items-start">
                          <div className="me-3">
                            <i className="bi bi-geo-alt-fill fs-4" style={{color: "#06cabc"}}></i>
                          </div>
                          <div>
                            <span className="text-white">Location</span>
                            <h5 className="mt-1 text-white">
                              <a className="text-white" href="https://maps.app.goo.gl/GkfdjzVF9vguB2Dd8" target="_blank" rel="noopener noreferrer">
                                Manjeera Trinity Corporate, JNTU-Hitech City Road, KPHB Phase 1, Kukatpally, Hyderabad
                              </a>
                            </h5>
                          </div>
                        </div>
                      </li>

                      <li className="mb-4">
                        <div className="d-flex align-items-start">
                          <div className="me-3">
                            <i className="bi bi-telephone-fill fs-4"  style={{color: "#06cabc"}}></i>
                          </div>
                          <div>
                            <span className="text-white">Call Us 24/7</span>
                            <h5 className="mt-1">
                              <a href="tel:+919666317749" className="text-white">+91 9666317749</a>
                            </h5>
                          </div>
                        </div>
                      </li>

                      <li className="mb-4">
                        <div className="d-flex align-items-start">
                          <div className="me-3">
                            <i className="bi bi-envelope-fill fs-4" style={{color: "#06cabc"}}></i>
                          </div>
                          <div>
                            <span className="text-white">Make a Quote</span>
                            <h5 className="mt-1">
                              <a
                                className="text-white"
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@pixelmindsolutions.com"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                info@pixelmindsolutions.com
                              </a>
                            </h5>
                          </div>
                        </div>
                      </li>
                    </ul>

                    <h4 className="text-white mb-3">Follow Social:</h4>
                    <div className="social d-flex gap-3">
                      <a href="https://www.facebook.com/share/1E6gPK4vhm/" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-facebook fs-5 " style={{color: "#06cabc"}}></i>
                      </a>
                      <a href="https://www.instagram.com/pixelmindsolutions?igsh=ZmQ1c2c0b2twdTd1" target="_blank" rel="noopener noreferrer">
                        <i className="bi bi-instagram fs-5 " style={{color: "#06cabc"}}></i>
                      </a>
                      <a href="https://x.com/PIXELMINDS41249" target="_blank">
                        <i className="bi bi-twitter-x fs-5" style={{color: "#06cabc"}}></i>
                      </a>
                      <a href="https://www.linkedin.com/company/pixelmindsolutions-pvt-ltd/" target="_blank">
                        <i className="bi bi-linkedin fs-5 " style={{color: "#06cabc"}}></i>
                      </a>
                    </div>
                  </div>
                </div>


                <div className="col-lg-6">
                  <div className="contact__right-item">
                    <div className="section-header mb-20">
                      <h5
                        className="wow fadeInUp pb-2"
                        data-wow-delay="00ms"
                        data-wow-duration="1500ms"
                      >
                        <img
                          className="me-1"
                          src="/assets/images/icon/section-title.png"
                          alt="icon"
                        />
                        GET IN TOUCH
                      </h5>
                      <h2
                        className="wow fadeInUp"
                        data-wow-delay="200ms"
                        data-wow-duration="1500ms"
                      >
                        Ready to Get Started?
                      </h2>
                      <p
                        className="wow fadeInUp mt-3"
                        data-wow-delay="400ms"
                        data-wow-duration="1500ms"
                      >
                        Whether you're looking for a full-scale digital transformation, need help with web or mobile development, or simply want to say hello our team is ready to connect.
                      </p>
                    </div>
                    <div className="contact__form">
                      <form onSubmit={handleSubmit}>
                        <div className="row g-3">
                          {/* Name Field */}
                          <div className="col-sm-6 mt-0">
                            <label htmlFor="name">Your Name*</label>
                            <input
                              type="text"
                              id="name"
                              className='bg-transparent bor mb-2'
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Enter your name"
                              required
                            />
                            {errors.name && <small style={{ color: "red" }}>{errors.name}</small>}
                          </div>

                          {/* Email Field */}
                          <div className="col-sm-6 mt-0">
                            <label htmlFor="email">Your Email*</label>
                            <input
                              type="email"
                              id="email"
                              value={formData.email}
                              onChange={handleChange}
                              className='bg-transparent bor mb-2'
                              placeholder="Enter your email "
                              required
                              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                            />
                            {errors.email && (
                              <small style={{ color: "red" }}>{errors.email}</small>
                            )}
                          </div>

                          {/* Subject Field */}
                          <div className="col-sm-6 mt-0">
                            <label htmlFor="subject">Subject*</label>
                            <input
                              type="text"
                              id="subject"
                              className='bg-transparent bor mb-2'
                              value={formData.subject}
                              onChange={handleChange}
                              placeholder="Enter the subject"
                              required
                            />
                            {errors.subject && (
                              <small style={{ color: "red" }}>{errors.subject}</small>
                            )}
                          </div>

                          {/* Phone Field */}
                          <div className="col-sm-6 mt-0">
                            <label htmlFor="phone">Your Phone*</label>
                            <input
                              type="text"
                              id="phone"
                              value={formData.phone}
                              className='bg-transparent bor mb-2'
                              onChange={handleChange}
                              placeholder="Enter your phone number"
                              required
                              pattern="^\+?\d{10,15}$"
                            />
                            {errors.phone && (
                              <small style={{ color: "red" }}>{errors.phone}</small>
                            )}
                          </div>

                          {/* Message Field */}
                          <div className="col-12 mt-0">
                            <label htmlFor="message">Message*</label>
                            <textarea
                              id="message"
                              value={formData.message}
                              onChange={handleChange}
                              className='bg-transparent bor mb-0'
                              placeholder="Write your message here"
                              required
                            />
                            {errors.message && (
                              <small style={{ color: "red" }}>{errors.message}</small>
                            )}
                          </div>
                        </div>
                        <button type="submit" className="btn-one mt-3">
                          Send Message <i className="fa-regular fa-arrow-right-long"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Contact area end here */}

          {/* Embedded Map Section */}
          <section className="map-area pb-80">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="map-container">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d668.7270662045914!2d78.39230197517291!3d17.489051779814673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb918dab342375%3A0x180a04af0c47f594!2sManjeera%20Trinity%20Corporate!5e1!3m2!1sen!2sin!4v1752847604252!5m2!1sen!2sin"
                      width="100%"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      title="PixelMind Solutions Location"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
        <ToastContainer />
      </main>
      <Footer />
    </div>
  )
}

export default Contact