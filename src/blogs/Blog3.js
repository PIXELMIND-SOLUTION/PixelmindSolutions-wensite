import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FaGem } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

function Blog3({ recentPosts, getDateParts }) {
    return (
        <>
            <Header />
            <div className="container-fluid p-0">
                <section
                    className="banner__inner-page bg-image pt-100 pb-100 bg-image"
                    style={{
                        backgroundImage: `url(${"/assets/images/banner/banner-inner-page.jpg"})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
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
                        <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                            How PIXELMINDSOLUTIONS is Shaping the Future of Digital Transformation
                        </h2>
                    </div>
                </section>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12 col-lg-8 pe-lg-5">
                            <Helmet>
                                <link rel="canonical" href="https://www.pixelmindsolutions.com/blog/application-maintainence-and-digital-growth-strategy" />
                                <title>Smart IT Services & Digital Marketing Experts</title>
                                <meta name="description" content="Grow your business with expert IT solutions and data-driven digital marketing that deliver measurable results." />
                                <meta name="keywords" content="Email marketing and SEO for mobile apps, Best web and app development company in Hyderabad, Local SEO for IT service providers, Professional website design company in Kukatpally, Social media marketing for small businesses in Hyderabad, Google Ads management for Hyderabad" />
                            </Helmet>

                            <section className="blog-details-area pb-5">
                                <div className="blog__details">
                                    <div className="blog__content">
                                        <div className="blog__image mb-4 position-relative">
                                            <img src="/assets/images/blog/blog-image3.jpg" alt="App development services with SEO optimization" className="img-fluid rounded w-100" style={{ height: '400px', objectFit: 'cover' }} />
                                            <div className="blog-tag position-absolute top-0 start-0 bg-primary p-2 text-white">
                                                <h3 className="text-white m-0">15</h3>
                                                <span className="text-white">Jul</span>
                                            </div>
                                        </div>
                                        <ul className="blog-info pb-3 border-bottom mb-3 list-unstyled d-flex gap-4">
                                            <li><i className="fa-regular fa-user me-2"></i> By Admin</li>
                                            <li><i className="fa-regular fa-comments me-2"></i> 0 Comments</li>
                                        </ul>

                                        <p className=""><em>Digital innovation</em> is the key to staying competitive in today's business landscape. Companies need more than just a website—they need digital systems that drive efficiency, deliver value, and engage their customers. This is where <strong>PIXELMINDSOLUTIONS</strong> makes a lasting impact.</p>

                                        <h3 className="mt-4">The Vision Behind PixelMind</h3>
                                        <p>At its core, <em>PIXELMINDSOLUTIONS</em> is more than just an IT company—it is a digital transformation partner. The team offers
                                            <a
                                                href="/services"
                                                className="text-primary"
                                                alt="Pixelmindsolutions"
                                            >
                                                services
                                            </a> that assist businesses in navigating and achieving success in the digital age. Their services place a strong emphasis on creativity, technology, and strategy. From concept to execution, PIXELMINDSOLUTIONS supports clients through every phase of their digital journey.</p>


                                        <h3 className="mt-4 d-flex align-items-center gap-2">
                                            <FaGem color="#06cabc" size={28} />
                                            <strong>Core Offerings that Drive Digital Growth</strong>
                                        </h3>

                                        <h4 className="mt-3">Website Development That Converts</h4>
                                        <p>PixelMind designs websites that not only look stunning but are also optimized for performance. Their sites are:</p>
                                        <ul className="list-group list-group-flush mb-3">
                                            <li className="list-group-item border-0 ps-0">Fast-loading</li>
                                            <li className="list-group-item border-0 ps-0">Mobile-responsive</li>
                                            <li className="list-group-item border-0 ps-0">SEO-friendly</li>
                                            <li className="list-group-item border-0 ps-0">Built using the latest coding standards</li>
                                        </ul>
                                        <p>Each <a
                                            href="/contact"
                                            className="text-primary"
                                            alt="Pixelmindsolutions"
                                        >
                                            website is customized
                                        </a> to reflect the client's brand and deliver the best user experience.</p>

                                        <h4 className="mt-3">End-to-End Mobile App Development</h4>
                                        <p>Mobile apps are essential in today's smartphone-driven world. PIXELMINDSOLUTIONS crafts high-performance apps using technologies like:</p>
                                        <ul className="list-group list-group-flush mb-3">
                                            <li className="list-group-item border-0 ps-0">Flutter</li>
                                            <li className="list-group-item border-0 ps-0">React Native</li>
                                            <li className="list-group-item border-0 ps-0">Native Android/iOS</li>
                                        </ul>
                                        <p>These apps are intuitive, secure, and designed to scale with your business.</p>

                                        <h4 className="mt-3">Digital Marketing That Delivers</h4>
                                        <p><a
                                            href="https://www.thecolourmoon.com/"
                                            className="text-primary"
                                            alt="Pixelmindsolutions"
                                            target="_blank"
                                        >
                                            Marketing
                                        </a> in the digital era requires strategy and data. PIXELMINDSOLUTIONS offers:</p>
                                        <ul className="list-group list-group-flush mb-3">
                                            <li className="list-group-item border-0 ps-0">SEO (Search Engine Optimization), Google Ads, and Paid Campaigns</li>
                                            <li className="list-group-item border-0 ps-0">Social Media Marketing</li>
                                            <li className="list-group-item border-0 ps-0">Online Branding & Reputation Management</li>
                                        </ul>
                                        <p>Their goal is clear: to help you get found and grow faster.</p>

                                        <h3 className="mt-4 d-flex align-items-center gap-2">
                                            <GiBrain color="#06cabc" size={28} />
                                            <span>What Sets PIXELMINDSOLUTIONS Apart?</span>
                                        </h3>

                                        <ul className="list-group list-group-flush mb-3">
                                            <li className="list-group-item border-0 ps-0">🔸 <strong>Tech Meets Creativity:</strong> Every project is a blend of creative design and powerful code.</li>
                                            <li className="list-group-item border-0 ps-0">🔸 <strong>Client-First Approach:</strong> They listen, understand, and deliver exactly what the business needs.</li>
                                            <li className="list-group-item border-0 ps-0">🔸 <strong>Continuous Innovation:</strong> The team stays up to date with new trends in AI, design, mobile tech, and digital marketing.</li>
                                        </ul>

                                        <h3 className="mt-4">Final Words</h3>
                                        <p>The digital world is changing fast—and PIXELMINDSOLUTIONS ensures you don't get left behind. They assist brands in transformation, growth, and leadership by combining experience, innovation, and client dedication to perfection.</p>

                                        <div className="mt-5">
                                            <Link to="/blog" className="btn btn-outline-primary">
                                                <i className="fas fa-arrow-left me-2"></i> Back to Blog List
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div className="col-12 col-lg-4">
                            <div className="sidebar-widget p-4 bg-light rounded " style={{ top: '20px' }}>
                                <h4 className="widget-title mb-4"><strong>Recent Posts</strong></h4>
                                <div className="recent-posts">
                                    {recentPosts.map(post => {
                                        const { day, month } = getDateParts(post.date);
                                        return (
                                            <div key={post.id} className="recent-post-item mb-4">
                                                <div className="recent-post-img d-flex">
                                                    <Link to={`/blog/${post.name}`}>
                                                        <img
                                                            src={`/assets/images/blog/blog-image${post.id}.jpg`}
                                                            alt={post.title}
                                                            className="img-fluid rounded"
                                                            style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                                        />
                                                    </Link>
                                                    <div className="recent-post-content ps-3">
                                                        <span className="recent-post-date d-block text-muted small">
                                                            {month} {day}
                                                        </span>
                                                        <h6 className="recent-post-title mt-1">
                                                            <Link to={`/blog/${post.name}`} className="text-dark text-decoration-none">
                                                                {post.title}
                                                            </Link>
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Blog3;