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
                                                <img src={item.image} alt={item.title} className='img-fluid' />
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
            </main>

            <Footer />
        </div>
    );
}

export default Portfolio;

