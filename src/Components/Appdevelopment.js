import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'


function Appdevelopment() {
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
           App Development
      </h2>
      <div
        className="breadcrumb-list wow fadeInUp"
        data-wow-delay="200ms"
        data-wow-duration="1500ms"
      >
         <Link to="/">Home</Link>
        <span>
          <i className="fa-regular fa-angles-right mx-2" />
          App Development
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
                <h3 className="title mb-30">   App Development</h3>
                <p>
                At Pixelmind Solutions, we are dedicated to crafting innovative and custom mobile applications that empower businesses to thrive in today’s competitive digital landscape. We offer end-to-end app development services that include everything from ideation and design to development, testing, and ongoing support. Our team of expert developers and designers specialize in creating high-performance applications for iOS, Android, and cross-platform platforms, ensuring a seamless and engaging user experience across all devices.          </p>
          <p className="mb-20 mt-20" >
          We understand that each business is unique, which is why we take a personalized approach to every project. Whether you’re a startup looking to build your first app or an established business in need of an app overhaul, we work closely with you to develop solutions that align with your brand, vision, and business goals.        </p>
        
                </div>
                <div className='col-md-6'>
                <div className="image mb-50">
            <img
              src="/assets/images/service/service-image3.jpg"
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
                  Custom-Tailored Solutions
                </li>
                <li className="mb-15">
                  <i className="fa-solid fa-check" />
                  Expert Team
                </li>
                <li className="mb-15">
                  <i className="fa-solid fa-check" />
                  Cost-Effective Development
                </li>
                <li className="mb-15">
                  <i className="fa-solid fa-check" />
                  Faster Time-to-Market
                </li>
                <li className="mb-15">
                  <i className="fa-solid fa-check" />
                  Seamless User Experience
                </li>
                <li className="mb-15">
                  <i className="fa-solid fa-check" />
                  Post-Launch Support
                </li>
              </ul>
            </div>
         
          </div>
   
          {/* <h3 className="title mb-10 mt-20">Most Comment Question?</h3> */}
          <p className="mb-10">
          At Pixelmind Solutions, we’re committed to delivering not just apps but long-term partnerships. We provide continuous maintenance and support to keep your app running smoothly, adapting it to market changes, and ensuring that your app stays secure and up-to-date. We use industry-leading tools and a rigorous testing process to ensure that your app performs flawlessly, allowing you to focus on growing your business with confidence.
          </p>
          {/* <div className="accordion" id="accordionExample">
            <div
              className="accordion-item wow fadeInDown shadow border-none"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Where should I incorporate my business?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    It is a long established fact that a reader be distracted by
                    the readable content of a page when looking a its layout.
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum
                  </p>
                </div>
              </div>
            </div>
            <div
              className="accordion-item wow fadeInDown shadow border-none"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What happens my free trial?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    It is a long established fact that a reader be distracted by
                    the readable content of a page when looking a its layout.
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum
                  </p>
                </div>
              </div>
            </div>
            <div
              className="accordion-item wow fadeInDown shadow border-none"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <h2 className="accordion-header" id="headingthree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsethree"
                  aria-expanded="false"
                  aria-controls="collapsethree"
                >
                  What is included in your services?
                </button>
              </h2>
              <div
                id="collapsethree"
                className="accordion-collapse collapse"
                aria-labelledby="headingthree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    It is a long established fact that a reader be distracted by
                    the readable content of a page when looking a its layout.
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum
                  </p>
                </div>
              </div>
            </div>
            <div
              className="accordion-item wow fadeInDown shadow border-none"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  What type of company is measured?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p>
                    It is a long established fact that a reader be distracted by
                    the readable content of a page when looking a its layout.
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="col-lg-4 order-1 order-lg-2">
        <div className="service-single__right-item">
          <div className="item sub-bg mb-30">
            <h4 className="mb-20">All Services</h4>
            <ul className="category service-category">
              <li>
                <a href="#0">Database Security</a>{" "}
                <i className="fa-regular fa-arrow-right-long primary-color" />
              </li>
              <li>
                <a href="#0">IT Consultancy</a>{" "}
                <i className="fa-regular fa-arrow-right-long primary-color" />
              </li>
              <li className="active">
                <a href="#0">App Development</a>{" "}
                <i className="fa-regular fa-arrow-right-long primary-color" />
              </li>
              <li>
                <a href="#0">UI/UX Design</a>{" "}
                <i className="fa-regular fa-arrow-right-long primary-color" />
              </li>
              <li>
                <a href="#0">Cyber Security</a>{" "}
                <i className="fa-regular fa-arrow-right-long primary-color" />
              </li>
            </ul>
          </div>
          <div className="item sub-bg mb-30">
            <h4 className="mb-20">Opening Hours</h4>
            <ul className="category">
              <li className="secondary-color justify-content-start gap-3">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8505 9.41291L8.61967 7.73979V4.3316C8.61967 3.98891 8.34266 3.71191 7.99998 3.71191C7.65729 3.71191 7.38029 3.98891 7.38029 4.3316V8.04966C7.38029 8.24485 7.47201 8.42892 7.62817 8.54541L10.1069 10.4044C10.2138 10.485 10.3441 10.5285 10.478 10.5284C10.667 10.5284 10.8529 10.4435 10.9744 10.2799C11.1802 10.0066 11.1244 9.61804 10.8505 9.41291Z"
                    fill="#06cabc"
                  />
                  <path
                    d="M8 0C3.58853 0 0 3.58853 0 8C0 12.4115 3.58853 16 8 16C12.4115 16 16 12.4115 16 8C16 3.58853 12.4115 0 8 0ZM8 14.7607C4.27266 14.7607 1.23934 11.7273 1.23934 8C1.23934 4.27266 4.27266 1.23934 8 1.23934C11.728 1.23934 14.7607 4.27266 14.7607 8C14.7607 11.7273 11.7273 14.7607 8 14.7607Z"
                    fill="#06cabc"
                  />
                </svg>
                Mon - Sat: 10.00 AM - 4.00 PM
              </li>
              <li className="secondary-color justify-content-start gap-3">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8505 9.41291L8.61967 7.73979V4.3316C8.61967 3.98891 8.34266 3.71191 7.99998 3.71191C7.65729 3.71191 7.38029 3.98891 7.38029 4.3316V8.04966C7.38029 8.24485 7.47201 8.42892 7.62817 8.54541L10.1069 10.4044C10.2138 10.485 10.3441 10.5285 10.478 10.5284C10.667 10.5284 10.8529 10.4435 10.9744 10.2799C11.1802 10.0066 11.1244 9.61804 10.8505 9.41291Z"
                    fill="#06cabc"
                  />
                  <path
                    d="M8 0C3.58853 0 0 3.58853 0 8C0 12.4115 3.58853 16 8 16C12.4115 16 16 12.4115 16 8C16 3.58853 12.4115 0 8 0ZM8 14.7607C4.27266 14.7607 1.23934 11.7273 1.23934 8C1.23934 4.27266 4.27266 1.23934 8 1.23934C11.728 1.23934 14.7607 4.27266 14.7607 8C14.7607 11.7273 11.7273 14.7607 8 14.7607Z"
                    fill="#06cabc"
                  />
                </svg>
                Sun: 09.00 AM - 4.00 PM
              </li>
              <li className="secondary-color justify-content-start gap-3">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8505 9.41291L8.61967 7.73979V4.3316C8.61967 3.98891 8.34266 3.71191 7.99998 3.71191C7.65729 3.71191 7.38029 3.98891 7.38029 4.3316V8.04966C7.38029 8.24485 7.47201 8.42892 7.62817 8.54541L10.1069 10.4044C10.2138 10.485 10.3441 10.5285 10.478 10.5284C10.667 10.5284 10.8529 10.4435 10.9744 10.2799C11.1802 10.0066 11.1244 9.61804 10.8505 9.41291Z"
                    fill="#06cabc"
                  />
                  <path
                    d="M8 0C3.58853 0 0 3.58853 0 8C0 12.4115 3.58853 16 8 16C12.4115 16 16 12.4115 16 8C16 3.58853 12.4115 0 8 0ZM8 14.7607C4.27266 14.7607 1.23934 11.7273 1.23934 8C1.23934 4.27266 4.27266 1.23934 8 1.23934C11.728 1.23934 14.7607 4.27266 14.7607 8C14.7607 11.7273 11.7273 14.7607 8 14.7607Z"
                    fill="#06cabc"
                  />
                </svg>
                Friday: Closed
              </li>
              <li className="secondary-color justify-content-start gap-3">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8505 9.41291L8.61967 7.73979V4.3316C8.61967 3.98891 8.34266 3.71191 7.99998 3.71191C7.65729 3.71191 7.38029 3.98891 7.38029 4.3316V8.04966C7.38029 8.24485 7.47201 8.42892 7.62817 8.54541L10.1069 10.4044C10.2138 10.485 10.3441 10.5285 10.478 10.5284C10.667 10.5284 10.8529 10.4435 10.9744 10.2799C11.1802 10.0066 11.1244 9.61804 10.8505 9.41291Z"
                    fill="#06cabc"
                  />
                  <path
                    d="M8 0C3.58853 0 0 3.58853 0 8C0 12.4115 3.58853 16 8 16C12.4115 16 16 12.4115 16 8C16 3.58853 12.4115 0 8 0ZM8 14.7607C4.27266 14.7607 1.23934 11.7273 1.23934 8C1.23934 4.27266 4.27266 1.23934 8 1.23934C11.728 1.23934 14.7607 4.27266 14.7607 8C14.7607 11.7273 11.7273 14.7607 8 14.7607Z"
                    fill="#06cabc"
                  />
                </svg>
                Emergency: 24 hours
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</section>

  </main>
        <Footer />
    </div>
  )
}

export default Appdevelopment