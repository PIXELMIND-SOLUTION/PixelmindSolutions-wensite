import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Blog() {
  const blogs = [
    {
      id: 1,
      name: "empowering-businesses-through-it-services",
      title: "PIXELMINDSOLUTIONS: Empowering Businesses Through Innovative IT Services",
      date: "2025-07-01",
      author: "Admin"
    },
    {
      id: 2,
      name: "professional-it-consulting-and-app-development",
      title: "PIXELMINDSOLUTIONS: Driving Innovation Through Smart IT Services",
      date: "2025-07-02",
      author: "Admin"
    },
    {
      id: 3,
      name: "application-maintainence-and-digital-growth-strategy",
      title: "How PIXELMINDSOLUTIONS is Shaping the Future of Digital Transformation",
      date: "2025-07-03",
      author: "Admin"
    }
  ];

  const getDateParts = (dateStr) => {
    const dateObj = new Date(dateStr);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = dateObj.toLocaleString('default', { month: 'short' });
    return { day, month };
  };

  return (
    <>
      <Header />
      <section className="blog-area pt-120 pb-120">
        <div className="container">
          <div className="section-header text-center mb-60">
            <h5 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
              <img className="me-1" src="/assets/images/icon/section-title.png" alt="icon" />
              Blog & News
            </h5>
            <h2 className="wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
              Explore Blogs and News
            </h2>
          </div>
          <div className="row g-4">
            {blogs.map((blog, index) => {
              const { day, month } = getDateParts(blog.date);
              return (
                <div
                  key={blog.id}
                  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay={`${index * 200}ms`}
                  data-wow-duration="1500ms"
                >
                  <div className="blog__item">
                    <Link to={`/blog/${blog.name}`} className="blog__image d-block image">
                      <img src={`/assets/images/blog/blog-image${blog.id}.jpg`} alt="blog preview" />
                      <div className="blog-tag">
                        <h3 className="text-white">{day}</h3>
                        <span className="text-white">{month}</span>
                      </div>
                    </Link>
                    <div className="blog__content">
                      <ul className="blog-info pb-20 bor-bottom mb-20">
                        <li><a href="#0">By {blog.author}</a></li>
                        <li><a href="#0">0 Comments</a></li>
                      </ul>
                      <h3>
                        <Link to={`/blog/${blog.name}`} className="primary-hover">
                          {blog.title.length > 60 ? blog.title.slice(0, 57) + '...' : blog.title}
                        </Link>
                      </h3>
                      <Link className="mt-25 read-more-btn" to={`/blog/${blog.name}`}>
                        Read More <i className="fa-regular fa-arrow-right-long" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Blog;
