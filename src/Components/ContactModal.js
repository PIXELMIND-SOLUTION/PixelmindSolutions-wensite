import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactModal({ show, onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

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
        if (!formData.message.trim()) formErrors.message = "Message cannot be empty.";

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
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

    if (!show) return null;

    return (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content bg-modal position-relative overflow-hidden">

                    {/* Left Side Decorations */}
                    <div className="position-absolute top-0 start-0 z-0">
                        {/* Regular Left Shape */}
                        <div className="banner__shape-left2" style={{ position: 'absolute', top: '20%', left: '0', zIndex: 0 }}>
                            <img
                                src="/assets/images/banner/banner-regular-left-shape.png"
                                alt="shape"
                            />
                        </div>

                        {/* Solid Left Shape */}
                        <div className="banner__shape-left1" style={{ position: 'absolute', top: '40%', left: '0', zIndex: 0 }}>
                            <img
                                src="/assets/images/banner/banner-solid-left-shape.png"
                                alt="shape"
                            />
                        </div>

                        {/* Swaying Left Shape */}
                        <div className="banner__shape-left3" style={{ position: 'absolute', top: '60%', left: '0', zIndex: 0 }}>
                            <img
                                className="sway__animation"
                                src="/assets/images/banner/banner-shape-left.png"
                                alt="shape"
                            />
                        </div>
                    </div>

                    {/* Right Line Decoration */}
                    <div className="position-absolute top-0 end-0 z-0">
                        <img
                            src="/assets/images/banner/banner-right-line1.png"
                            alt="shape"
                            className="banner__right-line1"
                            style={{ position: 'absolute', top: '10%', right: '0', zIndex: 0 }}
                        />
                        <img
                            src="/assets/images/banner/banner-right-line2.png"
                            alt="shape"
                            className="banner__right-line2"
                            style={{ position: 'absolute', top: '30%', right: '0', zIndex: 0 }}
                        />
                        <img
                            src="/assets/images/banner/banner-right-line3.png"
                            alt="shape"
                            className="banner__right-line3"
                            style={{ position: 'absolute', top: '50%', right: '0', zIndex: 0 }}
                        />
                        <img
                            src="/assets/images/banner/banner-right-line4.png"
                            alt="shape"
                            className="banner__right-line4"
                            style={{ position: 'absolute', top: '70%', right: '0', zIndex: 0 }}
                        />


                    </div>

                    <div className="modal-header position-relative z-1">
                        <h4 className="modal-title text-white">
                            <strong>
                                <h3 className="text-white">How May We Help You!</h3>
                            </strong>
                        </h4>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>

                    <div className="modal-body position-relative z-1">
                        <form onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label htmlFor="name"><span className='text-white'>Your Name*</span></label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="form-control"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.name && <small className="text-danger">{errors.name}</small>}
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="email"><span className='text-white'>Your Email*</span></label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.email && <small className="text-danger">{errors.email}</small>}
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="subject"><span className='text-white'>Subject*</span></label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className="form-control"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.subject && <small className="text-danger">{errors.subject}</small>}
                                </div>

                                <div className="col-sm-6">
                                    <label htmlFor="phone"><span className='text-white'>Phone*</span></label>
                                    <input
                                        type="text"
                                        id="phone"
                                        className="form-control"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.phone && <small className="text-danger">{errors.phone}</small>}
                                </div>

                                <div className="col-12">
                                    <label htmlFor="message"><span className='text-white'>Message*</span></label>
                                    <textarea
                                        id="message"
                                        className="form-control"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                    {errors.message && <small className="text-danger">{errors.message}</small>}
                                </div>
                            </div>

                            <div className="mt-4">
                                <button type="submit" className="btn btn-dark">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default ContactModal;