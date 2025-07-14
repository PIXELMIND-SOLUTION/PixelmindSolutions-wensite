import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

function Contactform() {

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
                .post("https://678cb478f067bf9e24e7ff6a.mockapi.io/api/v1/info/contact", formData)
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
            <section
                className="testimonial-area bg-image pt-60 pb-60"
                style={{
                    backgroundImage: `url(${"assets/images/bg/testimonial-bg.png"})`,
                }}
            // data-background="assets/images/bg/testimonial-bg.png"
            >
                <div className="container">
                    <div className="row g-4">
                        <div
                            className="col-lg-6 wow fadeInLeft"
                            data-wow-delay="200ms"
                            data-wow-duration="1500ms"
                        >
                            <div className="talk-us__item">
                                <div className="section-header mb-30">
                                    <h5 className="text-white">
                                        <svg
                                            width={28}
                                            height={12}
                                            viewBox="0 0 28 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect
                                                x="0.75"
                                                y="0.75"
                                                width="18.5"
                                                height="10.5"
                                                rx="5.25"
                                                stroke="white"
                                                strokeWidth="1.5"
                                            />
                                            <rect
                                                x={8}
                                                width={20}
                                                height={12}
                                                rx={6}
                                                fill="white"
                                            />
                                        </svg>
                                        TALK TO US
                                    </h5>
                                    <h2 className="text-white">How May We Help You!</h2>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        {/* Name Field */}
                                        <div className="col-sm-6">
                                            <label htmlFor="name">Your Name*</label>
                                            <input
                                                type="text"
                                                id="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Enter your name"
                                                required
                                            />
                                            {errors.name && <small style={{ color: "red" }}>{errors.name}</small>}
                                        </div>

                                        {/* Email Field */}
                                        <div className="col-sm-6">
                                            <label htmlFor="email">Your Email*</label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Enter your email"
                                                required
                                                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                                            />
                                            {errors.email && (
                                                <small style={{ color: "red" }}>{errors.email}</small>
                                            )}
                                        </div>

                                        {/* Subject Field */}
                                        <div className="col-sm-6">
                                            <label htmlFor="subject">Subject*</label>
                                            <input
                                                type="text"
                                                id="subject"
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
                                        <div className="col-sm-6">
                                            <label htmlFor="phone">Your Phone*</label>
                                            <input
                                                type="text"
                                                id="phone"
                                                value={formData.phone}
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
                                        <div className="col-12">
                                            <label htmlFor="message">Message*</label>
                                            <textarea
                                                id="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Write your message here"
                                                required
                                            />
                                            {errors.message && (
                                                <small style={{ color: "red" }}>{errors.message}</small>
                                            )}
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-3">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 ps-2 ps-lg-5">
                            <div className="section-header mb-40">
                                <h5
                                    className="wow fadeInUp"
                                    data-wow-delay="00ms"
                                    data-wow-duration="1500ms"
                                >
                                    <img
                                        className="me-1"
                                        src="assets/images/icon/section-title.png"
                                        alt="icon"
                                    />
                                    CLIENTS REVIEW
                                </h5>
                                <h2
                                    className="wow fadeInUp"
                                    data-wow-delay="200ms"
                                    data-wow-duration="1500ms"
                                >
                                    What They Say About Our
                                </h2>
                                <p
                                    className="wow fadeInUp"
                                    data-wow-delay="400ms"
                                    data-wow-duration="1500ms"
                                >
                                    At Pixelmind Solutions, our success is driven by a passionate team of experts dedicated to delivering innovative IT solutions. With diverse skills in web development, mobile application design, and digital marketing, our team works collaboratively to bring your vision to life. We focus on creativity, quality, and customer satisfaction to ensure your business thrives in the digital world.
                                </p>
                            </div>
                            <div
                                className="swiper testimonial__slider wow fadeInDown"
                                data-wow-delay="00ms"
                                data-wow-duration="1500ms"
                            >
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="testimonial__item">
                                            <svg
                                                className="coma"
                                                width={50}
                                                height={37}
                                                viewBox="0 0 50 37"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z"
                                                    fill="#06cabc"
                                                />
                                            </svg>
                                            <div className="d-flex align-items-center gap-3">
                                                <img
                                                    src="assets/images/testimonial/testimonial-image1.png"
                                                    alt="image"
                                                />
                                                <div className="testi-info">
                                                    <h4>Suborna Tarchera</h4>
                                                    <p>Web Developer</p>
                                                    <div className="star mt-1">
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star disable" />
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="mt-30">
                                                “ Our experience with Pixelmind Solutions has been outstanding. Their team truly understands our needs and provides innovative solutions that drive measurable success.”
                                            </p>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="testimonial__item">
                                            <svg
                                                className="coma"
                                                width={50}
                                                height={37}
                                                viewBox="0 0 50 37"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M0 0V37L18.75 18.5V0H0ZM31.25 0V37L50 18.5V0H31.25Z"
                                                    fill="#06cabc"
                                                />
                                            </svg>
                                            <div className="d-flex align-items-center gap-3">
                                                <img
                                                    src="assets/images/testimonial/testimonial-image2.png"
                                                    alt="image"
                                                />
                                                <div className="testi-info">
                                                    <h4>Alex Rony</h4>
                                                    <p>Web Designer</p>
                                                    <div className="star mt-1">
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star" />
                                                        <i className="fa-sharp fa-solid fa-star disable" />
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="mt-30">
                                                “ Our experience with Pixelmind Solutions has been outstanding. Their team truly understands our needs and provides innovative solutions that drive measurable success.”
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ToastContainer />
                            {/* <div
                    className="testimonial__arry-btn mt-40 wow fadeInDown"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <button className="arry-prev testimonial__arry-prev">
                      <i className="fa-light fa-chevron-left" />
                    </button>
                    <button className="arry-next testimonial__arry-next active">
                      <i className="fa-light fa-chevron-right" />
                    </button>
                  </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contactform