import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

function Portfolio() {
    // Mock Data for Portfolio Items
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
            description: "At QR & Cards, our mission is to make it simple and easy for individuals and businesses to create custom QR codes and professional visiting cards. We aim to provide intuitive tools and stunning designs that help you stand out.",
            image: "/assets/images/banner/qrandcards.jpg",
            icon: "/assets/images/logo/qrandcards.jpg",
            link: "https://qrandcards.com/"
        },
        {
            id: 3,
            title: "CARNIVAL CASTLE",
            description: "At Carnival Castle, we believe that every celebration deserves a personal touch. Our elegantly designed private theatre for celebrations in Hyderabad provide a perfect blend of comfort and style, complete with recliner seating, continental food and beverage options and a selection of regular and custom cakes.",
            image: "/assets/images/banner/carnival.jpg",
            icon: "/assets/images/logo/carnival.png",
            link: "https://carnivalcastle.com/"
        },
        {
            id: 4,
            title: "BINGENJOY",
            description: "At BingeNJoy, we believe that every celebration deserves a personal touch. Our elegantly designed private theatres in Hyderabad offer the perfect blend of comfort and style, featuring plush recliner seating, continental food and beverages, and a curated selection of regular and custom cakes.",
            image: "/assets/images/banner/binenjoy.jpg",
            icon: "/assets/images/logo/binenjoy.png",
            link: "https://bingenjoy.com/"
        },
    ];

    return (
        <div>
            <Helmet>
                <title>Portfolio | Our Creative Work & Projects - PixelMind Solutions</title>
                <meta name="description" content="Explore our diverse portfolio including websites, mobile apps, branding projects and digital experiences delivered for top clients." />
                <meta name="keywords" content="portfolio, case studies, app development projects, website design samples, branding, PixelMind Solutions portfolio" />
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
                        <h2 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                            Portfolio
                        </h2>
                        <div className="breadcrumb-list wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <Link to="/">Home</Link>
                            <span><i className="fa-regular fa-angles-right mx-2" /> Portfolio</span>
                        </div>
                    </div>
                </section>

                <section className="service-inner-area pt-90 pb-90">
                    <div className="container">
                        <div className="row g-4">
                            {portfolioItems.map((item) => (
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
                                                <Link to={item.link} className="primary-hover">{item.title}</Link>
                                            </h4>
                                            <p>
                                                {item.description.length > 100
                                                    ? item.description.slice(0, 100) + "..."
                                                    : item.description}
                                            </p>

                                            <Link className="read-more-btn" to={item.link} target='_blank'>
                                                Read More <i className="fa-regular fa-arrow-right-long" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Portfolio;
