/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import React from "react";
import Appbar from "../Components/Appbar";
import Breadcrumb from "../Components/Breadcrumb";
import Footer from "../Components/Footer";

export default function Blog() {
  return (
    <>
      <Appbar />
      <Breadcrumb page="Posts" />

      <div class="container blog_cover mt-5">
        <div className="row">
          <div className="col-lg-9 col-md-7">
            <div className="post">
              <div className="blog content">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/nature/012.webp"
                  style={{ width: "100%" }}
                />
                <h5 className="mt-4">
                  Duis autem vel eum iriure dolor in hendrit in vulputate velit
                  esse
                </h5>
                <div
                  className="mt-3"
                  style={{ fontSize: "15px", marginBottom: "10px" }}
                >
                  Posted by: Wash upito
                  <div
                    className="vr"
                    style={{ marginRight: "10px", marginLeft: "10px" }}
                  />
                  1 Comment
                </div>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, molestias debitis maxime accusamus, quasi, qui fugiat atque laudantium sint quos facilis consequatur dignissimos eius perspiciatis molestiae autem impedit necessitatibus animi! 
                  <br />
                  <a href="/blog-post" className="btn mt-3 p-0">Read More</a>
                </p>
              </div>
            </div>
            <div className="post">
              <div className="blog content">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/nature/012.webp"
                  style={{ width: "100%" }}
                />
                <h5 className="mt-4">
                  Duis autem vel eum iriure dolor in hendrit in vulputate velit
                  esse
                </h5>
                <div
                  className="mt-3"
                  style={{ fontSize: "15px", marginBottom: "10px" }}
                >
                  Posted by: Wash upito
                  <div
                    className="vr"
                    style={{ marginRight: "10px", marginLeft: "10px" }}
                  />
                  1 Comment
                </div>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, molestias debitis maxime accusamus, quasi, qui fugiat atque laudantium sint quos facilis consequatur dignissimos eius perspiciatis molestiae autem impedit necessitatibus animi! 
                  <br />
                  <a href="/blog-post" className="btn mt-3 p-0">Read More</a>
                </p>
              </div>
            </div>
            <div className="post">
              <div className="blog content">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/nature/012.webp"
                  style={{ width: "100%" }}
                />
                <h5 className="mt-4">
                  Duis autem vel eum iriure dolor in hendrit in vulputate velit
                  esse
                </h5>
                <div
                  className="mt-3"
                  style={{ fontSize: "15px", marginBottom: "10px" }}
                >
                  Posted by: Wash upito
                  <div
                    className="vr"
                    style={{ marginRight: "10px", marginLeft: "10px" }}
                  />
                  1 Comment
                </div>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, molestias debitis maxime accusamus, quasi, qui fugiat atque laudantium sint quos facilis consequatur dignissimos eius perspiciatis molestiae autem impedit necessitatibus animi! 
                  <br />
                  <a href="/blog-post" className="btn mt-3 p-0">Read More</a>
                </p>
              </div>
            </div>
            <div className="post">
              <div className="blog content">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/nature/012.webp"
                  style={{ width: "100%" }}
                />
                <h5 className="mt-4">
                  Duis autem vel eum iriure dolor in hendrit in vulputate velit
                  esse
                </h5>
                <div
                  className="mt-3"
                  style={{ fontSize: "15px", marginBottom: "10px" }}
                >
                  Posted by: Wash upito
                  <div
                    className="vr"
                    style={{ marginRight: "10px", marginLeft: "10px" }}
                  />
                  1 Comment
                </div>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, molestias debitis maxime accusamus, quasi, qui fugiat atque laudantium sint quos facilis consequatur dignissimos eius perspiciatis molestiae autem impedit necessitatibus animi! 
                  <br />
                  <a href="/blog-post" className="btn mt-3 p-0">Read More</a>
                </p>
              </div>
            </div>
            <div className="post">
              <div className="blog content">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/fluid/nature/012.webp"
                  style={{ width: "100%" }}
                />
                <h5 className="mt-4">
                  Duis autem vel eum iriure dolor in hendrit in vulputate velit
                  esse
                </h5>
                <div
                  className="mt-3"
                  style={{ fontSize: "15px", marginBottom: "10px" }}
                >
                  Posted by: Wash upito
                  <div
                    className="vr"
                    style={{ marginRight: "10px", marginLeft: "10px" }}
                  />
                  1 Comment
                </div>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, molestias debitis maxime accusamus, quasi, qui fugiat atque laudantium sint quos facilis consequatur dignissimos eius perspiciatis molestiae autem impedit necessitatibus animi! 
                  <br />
                  <a href="/blog-post" className="btn mt-3 p-0">Read More</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-5">
            <div
              className="d-flex justify-content-between"
              style={{ border: "1px solid var(--primary-color)" }}
            >
              <input
                type="search"
                id="email"
                className="py-1 px-2 email"
                placeholder="Search"
                style={{
                  flexGrow: "1",
                  width: "130px",
                  border: "none",
                  outline: "none",
                }}
              />
              <button className="btn btn-primary px-2 py-1">Search</button>
            </div>

            <ul
              className="banner_category mt-4"
              style={{ listStyleType: "none", cursor: "pointer" }}
            >
              <li>
                <a href="" style={{ display: "block" }}>
                  category
                </a>
              </li>
              <li>
                <a href="" style={{ display: "block" }}>
                  category
                </a>
              </li>
              <li>
                <a href="" style={{ display: "block" }}>
                  category
                </a>
              </li>
              <li>
                <a href="" style={{ display: "block" }}>
                  category
                </a>
              </li>
              <li>
                <a href="" style={{ display: "block" }}>
                  category
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
