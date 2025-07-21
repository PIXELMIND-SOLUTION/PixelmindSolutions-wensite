import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

function Header() {
    const [sticky, setSticky] = useState("");
    useEffect(() => {
        // handleShow();
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.addEventListener("scroll", isSticky);
        return () => {
          window.removeEventListener("scroll", isSticky);
        };
      }, []);
      const isSticky = () => {
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 180 ? "header-area menu-fixed fadeInDown" : "";
        setSticky(stickyClass);
        console.log(stickyClass);
      };
    
      const classes = `${sticky}`;
  return (
    <div>
          {/* Preloader area start */}
  <div className="loading">
    <span className="text-capitalize">L</span>
    <span>o</span>
    <span>a</span>
    <span>d</span>
    <span>i</span>
    <span>n</span>
    <span>g</span>
  </div>
  <div id="preloader"></div>
  {/* Preloader area end */}
  {/* Mouse cursor area start here */}
  <div className="mouse-cursor cursor-outer" />
  <div className="mouse-cursor cursor-inner" />
  {/* Mouse cursor area end here */}
  {/* Top header area start here */}
  <div className="header-top d-none d-lg-block">
    <div className="container header__container">
      <div className="header-top-wrp">
        <ul className="info">
          <li>
            <svg
              width={15}
              height={12}
              viewBox="0 0 15 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.8748 8.50453C13.8748 9.85566 12.7757 10.953 11.4263 10.953H3.39325C2.04384 10.953 0.94475 9.85563 0.94475 8.50453V3.39322C0.944449 2.95776 1.06111 2.53021 1.28253 2.15525L5.20216 6.07488C5.78856 6.663 6.57384 6.98706 7.41059 6.98706C8.24563 6.98706 9.03091 6.663 9.61731 6.07488L13.5369 2.15525C13.7584 2.5302 13.875 2.95776 13.8747 3.39322V8.50453H13.8748ZM11.4263 0.94475H3.39325C2.836 0.94475 2.32159 1.13334 1.91009 1.44712L5.86916 5.40791C6.27897 5.81597 6.82591 6.04231 7.41059 6.04231C7.99356 6.04231 8.54053 5.81597 8.95031 5.40791L12.9094 1.44712C12.4979 1.13334 11.9835 0.94475 11.4263 0.94475ZM11.4263 0H3.39325C1.52259 0 0 1.52259 0 3.39325V8.50456C0 10.3769 1.52259 11.8978 3.39325 11.8978H11.4263C13.2969 11.8978 14.8195 10.3769 14.8195 8.50456V3.39322C14.8195 1.52256 13.2969 0 11.4263 0Z"
                fill="white"
              />
            </svg>
            <a href="#0" className="ms-1">
            info@pixelmindsolutions.com
            </a>
          </li>
          <li className="ms-4">
            <svg
              width={16}
              height={15}
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_529_224)">
                <path
                  d="M14.8984 10.5909C14.8735 10.5703 12.0629 8.57063 11.304 8.69297C10.9379 8.75766 10.7288 9.0075 10.3093 9.50719C10.1933 9.6463 10.0747 9.7832 9.95352 9.91781C9.68836 9.83143 9.42973 9.72616 9.17961 9.60281C7.88845 8.97422 6.84524 7.93101 6.21665 6.63984C6.0933 6.38973 5.98803 6.1311 5.90165 5.86594C6.03946 5.73984 6.23258 5.57719 6.31508 5.50781C6.81243 5.09062 7.0618 4.88109 7.12649 4.51453C7.25915 3.75562 5.24915 0.945937 5.22852 0.920625C5.13698 0.790808 5.01777 0.682933 4.87948 0.604789C4.74118 0.526645 4.58726 0.480181 4.42883 0.46875C3.61415 0.46875 1.28821 3.48563 1.28821 3.99422C1.28821 4.02375 1.33086 7.02562 5.03258 10.7911C8.79383 14.4886 11.7957 14.5312 11.8252 14.5312C12.3334 14.5312 15.3507 12.2053 15.3507 11.3906C15.3392 11.2322 15.2926 11.0783 15.2144 10.94C15.1362 10.8017 15.0282 10.6825 14.8984 10.5909ZM11.7732 13.5909C11.3663 13.5562 8.84446 13.2239 5.69446 10.1297C2.58524 6.96422 2.26133 4.43813 2.22899 4.04672C2.84342 3.08233 3.58545 2.20548 4.43493 1.44C4.45368 1.45875 4.47852 1.48688 4.5104 1.52344C5.16188 2.41276 5.72309 3.36481 6.18571 4.36547C6.03527 4.51682 5.87626 4.65939 5.70946 4.7925C5.4508 4.98959 5.21328 5.21297 5.00071 5.45906C4.96474 5.50953 4.93914 5.56663 4.92538 5.62705C4.91162 5.68748 4.90998 5.75003 4.92055 5.81109C5.01975 6.24081 5.17169 6.65662 5.3729 7.04906C6.09378 8.52939 7.28997 9.72541 8.7704 10.4461C9.16276 10.6476 9.57859 10.7997 10.0084 10.8989C10.0694 10.9097 10.132 10.9082 10.1925 10.8944C10.2529 10.8807 10.31 10.8549 10.3604 10.8188C10.6074 10.6053 10.8315 10.3669 11.0293 10.1072C11.1765 9.93188 11.3729 9.69797 11.4474 9.63188C12.4506 10.094 13.4048 10.6559 14.2956 11.3091C14.3345 11.3419 14.3621 11.3672 14.3804 11.3836C13.6149 12.2333 12.7379 12.9755 11.7732 13.59V13.5909ZM11.6007 7.03125H12.5382C12.5371 6.03703 12.1416 5.08385 11.4386 4.38083C10.7356 3.67781 9.78243 3.28237 8.78821 3.28125V4.21875C9.5339 4.21949 10.2488 4.51605 10.7761 5.04333C11.3034 5.57062 11.6 6.28556 11.6007 7.03125Z"
                  fill="white"
                />
                <path
                  d="M13.9445 7.03125H14.882C14.8801 5.41566 14.2375 3.86677 13.0951 2.72437C11.9527 1.58198 10.4038 0.939361 8.78821 0.9375V1.875C10.1552 1.87661 11.4658 2.42038 12.4324 3.38701C13.3991 4.35365 13.9428 5.66422 13.9445 7.03125Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath>
                  <rect
                    width={15}
                    height={15}
                    fill="white"
                    transform="translate(0.819458)"
                  />
                </clipPath>
              </defs>
            </svg>
            <a href="#0" className="ms-1">
              +91 9666317749
            </a>
          </li>
        </ul>
        <ul className="link-info">
          <li>
            <a target='blank' href="https://www.facebook.com/share/1E6gPK4vhm/" >
              <i className="fa-brands fa-facebook-f" />
            </a>
          </li>
          <li>
            <a target='blank' href="https://www.instagram.com/pixelmindsolutions?igsh=ZmQ1c2c0b2twdTd1">
              <i className="fa-brands fa-instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-linkedin-in" />
            </a>
          </li>
        
        </ul>
      </div>
    </div>
  </div>
  {/* Top header area end here */}
  {/* Header area start here */}
  <header className={classes || "header-area"} >
    <div className="container header__container">
      <div className="header__main">
          <Link to="/" className="logo1">
          <img src="/assets/images/logo/logo1.png" alt="logo" />
    {/* <img style={{width:"50px"}} src="/assets/images/icon/counter-icon3.png" alt="icon" />
    <h2 className="text-white">pixelmind</h2> */}
  </Link>
        <div className="main-menu">
          <nav className="navshowandhide">
            <ul>
              <li >
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
           
              <li>
                <Link to="/contact">Contact</Link>
              </li>

              <li>
                <Link to="/blog">Blog</Link>
              </li>

              {/* <li>
                <Link to="/portfolio">Our Portfolio</Link>
              </li> */}
           
            </ul>
          </nav>
        </div>
        <div className="d-none d-lg-inline-block">
          <Link to="/contact" className="btn-one">
            Get A Quote <i className="fa-regular fa-arrow-right-long" />
          </Link>
        </div>
        <div className="bars d-block d-lg-none">
          <i id="openButton" className="fa-solid fa-bars" />
        </div>
      </div>
    </div>
  </header>
  {/* Header area end here */}
  {/* Sidebar area start here */}
  <div id="targetElement" className="sidebar-area sidebar__hide">
    <div className="sidebar__overlay" />
    {/* <Link to="/" className="logo mb-40">
      <img src="/assets/images/logo/logo.svg" alt="logo" />
    </Link> */}
    <Link to="/" className="logo1  mb-40">
    <img style={{width:"50px"}} src="/assets/images/icon/counter-icon3.png" alt="icon" />
    <h2 className="text-white">pixelmind</h2>
  </Link>
    <div className="sidebar__search mb-30">
      {/* <input type="text" placeholder="Search..." />
      <i className="fa-regular fa-magnifying-glass" /> */}
       <div className="">
        {/* <Link to="/" className="logo">
          <img src="/assets/images/logo/logo-light.svg" alt="logo" />
        </Link> */}
        <div className="main-menu">
          <nav className="">
            <ul>
              <li >
                <Link style={{color:"white"}} to="/">Home</Link>
              </li>
              <li>
                <Link style={{color:"white"}} to="/about">About</Link>
              </li>
              <li>
                <Link style={{color:"white"}} to="/services">Services</Link>
              </li>
           
              <li>
                <Link style={{color:"white"}} to="/contact">Contact</Link>
              </li>

              <li>
                <Link style={{color:"white"}} to="/blog">Blog</Link>
              </li>

              <li>
                <Link style={{color:"white"}} to="/portfolio">Our Portfolio</Link>
              </li>
           
            </ul>
          </nav>
        </div>
        <div className="d-none d-lg-inline-block">
          <Link to="/contact" className="btn-one">
            Get A Quote <i className="fa-regular fa-arrow-right-long" />
          </Link>
        </div>
        <div className="bars d-block d-lg-none">
          <i id="openButton" className="fa-solid fa-bars" />
        </div>
      </div>
    </div>
    <div className="mobile-menu overflow-hidden" />
    <ul className="info pt-40">
   
      <li className="py-2">
        <i className="fa-solid primary-color fa-phone-volume" />{" "}
        <a href="tel: +91 9666317749"> +91 9666317749</a>
      </li>
      <li>
        <i className="fa-solid primary-color fa-paper-plane" />{" "}
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info@pixelmindsolutions.com" target="_blank">   info@pixelmindsolutions.com</a>
      </li>
    </ul>
    <div className="social-icon mt-20">
      <a href="https://www.facebook.com/share/1E6gPK4vhm/" target="_blank">
        <i className="fa-brands fa-facebook-f" />
      </a>
      <a href="https://x.com/PIXELMINDS41249" target="_blank">
        <i className="fa-brands fa-twitter" />
      </a>
      <a href="https://www.linkedin.com/company/pixelmindsolutions-pvt-ltd/" target="_blank">
        <i className="fa-brands fa-linkedin-in" />
      </a>
      <a href="https://www.instagram.com/pixelmindsolutions?igsh=ZmQ1c2c0b2twdTd1" target="_blank">
        <i className="fa-brands fa-instagram" />
      </a>
    </div>
    <button id="closeButton" className="text-white">
      <i className="fa-solid fa-xmark" />
    </button>
  </div>
  {/* Sidebar area end here */}
  {/* Fullscreen search area start here */}
  <div className="search-wrap">
    <div className="search-inner">
      <i className="fas fa-times search-close" id="search-close" />
      <div className="search-cell">
        <form method="get">
          <div className="search-field-holder">
            <input
              type="search"
              className="main-search-input"
              placeholder="Search..."
            />
          </div>
        </form>
      </div>
    </div>
  </div>

  {/* WhatsApp floating button */}
  <div className="whatsapp-float">
    <a 
      href="https://wa.me/9052097475" 
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-link"
    >
      <i className="fa-brands fa-whatsapp whatsapp-icon"></i>
    </a>
  </div>
    </div>
  )
}

export default Header