// BlogDetails.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBlogPostByname, getAllBlogPosts } from "./blogData";
import Header from "./Header";
import Footer from "./Footer";
import banner from '../assets/banner-inner-page.jpg'
import { Helmet } from "react-helmet";
import { FaSearch, FaBriefcase, FaThumbtack, FaLightbulb, FaBrain, FaGem } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

function BlogDetails() {
    const { name } = useParams();
    const blog = getBlogPostByname(name);
    const [step, setstep] = useState();
    const [content, setContent] = useState();
    const allBlogs = getAllBlogPosts(); // Get all blogs

    useEffect(() => {
        if (step === 1) {
            setContent('PIXELMINDSOLUTIONS: Empowering Businesses Through Innovative IT Services');
        } else if (step === 2) {
            setContent('PIXELMINDSOLUTIONS: Driving Innovation Through Smart IT Services');
        } else {
            setContent('How PIXELMINDSOLUTIONS is Shaping the Future of Digital Transformation');
        }
    }, [step]);

    useEffect(() => {
        setstep(blog.id);
    }, [blog.id]);

    if (!blog) {
        return <div className="container mt-5"><h2>Blog not found.</h2></div>;
    }

    // Function to format date
    const getDateParts = (dateStr) => {
        const dateObj = new Date(dateStr);
        const day = String(dateObj.getDate()).padStart(2, '0');
        const month = dateObj.toLocaleString('default', { month: 'short' });
        return { day, month };
    };

    // Get recent posts (excluding current post)
    const recentPosts = allBlogs.filter(post => post.id !== blog.id).slice(0, 3);

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
                            {content}
                        </h2>
                    </div>
                </section>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12 col-lg-8 pe-lg-5">

                            {step === 1 &&
                                <>
                                    <Helmet>
                                        <title>Digital Marketing & App Dev IT Services</title>
                                        <meta name="description" content="From app creation to digital promotion, our IT team supports your business at every digital stage." />
                                        <meta name="keywords" content="Digital Marketing and IT services in KPHB, Best Online Marketing Service in Hyderabad, IT Service Providers in KPHP, Software development company in Hyderabad, Mobile App Development in Gacchibowli, UI/UX in Hyderabad, Best IT Company in KPHP, Affortable Software IT Company in Hyderabad, Best Online Services in Hyderabad, Top Digital Marketing Services in KPHP, Best SEO Services in Hyderabad, Social Media Services Near Me, PixelmindSolutions in KPHP, PPC Services in Hyderabad, Digital Marketing Company in KPHP" />
                                    </Helmet>

                                    <section className="blog-details-area pb-5">
                                        <div className="blog__details">
                                            <div className="blog__content">
                                                <div className="blog__image mb-4 position-relative">
                                                    <img src="/assets/images/blog/blog-image1.jpg" alt="PixelMind Blog" className="img-fluid rounded w-100" style={{ height: '400px', objectFit: 'cover' }} />
                                                    <div className="blog-tag position-absolute top-0 start-0 bg-primary p-2 text-white">
                                                        <h3 className="text-white m-0">12</h3>
                                                        <span className="text-white">Jul</span>
                                                    </div>
                                                </div>
                                                <ul className="blog-info pb-3 border-bottom mb-3 list-unstyled d-flex gap-4">
                                                    <li><i className="fa-regular fa-user me-2"></i> By Admin</li>
                                                    <li><i className="fa-regular fa-comments me-2"></i> 0 Comments</li>
                                                </ul>

                                                <p className="">IT services are at the heart of business expansion and digital transformation in the fast-paced digital world of today. Businesses need a dependable technology partner to help them succeed online, whether it's through powerful digital marketing strategies, user-friendly mobile apps, or custom websites. This partner is <strong>PixelMind Solutions</strong>, which provides businesses of all sizes with cutting-edge IT services, innovative design, and performance-driven digital strategies.</p>

                                                <h3 className="mt-4">1. About PixelMind Solutions</h3>
                                                <p><strong>PixelMind Solutions</strong> is a results-focused IT service company that specializes in providing end-to-end digital solutions. Whether you're a startup or an established brand, PixelMind helps you build a strong online presence by combining creativity, technology, and data-driven strategies. With an experienced team and a customer-first approach, PixelMind Solutions is committed to delivering measurable results.</p>

                                                <h3 className="mt-4">2. What Services Does PixelMind Solutions Offer?</h3>
                                                <ul className="list-group list-group-numbered mb-3">
                                                    <li className="list-group-item border-0 ps-0"><strong>Website Design & Development:</strong> Responsive, fast-loading, SEO-optimized, and tailored to each business's goals.</li>
                                                    <li className="list-group-item border-0 ps-0"><strong>Mobile App Development:</strong> Feature-rich Android and iOS apps focused on functionality, design, and performance.</li>
                                                    <li className="list-group-item border-0 ps-0"><strong>Digital Marketing:</strong> SEO, Google Ads, social media, and content marketing tailored to boost brand awareness and leads.</li>
                                                    <li className="list-group-item border-0 ps-0"><strong>UI/UX Design:</strong> Intuitive, modern, and user-focused interfaces designed based on behavior and usability.</li>
                                                    <li className="list-group-item border-0 ps-0"><strong>Branding & Identity Design:</strong> Logos, color palettes, and identity packages for professional brand presence.</li>
                                                </ul>

                                                <h3 className="mt-4">3. Why Choose PixelMind Solutions?</h3>
                                                <ul className="list-group list-group-numbered mb-3">
                                                    <li className="list-group-item border-0 ps-0">Tailored IT Solutions for each client</li>
                                                    <li className="list-group-item border-0 ps-0">Open and honest communication</li>
                                                    <li className="list-group-item border-0 ps-0">Creative & Technical expertise</li>
                                                    <li className="list-group-item border-0 ps-0">Scalable solutions that grow with your business</li>
                                                    <li className="list-group-item border-0 ps-0">Cost-effective packages</li>
                                                </ul>

                                                <h3 className="mt-4">4. The PixelMind Process</h3>
                                                <ol className="list-group list-group-numbered mb-3">
                                                    <li className="list-group-item border-0 ps-0">Discovery Call – Understanding your goals</li>
                                                    <li className="list-group-item border-0 ps-0">Strategic Planning – Crafting a custom plan</li>
                                                    <li className="list-group-item border-0 ps-0">Design & Development – Executing with precision</li>
                                                    <li className="list-group-item border-0 ps-0">Testing & Launch – Ensuring quality before going live</li>
                                                    <li className="list-group-item border-0 ps-0">Ongoing Support – Continued assistance and optimization</li>
                                                </ol>

                                                <h3 className="mt-4">5. What Clients Say About PixelMind</h3>
                                                <blockquote className="blockquote bg-light p-3 rounded">
                                                    <p>"PixelMind Solutions gave us a strong online presence and helped increase our sales through effective SEO and website design."</p>
                                                </blockquote>
                                                <blockquote className="blockquote bg-light p-3 rounded">
                                                    <p>"The app PixelMind developed for us is flawless. Their team was responsive and very easy to work with."</p>
                                                </blockquote>

                                                <h3 className="mt-4">6. Getting Started with PixelMind Solutions</h3>
                                                <p>Whether you're building a brand from scratch or optimizing an existing one, PixelMind is ready to help. Getting started is as simple as:</p>
                                                <ul className="list-group list-group-numbered mb-3">
                                                    <li className="list-group-item border-0 ps-0">Booking a free consultation</li>
                                                    <li className="list-group-item border-0 ps-0">Sharing your business objectives and vision</li>
                                                    <li className="list-group-item border-0 ps-0">Receiving a custom proposal</li>
                                                    <li className="list-group-item border-0 ps-0">Watching your digital journey unfold with expert guidance</li>
                                                </ul>

                                                <h3 className="mt-4">Conclusion: Choose PixelMind for Smarter IT Solutions</h3>
                                                <p>Your digital success starts with the right partner. PixelMind Solutions offers user-focused design, expert marketing strategies, and cutting-edge IT services that help your business expand. With a dedicated team and forward-thinking approach, PixelMind ensures that your brand thrives in the digital world.</p>

                                                <div className="mt-5">
                                                    <Link to="/blog" className="btn btn-outline-primary">
                                                        <i className="fas fa-arrow-left me-2"></i> Back to Blog List
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </>
                            }

                            {step === 2 &&
                                <>
                                    <section className="blog-details-area pb-5">
                                        <div className="blog__details">
                                            <div className="blog__content">
                                                <div className="blog__image mb-4 position-relative">
                                                    <img src="/assets/images/blog/blog-image2.jpg" alt="PixelMind Blog" className="img-fluid rounded w-100" style={{ height: '400px', objectFit: 'cover' }} />
                                                    <div className="blog-tag position-absolute top-0 start-0 bg-primary p-2 text-white">
                                                        <h3 className="text-white m-0">12</h3>
                                                        <span className="text-white">Jul</span>
                                                    </div>
                                                </div>
                                                <ul className="blog-info pb-3 border-bottom mb-3 list-unstyled d-flex gap-4">
                                                    <li><i className="fa-regular fa-user me-2"></i> By Admin</li>
                                                    <li><i className="fa-regular fa-comments me-2"></i> 0 Comments</li>
                                                </ul>

                                                <p className="">Having a strong digital presence is no longer optional in today's technology-driven market. <strong>PixelMind Solutions</strong> is at the forefront of this digital transformation, offering cutting-edge IT services that empower businesses to grow, engage customers, and stay ahead of the competition.</p>

                                                <h3 className="mt-4 d-flex align-items-center gap-2">
                                                    <FaSearch color="#06cabc" size={28} />
                                                    <span>About PixelMind Solutions</span>
                                                </h3>
                                                <p>PixelMind Solutions is a forward-thinking IT company delivering expert solutions in web development, mobile app design, and digital marketing. By combining creative thinking with advanced technology, they help organizations across industries build powerful digital experiences. Their mission is simple: to help brands succeed online with customized, high-performance solutions that meet modern demands.</p>

                                                <h3 className="mt-4 d-flex align-items-center gap-2">
                                                    <FaBriefcase color="#06cabc" size={28} />
                                                    <span>Services That Make a Difference</span>
                                                </h3>
                                                <ul className="list-group list-group-flush mb-3">
                                                    <li className="list-group-item border-0 ps-0"><strong>1. Custom Website Development:</strong> Responsive, SEO-optimized, fast, and visually stunning. Tools include WordPress, PHP, and modern frontend frameworks.</li>
                                                    <li className="list-group-item border-0 ps-0"><strong>2. Mobile App Development:</strong> Seamless Android & iOS apps using Flutter and React Native with great UX and short development cycles.</li>
                                                    <li className="list-group-item border-0 ps-0"><strong>3. Digital Marketing:</strong>
                                                        <ul className="mt-2">
                                                            <li>Organic SEO to improve search rankings</li>
                                                            <li>Google Ads (PPC)</li>
                                                            <li>Social Media campaigns (Facebook, Instagram, LinkedIn)</li>
                                                            <li>Content writing & email outreach strategies</li>
                                                        </ul>
                                                    </li>
                                                </ul>

                                                <h3 className="mt-4 d-flex align-items-center gap-2">
                                                    <FaLightbulb color="#06cabc" size={28} />
                                                    <span>Why Businesses Trust PixelMind</span>
                                                </h3>

                                                <ul className="list-group list-group-flush mb-3">
                                                    <li className="list-group-item border-0 ps-0"><strong>✅ Tailored Solutions:</strong> Custom-built based on your industry, goals, and budget.</li>
                                                    <li className="list-group-item border-0 ps-0"><strong>✅ Expert Team:</strong> UI/UX designers, developers, marketers, and content creators ensure top-notch results.</li>
                                                    <li className="list-group-item border-0 ps-0"><strong>✅ Affordable & Scalable:</strong> Perfect for startups and growing enterprises.</li>
                                                    <li className="list-group-item border-0 ps-0"><strong>📈 Real Results:</strong> Proven success in boosting website engagement for both local and global businesses.</li>
                                                </ul>

                                                <h3 className="mt-4 d-flex align-items-center gap-2">
                                                    <FaThumbtack color="#06cabc" size={28} />
                                                    <span>Conclusion</span>
                                                </h3>
                                                <p>Partnering with a dependable IT solutions provider is essential in this day and age when a company's success is determined by its digital presence. <strong>PixelMind Solutions</strong> delivers comprehensive services that help businesses unlock their full online potential.</p>

                                                <div className="mt-5">
                                                    <Link to="/blog" className="btn btn-outline-primary">
                                                        <i className="fas fa-arrow-left me-2"></i> Back to Blog List
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </>
                            }

                            {step === 3 &&
                                <>
                                    <section className="blog-details-area pb-5">
                                        <div className="blog__details">
                                            <div className="blog__content">
                                                <div className="blog__image mb-4 position-relative">
                                                    <img src="/assets/images/blog/blog-image3.jpg" alt="PixelMind Blog" className="img-fluid rounded w-100" style={{ height: '400px', objectFit: 'cover' }} />
                                                    <div className="blog-tag position-absolute top-0 start-0 bg-primary p-2 text-white">
                                                        <h3 className="text-white m-0">15</h3>
                                                        <span className="text-white">Jul</span>
                                                    </div>
                                                </div>
                                                <ul className="blog-info pb-3 border-bottom mb-3 list-unstyled d-flex gap-4">
                                                    <li><i className="fa-regular fa-user me-2"></i> By Admin</li>
                                                    <li><i className="fa-regular fa-comments me-2"></i> 0 Comments</li>
                                                </ul>

                                                <p className="">Digital innovation is the key to staying competitive in today's business landscape. Companies need more than just a website—they need digital systems that drive efficiency, deliver value, and engage their customers. This is where <strong>PixelMind Solutions</strong> makes a lasting impact.</p>

                                                <h3 className="mt-4">The Vision Behind PixelMind</h3>
                                                <p>At its core, PixelMind Solutions is more than just an IT company—it is a digital transformation partner. The team offers services that assist businesses in navigating and achieving success in the digital age. Their services place a strong emphasis on creativity, technology, and strategy. From concept to execution, PixelMind supports clients through every phase of their digital journey.</p>


                                                <h3 className="mt-4 d-flex align-items-center gap-2">
                                                    <FaGem color="#06cabc" size={28} />
                                                    <span>Core Offerings that Drive Digital Growth</span>
                                                </h3>

                                                <h4 className="mt-3">Website Development That Converts</h4>
                                                <p>PixelMind designs websites that not only look stunning but are also optimized for performance. Their sites are:</p>
                                                <ul className="list-group list-group-flush mb-3">
                                                    <li className="list-group-item border-0 ps-0">Fast-loading</li>
                                                    <li className="list-group-item border-0 ps-0">Mobile-responsive</li>
                                                    <li className="list-group-item border-0 ps-0">SEO-friendly</li>
                                                    <li className="list-group-item border-0 ps-0">Built using the latest coding standards</li>
                                                </ul>
                                                <p>Each website is customized to reflect the client's brand and deliver the best user experience.</p>

                                                <h4 className="mt-3">End-to-End Mobile App Development</h4>
                                                <p>Mobile apps are essential in today's smartphone-driven world. PixelMind crafts high-performance apps using technologies like:</p>
                                                <ul className="list-group list-group-flush mb-3">
                                                    <li className="list-group-item border-0 ps-0">Flutter</li>
                                                    <li className="list-group-item border-0 ps-0">React Native</li>
                                                    <li className="list-group-item border-0 ps-0">Native Android/iOS</li>
                                                </ul>
                                                <p>These apps are intuitive, secure, and designed to scale with your business.</p>

                                                <h4 className="mt-3">Digital Marketing That Delivers</h4>
                                                <p>Marketing in the digital era requires strategy and data. PixelMind Solutions offers:</p>
                                                <ul className="list-group list-group-flush mb-3">
                                                    <li className="list-group-item border-0 ps-0">SEO (Search Engine Optimization), Google Ads, and Paid Campaigns</li>
                                                    <li className="list-group-item border-0 ps-0">Social Media Marketing</li>
                                                    <li className="list-group-item border-0 ps-0">Online Branding & Reputation Management</li>
                                                </ul>
                                                <p>Their goal is clear: to help you get found and grow faster.</p>

                                                <h3 className="mt-4 d-flex align-items-center gap-2">
                                                    <GiBrain color="#06cabc" size={28} />
                                                    <span>What Sets PixelMind Apart?</span>
                                                </h3>

                                                <ul className="list-group list-group-flush mb-3">
                                                    <li className="list-group-item border-0 ps-0">🔸 <strong>Tech Meets Creativity:</strong> Every project is a blend of creative design and powerful code.</li>
                                                    <li className="list-group-item border-0 ps-0">🔸 <strong>Client-First Approach:</strong> They listen, understand, and deliver exactly what the business needs.</li>
                                                    <li className="list-group-item border-0 ps-0">🔸 <strong>Continuous Innovation:</strong> The team stays up to date with new trends in AI, design, mobile tech, and digital marketing.</li>
                                                </ul>

                                                <h3 className="mt-4">Final Words</h3>
                                                <p>The digital world is changing fast—and PixelMind Solutions ensures you don't get left behind. They assist brands in transformation, growth, and leadership by combining experience, innovation, and client dedication to perfection.</p>

                                                <div className="mt-5">
                                                    <Link to="/blog" className="btn btn-outline-primary">
                                                        <i className="fas fa-arrow-left me-2"></i> Back to Blog List
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </>
                            }
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

export default BlogDetails;