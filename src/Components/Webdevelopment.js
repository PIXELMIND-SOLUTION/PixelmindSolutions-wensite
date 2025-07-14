import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'


function Webdevelopment() {
  return (
    <div>
        <Header />
        <main>
  {/* Page banner area start here */}
  <section
    className="banner__inner-page bg-image pt-100 pb-100 bg-image"
    // data-background="assets/images/banner/banner-inner-page.jpg"
    style={{
      backgroundImage: `url(${"assets/images/banner/banner-inner-page.jpg"})`,
    }}
  >
    <div
      className="shape2 wow slideInLeft"
      data-wow-delay="00ms"
      data-wow-duration="1500ms"
    >
      <img src="assets/images/banner/inner-banner-shape2.png" alt="shape" />
    </div>
    <div
      className="shape1 wow slideInLeft"
      data-wow-delay="200ms"
      data-wow-duration="1500ms"
    >
      <img src="assets/images/banner/inner-banner-shape1.png" alt="shape" />
    </div>
    <div
      className="shape3 wow slideInRight"
      data-wow-delay="200ms"
      data-wow-duration="1500ms"
    >
      <img
        className="sway__animationX"
        src="assets/images/banner/inner-banner-shape3.png"
        alt="shape"
      />
    </div>
    <div className="container">
      <h2
        className="wow fadeInUp"
        data-wow-delay="00ms"
        data-wow-duration="1500ms"
      >
           Web Development
      </h2>
      <div
        className="breadcrumb-list wow fadeInUp"
        data-wow-delay="200ms"
        data-wow-duration="1500ms"
      >
         <Link to="/">Home</Link>
        <span>
          <i className="fa-regular fa-angles-right mx-2" />
          Web Development
        </span>
      </div>
    </div>
  </section>
  <section className="service-single-area pt-90 pb-90">
  <div className="container">
    <div className="row g-4">
      <div className="col-lg-12 order-2 order-lg-1">
        <div className="service-single__left-item">
            <div className='row'>
                <div className='col-md-6'>
                <h3 className="title mb-30">   Web Development</h3>
                <p>
                At Pixelmind Solutions, we offer comprehensive web development services designed to create dynamic, responsive, and high-performance websites that meet your business objectives. Whether you need a simple brochure website or a complex web application, our expert team is equipped to deliver solutions that are visually appealing, highly functional, and easy to navigate. We use the latest technologies and best practices to ensure your website is fast, secure, and optimized for both desktop and mobile users, providing a seamless experience across all devices and platforms.
                                      </p>
          <p className="mb-20 mt-20" >
          Our web development process is centered around understanding your unique business needs and creating custom solutions that align with your brand identity. From the initial planning stage through to deployment and ongoing support, we work closely with you to ensure that your website delivers the right message to your audience and supports your business goals.             </p>
        
                </div>
                <div className='col-md-6'>
                <div className="image mb-50">
            <img
              src="assets/images/service/service-image6.jpg"
              alt="image"
            />
           
          </div>
                </div>
            </div>
      
         
        
        
          <div className="row g-5  align-items-center">
            <div className="col-lg-5">
              <h4 className="mb-20">Benefits With Our Service</h4>
              <ul>
                <li className="mb-15">
                  <i className="fa-solid fa-check" />
                  Custom Web Solutions
                </li>
                <li className="mb-15">
                  <i className="fa-solid fa-check" />
                  Responsive Design
                </li>
                <li className="mb-15">
                  <i className="fa-solid fa-check" />
                  SEO-Friendly
                </li>
                <li className="mb-15">
                  <i className="fa-solid fa-check" />
                  Enhanced User Experience
                </li>
                <li className="mb-15">
                  <i className="fa-solid fa-check" />
                  Security & Reliability
                </li>
                <li className="mb-15">
                  <i className="fa-solid fa-check" />
                  Faster Load Times
                </li>
                <li className="mb-15">
                  <i className="fa-solid fa-check" />
                  Ongoing Support & Maintenance
                </li>
              </ul>
            </div>
         
          </div>
   
          {/* <h3 className="title mb-10 mt-20">Most Comment Question?</h3> */}
          <p className="mb-10">
          At Pixelmind Solutions, we not only focus on developing functional websites but also on creating a positive user experience. Our team ensures that your website’s design is both aesthetically pleasing and easy to use, with clear navigation and fast load times. We also provide ongoing maintenance, optimization, and support, ensuring your website remains up-to-date and secure as technologies evolve. Our goal is to help your business succeed online by delivering web solutions that drive traffic, increase engagement, and ultimately, boost conversions.                    </p>
        
        </div>
      </div>
 
    </div>
  </div>
</section>

  </main>
        <Footer />
    </div>
  )
}

export default Webdevelopment