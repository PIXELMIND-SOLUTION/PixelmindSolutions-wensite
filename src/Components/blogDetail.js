// BlogDetails.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBlogPostBySlug, getAllBlogPosts } from "./blogData";
import Header from "./Header";
import Footer from "./Footer";
import banner from '../assets/banner-inner-page.jpg';
import { Helmet } from "react-helmet";

function BlogDetails() {
    const { slug } = useParams();
    const blog = getBlogPostBySlug(slug);
    const [step, setstep] = useState();
    const [content, setContent] = useState();
    const allBlogs = getAllBlogPosts(); // Get all blogs

    useEffect(() => {
        if (step === 1) {
            setContent('PixelMind Solutions: Empowering Businesses Through Innovative IT Services');
        } else if (step === 2) {
            setContent('PixelMind Solutions: Driving Innovation Through Smart IT Services');
        } else {
            setContent('How PixelMind Solutions is Shaping the Future of Digital Transformation');
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
            <div className="container-fluid">
                <section
                    className="banner__inner-page bg-image pt-100 pb-100 bg-image"
                    // data-background="assets/images/banner/banner-inner-page.jpg"
                    style={{
                        backgroundImage: `url(${banner})`,
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
                            src="assets/images/banner/inner-banner-shape3.png"
                            alt="shape"
                        />
                    </div>
                    <div className="container">
                        <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                            {content}
                        </h2>
                    </div>
                </section>
                <div className="row">
                    <div className="col-12 col-md-8 col-lg-8">

                        {step === 1 &&
                            <>

                                <Helmet>
                                    <title>Digital Marketing & App Dev IT Services</title>
                                    <meta name="description" content="From app creation to digital promotion, our IT team supports your business at every digital stage." />
                                    <meta name="keywords" content="Digital Marketing and IT services in KPHB, Best Online Marketing Service in Hyderabad, IT Service Providers in KPHP, Software development company in Hyderabad, Mobile App Development in Gacchibowli, UI/UX in Hyderabad, Best IT Company in KPHP, Affortable Software IT Company in Hyderabad, Best Online Services in Hyderabad, Top Digital Marketing Services in KPHP, Best SEO Services in Hyderabad, Social Media Services Near Me, PixelmindSolutions in KPHP, PPC Services in Hyderabad, Digital Marketing Company in KPHP" />
                                </Helmet>

                                <section className="blog-details-area pt-120 pb-120">
                                    <div className="container">





                                        <div className="row justify-content-center">
                                            <div className="col-lg-10">

                                                <div className="blog__details">

                                                    <div className="blog__content">
                                                        <div className="blog__image mb-4">
                                                            <img src="/assets/images/blog/blog-image1.jpg" alt="PixelMind Blog" className="img-fluid w-100 h-100" />
                                                            <div className="blog-tag">
                                                                <h3 className="text-white">12</h3>
                                                                <span className="text-white">Jul</span>
                                                            </div>
                                                        </div>
                                                        <ul className="blog-info pb-20 bor-bottom mb-20">
                                                            <li><i className="fa-regular fa-user"></i> By Admin</li>
                                                            <li><i className="fa-regular fa-comments"></i> 0 Comments</li>
                                                        </ul>

                                                        {/* <h2 className="mb-4">PixelMind Solutions: Empowering Businesses Through Innovative IT Services</h2> */}

                                                        <p>IT services are at the heart of business expansion and digital transformation in the fast-paced digital world of today. Businesses need a dependable technology partner to help them succeed online, whether it's through powerful digital marketing strategies, user-friendly mobile apps, or custom websites. This partner is <strong>PixelMind Solutions</strong>, which provides businesses of all sizes with cutting-edge IT services, innovative design, and performance-driven digital strategies.</p>
                                                        <br />
                                                        <h3>1. About PixelMind Solutions</h3>

                                                        <p><strong>PixelMind Solutions</strong> is a results-focused IT service company that specializes in providing end-to-end digital solutions. Whether you're a startup or an established brand, PixelMind helps you build a strong online presence by combining creativity, technology, and data-driven strategies. With an experienced team and a customer-first approach, PixelMind Solutions is committed to delivering measurable results.</p>
                                                        <br />
                                                        <h3>2. What Services Does PixelMind Solutions Offer?</h3>

                                                        <ul>
                                                            <li><strong>Website Design & Development:</strong> Responsive, fast-loading, SEO-optimized, and tailored to each business’s goals.</li>
                                                            <li><strong>Mobile App Development:</strong> Feature-rich Android and iOS apps focused on functionality, design, and performance.</li>
                                                            <li><strong>Digital Marketing:</strong> SEO, Google Ads, social media, and content marketing tailored to boost brand awareness and leads.</li>
                                                            <li><strong>UI/UX Design:</strong> Intuitive, modern, and user-focused interfaces designed based on behavior and usability.</li>
                                                            <li><strong>Branding & Identity Design:</strong> Logos, color palettes, and identity packages for professional brand presence.</li>
                                                        </ul>
                                                        <br />
                                                        <h3>3. Why Choose PixelMind Solutions?</h3>

                                                        <ul>
                                                            <li>Tailored IT Solutions for each client</li>
                                                            <li>Open and honest communication</li>
                                                            <li>Creative & Technical expertise</li>
                                                            <li>Scalable solutions that grow with your business</li>
                                                            <li>Cost-effective packages</li>
                                                        </ul>
                                                        <br />
                                                        <h3>4. The PixelMind Process</h3>

                                                        <ol className="list-group list-group-numbered">
                                                            <li className="list-group-item">Discovery Call – Understanding your goals</li>
                                                            <li className="list-group-item">Strategic Planning – Crafting a custom plan</li>
                                                            <li className="list-group-item">Design & Development – Executing with precision</li>
                                                            <li className="list-group-item">Testing & Launch – Ensuring quality before going live</li>
                                                            <li className="list-group-item">Ongoing Support – Continued assistance and optimization</li>
                                                        </ol>

                                                        <br />
                                                        <h3>5. What Clients Say About PixelMind</h3>

                                                        <blockquote>
                                                            “PixelMind Solutions gave us a strong online presence and helped increase our sales through effective SEO and website design.”<br />

                                                        </blockquote>
                                                        <blockquote>
                                                            “The app PixelMind developed for us is flawless. Their team was responsive and very easy to work with.”<br />

                                                        </blockquote>
                                                        <br />
                                                        <h3>6. Getting Started with PixelMind Solutions</h3>
                                                        <p>Whether you're building a brand from scratch or optimizing an existing one, PixelMind is ready to help. Getting started is as simple as:</p>
                                                        <ul>
                                                            <li>Booking a free consultation</li>
                                                            <li>Sharing your business objectives and vision</li>
                                                            <li>Receiving a custom proposal</li>
                                                            <li>Watching your digital journey unfold with expert guidance</li>
                                                        </ul>
                                                        <br />
                                                        <h3>Conclusion: Choose PixelMind for Smarter IT Solutions</h3>
                                                        <p>Your digital success starts with the right partner. PixelMind Solutions offers user-focused design, expert marketing strategies, and cutting-edge IT services that help your business expand. With a dedicated team and forward-thinking approach, PixelMind ensures that your brand thrives in the digital world.</p>

                                                        <br />
                                                        <div className="mt-4">
                                                            <a href="/blog" className="btn btn-outline-primary">← Back to Blog List</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </section>
                            </>
                        }

                        {step === 2 &&
                            <>
                                <section className="blog-details-area pt-120 pb-120">
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-10">
                                                <div className="blog__details">

                                                    <div className="blog__image mb-4">
                                                        <img src="/assets/images/blog/blog-image2.jpg" alt="PixelMind Blog" className="img-fluid" />
                                                        <div className="blog-tag">
                                                            <h3 className="text-white">12</h3>
                                                            <span className="text-white">Jul</span>
                                                        </div>
                                                    </div>

                                                    <div className="blog__content">
                                                        <ul className="blog-info pb-20 bor-bottom mb-20">
                                                            <li><i className="fa-regular fa-user"></i> By Admin</li>
                                                            <li><i className="fa-regular fa-comments"></i> 0 Comments</li>
                                                        </ul>

                                                        {/* <h2 className="mb-4">PixelMind Solutions: Driving Innovation Through Smart IT Services</h2> */}

                                                        <p>Having a strong digital presence is no longer optional in today's technology-driven market. <strong>PixelMind Solutions</strong> is at the forefront of this digital transformation, offering cutting-edge IT services that empower businesses to grow, engage customers, and stay ahead of the competition.</p>
                                                        <br />
                                                        <h3>🔍 About PixelMind Solutions</h3>
                                                        <p>PixelMind Solutions is a forward-thinking IT company delivering expert solutions in web development, mobile app design, and digital marketing. By combining creative thinking with advanced technology, they help organizations across industries build powerful digital experiences. Their mission is simple: to help brands succeed online with customized, high-performance solutions that meet modern demands.</p>
                                                        <br />
                                                        <h3>💼 Services That Make a Difference</h3>
                                                        <ul>
                                                            <li><strong>1. Custom Website Development:</strong> Responsive, SEO-optimized, fast, and visually stunning. Tools include WordPress, PHP, and modern frontend frameworks.</li>
                                                            <li><strong>2. Mobile App Development:</strong> Seamless Android & iOS apps using Flutter and React Native with great UX and short development cycles.</li>
                                                            <li><strong>3. Digital Marketing:</strong>
                                                                <ul>
                                                                    <li>Organic SEO to improve search rankings</li>
                                                                    <li>Google Ads (PPC)</li>
                                                                    <li>Social Media campaigns (Facebook, Instagram, LinkedIn)</li>
                                                                    <li>Content writing & email outreach strategies</li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                        <br />
                                                        <h3>💡 Why Businesses Trust PixelMind</h3>
                                                        <ul>
                                                            <li><strong>✅ Tailored Solutions:</strong> Custom-built based on your industry, goals, and budget.</li>
                                                            <li><strong>✅ Expert Team:</strong> UI/UX designers, developers, marketers, and content creators ensure top-notch results.</li>
                                                            <li><strong>✅ Affordable & Scalable:</strong> Perfect for startups and growing enterprises.</li>
                                                            <li><strong>📈 Real Results:</strong> Proven success in boosting website engagement for both local and global businesses.</li>
                                                        </ul>
                                                        <br />
                                                        <h3>📌 Conclusion</h3>
                                                        <p>Partnering with a dependable IT solutions provider is essential in this day and age when a company's success is determined by its digital presence. <strong>PixelMind Solutions</strong> delivers comprehensive services that help businesses unlock their full online potential.</p>

                                                        <br />
                                                        <div className="mt-4">
                                                            <a href="/blog" className="btn btn-outline-primary">← Back to Blog List</a>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </>
                        }

                        {step === 3 &&
                            <>
                                <section className="blog-details-area pt-120 pb-120">
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-10">
                                                <div className="blog__details">

                                                    <div className="blog__image mb-4">
                                                        <img src="/assets/images/blog/blog-image3.jpg" alt="PixelMind Blog" className="img-fluid" />
                                                        <div className="blog-tag">
                                                            <h3 className="text-white">15</h3>
                                                            <span className="text-white">Jul</span>
                                                        </div>
                                                    </div>

                                                    <div className="blog__content">
                                                        <ul className="blog-info pb-20 bor-bottom mb-20">
                                                            <li><i className="fa-regular fa-user"></i> By Admin</li>
                                                            <li><i className="fa-regular fa-comments"></i> 0 Comments</li>
                                                        </ul>
                                                        <br />
                                                        {/* <h2 className="mb-4">How PixelMind Solutions is Shaping the Future of Digital Transformation</h2> */}

                                                        <p>Digital innovation is the key to staying competitive in today's business landscape. Companies need more than just a website—they need digital systems that drive efficiency, deliver value, and engage their customers. This is where <strong>PixelMind Solutions</strong> makes a lasting impact.</p>
                                                        <br />
                                                        <h3>The Vision Behind PixelMind</h3>
                                                        <p>At its core, PixelMind Solutions is more than just an IT company—it is a digital transformation partner. The team offers services that assist businesses in navigating and achieving success in the digital age. Their services place a strong emphasis on creativity, technology, and strategy. From concept to execution, PixelMind supports clients through every phase of their digital journey.</p>
                                                        <br />
                                                        <h3>🔹 Core Offerings that Drive Digital Growth</h3>
                                                        <br />
                                                        <h4>Website Development That Converts</h4>
                                                        <p>PixelMind designs websites that not only look stunning but are also optimized for performance. Their sites are:</p>
                                                        <ul>
                                                            <li>Fast-loading</li>
                                                            <li>Mobile-responsive</li>
                                                            <li>SEO-friendly</li>
                                                            <li>Built using the latest coding standards</li>
                                                        </ul>
                                                        <p>Each website is customized to reflect the client’s brand and deliver the best user experience.</p>
                                                        <br />
                                                        <h4>End-to-End Mobile App Development</h4>
                                                        <p>Mobile apps are essential in today’s smartphone-driven world. PixelMind crafts high-performance apps using technologies like:</p>
                                                        <ul>
                                                            <li>Flutter</li>
                                                            <li>React Native</li>
                                                            <li>Native Android/iOS</li>
                                                        </ul>
                                                        <p>These apps are intuitive, secure, and designed to scale with your business.</p>
                                                        <br />
                                                        <h4>Digital Marketing That Delivers</h4>
                                                        <p>Marketing in the digital era requires strategy and data. PixelMind Solutions offers:</p>
                                                        <ul>
                                                            <li>SEO (Search Engine Optimization), Google Ads, and Paid Campaigns</li>
                                                            <li>Social Media Marketing</li>
                                                            <li>Online Branding & Reputation Management</li>
                                                        </ul>
                                                        <p>Their goal is clear: to help you get found and grow faster.</p>
                                                        <br />
                                                        <h3>🧠 What Sets PixelMind Apart?</h3>
                                                        <ul>
                                                            <li>🔸 <strong>Tech Meets Creativity:</strong> Every project is a blend of creative design and powerful code.</li>
                                                            <li>🔸 <strong>Client-First Approach:</strong> They listen, understand, and deliver exactly what the business needs.</li>
                                                            <li>🔸 <strong>Continuous Innovation:</strong> The team stays up to date with new trends in AI, design, mobile tech, and digital marketing.</li>
                                                        </ul>
                                                        <br />
                                                        <h3>Final Words</h3>
                                                        <p>The digital world is changing fast—and PixelMind Solutions ensures you don’t get left behind. They assist brands in transformation, growth, and leadership by combining experience, innovation, and client dedication to perfection.</p>

                                                        <br />
                                                        <div className="mt-4">
                                                            <a href="/blog" className="btn btn-outline-primary">← Back to Blog List</a>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </>
                        }
                    </div>

                    <div className="col-12 col-md-4 col-lg-4 mt-5">
                        <div className="sidebar-widget">
                            <h4 className="widget-title mb-4"><strong>Recent Posts</strong></h4>
                            <div className="recent-posts">
                                {recentPosts.map(post => {
                                    const { day, month } = getDateParts(post.date);
                                    return (
                                        <div key={post.id} className="recent-post-item mb-4">
                                            <div className="recent-post-img d-flex">
                                                <Link to={`/blog/${post.slug}`}>
                                                    <img
                                                        src={`/assets/images/blog/blog-image${post.id}.jpg`}
                                                        alt={post.title}
                                                        className="img-fluid rounded"
                                                        style={{ width: '100px', height: '80px', objectFit: 'cover' }}
                                                    />
                                                </Link>
                                                <div className="recent-post-content ps-3">
                                                    <span className="recent-post-date d-block text-muted small">
                                                        {month} {day}
                                                    </span>
                                                    <h6 className="recent-post-title mt-1">
                                                        <Link to={`/blog/${post.slug}`} className="text-dark">
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

            <Footer />
        </>
    );
}

export default BlogDetails;
