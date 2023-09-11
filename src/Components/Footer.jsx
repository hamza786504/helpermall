import React from "react";
import "./styles/footer.css";
import { BiLogoFacebook } from "react-icons/bi";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FaPinterest, FaAppStore } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { BiLogoPlayStore } from "react-icons/bi";

function Footer() {
  return (
    <>
      <footer className="footer mt-5 py-5">
        <div className="container">
          <div className="row">
            <div className="mt-5 col-xl-4 col-lg-6 col-md-6">
              <h3 className="color_primary">Logo</h3>
              <p className="my-3 text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
                sed ducimus deleniti, consectetur qui hic distinctio excepturi
                dignissimos temporibus eum.
              </p>
              <div className="mt-5 follow_us">
                <h5 className="text-white mb-3">Follow Us</h5>
                <div className="icons d-flex align-items-center justify-content-start">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="icon"
                  >
                    <BiLogoFacebook
                      className="text-white"
                      style={{ fontSize: "20px" }}
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="icon"
                  >
                    <BsTwitter
                      className="text-white"
                      style={{ fontSize: "20px" }}
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="icon"
                  >
                    <AiOutlineGooglePlus
                      className="text-white"
                      style={{ fontSize: "20px" }}
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="icon"
                  >
                    <FaPinterest
                      className="text-white"
                      style={{ fontSize: "20px" }}
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="icon"
                  >
                    <AiFillYoutube
                      className="text-white"
                      style={{ fontSize: "20px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-5 col-xl-4 col-lg-6 col-md-6">
              <div className="row">
                <div className="col-6">
                  <h5 className="text-uppercase text-white">Information</h5>
                  <ul className="mt-4">
                    <li className="text-white">
                      > <a href="/">About Us</a>
                    </li>
                    <li className="text-white">
                      > <a href="/">FAQ</a>
                    </li>
                    <li className="text-white">
                      > <a href="/">Warrenty And Services</a>
                    </li>
                    <li className="text-white">
                      > <a href="/">Support 24/7 page</a>
                    </li>
                    <li className="text-white">
                      > <a href="/">Blog</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <h5 className="text-uppercase text-white">My Account</h5>
                  <ul className="mt-4">
                    <li className="text-white">
                      > <a href="/">Brands</a>
                    </li>
                    <li className="text-white">
                      > <a href="/">Gift Certificates</a>
                    </li>
                    <li className="text-white">
                      > <a href="/">Affiliate</a>
                    </li>
                    <li className="text-white">
                      > <a href="/">Specials</a>
                    </li>
                    <li className="text-white">
                      > <a href="/">FAQs</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-5 col-xl-4 col-lg-6 col">
              <h5 className="text-uppercase text-white">DOWNLOAD OUR APPS</h5>
              <div className="d-flex align-items-center flex-nowrap mt-4">
                <button
                  className="btn btn-outline-primary text-white px-4 me-2"
                  style={{ fontSize: "12px" }}
                >
                  <BiLogoPlayStore /> Get It On Google Play
                </button>
                <button
                  className="btn btn-outline-primary text-white px-4"
                  style={{ fontSize: "12px" }}
                >
                  <FaAppStore /> Get It On App Store
                </button>
              </div>
              <h5 className="text-uppercase text-white mt-4">
                SIGN UP FOR NEWS LETTER
              </h5>
              <p className="text-white">Enter your email address</p>
              <div className="newslatter_box">
                <input type="text" id="email" className="email" placeholder="Email" />
                <button className="btn btn-primary" style={{marginTop: "-4px"}}>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
