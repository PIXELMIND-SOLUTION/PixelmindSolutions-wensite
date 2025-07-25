import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import backgroundimg from "../../public/assets/images/banner/banner-image.jpg"
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Contactform from "./Contactform";
import { Helmet } from "react-helmet";


function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div>
      <Helmet>
        <title>Best Software Company in Hyderabad | Website & Mobile App Development | Pixelmind</title>
        <meta name="description" content="Pixelmind Solutions is a top software company in Hyderabad, offering expert Website Development, Mobile App Development, and Digital Marketing services at cost-effective prices. Grow your business with our tailored IT solutions." />
        <meta name="keywords" content="software companies in hyderabad gachibowli, software companies in hyderabad madhapur, best software company in Hyderabad, it software company in hyderabad, it companies in hyderabad, app designers in hyderabad, ios app development companies in hyderabad, best app developers in hyderabad, best ui ux design companies in hyderabad, web developer near me, web development services, wordpress website developer near me, web developers in hyderabad, best web designers in hyderabad, web development companies in hyderabad, best web design company in hyderabad, digital marketing consultants in hyderabad, digital marketing for doctors in hyderabad, digital marketing companies in hyderabad, digital marketing in hyd, website maintenance companies" />

      </Helmet>

      <>
        <Header />

        <main>
          {/* Banner area start here */}
          <section className="banner-area">
            <div className="banner__line">
              <img
                className="sway__animation"
                src="/assets/images/banner/banner-line.png"
                alt="shape"
              />
            </div>

            <div className="swiper banner__slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div
                    data-animation="slideInLeft"
                    data-duration="2s"
                    data-delay=".3s"
                    className="banner__shape-left2"
                  >
                    <img
                      src="/assets/images/banner/banner-regular-left-shape.png"
                      alt="shape"
                    />
                  </div>
                  <div
                    data-animation="slideInLeft"
                    data-duration="2s"
                    data-delay=".9s"
                    className="banner__shape-left1"
                  >
                    <img
                      src="/assets/images/banner/banner-solid-left-shape.png"
                      alt="shape"
                    />
                  </div>
                  <div className="banner__shape-left3 wow slideInLeft">
                    <img
                      className="sway__animation"
                      src="/assets/images/banner/banner-shape-left.png"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="banner__shape-right2"
                    data-animation="slideInRight"
                    data-duration="3s"
                    data-delay=".3s"
                  >
                    <img
                      src="/assets/images/banner/banner-shape-right-line.png"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="banner__shape-right1"
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".3s"
                  >
                    <img
                      src="/assets/images/banner/banner-shape-right.png"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="banner__right-line1"
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".9s"
                  >
                    <img
                      src="/assets/images/banner/banner-right-line1.png"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="banner__right-line2"
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".7s"
                  >
                    <img
                      src="/assets/images/banner/banner-right-line2.png"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="banner__right-line3"
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".5s"
                  >
                    <img
                      src="/assets/images/banner/banner-right-line3.png"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="banner__right-line4"
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".3s"
                  >
                    <img
                      src="/assets/images/banner/banner-right-line4.png"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="slide-bg"
                    style={{
                      backgroundImage: `url(${"/assets/images/banner/banner-image.jpg"})`,
                    }}
                  //   data-background="/assets/images/banner/banner-image.jpg"
                  />
                  <div className="container">
                    <div className="banner__content">
                      <h4
                        data-animation="slideInRight"
                        data-duration="2s"
                        data-delay=".3s"
                        className="text-white mb-20"
                      >
                        <svg
                          className="me-1"
                          width={40}
                          height={16}
                          viewBox="0 0 40 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.500183"
                            width="25.6667"
                            height={15}
                            rx="7.5"
                            stroke="white"
                          />
                          <rect
                            x="13.3334"
                            y="0.000183105"
                            width="26.6667"
                            height={16}
                            rx={8}
                            fill="white"
                          />
                        </svg>
                        Best it SOULTION Provider
                      </h4>
                      <h1
                        data-animation="slideInRight"
                        data-duration="2s"
                        data-delay=".5s"
                        className="text-white"
                      >
                        Excellent It Services for Your Success
                      </h1>
                      <p
                        data-animation="slideInRight"
                        data-duration="2s"
                        data-delay=".7s"
                        className="mt-20"
                      >
                        Unlock your business potential with our excellent IT
                        services designed to drive success.
                        <br />
                        Tailored solutions to seamless support, we ensure your
                        technology works for you, every step of the way.
                      </p>
                      <Link
                        data-animation="slideInRight"
                        data-duration="2s"
                        data-delay=".9s"
                        to="/about"
                        className="btn-one mt-60"
                      >
                        Explore More{" "}
                        <i className="fa-regular fa-arrow-right-long" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div
                    data-animation="slideInLeft"
                    data-duration="2s"
                    data-delay=".3s"
                    className="banner__shape-left2"
                  >
                    <img
                      src="/assets/images/banner/banner-regular-left-shape.png"
                      alt="shape"
                    />
                  </div>
                  <div
                    data-animation="slideInLeft"
                    data-duration="2s"
                    data-delay=".9s"
                    className="banner__shape-left1"
                  >
                    <img
                      src="/assets/images/banner/banner-solid-left-shape.png"
                      alt="shape"
                    />
                  </div>
                  <div className="banner__shape-left3 wow slideInLeft">
                    <img
                      className="sway__animation"
                      src="/assets/images/banner/banner-shape-left.png"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="banner__shape-right2"
                    data-animation="slideInRight"
                    data-duration="3s"
                    data-delay=".3s"
                  >
                    <img
                      src="/assets/images/banner/banner-shape-right-line.png"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="banner__shape-right1"
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".3s"
                  >
                    <img
                      src="/assets/images/banner/banner-shape-right.png"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="banner__right-line1"
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".9s"
                  >
                    <img
                      src="/assets/images/banner/banner-right-line1.png"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="banner__right-line2"
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".7s"
                  >
                    <img
                      src="/assets/images/banner/banner-right-line2.png"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="banner__right-line3"
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".5s"
                  >
                    <img
                      src="/assets/images/banner/banner-right-line3.png"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="banner__right-line4"
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".3s"
                  >
                    <img
                      src="/assets/images/banner/banner-right-line4.png"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="slide-bg"
                    data-background="/assets/images/banner/banner-image2.jpg"
                  />
                  <div className="container">
                    <div className="banner__content">
                      <h4
                        data-animation="slideInRight"
                        data-duration="2s"
                        data-delay=".3s"
                        className="text-white mb-20"
                      >
                        <svg
                          className="me-1"
                          width={40}
                          height={16}
                          viewBox="0 0 40 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.500183"
                            width="25.6667"
                            height={15}
                            rx="7.5"
                            stroke="white"
                          />
                          <rect
                            x="13.3334"
                            y="0.000183105"
                            width="26.6667"
                            height={16}
                            rx={8}
                            fill="white"
                          />
                        </svg>
                        Best it SOULTION Provider
                      </h4>
                      <h1
                        data-animation="slideInRight"
                        data-duration="2s"
                        data-delay=".5s"
                        className="text-white"
                      >
                        Excellent It Services for Your Success
                      </h1>
                      <p
                        data-animation="slideInRight"
                        data-duration="2s"
                        data-delay=".7s"
                        className="mt-20"
                      >
                        Unlock your business potential with our excellent IT
                        services designed to drive success.
                        <br />
                        Tailored solutions to seamless support, we ensure your
                        technology works for you, every step of the way.
                      </p>
                      <Link
                        data-animation="slideInRight"
                        data-duration="2s"
                        data-delay=".9s"
                        to="/about"
                        className="btn-one mt-60"
                      >
                        Explore More{" "}
                        <i className="fa-regular fa-arrow-right-long" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div
                    data-animation="slideInLeft"
                    data-duration="2s"
                    data-delay=".3s"
                    className="banner__shape-left2"
                  >
                    <img
                      src="/assets/images/banner/banner-regular-left-shape.png"
                      alt="shape"
                    />
                  </div>
                  <div
                    data-animation="slideInLeft"
                    data-duration="2s"
                    data-delay=".9s"
                    className="banner__shape-left1"
                  >
                    <img
                      src="/assets/images/banner/banner-solid-left-shape.png"
                      alt="shape"
                    />
                  </div>
                  <div className="banner__shape-left3 wow slideInLeft">
                    <img
                      className="sway__animation"
                      src="/assets/images/banner/banner-shape-left.png"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="banner__shape-right2"
                    data-animation="slideInRight"
                    data-duration="3s"
                    data-delay=".3s"
                  >
                    <img
                      src="/assets/images/banner/banner-shape-right-line.png"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="banner__shape-right1"
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".3s"
                  >
                    <img
                      src="/assets/images/banner/banner-shape-right.png"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="banner__right-line1"
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".9s"
                  >
                    <img
                      src="/assets/images/banner/banner-right-line1.png"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="banner__right-line2"
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".7s"
                  >
                    <img
                      src="/assets/images/banner/banner-right-line2.png"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="banner__right-line3"
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".5s"
                  >
                    <img
                      src="/assets/images/banner/banner-right-line3.png"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="banner__right-line4"
                    data-animation="slideInRight"
                    data-duration="2s"
                    data-delay=".3s"
                  >
                    <img
                      src="/assets/images/banner/banner-right-line4.png"
                      alt="shape"
                    />
                  </div>
                  <div
                    className="slide-bg"
                    data-background="/assets/images/banner/banner-image3.jpg"
                  />
                  <div className="container">
                    <div className="banner__content">
                      <h4
                        data-animation="slideInRight"
                        data-duration="2s"
                        data-delay=".3s"
                        className="text-white mb-20"
                      >
                        <svg
                          className="me-1"
                          width={40}
                          height={16}
                          viewBox="0 0 40 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.500183"
                            width="25.6667"
                            height={15}
                            rx="7.5"
                            stroke="white"
                          />
                          <rect
                            x="13.3334"
                            y="0.000183105"
                            width="26.6667"
                            height={16}
                            rx={8}
                            fill="white"
                          />
                        </svg>
                        Best it SOULTION Provider
                      </h4>
                      <h1
                        data-animation="slideInRight"
                        data-duration="2s"
                        data-delay=".5s"
                        className="text-white"
                      >
                        Excellent It Services for Your Success
                      </h1>
                      <p
                        data-animation="slideInRight"
                        data-duration="2s"
                        data-delay=".7s"
                        className="mt-20"
                      >
                        Unlock your business potential with our excellent IT
                        services designed to drive success.
                        <br />
                        Tailored solutions to seamless support, we ensure your
                        technology works for you, every step of the way.
                      </p>
                      <Link
                        data-animation="slideInRight"
                        data-duration="2s"
                        data-delay=".9s"
                        to="/about"
                        className="btn-one mt-60"
                      >
                        Explore More{" "}
                        <i className="fa-regular fa-arrow-right-long" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="banner__dot-wrp">
              <div className="dot-light banner__dot" />
            </div>
          </section>
          {/* Banner area end here */}
          {/* Service area start here */}
          <section className="service-area pt-60 pb-60">
            <div className="service__shape wow slideInRight">
              <img
                className="sway_Y__animation"
                src="/assets/images/shape/service-bg-shape.png"
                alt="shape"
              />
            </div>
            <div className="container">
              <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
                <div className="section-header">
                  <h5
                    className="wow fadeInLeft"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <img
                      className="me-1"
                      src="/assets/images/icon/section-title.png"
                      alt="icon"
                    />
                    What We OFFER
                  </h5>
                  <h2
                    className="wow fadeInLeft"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    Excellent Services
                  </h2>
                </div>
                <Link
                  to="/services"
                  className="btn-one wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  View All Services{" "}
                  <i className="fa-regular fa-arrow-right-long" />
                </Link>
              </div>
              <div className="row g-4">
                <div
                  className="col-lg-4 col-md-6 wow bounceInUp"
                  data-wow-delay="00ms"
                  data-wow-duration="1000ms"
                >
                  <div className="service__item">
                    <div className="service-shape">
                      <img
                        src="/assets/images/shape/service-item-shape.png"
                        alt="shape"
                      />
                    </div>
                    <div className="service__icon">
                      <img
                        src="/assets/images/icon/service-icon1.png"
                        alt="icon"
                      />
                    </div>
                    <h4>
                      <a >Digital Marketing</a>
                    </h4>
                    <p>
                      We combine strategy, creativity, and technology to help
                      you reach the right audience and achieve measurable
                      growth.
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow bounceInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1000ms"
                >
                  <div className="service__item active">
                    <div className="service-shape">
                      <img
                        src="/assets/images/shape/service-item-shape.png"
                        alt="shape"
                      />
                    </div>
                    <div className="service__icon">
                      <img
                        src="/assets/images/icon/service-icon2.png"
                        alt="icon"
                      />
                    </div>
                    <h4>
                      <a >App Development</a>
                    </h4>
                    <p>
                      We create intuitive, scalable, and high-performance mobile
                      applications to enhance user experiences.
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 wow bounceInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1000ms"
                >
                  <div className="service__item">
                    <div className="service-shape">
                      <img
                        src="/assets/images/shape/service-item-shape.png"
                        alt="shape"
                      />
                    </div>
                    <div className="service__icon">
                      <img
                        src="/assets/images/icon/service-icon3.png"
                        alt="icon"
                      />
                    </div>
                    <h4>
                      <a >Web Development</a>
                    </h4>
                    <p>
                      We design and build responsive, user-friendly websites
                      that deliver exceptional performance and drive business
                      success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Service area end here */}
          {/* About area start here */}
          <section className="about-area sub-bg pt-60">
            <div
              className="about__shape wow slideInLeft"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <img src="/assets/images/shape/about-line.png" alt="shape" />
            </div>
            <div className="container">
              <div className="row g-4">
                <div
                  className="col-xl-6 wow fadeInRight"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="about__left-item">
                    <div className="image big-image">
                      <img
                        src="/assets/images/about/about-image1.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="image sm-image">
                      {/* <div className="video__btn-wrp">
                        <div className="video-btn video-pulse">
                          <a
                            className="video-popup"
                            href="https://www.youtube.com/watch?v=iVqz_4M5mA0"
                          >
                            <i className="fa-solid fa-play" />
                          </a>
                        </div>
                      </div> */}
                      <img
                        src="/assets/images/about/about-image2.png"
                        alt="image"
                      />
                    </div>
                    <div className="circle-shape">
                      <img
                        src="/assets/images/shape/about-circle.png"
                        alt="shape"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="section-header mb-40">
                    <h5
                      className="wow fadeInUp"
                      data-wow-delay="00ms"
                      data-wow-duration="1500ms"
                    >
                      <img
                        className="me-1"
                        src="/assets/images/icon/section-title.png"
                        alt="icon"
                      />
                      ABOUT Pixelmind Solutions
                    </h5>
                    <h2
                      className="wow fadeInUp"
                      data-wow-delay="200ms"
                      data-wow-duration="1500ms"
                    >
                      Our goal is to provide intelligent business solutions.
                    </h2>
                    <p
                      className="wow fadeInUp"
                      data-wow-delay="400ms"
                      data-wow-duration="1500ms"
                    >
                      Pixelmind Solutions is a leading IT services provider,
                      offering innovative solutions in website development,
                      mobile application design, and digital marketing. We are
                      dedicated to helping businesses thrive in the digital
                      world by delivering tailored, high-quality services that
                      enhance user experiences, drive growth, and build a strong
                      online presence.
                    </p>
                  </div>
                  <div
                    className="row g-4 wow fadeInDown"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="col-md-6">
                      <div className="about__right-item">
                        <div className="icon">
                          <img
                            src="/assets/images/icon/about-icon1.png"
                            alt="icon"
                          />
                        </div>
                        <div className="content">
                          <h4 className="mb-1">Best Services</h4>
                          {/* <p>Scelerisque augue the consequat sodales</p> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="about__right-item">
                        <div className="icon">
                          <img
                            src="/assets/images/icon/about-icon2.png"
                            alt="icon"
                          />
                        </div>
                        <div className="content">
                          <h4 className="mb-1">24/7 Call Support</h4>
                          {/* <p>Scelerisque augue the consequat sodales</p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="about__info mt-50 wow fadeInDown"
                    data-wow-delay="400ms"
                    data-wow-duration="1500ms"
                  >
                    <Link to="/about" className="btn-one">
                      Explore More{" "}
                      <i className="fa-regular fa-arrow-right-long" />
                    </Link>
                    {/* <div className="d-flex gap-2 align-items-center">
                      <img
                        src="/assets/images/about/about-info.png"
                        alt="image"
                      />
                      <div className="info">
                        <h5>Ronald Richards</h5>
                        <span className="sm-font">Co, Founder</span>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* About area end here */}
          {/* Counter area start here */}
          <section className="counter-area pt-60 pb-60">
            <div className="container">
              <div className="counter__wrp gradient-bg position-relative overflow-hidden p-4 p-md-5">
                {/* Background Shape */}
                <div
                  className="counter__shape wow slideInRight"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <img
                    src="/assets/images/shape/counnter-bg-shape.png"
                    alt="shape"
                    className="img-fluid"
                  />
                </div>

                {/* Section Title */}
                <h2 className="text-light text-center mb-4 mb-md-5">
                  Our Achievements
                </h2>

                <div className="row g-4 justify-content-center">
                  {/* Counter Item 1 */}
                  <div
                    className="col-6 col-sm-6 col-md-4 col-lg-3 wow bounceInUp"
                    data-wow-delay="00ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="counter__item h-100">
                      <div className="d-flex flex-column flex-sm-row align-items-center text-center text-sm-start">
                        <div className="icon-bg rounded-circle bg-white d-flex align-items-center justify-content-center me-sm-3 me-md-4 mb-3 mb-sm-0 mx-auto mx-sm-0">
                          <img
                            src="/assets/images/icon/counter-icon1.png"
                            alt="icon"
                            className="img-fluid"
                            style={{ maxWidth: '40px' }}
                          />
                        </div>
                        <div className="content">
                          <h3 className="mb-0">
                            <span className="count">499</span>+
                          </h3>
                          <p className="text-white mb-0">Satisfied Clients</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Counter Item 2 */}
                  <div
                    className="col-6 col-sm-6 col-md-4 col-lg-3 wow bounceInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="counter__item h-100">
                      <div className="d-flex flex-column flex-sm-row align-items-center text-center text-sm-start">
                        <div className="icon-bg rounded-circle bg-white d-flex align-items-center justify-content-center me-sm-3 me-md-4 mb-3 mb-sm-0 mx-auto mx-sm-0">
                          <img
                            src="/assets/images/icon/counter-icon2.png"
                            alt="icon"
                            className="img-fluid"
                            style={{ maxWidth: '40px' }}
                          />
                        </div>
                        <div className="content">
                          <h3 className="mb-0">
                            <span className="count">25</span>+
                          </h3>
                          <p className="text-white mb-0">Finished Projects</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Counter Item 3 */}
                  <div
                    className="col-6 col-sm-6 col-md-4 col-lg-3 wow bounceInUp"
                    data-wow-delay="400ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="counter__item h-100">
                      <div className="d-flex flex-column flex-sm-row align-items-center text-center text-sm-start">
                        <div className="icon-bg rounded-circle bg-white d-flex align-items-center justify-content-center me-sm-3 me-md-4 mb-3 mb-sm-0 mx-auto mx-sm-0">
                          <img
                            src="/assets/images/icon/counter-icon3.png"
                            alt="icon"
                            className="img-fluid"
                            style={{ maxWidth: '40px' }}
                          />
                        </div>
                        <div className="content">
                          <h3 className="mb-0">
                            <span className="count">50</span>+
                          </h3>
                          <p className="text-white mb-0">Skilled Experts</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Counter Item 4 */}
                  <div
                    className="col-6 col-sm-6 col-md-4 col-lg-3 wow bounceInUp"
                    data-wow-delay="800ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="counter__item h-100">
                      <div className="d-flex flex-column flex-sm-row align-items-center text-center text-sm-start">
                        <div className="icon-bg rounded-circle bg-white d-flex align-items-center justify-content-center me-sm-3 me-md-4 mb-3 mb-sm-0 mx-auto mx-sm-0">
                          <img
                            src="/assets/images/icon/counter-icon4.png"
                            alt="icon"
                            className="img-fluid"
                            style={{ maxWidth: '40px' }}
                          />
                        </div>
                        <div className="content">
                          <h3 className="mb-0">
                            <span className="count">30</span>+
                          </h3>
                          <p className="text-white mb-0">Media Posts</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Styles */}
            <style jsx>{`
    .counter-area {
      position: relative;
    }
    .gradient-bg {
      background: linear-gradient(135deg, #06cabc 0%, #2e77b0 100%);
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
    .counter__item {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(5px);
      border-radius: 10px;
      padding: 15px;
      transition: all 0.3s ease;
    }
    .counter__item:hover {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
    .icon-bg {
      width: 50px;
      height: 50px;
      padding: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
    .counter__item h3 {
      color: white;
      font-size: 24px;
      font-weight: 700;
    }
    .counter__item p {
      font-size: 13px;
      opacity: 0.9;
    }
    .counter__shape {
      position: absolute;
      right: 0;
      top: 0;
      z-index: 0;
    }
    .counter__shape img {
      opacity: 0.2;
      max-width: 150px;
    }

    /* Small devices (landscape phones, 576px and up) */
    @media (min-width: 576px) {
      .counter__item {
        padding: 20px;
      }
      .icon-bg {
        width: 60px;
        height: 60px;
        padding: 10px;
      }
      .counter__item h3 {
        font-size: 28px;
      }
      .counter__item p {
        font-size: 14px;
      }
      .counter__shape img {
        max-width: 180px;
      }
    }

    /* Medium devices (tablets, 768px and up) */
    @media (min-width: 768px) {
      .counter__shape img {
        max-width: 220px;
      }
      .counter__item h3 {
        font-size: 30px;
      }
    }

    /* Large devices (desktops, 992px and up) */
    @media (min-width: 992px) {
      .counter__shape img {
        max-width: 280px;
      }
      .counter__item h3 {
        font-size: 32px;
      }
      .counter__item p {
        font-size: 15px;
      }
    }

    /* X-Large devices (large desktops, 1200px and up) */
    @media (min-width: 1200px) {
      .counter__shape img {
        max-width: 350px;
      }
      .icon-bg {
        width: 70px;
        height: 70px;
        padding: 15px;
      }
    }

    /* XX-Large devices (larger desktops, 1400px and up) */
    @media (min-width: 1400px) {
      .counter__shape img {
        max-width: 400px;
      }
    }
  `}</style>
          </section>
          {/* Counter area end here */}
          {/* Cause area start here */}
          {/* <section className="case-area pt-60 pb-60">
            <div className="container">
              <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
                <div className="section-header">
                  <h5
                    className="wow fadeInLeft"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <img
                      className="me-1"
                      src="/assets/images/icon/section-title.png"
                      alt="icon"
                    />
                    FROM OUR CASE studies
                  </h5>
                  <h2
                    className="wow fadeInLeft"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    We Delivered Best Solution
                  </h2>
                </div>
                <a
                  href="case.html"
                  className="btn-one wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  view All Case <i className="fa-regular fa-arrow-right-long" />
                </a>
              </div>
            </div>
            <div className="swiper case__slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="case__item">
                    <div className="image case__image">
                      <img
                        src="/assets/images/case/case-image1.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="case__content">
                      <span className="primary-color sm-font">Solution</span>
                      <h3>
                        <a
                          href="case-details.html"
                          className="text-white primary-hover"
                        >
                          IT Management
                        </a>
                      </h3>
                    </div>
                    <a href="case-details.html" className="case__btn">
                      <i className="fa-regular fa-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="case__item">
                    <div className="image case__image">
                      <img
                        src="/assets/images/case/case-image2.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="case__content">
                      <span className="primary-color sm-font">Technology</span>
                      <h3>
                        <a
                          href="case-details.html"
                          className="text-white primary-hover"
                        >
                          Platform Integration
                        </a>
                      </h3>
                    </div>
                    <a href="case-details.html" className="case__btn">
                      <i className="fa-regular fa-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="case__item">
                    <div className="image case__image">
                      <img
                        src="/assets/images/case/case-image3.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="case__content">
                      <span className="primary-color sm-font">Solution</span>
                      <h3>
                        <a
                          href="case-details.html"
                          className="text-white primary-hover"
                        >
                          Web Development
                        </a>
                      </h3>
                    </div>
                    <a href="case-details.html" className="case__btn">
                      <i className="fa-regular fa-arrow-right" />
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="case__item">
                    <div className="image case__image">
                      <img
                        src="/assets/images/case/case-image4.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="case__content">
                      <span className="primary-color sm-font">Security</span>
                      <h3>
                        <a
                          href="case-details.html"
                          className="text-white primary-hover"
                        >
                          Network Security
                        </a>
                      </h3>
                    </div>
                    <a href="case-details.html" className="case__btn">
                      <i className="fa-regular fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="mt-60 text-center wow fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="dot case__dot" />
            </div>
          </section> */}
          {/* Cause area end here */}
          {/* Offer area start here */}
          <section className="offer-area secondary-bg pt-60 pb-60">
            <div
              className="offer__shadow wow fadeIn"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <img
                src="/assets/images/shape/offer-shadow-shape.png"
                alt="shadow"
              />
            </div>
            <div className="offer__shape-left">
              <img
                className="wow fadeInUpBig"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
                src="/assets/images/shape/offer-bg-shape-left.png"
                alt="shape"
              />
            </div>
            <div className="offer__shape-right">
              <img
                className="wow fadeInDownBig"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
                src="/assets/images/shape/offer-bg-shape-right.png"
                alt="shape"
              />
            </div>
            <div className="container">
              <div className="d-flex gap-4 flex-wrap align-items-center justify-content-between mb-95">
                <div className="section-header">
                  <h5
                    className="wow fadeInLeft"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <img
                      className="me-1"
                      src="/assets/images/icon/section-title.png"
                      alt="icon"
                    />
                    Our offering
                  </h5>
                  <h2
                    className="text-white wow fadeInLeft"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    Boost and Lead With <br /> Technology Trends
                  </h2>
                </div>
                {/* <a
                  href="pricing.html"
                  className="btn-one wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  Explore More <i className="fa-regular fa-arrow-right-long" />
                </a> */}
              </div>
              <div className="row g-4">
                <div
                  className="col-lg-2 col-md-4 col-sm-6 wow bounceInUp"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="offer__item">
                    <div className="shape-top">
                      <img
                        src="/assets/images/shape/offter-item-shape-top.png"
                        alt="shape"
                      />
                    </div>
                    <div className="shape-bottom">
                      <img
                        src="/assets/images/shape/offter-item-shape-bottom.png"
                        alt="shape"
                      />
                    </div>
                    <div className="offer__icon">
                      <svg
                        width={36}
                        height={36}
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 0C10.3961 0 0 5.74724 0 18C0 29.9409 9.99921 36 18 36C31.7268 36 36 23.974 36 18C36 9.18425 29.2535 0 18 0ZM13.826 1.6937C11.948 3.29528 10.389 5.94567 9.38268 9.23386C8.07874 8.46142 6.8811 7.50472 5.81811 6.39213C8.01496 4.08898 10.7929 2.47323 13.826 1.6937ZM5.04567 7.25669C6.23622 8.49685 7.58976 9.55276 9.06378 10.389C8.51102 12.5362 8.18504 14.9173 8.14252 17.4189H1.17638C1.30394 13.6843 2.66457 10.1197 5.04567 7.25669ZM5.04567 28.7433C2.65748 25.8803 1.30394 22.3158 1.17638 18.5811H8.14252C8.18504 21.0898 8.51102 23.4638 9.06378 25.611C7.59685 26.4543 6.24331 27.5032 5.04567 28.7433ZM5.81811 29.615C6.8811 28.5024 8.07874 27.5457 9.38268 26.7732C10.389 30.0543 11.948 32.7118 13.826 34.3134C10.7929 33.5268 8.01496 31.911 5.81811 29.615ZM17.4189 34.7953C14.4 34.4126 11.7992 31.0394 10.3961 26.2063C12.5646 25.1079 14.9598 24.4913 17.4189 24.3992V34.7953ZM17.4189 23.2441C14.8535 23.3291 12.3591 23.9598 10.0984 25.0654C9.62362 23.0811 9.34016 20.8913 9.29764 18.5811H17.4189V23.2441ZM17.4189 17.4189H9.29764C9.34016 15.1087 9.62362 12.9189 10.0984 10.9346C12.3661 12.0402 14.8606 12.6709 17.4189 12.7559V17.4189ZM17.4189 11.6008C14.9528 11.5157 12.5646 10.8921 10.3961 9.7937C11.7992 4.95354 14.4 1.5874 17.4189 1.20472V11.6008ZM30.9543 7.25669C33.3354 10.1197 34.6961 13.6843 34.8236 17.4189H27.8646C27.8221 14.9102 27.4961 12.5362 26.9433 10.389C28.4102 9.54567 29.7638 8.49685 30.9543 7.25669ZM30.1819 6.38504C29.1189 7.49764 27.9213 8.45433 26.6173 9.22677C25.611 5.94567 24.052 3.29528 22.174 1.68661C25.2071 2.47323 27.985 4.08898 30.1819 6.38504ZM18.5811 1.20472C21.6 1.5874 24.2008 4.96063 25.6039 9.7937C23.4354 10.8921 21.0472 11.5087 18.5811 11.6008V1.20472ZM18.5811 12.7559C21.1465 12.6709 23.6409 12.0402 25.9016 10.9346C26.3764 12.9189 26.6598 15.1087 26.7024 17.4189H18.5811V12.7559ZM18.5811 18.5811H26.7024C26.6598 20.8913 26.3764 23.0811 25.9016 25.0654C23.6195 23.9424 21.1233 23.3213 18.5811 23.2441V18.5811ZM18.5811 34.7953V24.3992C21.0472 24.4843 23.4354 25.1079 25.6039 26.2063C24.2008 31.0465 21.6 34.4126 18.5811 34.7953ZM22.174 34.3063C24.052 32.7047 25.611 30.0543 26.6173 26.7661C27.9213 27.5386 29.1189 28.4953 30.1819 29.6079C27.985 31.911 25.2071 33.5268 22.174 34.3063ZM30.9543 28.7433C29.7638 27.5032 28.4102 26.4543 26.9433 25.611C27.4961 23.4638 27.8221 21.0827 27.8646 18.5811H34.8236C34.6961 22.3158 33.3354 25.8803 30.9543 28.7433Z"
                          fill="#06cabc"
                        />
                      </svg>
                    </div>
                    <h4 className="text-white mt-20">Website</h4>
                  </div>
                </div>
                <div
                  className="col-lg-2 col-md-4 col-sm-6 wow bounceInUp"
                  data-wow-delay="100ms"
                  data-wow-duration="1500ms"
                >
                  <div className="offer__item">
                    <div className="shape-top">
                      <img
                        src="/assets/images/shape/offter-item-shape-top.png"
                        alt="shape"
                      />
                    </div>
                    <div className="shape-bottom">
                      <img
                        src="/assets/images/shape/offter-item-shape-bottom.png"
                        alt="shape"
                      />
                    </div>
                    <div className="offer__icon">
                      <svg
                        width={36}
                        height={36}
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.3329 3.58535L23.91 0.956761C23.9526 0.885641 23.9809 0.806813 23.9931 0.724776C24.0053 0.64274 24.0012 0.559103 23.9811 0.47864C23.961 0.398177 23.9252 0.322464 23.8758 0.255824C23.8265 0.189184 23.7644 0.132922 23.6933 0.0902496C23.6222 0.0475777 23.5434 0.0193317 23.4613 0.00712437C23.3793 -0.00508296 23.2957 -0.00101255 23.2152 0.0191032C23.1347 0.039219 23.059 0.0749861 22.9924 0.124362C22.9257 0.173739 22.8695 0.235758 22.8268 0.306877L21.1626 3.08072C20.1717 2.72831 19.1107 2.52621 18.0004 2.52621C16.8901 2.52621 15.829 2.72831 14.8381 3.08072L13.1739 0.306877C13.0878 0.163244 12.948 0.0597288 12.7855 0.0191032C12.623 -0.0215224 12.4511 0.00406979 12.3074 0.0902497C12.1638 0.17643 12.0603 0.316138 12.0196 0.47864C11.979 0.641142 12.0046 0.813128 12.0908 0.956761L13.6678 3.58535C10.6192 5.16111 8.52686 8.33789 8.52686 12.0004C8.52686 12.1679 8.59339 12.3285 8.71184 12.4469C8.83028 12.5654 8.99092 12.6319 9.15842 12.6319H26.8423C27.0098 12.6319 27.1705 12.5654 27.2889 12.4469C27.4074 12.3285 27.4739 12.1679 27.4739 12.0004C27.4733 8.33853 25.3815 5.16174 22.3329 3.58535ZM9.81399 11.3688C10.1374 7.13539 13.6855 3.78997 18.0004 3.78997C22.3152 3.78997 25.8634 7.13539 26.1868 11.3688H9.81399Z"
                          fill="#06cabc"
                        />
                        <path
                          d="M22.4068 7.177H21.5744C21.464 7.177 21.3581 7.22085 21.2801 7.2989C21.202 7.37696 21.1582 7.48282 21.1582 7.5932V8.42561C21.1582 8.6555 21.3445 8.84181 21.5744 8.84181H22.4074C22.5178 8.84181 22.6237 8.79796 22.7017 8.71991C22.7798 8.64186 22.8236 8.536 22.8236 8.42561V7.5932C22.8234 7.48276 22.7795 7.3769 22.7013 7.29887C22.6231 7.22083 22.5172 7.177 22.4068 7.177ZM14.4257 7.177H13.5926C13.4822 7.177 13.3764 7.22085 13.2983 7.2989C13.2203 7.37696 13.1764 7.48282 13.1764 7.5932V8.42561C13.1764 8.6555 13.3627 8.84181 13.5926 8.84181H14.4257C14.536 8.84181 14.6419 8.79796 14.72 8.71991C14.798 8.64186 14.8419 8.536 14.8419 8.42561V7.5932C14.8419 7.48282 14.798 7.37696 14.72 7.2989C14.6419 7.22085 14.536 7.177 14.4257 7.177ZM26.8416 13.2634H9.15774C8.99024 13.2634 8.8296 13.33 8.71116 13.4484C8.59272 13.5668 8.52618 13.7275 8.52618 13.895V26.6343C8.52751 27.4433 8.8497 28.2188 9.42205 28.7905C9.9944 29.3623 10.7702 29.6837 11.5792 29.6842H12.3156V33.4774C12.3156 34.8681 13.4486 35.9999 14.8419 35.9999C16.2351 35.9999 17.3681 34.8681 17.3681 33.4774V29.6842H18.6313V33.4774C18.6313 34.8681 19.7643 35.9999 21.1575 35.9999C22.5508 35.9999 23.6838 34.8681 23.6838 33.4774V29.6842H24.4202C25.2293 29.6839 26.0051 29.3625 26.5775 28.7907C27.1499 28.2189 27.472 27.4434 27.4732 26.6343V13.895C27.4732 13.7275 27.4067 13.5668 27.2882 13.4484C27.1698 13.33 27.0091 13.2634 26.8416 13.2634ZM26.2101 26.6343C26.2092 27.1085 26.0203 27.5629 25.6847 27.8979C25.3491 28.2329 24.8944 28.4211 24.4202 28.421H23.0522C22.8847 28.421 22.7241 28.4876 22.6057 28.606C22.4872 28.7245 22.4207 28.8851 22.4207 29.0526V33.4774C22.4207 33.8124 22.2876 34.1337 22.0507 34.3706C21.8138 34.6074 21.4925 34.7405 21.1575 34.7405C20.8225 34.7405 20.5012 34.6074 20.2644 34.3706C20.0275 34.1337 19.8944 33.8124 19.8944 33.4774V29.0526C19.8944 28.8851 19.8279 28.7245 19.7094 28.606C19.591 28.4876 19.4303 28.421 19.2628 28.421H16.7366C16.5691 28.421 16.4084 28.4876 16.29 28.606C16.1715 28.7245 16.105 28.8851 16.105 29.0526V33.4774C16.105 33.8124 15.9719 34.1337 15.735 34.3706C15.4981 34.6074 15.1769 34.7405 14.8419 34.7405C14.5069 34.7405 14.1856 34.6074 13.9487 34.3706C13.7118 34.1337 13.5787 33.8124 13.5787 33.4774V29.0526C13.5787 28.8851 13.5122 28.7245 13.3937 28.606C13.2753 28.4876 13.1147 28.421 12.9472 28.421H11.5798C11.1056 28.4209 10.6509 28.2327 10.3153 27.8978C9.97962 27.5629 9.79048 27.1085 9.78931 26.6343V14.5266H26.2101V26.6343ZM30.3153 13.2634C29.0963 13.2634 28.1048 14.2562 28.1048 15.4764V24.3133C28.1048 25.5335 29.0963 26.5263 30.3153 26.5263C31.5342 26.5263 32.5258 25.5335 32.5258 24.3133V15.4764C32.5254 14.89 32.2925 14.3277 31.8781 13.9129C31.4637 13.498 30.9017 13.2644 30.3153 13.2634ZM31.2626 24.3133C31.2626 24.8369 30.8376 25.2632 30.3153 25.2632C29.793 25.2632 29.3679 24.8369 29.3679 24.3133V15.4764C29.3679 14.9529 29.793 14.5266 30.3153 14.5266C30.8376 14.5266 31.2626 14.9529 31.2626 15.4764V24.3133ZM5.68412 13.2634C4.46519 13.2634 3.47363 14.2562 3.47363 15.4764V24.3133C3.47363 25.5335 4.46519 26.5263 5.68412 26.5263C6.90305 26.5263 7.89461 25.5335 7.89461 24.3133V15.4764C7.89427 14.89 7.66136 14.3277 7.24696 13.9129C6.83255 13.498 6.27051 13.2644 5.68412 13.2634ZM6.63147 24.3133C6.63147 24.8369 6.20643 25.2632 5.68412 25.2632C5.16181 25.2632 4.73677 24.8369 4.73677 24.3133V15.4764C4.73677 14.9529 5.16181 14.5266 5.68412 14.5266C6.20643 14.5266 6.63147 14.9529 6.63147 15.4764V24.3133Z"
                          fill="#06cabc"
                        />
                      </svg>
                    </div>
                    <h4 className="text-white mt-20">Android</h4>
                  </div>
                </div>
                <div
                  className="col-lg-2 col-md-4 col-sm-6 wow bounceInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="offer__item">
                    <div className="shape-top">
                      <img
                        src="/assets/images/shape/offter-item-shape-top.png"
                        alt="shape"
                      />
                    </div>
                    <div className="shape-bottom">
                      <img
                        src="/assets/images/shape/offter-item-shape-bottom.png"
                        alt="shape"
                      />
                    </div>
                    <div className="offer__icon">
                      <svg
                        width={36}
                        height={36}
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_602_122)">
                          <path
                            d="M25.368 0.727224L25.3301 0L24.6063 0.0778922C24.5353 0.0854747 17.5395 0.928503 17.0597 8.75012L17.0115 9.53318L17.7945 9.48011C17.8745 9.47459 25.7981 8.84249 25.368 0.727224ZM24.0025 1.60058C23.8708 6.3141 20.2037 7.62517 18.5204 7.97878C19.1614 3.39831 22.4832 2.00245 24.0025 1.60058Z"
                            fill="#06cabc"
                          />
                          <path
                            d="M32.1109 25.8609L31.6704 25.7182C29.0048 24.8566 27.2147 22.415 27.2147 19.6426C27.2147 17.1763 28.6092 14.9705 30.8549 13.8855L31.525 13.5622L31.1514 12.9191C30.9914 12.6434 29.4963 10.2011 26.3379 9.39256C23.8329 8.7515 21.0164 9.31881 17.9634 11.0793C16.671 10.2949 12.3779 8.03393 8.9624 10.3004C8.29377 10.6699 1.20696 14.9153 4.89546 26.3703C5.00369 26.6267 7.57551 32.652 10.6188 34.9088C11.4398 35.6933 13.5394 36.6735 15.9389 35.0377C16.3546 34.8661 19.136 33.7956 20.9006 35.0494C21.552 35.4954 22.6894 36.0007 23.8908 36.0007C24.8021 36.0007 25.7499 35.7105 26.5509 34.8833C26.9245 34.56 30.3373 31.514 32.1109 26.6888L32.1626 26.5482L32.1109 25.8609ZM25.63 33.8556L25.5769 33.9059C24.0652 35.4934 21.7733 33.9748 21.6885 33.9183C20.7869 33.2772 19.7426 33.0684 18.763 33.0684C16.9853 33.0684 15.4219 33.757 15.322 33.8018L15.2096 33.8652C13.1286 35.3176 11.7038 34.0396 11.5528 33.8942L11.4715 33.8245C8.71908 31.8173 6.1893 25.8926 6.18586 25.8906C2.73378 15.1593 9.34704 11.6494 9.62828 11.5067L9.7041 11.4619C12.9073 9.31122 17.5119 12.4242 17.5574 12.4552L17.9248 12.7075L18.3053 12.4779C21.1729 10.7443 23.7605 10.1549 25.996 10.7278C27.8171 11.1937 28.9779 12.3318 29.5459 13.0314C27.2388 14.4452 25.8368 16.9123 25.8368 19.6426C25.8368 22.7831 27.722 25.5735 30.5944 26.7873C28.8263 31.1031 25.6637 33.8273 25.63 33.8556Z"
                            fill="#06cabc"
                          />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={36} height={36} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <h4 className="text-white mt-20">IOS</h4>
                  </div>
                </div>
                {/* <div
                  className="col-lg-2 col-md-4 col-sm-6 wow bounceInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="offer__item">
                    <div className="shape-top">
                      <img
                        src="/assets/images/shape/offter-item-shape-top.png"
                        alt="shape"
                      />
                    </div>
                    <div className="shape-bottom">
                      <img
                        src="/assets/images/shape/offter-item-shape-bottom.png"
                        alt="shape"
                      />
                    </div>
                    <div className="offer__icon">
                      <svg
                        width={26}
                        height={36}
                        viewBox="0 0 26 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.4282 8.14719H4.2927C3.43931 8.14719 2.74512 8.84146 2.74512 9.69477V26.3054C2.74512 27.1587 3.43938 27.853 4.2927 27.853H19.4282C20.2815 27.853 20.9757 27.1587 20.9757 26.3054V22.7743C20.9757 22.4831 20.7397 22.247 20.4484 22.247C20.1571 22.247 19.9211 22.4831 19.9211 22.7743V26.3054C19.9209 26.4361 19.8689 26.5614 19.7765 26.6538C19.6841 26.7462 19.5588 26.7981 19.4282 26.7983H4.2927C4.03788 26.7983 3.82765 26.6039 3.80234 26.3557C3.80065 26.3392 3.7998 16.5812 3.7998 16.5812H19.9211V20.2428C19.9211 20.534 20.1571 20.7701 20.4484 20.7701C20.7397 20.7701 20.9757 20.534 20.9757 20.2428V9.69477C20.9757 8.84146 20.2814 8.14719 19.4282 8.14719ZM3.7998 15.5265V12.9303H5.32924C5.41729 12.9303 5.50395 12.9083 5.58129 12.8662C5.65863 12.8241 5.72419 12.7633 5.772 12.6894L6.32965 11.8273L7.77197 14.2069C7.97679 14.5699 8.55567 14.5287 8.70748 14.1416L9.55235 12.1736L9.96959 12.7984C10.0177 12.8705 10.083 12.9297 10.1595 12.9706C10.236 13.0115 10.3214 13.0329 10.4081 13.0329H14.7785L15.9774 14.2261C16.291 14.5382 16.8011 14.5381 17.1147 14.2261L18.4531 12.8941C18.8595 12.4895 18.9738 11.8887 18.7444 11.3632C18.6104 11.0533 18.3651 10.8049 18.057 10.6669C17.7488 10.5289 17.4001 10.5114 17.0797 10.6178L16.5461 10.7929L16.0126 10.6178C15.6922 10.5113 15.3435 10.5288 15.0353 10.6668C14.7271 10.8048 14.4818 11.0532 14.3478 11.3631C14.2629 11.5567 14.2234 11.767 14.2324 11.9782H10.6901L9.88978 10.7795C9.6754 10.435 9.11473 10.4866 8.96665 10.8643L8.14266 12.7837L6.79512 10.5605C6.60963 10.2317 6.09558 10.2256 5.90138 10.5474L5.0423 11.8755H3.7998V9.69477C3.79995 9.56409 3.85193 9.43881 3.94433 9.34641C4.03674 9.254 4.16202 9.20203 4.2927 9.20188H19.4282C19.5588 9.20203 19.6841 9.254 19.7765 9.34641C19.8689 9.43881 19.9209 9.56409 19.9211 9.69477V15.5265H3.7998ZM15.3144 11.7854C15.3442 11.7167 15.3986 11.6616 15.467 11.631C15.5354 11.6004 15.6127 11.5965 15.6838 11.62L16.2947 11.8205C16.4594 11.8745 16.6332 11.8745 16.7974 11.8205L17.4086 11.62C17.4797 11.5964 17.557 11.6003 17.6254 11.6309C17.6937 11.6615 17.7481 11.7166 17.7779 11.7854C17.8044 11.8454 17.8121 11.9122 17.7998 11.9767C17.7875 12.0412 17.7559 12.1005 17.7091 12.1466L16.5461 13.304L15.4495 12.2127C15.3374 12.0956 15.2315 11.9559 15.3144 11.7854ZM13.0123 2.48169H10.7086C10.5687 2.48169 10.4346 2.53725 10.3357 2.63614C10.2368 2.73504 10.1812 2.86917 10.1812 3.00903C10.1812 3.14889 10.2368 3.28303 10.3357 3.38192C10.4346 3.48082 10.5687 3.53638 10.7086 3.53638H13.0122C13.3035 3.53638 13.5396 3.30027 13.5396 3.00903C13.5396 2.7178 13.3035 2.48169 13.0123 2.48169Z"
                          fill="#06cabc"
                        />
                        <path
                          d="M8.24232 24.3816C7.5515 24.3979 6.96158 23.8925 6.86659 23.2118C6.84726 23.0732 6.77369 22.9481 6.66207 22.8638C6.55045 22.7795 6.40992 22.743 6.27139 22.7623C6.13287 22.7817 6.00769 22.8552 5.92341 22.9669C5.83912 23.0785 5.80263 23.219 5.82196 23.3575C5.98853 24.5509 7.01221 25.4366 8.2142 25.4365C8.23051 25.4365 8.24703 25.4364 8.26349 25.436C9.52293 25.4107 10.5605 24.4061 10.6258 23.1491C10.6605 22.4797 10.4259 21.8439 9.96533 21.3588C9.51118 20.8804 8.87275 20.6061 8.21385 20.6061C7.97197 20.6061 7.76975 20.6207 7.59025 20.6486L7.83543 19.1687H9.70743C9.84729 19.1687 9.98142 19.1132 10.0803 19.0143C10.1792 18.9154 10.2348 18.7813 10.2348 18.6414C10.2348 18.5015 10.1792 18.3674 10.0803 18.2685C9.98142 18.1696 9.84729 18.1141 9.70743 18.1141H7.38824C7.26332 18.1141 7.14246 18.1584 7.04719 18.2392C6.95192 18.32 6.88841 18.432 6.868 18.5552L6.40857 21.3282C6.32497 21.7729 6.85042 22.1033 7.22532 21.8573C7.48921 21.7386 7.70057 21.6608 8.21378 21.6608C8.5903 21.6608 8.94067 21.8114 9.2004 22.0849C9.45985 22.3583 9.59197 22.7168 9.57243 23.0944C9.53586 23.8019 8.95157 24.3673 8.24232 24.3816ZM15.7025 19.0588C15.9938 19.0588 16.2298 18.8227 16.2298 18.5315C16.2298 18.2403 15.9938 18.0042 15.7025 18.0042H13.001C12.7097 18.0042 12.4737 18.2403 12.4737 18.5315C12.4737 18.8227 12.7097 19.0588 13.001 19.0588H15.7025ZM18.4601 21.5056C18.4601 20.6791 17.7877 20.0067 16.9612 20.0067H13.9725C13.1461 20.0067 12.4737 20.6791 12.4737 21.5056C12.4737 22.332 13.1461 23.0044 13.9725 23.0044H16.9612C17.7877 23.0044 18.4601 22.332 18.4601 21.5056ZM13.5283 21.5056C13.5285 21.3878 13.5753 21.2749 13.6586 21.1917C13.7418 21.1084 13.8547 21.0616 13.9724 21.0614H16.9611C17.206 21.0614 17.4053 21.2607 17.4053 21.5056C17.4053 21.7505 17.206 21.9497 16.9611 21.9497H13.9724C13.8547 21.9496 13.7418 21.9027 13.6586 21.8195C13.5753 21.7362 13.5285 21.6233 13.5283 21.5056Z"
                          fill="#06cabc"
                        />
                        <path
                          d="M23.6774 11.9782H23.0853V9.28238C23.0853 7.59677 21.7931 6.20775 20.1474 6.05271L19.2545 2.08153C18.9789 0.855914 17.9092 0 16.653 0H7.0679C5.81176 0 4.74196 0.855914 4.4664 2.08153L3.57351 6.05271C1.92777 6.20775 0.635498 7.59677 0.635498 9.28238V26.7176C0.635498 28.5067 2.09104 29.9622 3.88007 29.9622H19.063L18.2255 33.6871C18.0589 34.428 17.4123 34.9453 16.653 34.9453H7.0679C6.30859 34.9453 5.662 34.428 5.49543 33.6871L5.0834 31.8545C5.0682 31.7869 5.03985 31.723 4.99996 31.6664C4.96007 31.6098 4.90941 31.5616 4.85089 31.5246C4.79237 31.4875 4.72713 31.4624 4.65889 31.4506C4.59065 31.4388 4.52075 31.4405 4.45319 31.4557C4.31674 31.4864 4.19807 31.57 4.12328 31.6882C4.04849 31.8064 4.0237 31.9494 4.05437 32.0858L4.4664 33.9185C4.74196 35.1441 5.81169 36 7.0679 36H16.653C17.9092 36 18.9789 35.1441 19.2545 33.9185L20.1474 29.9473C21.7931 29.7922 23.0853 28.4032 23.0853 26.7176V18.4657H23.6774C24.6077 18.4657 25.3646 17.7088 25.3646 16.7785V13.6654C25.3646 12.7351 24.6078 11.9782 23.6774 11.9782ZM5.49543 2.31286C5.66193 1.57205 6.30859 1.05469 7.0679 1.05469H16.653C17.4123 1.05469 18.0589 1.57205 18.2255 2.31286L19.063 6.0378H4.65794L5.49543 2.31286ZM22.0306 26.7176C22.0306 27.9251 21.0482 28.9075 19.8407 28.9075H3.88014C2.67266 28.9075 1.69026 27.9251 1.69026 26.7176V9.28238C1.69026 8.0749 2.67266 7.09249 3.88014 7.09249H19.8408C21.0483 7.09249 22.0307 8.0749 22.0307 9.28238V26.7176H22.0306ZM24.3099 16.7785C24.3099 17.1272 24.0262 17.411 23.6774 17.411H23.0853V13.0328H23.6774C24.0262 13.0328 24.3099 13.3166 24.3099 13.6654V16.7785Z"
                          fill="#06cabc"
                        />
                        <path
                          d="M13.001 25.4834C13.3181 25.4834 13.5752 25.2263 13.5752 24.9092C13.5752 24.5921 13.3181 24.335 13.001 24.335C12.6839 24.335 12.4268 24.5921 12.4268 24.9092C12.4268 25.2263 12.6839 25.4834 13.001 25.4834Z"
                          fill="#06cabc"
                        />
                        <path
                          d="M15.4668 25.4834C15.784 25.4834 16.0411 25.2263 16.0411 24.9092C16.0411 24.5921 15.784 24.335 15.4668 24.335C15.1497 24.335 14.8926 24.5921 14.8926 24.9092C14.8926 25.2263 15.1497 25.4834 15.4668 25.4834Z"
                          fill="#06cabc"
                        />
                      </svg>
                    </div>
                    <h4 className="text-white mt-20">Watch</h4>
                  </div>
                </div>
                <div
                  className="col-lg-2 col-md-4 col-sm-6 wow bounceInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <div className="offer__item">
                    <div className="shape-top">
                      <img
                        src="/assets/images/shape/offter-item-shape-top.png"
                        alt="shape"
                      />
                    </div>
                    <div className="shape-bottom">
                      <img
                        src="/assets/images/shape/offter-item-shape-bottom.png"
                        alt="shape"
                      />
                    </div>
                    <div className="offer__icon">
                      <svg
                        width={36}
                        height={36}
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_602_155)">
                          <path
                            d="M28.5331 13.0602H33.0025C33.0733 13.0611 33.1434 13.0478 33.209 13.0213C33.2746 12.9948 33.3343 12.9556 33.3846 12.9058C33.4348 12.8561 33.4748 12.7969 33.502 12.7316C33.5293 12.6664 33.5433 12.5964 33.5433 12.5256C33.5433 12.4549 33.5293 12.3849 33.502 12.3196C33.4748 12.2543 33.4348 12.1951 33.3846 12.1454C33.3343 12.0957 33.2746 12.0564 33.209 12.0299C33.1434 12.0034 33.0733 11.9902 33.0025 11.991H28.5331C28.2377 11.991 27.9985 12.2305 27.9985 12.5258C27.9985 12.8211 28.2377 13.0602 28.5331 13.0602ZM28.5331 14.9672H33.0025C33.0733 14.968 33.1434 14.9548 33.209 14.9283C33.2746 14.9018 33.3343 14.8625 33.3846 14.8128C33.4348 14.7631 33.4748 14.7039 33.502 14.6386C33.5293 14.5733 33.5433 14.5033 33.5433 14.4326C33.5433 14.3618 33.5293 14.2918 33.502 14.2265C33.4748 14.1613 33.4348 14.1021 33.3846 14.0523C33.3343 14.0026 33.2746 13.9634 33.209 13.9369C33.1434 13.9104 33.0733 13.8971 33.0025 13.8979H28.5331C28.4629 13.8979 28.3933 13.9117 28.3285 13.9386C28.2636 13.9655 28.2047 14.0048 28.155 14.0545C28.1054 14.1041 28.066 14.163 28.0392 14.2279C28.0123 14.2927 27.9985 14.3623 27.9985 14.4325C27.9985 14.5027 28.0123 14.5722 28.0391 14.6371C28.066 14.702 28.1054 14.7609 28.155 14.8106C28.2046 14.8602 28.2636 14.8996 28.3284 14.9265C28.3933 14.9534 28.4628 14.9672 28.5331 14.9672ZM28.5331 16.8741H33.0025C33.0733 16.8749 33.1434 16.8617 33.209 16.8352C33.2746 16.8087 33.3343 16.7695 33.3846 16.7197C33.4348 16.67 33.4748 16.6108 33.502 16.5455C33.5293 16.4803 33.5433 16.4102 33.5433 16.3395C33.5433 16.2688 33.5293 16.1988 33.502 16.1335C33.4748 16.0682 33.4348 16.009 33.3846 15.9593C33.3343 15.9096 33.2746 15.8703 33.209 15.8438C33.1434 15.8173 33.0733 15.8041 33.0025 15.8049H28.5331C28.4629 15.8049 28.3933 15.8187 28.3285 15.8455C28.2636 15.8724 28.2047 15.9118 28.155 15.9614C28.1054 16.011 28.066 16.07 28.0392 16.1348C28.0123 16.1997 27.9985 16.2692 27.9985 16.3394C27.9985 16.6346 28.2377 16.8741 28.5331 16.8741ZM30.7677 24.2292C30.1758 24.2292 29.6193 24.4599 29.2007 24.8785C28.3364 25.7427 28.3364 27.1485 29.2007 28.0129C29.6327 28.445 30.2002 28.6611 30.7679 28.6611C31.3354 28.6611 31.9028 28.445 32.3351 28.0129C32.7537 27.5943 32.9841 27.0377 32.9841 26.4457C32.9841 25.8535 32.7537 25.2971 32.3351 24.8785C31.9166 24.4599 31.3598 24.2292 30.7677 24.2292ZM29.9569 25.6347C30.0631 25.5278 30.1895 25.443 30.3287 25.3853C30.4679 25.3276 30.6172 25.2981 30.7679 25.2985C30.8849 25.2985 30.9989 25.3163 31.1077 25.3498L29.6729 26.7847C29.5517 26.3914 29.646 25.9453 29.9569 25.6347ZM31.579 27.2568C31.2681 27.5674 30.822 27.6616 30.429 27.5408L31.8635 26.106C31.8976 26.216 31.9149 26.3305 31.9149 26.4457C31.9149 26.752 31.7957 27.0401 31.579 27.2568ZM32.3351 19.7852C31.9166 19.3667 31.3598 19.1362 30.7679 19.1362C30.1758 19.1362 29.6193 19.3667 29.2007 19.7852C28.3366 20.6496 28.3366 22.0556 29.2007 22.9197C29.6327 23.3517 30.2002 23.5679 30.7679 23.5679C31.3354 23.5679 31.9031 23.3517 32.3351 22.9196C32.7537 22.5011 32.9841 21.9446 32.9841 21.3525C32.9841 20.7606 32.7537 20.2039 32.3351 19.7852ZM31.579 20.5414C31.6858 20.6477 31.7705 20.7741 31.8282 20.9133C31.8858 21.0525 31.9153 21.2018 31.9149 21.3525C31.9149 21.4695 31.8973 21.5837 31.8635 21.6922L30.4279 20.2566C30.538 20.2227 30.6525 20.2054 30.7677 20.2055C30.9184 20.205 31.0677 20.2345 31.207 20.2922C31.3462 20.3498 31.4727 20.4346 31.579 20.5414ZM29.9569 22.1638C29.646 21.8529 29.5517 21.4068 29.6728 21.0135L31.1068 22.4475C30.7133 22.5687 30.2675 22.4745 29.9569 22.1638Z"
                            fill="#06cabc"
                          />
                          <path
                            d="M31.3294 6.27253H21.8985C21.8109 5.64497 21.5645 5.05016 21.1827 4.54446L24.8145 0.912619C24.8642 0.86299 24.9035 0.804071 24.9304 0.739226C24.9573 0.67438 24.9711 0.604879 24.9711 0.53469C24.9711 0.464501 24.9573 0.394999 24.9304 0.330154C24.9035 0.265308 24.8642 0.206389 24.8145 0.156761C24.7649 0.107068 24.706 0.067646 24.6411 0.0407487C24.5762 0.0138515 24.5067 6.90847e-06 24.4365 6.90847e-06C24.3662 6.90847e-06 24.2967 0.0138515 24.2318 0.0407487C24.167 0.067646 24.108 0.107068 24.0584 0.156761L20.4261 3.7891C19.0907 2.78694 17.2373 2.78694 15.9022 3.78889L12.2698 0.15655C12.1695 0.0563102 12.0335 0 11.8918 0C11.75 0 11.614 0.0563102 11.5137 0.15655C11.464 0.206173 11.4246 0.265102 11.3977 0.329968C11.3708 0.394834 11.357 0.464365 11.357 0.534584C11.357 0.604804 11.3708 0.674334 11.3977 0.7392C11.4246 0.804066 11.464 0.862996 11.5137 0.912619L15.1455 4.54446C14.7637 5.05022 14.5173 5.64499 14.4295 6.27253H4.6706C2.09506 6.27253 3.5159e-05 8.3677 3.5159e-05 10.9432V22.0572C3.5159e-05 22.3525 0.239238 22.5917 0.534761 22.5917C0.604959 22.5917 0.674474 22.5779 0.739332 22.551C0.804191 22.5242 0.863123 22.4848 0.912761 22.4352C0.962399 22.3855 1.00177 22.3266 1.02863 22.2617C1.05548 22.1969 1.06929 22.1274 1.06928 22.0572V10.9432C1.06928 8.95741 2.68484 7.34184 4.6706 7.34184H31.3297C33.3152 7.34184 34.9307 8.95741 34.9307 10.9432V14.5008C34.9307 14.7961 35.1699 15.0353 35.4654 15.0353C35.5356 15.0353 35.6052 15.0215 35.67 14.9946C35.7349 14.9678 35.7938 14.9284 35.8434 14.8788C35.8931 14.8291 35.9325 14.7702 35.9593 14.7053C35.9862 14.6405 36 14.571 36 14.5008V10.9432C36 8.36763 33.9049 6.27253 31.3294 6.27253ZM16.2532 4.89581C17.3071 3.84225 19.0214 3.84225 20.0751 4.89609C20.4579 5.2781 20.7114 5.75461 20.8147 6.27267H15.5135C15.6166 5.75468 15.8702 5.2781 16.2532 4.89581ZM35.4652 16.1048C35.3234 16.1048 35.1875 16.1612 35.0872 16.2615C34.987 16.3617 34.9307 16.4977 34.9307 16.6395V28.5871C34.9307 30.5726 33.3152 32.1882 31.3294 32.1882H4.6706C2.68484 32.1882 1.06928 30.5726 1.06928 28.5871V24.1959C1.07009 24.1252 1.05686 24.055 1.03035 23.9894C1.00385 23.9239 0.9646 23.8642 0.914875 23.8139C0.86515 23.7636 0.80594 23.7237 0.740674 23.6964C0.675408 23.6692 0.605383 23.6551 0.534655 23.6551C0.463927 23.6551 0.393902 23.6692 0.328636 23.6964C0.26337 23.7237 0.20416 23.7636 0.154435 23.8139C0.104711 23.8642 0.0654601 23.9239 0.0389567 23.9894C0.0124534 24.055 -0.000775918 24.1252 3.5159e-05 24.1959V28.5871C3.5159e-05 31.1623 2.09513 33.2574 4.6706 33.2574H6.24602L6.48192 34.1267C6.73188 35.0468 7.57233 35.6895 8.5259 35.6895C9.47948 35.6895 10.32 35.0469 10.57 34.1267L10.8059 33.2574H25.1941L25.43 34.1267C25.68 35.0468 26.5207 35.6895 27.474 35.6895C28.4277 35.6895 29.2681 35.0469 29.518 34.1267L29.754 33.2574H31.3297C33.9049 33.2574 36 31.1623 36 28.5871V16.6395C36 16.3443 35.7608 16.1048 35.4652 16.1048ZM9.53805 33.8462C9.41423 34.3018 8.99805 34.6202 8.52597 34.6202C8.05382 34.6202 7.63772 34.3019 7.51382 33.8462L7.354 33.2574H9.69794L9.53805 33.8462ZM28.4862 33.8462C28.3623 34.3018 27.9462 34.6202 27.474 34.6202C27.0019 34.6202 26.5858 34.3019 26.4622 33.8462L26.3023 33.2574H28.646L28.4862 33.8462Z"
                            fill="#06cabc"
                          />
                          <path
                            d="M8.09721 30.1764C10.3632 30.4112 12.6399 30.5287 14.9181 30.5285C17.1969 30.5285 19.4763 30.4112 21.7392 30.1764C23.0383 30.0412 24.2682 29.4631 25.2021 28.5479C26.1362 27.6325 26.7388 26.4147 26.8995 25.1185C27.3389 21.5631 27.3389 17.9672 26.8995 14.4118C26.7388 13.1157 26.1362 11.8979 25.2021 10.9824C24.2682 10.0673 23.0383 9.4891 21.7392 9.35396C17.204 8.88429 12.6324 8.88429 8.09721 9.35396C6.79811 9.48882 5.56814 10.0673 4.63432 10.9824C3.70021 11.8979 3.09728 13.1157 2.93697 14.4118C2.49725 17.9672 2.49725 21.5632 2.93697 25.1185C3.09728 26.4147 3.70021 27.6325 4.63432 28.5479C5.56814 29.4631 6.79783 30.0412 8.09721 30.1764ZM3.9982 14.5431C4.27066 12.343 6.00154 10.6465 8.2076 10.4174C12.6694 9.95518 17.167 9.95518 21.6288 10.4174C23.8348 10.6465 25.5658 12.3431 25.8382 14.5431C26.267 18.0112 26.267 21.5189 25.8382 24.987C25.5658 27.187 23.8348 28.8835 21.6288 29.1126C17.167 29.5749 12.6694 29.5749 8.2076 29.1126C6.00154 28.8835 4.27066 27.1872 3.9982 24.987C3.56918 21.5189 3.56918 18.0112 3.9982 14.5431Z"
                            fill="#06cabc"
                          />
                        </g>
                        <defs>
                          <clipPath>
                            <rect width={36} height={36} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <h4 className="text-white mt-20">Tv</h4>
                  </div>
                </div> */}
                <div
                  className="col-lg-2 col-md-4 col-sm-6 wow bounceInUp"
                  data-wow-delay="500ms"
                  data-wow-duration="1500ms"
                >
                  <div className="offer__item">
                    <div className="shape-top">
                      <img
                        src="/assets/images/shape/offter-item-shape-top.png"
                        alt="shape"
                      />
                    </div>
                    <div className="shape-bottom">
                      <img
                        src="/assets/images/shape/offter-item-shape-bottom.png"
                        alt="shape"
                      />
                    </div>
                    <div className="offer__icon">
                      <svg
                        width={36}
                        height={36}
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.9999 10.2061C15.6829 10.2061 13.7979 12.0901 13.7979 14.406C13.7979 16.722 15.6828 18.606 17.9999 18.606C20.317 18.606 22.202 16.7219 22.202 14.406C22.202 12.0901 20.317 10.2061 17.9999 10.2061ZM17.9999 17.4061C16.3446 17.4061 14.9979 16.0601 14.9979 14.406C14.9979 12.7519 16.3446 11.406 17.9999 11.406C19.6552 11.406 21.002 12.7519 21.002 14.406C21.002 16.0601 19.6552 17.4061 17.9999 17.4061Z"
                          fill="#06cabc"
                        />
                        <path
                          d="M25.1903 18.0102C25.192 17.882 25.2001 17.7544 25.2001 17.626C25.2001 10.7685 22.7292 4.40667 18.4208 0.171803C18.3084 0.0616816 18.1574 0 18 0C17.8427 0 17.6917 0.0616816 17.5793 0.171803C13.2709 4.40667 10.8 10.7685 10.8 17.626C10.8 17.7544 10.8081 17.882 10.8098 18.0102C7.91877 19.5144 6 23.5346 6 28.1996C6 28.3587 6.06321 28.5113 6.17573 28.6238C6.28825 28.7364 6.44085 28.7996 6.59998 28.7996H13.5941C13.5948 28.7996 13.5954 28.7999 13.5961 28.7999H13.9297L12.6759 30.8884C12.6212 30.9795 12.5917 31.0834 12.5904 31.1896C12.589 31.2958 12.6159 31.4005 12.6683 31.4928C12.7206 31.5852 12.7965 31.6621 12.8882 31.7156C12.9799 31.7691 13.0842 31.7972 13.1904 31.7972H22.7925C22.8986 31.7972 23.0029 31.7691 23.0946 31.7156C23.1863 31.6621 23.2622 31.5852 23.3145 31.4928C23.3669 31.4005 23.3938 31.2958 23.3925 31.1896C23.3911 31.0834 23.3616 30.9795 23.3069 30.8884L22.053 28.7999H22.404C22.4047 28.7999 22.4053 28.7996 22.406 28.7996H29.4001C29.5592 28.7996 29.7118 28.7364 29.8243 28.6238C29.9369 28.5113 30.0001 28.3587 30.0001 28.1996C30.0001 23.5347 28.0814 19.5144 25.1903 18.0102ZM18.0001 1.45473C19.2677 2.78406 20.3501 4.32033 21.2367 6.00572H14.7634C15.6501 4.32026 16.7325 2.78399 18.0001 1.45473ZM7.21177 27.5996C7.35472 23.9749 8.78488 20.794 10.8614 19.374C11.0423 22.2454 11.6673 25.0445 12.6977 27.5996H7.21177ZM14.2504 30.5973L15.3293 28.7999H20.6533L21.7325 30.5973H14.2504ZM22.0117 27.5999H13.9884C12.6868 24.5589 12.0001 21.1194 12.0001 17.626C12.0001 13.8965 12.767 10.3296 14.1786 7.20568H21.8216C23.2332 10.3296 24.0001 13.8965 24.0001 17.626C24.0001 21.1195 23.3134 24.5589 22.0117 27.5999ZM23.3024 27.5996C24.3329 25.0445 24.9579 22.2454 25.1387 19.374C27.2153 20.794 28.6454 23.9749 28.7884 27.5996H23.3024ZM18.0001 32.4005C17.9213 32.4005 17.8433 32.416 17.7705 32.4462C17.6977 32.4763 17.6315 32.5205 17.5758 32.5762C17.5201 32.632 17.4759 32.6981 17.4458 32.7709C17.4156 32.8437 17.4001 32.9217 17.4001 33.0005V35.3999C17.4001 35.559 17.4633 35.7116 17.5758 35.8242C17.6883 35.9367 17.8409 35.9999 18.0001 35.9999C18.1592 35.9999 18.3118 35.9367 18.4243 35.8242C18.5368 35.7116 18.6001 35.559 18.6001 35.3999V33.0006C18.6001 32.9218 18.5845 32.8437 18.5544 32.7709C18.5243 32.6981 18.4801 32.632 18.4243 32.5763C18.3686 32.5205 18.3025 32.4763 18.2297 32.4462C18.1569 32.416 18.0789 32.4005 18.0001 32.4005ZM14.9969 32.4005C14.9181 32.4005 14.8401 32.416 14.7673 32.4462C14.6945 32.4763 14.6283 32.5205 14.5726 32.5762C14.5169 32.632 14.4727 32.6981 14.4426 32.7709C14.4124 32.8437 14.3969 32.9217 14.3969 33.0005V34.1993C14.3969 34.3584 14.4601 34.5111 14.5726 34.6236C14.6851 34.7361 14.8377 34.7993 14.9969 34.7993C15.156 34.7993 15.3086 34.7361 15.4211 34.6236C15.5336 34.5111 15.5969 34.3584 15.5969 34.1993V33.0005C15.5968 32.8414 15.5336 32.6888 15.4211 32.5763C15.3086 32.4637 15.156 32.4005 14.9969 32.4005ZM21.0033 32.4005C20.9246 32.4005 20.8465 32.416 20.7737 32.4462C20.7009 32.4763 20.6348 32.5205 20.5791 32.5762C20.5234 32.632 20.4792 32.6981 20.449 32.7709C20.4189 32.8437 20.4034 32.9217 20.4034 33.0005V34.1993C20.4034 34.3584 20.4666 34.5111 20.5791 34.6236C20.6916 34.7361 20.8442 34.7993 21.0033 34.7993C21.1625 34.7993 21.3151 34.7361 21.4276 34.6236C21.5401 34.5111 21.6033 34.3584 21.6033 34.1993V33.0005C21.6033 32.8414 21.5401 32.6888 21.4276 32.5763C21.3151 32.4637 21.1625 32.4005 21.0033 32.4005Z"
                          fill="#06cabc"
                        />
                      </svg>
                    </div>
                    <h4 className="text-white mt-20">MARKETING</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Offer area end here */}
          {/* Brand area start here */}
          {/* <div className="brand-area">
            <div className="container">
              <div className="brand__wrp">
                <div className="brand__shape">
                  <img src="/assets/images/shape/brand-shape.png" alt="" />
                </div>
                <div className="swiper brand__slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="brand__image image">
                        <img
                          src="/assets/images/brand/brand-image1.png"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand__image image">
                        <img
                          src="/assets/images/brand/brand-image2.png"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand__image image">
                        <img
                          src="/assets/images/brand/brand-image3.png"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand__image image">
                        <img
                          src="/assets/images/brand/brand-image4.png"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand__image image">
                        <img
                          src="/assets/images/brand/brand-image5.png"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* Brand area end here */}
          {/* Process area start here */}
          <section className="process-area pt-60 pb-60">
            <div className="container">
              <div className="section-header text-center mb-60">
                <h5
                  className="wow fadeInUp"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <img
                    className="me-1"
                    src="/assets/images/icon/section-title.png"
                    alt="icon"
                  />
                  Work Process
                </h5>
                <h2
                  className="wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  Our Development Process
                </h2>
              </div>
              <div className="row g-4">
                <div
                  className="col-lg-4 wow fadeInUp"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="process__item mb-100">
                    <div className="process-arry bobble__animation">
                      <img
                        src="/assets/images/process/process-arry.png"
                        alt="arry-icon"
                      />
                    </div>
                    <div className="process__image">
                      <img
                        src="/assets/images/process/process-image1.png"
                        alt="image"
                      />
                      <span className="process-number">1</span>
                    </div>
                    <div className="process__content">
                      <h4 className="mt-25 mb-10">Define Requirements</h4>
                      <p>
                        We start by understanding your business goals, target
                        audience, and technical needs to ensure a clear and
                        effective project roadmap.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="process__item mb-100">
                    <div className="process-arry bobble__animation">
                      <img
                        src="/assets/images/process/process-arry.png"
                        alt="arry-icon"
                      />
                    </div>
                    <div className="process__image">
                      <img
                        src="/assets/images/process/process-image2.png"
                        alt="image"
                      />
                      <span className="process-number">2</span>
                    </div>
                    <div className="process__content">
                      <h4 className="mt-25 mb-10">Design &amp; Prototyping</h4>
                      <p>
                        Our team creates intuitive designs and prototypes,
                        transforming concepts into visually engaging and
                        functional layouts for seamless user experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 wow fadeInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <div className="process__item">
                    <div className="process__image">
                      <img
                        src="/assets/images/process/process-image3.png"
                        alt="image"
                      />
                      <span className="process-number">3</span>
                    </div>
                    <div className="process__content">
                      <h4 className="mt-25 mb-10">Finial Solution</h4>
                      <p>
                        We deliver a fully developed, tested, and optimized
                        solution, tailored to meet your objectives, ensuring
                        high performance and scalability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Process area end here */}
          {/* Testimonial area start here */}
          <Contactform />
          {/* Testimonial area end here */}
          {/* Blog area start here
          <section className="blog-area pt-120 pb-120">
            <div className="container">
              <div className="section-header text-center mb-60">
                <h5
                  className="wow fadeInUp"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <img
                    className="me-1"
                    src="/assets/images/icon/section-title.png"
                    alt="icon"
                  />
                  Blog &amp; news
                </h5>
                <h2
                  className="wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  Explore Blogs and News
                </h2>
              </div>
              <div className="row g-4">
                <div
                  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <div className="blog__item">
                    <a
                      href="blog-details.html"
                      className="blog__image d-block image"
                    >
                      <img
                        src="/assets/images/blog/blog-image1.jpg"
                        alt="image"
                      />
                      <div className="blog-tag">
                        <h3 className="text-white">10</h3>
                        <span className="text-white">Dec</span>
                      </div>
                    </a>
                    <div className="blog__content">
                      <ul className="blog-info pb-20 bor-bottom mb-20">
                        <li>
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.5436 5.19275C14.5436 7.69093 12.499 9.7355 10.0008 9.7355C7.50268 9.7355 5.45811 7.69093 5.45811 5.19275C5.45811 2.69457 7.50264 0.65 10.0008 0.65C12.499 0.65 14.5436 2.69458 14.5436 5.19275Z"
                              stroke="#06cabc"
                              strokeWidth="1.3"
                            />
                            <path
                              d="M18.2644 14.6706C18.1052 14.9458 17.9241 15.2073 17.7169 15.4766L17.7168 15.4765L17.7089 15.4873C17.4204 15.8788 17.0845 16.2373 16.7295 16.5924C16.4326 16.8892 16.0933 17.186 15.7568 17.4385C14.0794 18.6911 12.0622 19.3499 9.97818 19.3499C7.8984 19.3499 5.8851 18.6938 4.2098 17.4461C3.84591 17.1504 3.51371 16.8792 3.2269 16.5924L3.21993 16.5854L3.21276 16.5787C2.85667 16.2436 2.54242 15.8877 2.24749 15.4874L2.24751 15.4873L2.24417 15.4829C2.06196 15.24 1.87324 14.9756 1.71923 14.7169C1.83622 14.4559 1.98458 14.1847 2.14525 13.9526L2.14536 13.9527L2.15288 13.9413C3.06988 12.5556 4.53709 11.6388 6.16646 11.4148L6.18604 11.4121L6.20542 11.4082C6.2309 11.4031 6.29498 11.4117 6.34551 11.4496L6.3455 11.4496L6.34951 11.4525C7.41654 12.2401 8.68633 12.6453 10.0008 12.6453C11.3153 12.6453 12.5851 12.2401 13.6522 11.4525L13.6522 11.4525L13.6562 11.4496C13.6716 11.438 13.7404 11.408 13.8492 11.4167C15.4689 11.6435 16.9121 12.5568 17.8525 13.9468L17.8524 13.9469L17.8564 13.9526C18.0166 14.1839 18.1557 14.4231 18.2644 14.6706Z"
                              stroke="#06cabc"
                              strokeWidth="1.3"
                            />
                          </svg>
                          <a href="#0">By Admin</a>
                        </li>
                        <li>
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_615_71)">
                              <path
                                d="M18.752 14.443C20.6847 11.7314 20.3893 8.01637 17.7495 5.59641C16.5434 4.49074 15.0057 3.80242 13.3448 3.6102C13.3344 3.59727 13.3236 3.58479 13.3122 3.57277C11.8673 2.0718 9.79133 1.21094 7.61672 1.21094C3.47848 1.21094 0 4.29426 0 8.24219C0 9.62637 0.429961 10.9533 1.24672 12.0993L0.105742 15.6815C0.0706615 15.7916 0.0689221 15.9096 0.100743 16.0207C0.132563 16.1318 0.196522 16.231 0.284576 16.3058C0.37263 16.3807 0.480845 16.4278 0.595611 16.4413C0.710377 16.4548 0.826568 16.434 0.92957 16.3816L4.39937 14.6173C5.11195 14.9241 5.86758 15.1255 6.65008 15.2171C8.15953 16.8044 10.2467 17.6172 12.382 17.6172C13.492 17.6172 14.598 17.391 15.5992 16.961L19.0692 18.7254C19.1514 18.7673 19.2424 18.7891 19.3346 18.7891C19.73 18.7891 20.0135 18.4037 19.893 18.0253L18.752 14.443ZM4.63586 13.4383C4.5549 13.3999 4.46621 13.3805 4.37659 13.3817C4.28697 13.3829 4.19883 13.4047 4.11895 13.4453L1.64758 14.702L2.45461 12.1681C2.48356 12.0773 2.48989 11.9807 2.47305 11.8869C2.45622 11.793 2.41673 11.7047 2.35801 11.6295C1.58199 10.6362 1.1718 9.46488 1.1718 8.24219C1.1718 5.01133 4.06297 2.38281 7.61672 2.38281C9.04781 2.38281 10.4255 2.81637 11.543 3.59711C7.77945 3.97555 4.76531 6.91516 4.76531 10.5859C4.76531 11.7277 5.05797 12.8268 5.60973 13.8116C5.276 13.7123 4.95042 13.5876 4.63586 13.4383ZM15.8798 15.789C15.7999 15.7484 15.7118 15.7267 15.6222 15.7254C15.5325 15.7242 15.4438 15.7436 15.3629 15.7821C14.4494 16.216 13.4187 16.4453 12.382 16.4453C8.82828 16.4453 5.93711 13.8168 5.93711 10.5859C5.93711 7.35508 8.82828 4.72656 12.382 4.72656C15.9358 4.72656 18.827 7.35508 18.827 10.5859C18.827 11.8086 18.4168 12.9799 17.6407 13.9732C17.582 14.0484 17.5425 14.1367 17.5257 14.2306C17.5089 14.3244 17.5152 14.421 17.5441 14.5118L18.3511 17.0457L15.8798 15.789Z"
                                fill="#06cabc"
                              />
                              <path
                                d="M9.99939 11.1719C10.323 11.1719 10.5853 10.9095 10.5853 10.5859C10.5853 10.2623 10.323 10 9.99939 10C9.67579 10 9.41345 10.2623 9.41345 10.5859C9.41345 10.9095 9.67579 11.1719 9.99939 11.1719Z"
                                fill="#06cabc"
                              />
                              <path
                                d="M12.343 11.1719C12.6666 11.1719 12.929 10.9095 12.929 10.5859C12.929 10.2623 12.6666 10 12.343 10C12.0194 10 11.7571 10.2623 11.7571 10.5859C11.7571 10.9095 12.0194 11.1719 12.343 11.1719Z"
                                fill="#06cabc"
                              />
                              <path
                                d="M14.6866 11.1719C15.0102 11.1719 15.2726 10.9095 15.2726 10.5859C15.2726 10.2623 15.0102 10 14.6866 10C14.363 10 14.1007 10.2623 14.1007 10.5859C14.1007 10.9095 14.363 11.1719 14.6866 11.1719Z"
                                fill="#06cabc"
                              />
                            </g>
                            <defs>
                              <clipPath>
                                <rect width={20} height={20} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <a href="#0">0 Comments</a>
                        </li>
                      </ul>
                      <h3>
                        <a href="blog-details.html" className="primary-hover">
                          Necessity May Give us Best Virtual Court
                        </a>
                      </h3>
                      <a
                        className="mt-25 read-more-btn"
                        href="blog-details.html"
                      >
                        Read More{" "}
                        <i className="fa-regular fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <div className="blog__item">
                    <a
                      href="blog-details.html"
                      className="blog__image image d-block"
                    >
                      <img
                        src="/assets/images/blog/blog-image2.jpg"
                        alt="image"
                      />
                      <div className="blog-tag">
                        <h3 className="text-white">12</h3>
                        <span className="text-white">Dec</span>
                      </div>
                    </a>
                    <div className="blog__content">
                      <ul className="blog-info pb-20 bor-bottom mb-20">
                        <li>
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.5436 5.19275C14.5436 7.69093 12.499 9.7355 10.0008 9.7355C7.50268 9.7355 5.45811 7.69093 5.45811 5.19275C5.45811 2.69457 7.50264 0.65 10.0008 0.65C12.499 0.65 14.5436 2.69458 14.5436 5.19275Z"
                              stroke="#06cabc"
                              strokeWidth="1.3"
                            />
                            <path
                              d="M18.2644 14.6706C18.1052 14.9458 17.9241 15.2073 17.7169 15.4766L17.7168 15.4765L17.7089 15.4873C17.4204 15.8788 17.0845 16.2373 16.7295 16.5924C16.4326 16.8892 16.0933 17.186 15.7568 17.4385C14.0794 18.6911 12.0622 19.3499 9.97818 19.3499C7.8984 19.3499 5.8851 18.6938 4.2098 17.4461C3.84591 17.1504 3.51371 16.8792 3.2269 16.5924L3.21993 16.5854L3.21276 16.5787C2.85667 16.2436 2.54242 15.8877 2.24749 15.4874L2.24751 15.4873L2.24417 15.4829C2.06196 15.24 1.87324 14.9756 1.71923 14.7169C1.83622 14.4559 1.98458 14.1847 2.14525 13.9526L2.14536 13.9527L2.15288 13.9413C3.06988 12.5556 4.53709 11.6388 6.16646 11.4148L6.18604 11.4121L6.20542 11.4082C6.2309 11.4031 6.29498 11.4117 6.34551 11.4496L6.3455 11.4496L6.34951 11.4525C7.41654 12.2401 8.68633 12.6453 10.0008 12.6453C11.3153 12.6453 12.5851 12.2401 13.6522 11.4525L13.6522 11.4525L13.6562 11.4496C13.6716 11.438 13.7404 11.408 13.8492 11.4167C15.4689 11.6435 16.9121 12.5568 17.8525 13.9468L17.8524 13.9469L17.8564 13.9526C18.0166 14.1839 18.1557 14.4231 18.2644 14.6706Z"
                              stroke="#06cabc"
                              strokeWidth="1.3"
                            />
                          </svg>
                          <a href="#0">By Admin</a>
                        </li>
                        <li>
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_615_71)">
                              <path
                                d="M18.752 14.443C20.6847 11.7314 20.3893 8.01637 17.7495 5.59641C16.5434 4.49074 15.0057 3.80242 13.3448 3.6102C13.3344 3.59727 13.3236 3.58479 13.3122 3.57277C11.8673 2.0718 9.79133 1.21094 7.61672 1.21094C3.47848 1.21094 0 4.29426 0 8.24219C0 9.62637 0.429961 10.9533 1.24672 12.0993L0.105742 15.6815C0.0706615 15.7916 0.0689221 15.9096 0.100743 16.0207C0.132563 16.1318 0.196522 16.231 0.284576 16.3058C0.37263 16.3807 0.480845 16.4278 0.595611 16.4413C0.710377 16.4548 0.826568 16.434 0.92957 16.3816L4.39937 14.6173C5.11195 14.9241 5.86758 15.1255 6.65008 15.2171C8.15953 16.8044 10.2467 17.6172 12.382 17.6172C13.492 17.6172 14.598 17.391 15.5992 16.961L19.0692 18.7254C19.1514 18.7673 19.2424 18.7891 19.3346 18.7891C19.73 18.7891 20.0135 18.4037 19.893 18.0253L18.752 14.443ZM4.63586 13.4383C4.5549 13.3999 4.46621 13.3805 4.37659 13.3817C4.28697 13.3829 4.19883 13.4047 4.11895 13.4453L1.64758 14.702L2.45461 12.1681C2.48356 12.0773 2.48989 11.9807 2.47305 11.8869C2.45622 11.793 2.41673 11.7047 2.35801 11.6295C1.58199 10.6362 1.1718 9.46488 1.1718 8.24219C1.1718 5.01133 4.06297 2.38281 7.61672 2.38281C9.04781 2.38281 10.4255 2.81637 11.543 3.59711C7.77945 3.97555 4.76531 6.91516 4.76531 10.5859C4.76531 11.7277 5.05797 12.8268 5.60973 13.8116C5.276 13.7123 4.95042 13.5876 4.63586 13.4383ZM15.8798 15.789C15.7999 15.7484 15.7118 15.7267 15.6222 15.7254C15.5325 15.7242 15.4438 15.7436 15.3629 15.7821C14.4494 16.216 13.4187 16.4453 12.382 16.4453C8.82828 16.4453 5.93711 13.8168 5.93711 10.5859C5.93711 7.35508 8.82828 4.72656 12.382 4.72656C15.9358 4.72656 18.827 7.35508 18.827 10.5859C18.827 11.8086 18.4168 12.9799 17.6407 13.9732C17.582 14.0484 17.5425 14.1367 17.5257 14.2306C17.5089 14.3244 17.5152 14.421 17.5441 14.5118L18.3511 17.0457L15.8798 15.789Z"
                                fill="#06cabc"
                              />
                              <path
                                d="M9.99939 11.1719C10.323 11.1719 10.5853 10.9095 10.5853 10.5859C10.5853 10.2623 10.323 10 9.99939 10C9.67579 10 9.41345 10.2623 9.41345 10.5859C9.41345 10.9095 9.67579 11.1719 9.99939 11.1719Z"
                                fill="#06cabc"
                              />
                              <path
                                d="M12.343 11.1719C12.6666 11.1719 12.929 10.9095 12.929 10.5859C12.929 10.2623 12.6666 10 12.343 10C12.0194 10 11.7571 10.2623 11.7571 10.5859C11.7571 10.9095 12.0194 11.1719 12.343 11.1719Z"
                                fill="#06cabc"
                              />
                              <path
                                d="M14.6866 11.1719C15.0102 11.1719 15.2726 10.9095 15.2726 10.5859C15.2726 10.2623 15.0102 10 14.6866 10C14.363 10 14.1007 10.2623 14.1007 10.5859C14.1007 10.9095 14.363 11.1719 14.6866 11.1719Z"
                                fill="#06cabc"
                              />
                            </g>
                            <defs>
                              <clipPath>
                                <rect width={20} height={20} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <a href="#0">0 Comments</a>
                        </li>
                      </ul>
                      <h3>
                        <a href="blog-details.html" className="primary-hover">
                          Tackling the Changes of Retail Industry
                        </a>
                      </h3>
                      <a
                        className="mt-25 read-more-btn"
                        href="blog-details.html"
                      >
                        Read More{" "}
                        <i className="fa-regular fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <div className="blog__item">
                    <a
                      href="blog-details.html"
                      className="blog__image image d-block"
                    >
                      <img
                        src="/assets/images/blog/blog-image3.jpg"
                        alt="image"
                      />
                      <div className="blog-tag">
                        <h3 className="text-white">15</h3>
                        <span className="text-white">Dec</span>
                      </div>
                    </a>
                    <div className="blog__content">
                      <ul className="blog-info pb-20 bor-bottom mb-20">
                        <li>
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.5436 5.19275C14.5436 7.69093 12.499 9.7355 10.0008 9.7355C7.50268 9.7355 5.45811 7.69093 5.45811 5.19275C5.45811 2.69457 7.50264 0.65 10.0008 0.65C12.499 0.65 14.5436 2.69458 14.5436 5.19275Z"
                              stroke="#06cabc"
                              strokeWidth="1.3"
                            />
                            <path
                              d="M18.2644 14.6706C18.1052 14.9458 17.9241 15.2073 17.7169 15.4766L17.7168 15.4765L17.7089 15.4873C17.4204 15.8788 17.0845 16.2373 16.7295 16.5924C16.4326 16.8892 16.0933 17.186 15.7568 17.4385C14.0794 18.6911 12.0622 19.3499 9.97818 19.3499C7.8984 19.3499 5.8851 18.6938 4.2098 17.4461C3.84591 17.1504 3.51371 16.8792 3.2269 16.5924L3.21993 16.5854L3.21276 16.5787C2.85667 16.2436 2.54242 15.8877 2.24749 15.4874L2.24751 15.4873L2.24417 15.4829C2.06196 15.24 1.87324 14.9756 1.71923 14.7169C1.83622 14.4559 1.98458 14.1847 2.14525 13.9526L2.14536 13.9527L2.15288 13.9413C3.06988 12.5556 4.53709 11.6388 6.16646 11.4148L6.18604 11.4121L6.20542 11.4082C6.2309 11.4031 6.29498 11.4117 6.34551 11.4496L6.3455 11.4496L6.34951 11.4525C7.41654 12.2401 8.68633 12.6453 10.0008 12.6453C11.3153 12.6453 12.5851 12.2401 13.6522 11.4525L13.6522 11.4525L13.6562 11.4496C13.6716 11.438 13.7404 11.408 13.8492 11.4167C15.4689 11.6435 16.9121 12.5568 17.8525 13.9468L17.8524 13.9469L17.8564 13.9526C18.0166 14.1839 18.1557 14.4231 18.2644 14.6706Z"
                              stroke="#06cabc"
                              strokeWidth="1.3"
                            />
                          </svg>
                          <a href="#0">By Admin</a>
                        </li>
                        <li>
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_615_71)">
                              <path
                                d="M18.752 14.443C20.6847 11.7314 20.3893 8.01637 17.7495 5.59641C16.5434 4.49074 15.0057 3.80242 13.3448 3.6102C13.3344 3.59727 13.3236 3.58479 13.3122 3.57277C11.8673 2.0718 9.79133 1.21094 7.61672 1.21094C3.47848 1.21094 0 4.29426 0 8.24219C0 9.62637 0.429961 10.9533 1.24672 12.0993L0.105742 15.6815C0.0706615 15.7916 0.0689221 15.9096 0.100743 16.0207C0.132563 16.1318 0.196522 16.231 0.284576 16.3058C0.37263 16.3807 0.480845 16.4278 0.595611 16.4413C0.710377 16.4548 0.826568 16.434 0.92957 16.3816L4.39937 14.6173C5.11195 14.9241 5.86758 15.1255 6.65008 15.2171C8.15953 16.8044 10.2467 17.6172 12.382 17.6172C13.492 17.6172 14.598 17.391 15.5992 16.961L19.0692 18.7254C19.1514 18.7673 19.2424 18.7891 19.3346 18.7891C19.73 18.7891 20.0135 18.4037 19.893 18.0253L18.752 14.443ZM4.63586 13.4383C4.5549 13.3999 4.46621 13.3805 4.37659 13.3817C4.28697 13.3829 4.19883 13.4047 4.11895 13.4453L1.64758 14.702L2.45461 12.1681C2.48356 12.0773 2.48989 11.9807 2.47305 11.8869C2.45622 11.793 2.41673 11.7047 2.35801 11.6295C1.58199 10.6362 1.1718 9.46488 1.1718 8.24219C1.1718 5.01133 4.06297 2.38281 7.61672 2.38281C9.04781 2.38281 10.4255 2.81637 11.543 3.59711C7.77945 3.97555 4.76531 6.91516 4.76531 10.5859C4.76531 11.7277 5.05797 12.8268 5.60973 13.8116C5.276 13.7123 4.95042 13.5876 4.63586 13.4383ZM15.8798 15.789C15.7999 15.7484 15.7118 15.7267 15.6222 15.7254C15.5325 15.7242 15.4438 15.7436 15.3629 15.7821C14.4494 16.216 13.4187 16.4453 12.382 16.4453C8.82828 16.4453 5.93711 13.8168 5.93711 10.5859C5.93711 7.35508 8.82828 4.72656 12.382 4.72656C15.9358 4.72656 18.827 7.35508 18.827 10.5859C18.827 11.8086 18.4168 12.9799 17.6407 13.9732C17.582 14.0484 17.5425 14.1367 17.5257 14.2306C17.5089 14.3244 17.5152 14.421 17.5441 14.5118L18.3511 17.0457L15.8798 15.789Z"
                                fill="#06cabc"
                              />
                              <path
                                d="M9.99939 11.1719C10.323 11.1719 10.5853 10.9095 10.5853 10.5859C10.5853 10.2623 10.323 10 9.99939 10C9.67579 10 9.41345 10.2623 9.41345 10.5859C9.41345 10.9095 9.67579 11.1719 9.99939 11.1719Z"
                                fill="#06cabc"
                              />
                              <path
                                d="M12.343 11.1719C12.6666 11.1719 12.929 10.9095 12.929 10.5859C12.929 10.2623 12.6666 10 12.343 10C12.0194 10 11.7571 10.2623 11.7571 10.5859C11.7571 10.9095 12.0194 11.1719 12.343 11.1719Z"
                                fill="#06cabc"
                              />
                              <path
                                d="M14.6866 11.1719C15.0102 11.1719 15.2726 10.9095 15.2726 10.5859C15.2726 10.2623 15.0102 10 14.6866 10C14.363 10 14.1007 10.2623 14.1007 10.5859C14.1007 10.9095 14.363 11.1719 14.6866 11.1719Z"
                                fill="#06cabc"
                              />
                            </g>
                            <defs>
                              <clipPath>
                                <rect width={20} height={20} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <a href="#0">0 Comments</a>
                        </li>
                      </ul>
                      <h3>
                        <a href="blog-details.html" className="primary-hover">
                          Easy and Most Powerful Server and Platform
                        </a>
                      </h3>
                      <a
                        className="mt-25 read-more-btn"
                        href="blog-details.html"
                      >
                        Read More{" "}
                        <i className="fa-regular fa-arrow-right-long" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* Blog area end here */}
        </main>

        <Footer />
      </>
    </div>
  );
}

export default Home;
