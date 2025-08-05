import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

function Portfolio() {
    const [expandedItems, setExpandedItems] = useState({});

    const toggleExpand = (id) => {
        setExpandedItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const portfolioItems = [
        {
            id: 1,
            title: "PIXELMINDSOLUTIONS",
            description: "Pixelmind Solutions is a leading IT services provider, offering innovative solutions in website development, mobile application design, and digital marketing. We are dedicated to helping businesses thrive in the digital world by delivering tailored, high-quality services that enhance user experiences, drive growth, and build a strong online presence.",
            image: "/assets/images/banner/pixelmind.jpg",
            icon: "/assets/images/logo/pixelmind.jpg",
            link: "https://www.pixelmindsolutions.com/"
        },
        {
            id: 2,
            title: "QR AND CARDS",
            description: "with the help of the clever e-commerce platform QRandCards.com, users can design and personalize QR code cards for events, businesses, and private use. The website provides secure online ordering, real-time previews, and a smooth design experience.With a focus on innovation, it bridges traditional cards with digital interactivity using QR technology.",
            image: "/assets/images/banner/qrandcards.jpg",
            icon: "/assets/images/logo/qrandcards.jpg",
            link: "https://qrandcards.com/"
        },
        {
            id: 3,
            title: "BINGENJOY",
            description: "Bingenjoy.com transforms private theater events by providing custom celebrations in a lavish, stage-inspired atmosphere, whether they are wedding anniversaries, birthday parties, poignant proposals, or designer cake unveilings. Guests put together completely unique packages that include gourmet meals, custom cakes, and live performances ranging from musicians and actors to interactive spectacles. They can also select from a variety of stunning décor themes.The sleek, mobile‑friendly site guides users through themed event options, showcases photo highlights from past parties, and streamlines booking so that selecting dates and add‑ons takes only a few effortless clicks. Every detail is crafted to ensure your special occasion unfolds with dramatic style and seamless ease.",
            image: "/assets/images/banner/binenjoy.jpg",
            icon: "/assets/images/logo/binenjoy.png",
            link: "https://bingenjoy.com/"
        },
        {
            id: 4,
            title: "CARNIVAL CASTLE",
            description: "CarnivalCastle.com is a versatile private‑theater and events venue that transforms every celebration into a theatrical experience, whether it’s a wedding anniversary, birthday party, love proposal, or custom cake unveiling.With immersive stage-like settings, vibrant decor themes, and a curated lineup  of live entertainment—from musicians and performers to interactive shows—Carnival Castle offers fully customizable packages that include catering, gourmet.The responsive, easy‑to‑navigate website allows guests to browse event themes, view photo galleries of past celebrations, and secure their preferred date and add‑ons in just a few clicks, ensuringeach A unique moment is brought to life with style and elegance.",
            image: "/assets/images/banner/carnival.jpg",
            icon: "/assets/images/logo/carnival.png",
            link: "https://carnivalcastle.com/"
        },
        {
            id: 5,
            title: "1 SQUARE",
            description: "A clever and safe community marketplace platform created especially for Hyderabad is called 1Square. It facilitates the discovery, listing, and trading of goods within the community by bringing together local consumers and sellers. Offering users a smooth listing procedure, transparent communication, and secure transactions is the primary objective.",
            image: "/assets/images/banner/onesquare.png",
            icon: "/assets/images/logo/onesquare.png",
            link: "https://atozkeysolution.com/"
        }
    ];

    return (
        <div>
            <Helmet>
                <title>Portfolio | Our Creative Work & Projects - PixelMind Solutions</title>
                <meta name="description" content="Explore our diverse portfolio including websites, mobile apps, branding projects and digital experiences delivered for top clients." />
                <meta name="keywords" content="portfolio, case studies, app development projects, website design samples, branding, PixelMind Solutions portfolio" />
                <link rel="preload" as="image" href="/assets/images/banner/banner-inner-page.jpg" />
            </Helmet>

            <Header />
            <main>
                <section
                    className="banner__inner-page bg-image pt-100 pb-100"
                    style={{
                        backgroundImage: `url(${"/assets/images/banner/banner-inner-page.jpg"})`,
                    }}
                >
                    <div className="container">
                        <h2 className="wow fadeInUp">Portfolio</h2>
                        <div className="breadcrumb-list wow fadeInUp">
                            <Link to="/">Home</Link>
                            <span><i className="fa-regular fa-angles-right mx-2" /> Portfolio</span>
                        </div>
                    </div>
                </section>

                <section className="service-inner-area pt-90 pb-90">
                    <div className="container">
                        <div className="row g-4">
                            {portfolioItems.map((item) => {
                                const isExpanded = expandedItems[item.id];
                                const shouldTruncate = item.description.length > 200;
                                const displayedText = isExpanded || !shouldTruncate
                                    ? item.description
                                    : item.description.slice(0, 200) + '...';

                                return (
                                    <div key={item.id} className="col-lg-4 col-md-6">
                                        <div className="service-two__item">
                                            <div className="image">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="img-fluid w-100"
                                                    style={{ height: "250px", objectFit: "cover", borderRadius: "10px" }}
                                                />
                                            </div>

                                            <div className="service-two__content">
                                                <div className="icon">
                                                    <img src={item.icon} alt="icon" className='img-fluid' />
                                                </div>
                                                <div className="shape">
                                                    <img src="/assets/images/shape/service-two-item-shape.png" alt="shape" />
                                                </div>
                                                <h4>
                                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="primary-hover">
                                                        {item.title}
                                                    </a>
                                                </h4>
                                                <p>
                                                    {displayedText}
                                                    {shouldTruncate && (
                                                        <span
                                                            onClick={() => toggleExpand(item.id)}
                                                            className="ms-1"
                                                            style={{ color: "#06cabc", cursor: 'pointer', fontWeight: 'bold' }}
                                                        >
                                                            {isExpanded ? 'View Less' : 'View More'}
                                                        </span>
                                                    )}
                                                </p>
                                                {/* <Link className="read-more-btn" to={item.link} target='_blank'>
                                                Read More <i className="fa-regular fa-arrow-right-long" />
                                            </Link> */}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

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
            </main>

            <Footer />
        </div>
    );
}

export default Portfolio;

