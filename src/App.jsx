import logo from "./logo-Image/logo.png";
import "./App.css";
import {
  Navbar,
  Container,
  Nav,
  Form,
  NavDropdown,
  Dropdown,
  Table,
  Stack,
  Button,
  Card,
} from "react-bootstrap"; // Import Nav and Dropdown from react-bootstrap
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faBell,
  faPhone,
  faBlog,
  faShippingFast,
} from "@fortawesome/free-solid-svg-icons";
import walmart from "./logo-Image/walmart.png";
import eBay from "./logo-Image/ebay.png";
import aliexpress from "./logo-Image/aliexpress.png";
import amazon from "./logo-Image/amazon.png";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import FontAwesome styles
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // Import the search icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTags,
  faClock,
  faStar,
  faComment,
  faCheckCircle,
  faTruck,
  faDollarSign,
  faDownLong,
  faUpLong,
} from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill1 } from "@fortawesome/free-regular-svg-icons";

import c1 from "./uploads/c1.jpg";
import c2 from "./uploads/c2.jpg";
import c3 from "./uploads/c3.jpg";
import { MegaMenu } from "primereact/megamenu";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/saga-blue/theme.css";

import Footer from "./Components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Appbar from "./Components/Appbar";

import { BiSupport, BiFile } from "react-icons/bi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { CiWarning } from "react-icons/ci";

function App() {
  const [index, setIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [platformSortBy, setPlatformSortBy] = useState("up");

  const [detailSortBy, setDetailSortBy] = useState("up");

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  library.add(faHome, faBell, faPhone, faBlog);

  const categories = [
    "Electronics",
    "Books",
    "Clothing, Shoes & Jewelry",
    "Home & Kitchen",
    "Health & Household",
    "Beauty & Personal Care",
    "Toys & Games",
    "Sports & Outdoors",
    "Tools & Home Improvement",
    "Automotive",
    "Pet Supplies",
    "Baby",
    "Movies & TV Shows",
    "Music",
    "Grocery & Gourmet Food",
    "Computers & Accessories",
    "Office Products",
    "Industrial & Scientific",
    "Arts, Crafts & Sewing",
    "Garden & Outdoor",
  ];

  const items = [
    {
      label: "Electronics",
      icon: "pi pi-fw pi-electric",
      items: [
        [
          {
            label: "Camera & Photo",
            items: [
              { label: "DSLR Cameras" },
              { label: "Mirrorless Cameras" },
              { label: "Point & Shoot Cameras" },
            ],
          },
          {
            label: "Headphones",
            items: [
              { label: "Over-Ear Headphones" },
              { label: "In-Ear Headphones" },
              { label: "Noise-Canceling Headphones" },
            ],
          },
        ],
        [
          {
            label: "Wearable Technology",
            items: [
              { label: "Smartwatches" },
              { label: "Fitness Trackers" },
              { label: "Virtual Reality Headsets" },
            ],
          },
          {
            label: "Home Audio & Theater",
            items: [
              { label: "Soundbars" },
              { label: "Home Theater Systems" },
              { label: "Wireless & Bluetooth Speakers" },
            ],
          },
        ],
        [
          {
            label: "Car Electronics",
            items: [
              { label: "Car Stereos" },
              { label: "Car Speakers" },
              { label: "Car GPS Units" },
            ],
          },
          {
            label: "Musical Instruments",
            items: [
              { label: "Guitars" },
              { label: "Keyboards" },
              { label: "Drums & Percussion" },
            ],
          },
        ],
        [
          {
            label: "GPS & Navigation",
            items: [
              { label: "Handheld GPS" },
              { label: "Car GPS" },
              { label: "Marine GPS" },
            ],
          },
        ],
      ],
    },

    {
      label: "Books",
      icon: "pi pi-fw pi-book",
      items: [
        [
          {
            label: "Literature & Fiction",
            items: [
              { label: "Contemporary Fiction" },
              { label: "Classic Literature" },
              { label: "Historical Fiction" },
            ],
          },
          {
            label: "Mystery, Thriller & Suspense",
            items: [
              { label: "Police Procedurals" },
              { label: "Psychological Thrillers" },
              { label: "Legal Thrillers" },
            ],
          },
        ],
        [
          {
            label: "Science Fiction & Fantasy",
            items: [
              { label: "Space Opera" },
              { label: "Epic Fantasy" },
              { label: "Urban Fantasy" },
            ],
          },
          {
            label: "Romance",
            items: [
              { label: "Historical Romance" },
              { label: "Paranormal Romance" },
              { label: "Contemporary Romance" },
            ],
          },
        ],
        [
          {
            label: "Biographies & Memoirs",
            items: [
              { label: "Autobiographies" },
              { label: "Memoirs of Public Figures" },
              { label: "Personal Journals" },
            ],
          },
          {
            label: "History",
            items: [
              { label: "Ancient History" },
              { label: "World War II History" },
              { label: "Cultural History" },
            ],
          },
        ],
        [
          {
            label: "Self-Help",
            items: [
              { label: "Personal Development" },
              { label: "Motivational" },
              { label: "Time Management" },
            ],
          },
          {
            label: "Cookbooks, Food & Wine",
            items: [
              { label: "Quick & Easy Cooking" },
              { label: "Baking" },
              { label: "International Cuisine" },
            ],
          },
        ],
      ],
    },

    {
      label: "Clothing, Shoes & Jewelry",
      icon: "pi pi-fw pi-book",
      items: [
        [
          {
            label: "Women",
            items: [
              { label: "Dresses" },
              { label: "Tops" },
              { label: "Bottoms" },
            ],
          },
          {
            label: "Men",
            items: [
              { label: "Shirts" },
              { label: "Pants" },
              { label: "Outerwear" },
            ],
          },
          ,
          {
            label: "Handbags & Accessories",
            items: [
              { label: "Tote Bags" },
              { label: "Wallets" },
              { label: "Sunglasses" },
            ],
          },
        ],
        [
          {
            label: "Girls",
            items: [
              { label: "Dresses" },
              { label: "Tops" },
              { label: "Shoes" },
            ],
          },
          {
            label: "Boys",
            items: [
              { label: "T-Shirts" },
              { label: "Jeans" },
              { label: "Activewear" },
            ],
          },
        ],
        [
          {
            label: "Baby",
            items: [
              { label: "Bodysuits" },
              { label: "Sleepwear" },
              { label: "Accessories" },
            ],
          },
          {
            label: "Shoes",
            items: [
              { label: "Sneakers" },
              { label: "Sandals" },
              { label: "Sandals" },
            ],
          },
        ],
        [
          {
            label: "Jewelry",
            items: [
              { label: "Necklaces" },
              { label: "Earrings" },
              { label: "Bracelets" },
            ],
          },
          {
            label: "Watches",
            items: [
              { label: "Analog Watches" },
              { label: "BakingDigital Watches" },
              { label: "Smartwatches" },
            ],
          },
        ],
      ],
    },
  ];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const onChangePlatformSortBy = (value) => {
    setPlatformSortBy(value);
  };

  const onChangeDetailSortBy = (value) => {
    setDetailSortBy(value);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };












  const renderSubcategories = (subcategories) => {
    return (
      <ul className="categories ps-0 mb-0">
        {subcategories.map((subItem) => (
          <li key={subItem.label}>
            <a href="/">{subItem.label}</a>
            {subItem.items && renderSubcategories(subItem.items)}
          </li>
        ))}
      </ul>
    );
  };
  
  const renderMenu = () => {
    return categories.map((category) => {
      const categoryItem = items.find((item) => item.label === category);
      return (
        <ul className="categories ps-0 mb-0" key={category}>
          <li>
            <a href="">{category}</a>
          {categoryItem && renderSubcategories(categoryItem.items[0])}
          </li>
        </ul>
      );
    });
  };

  return (
    <>
      <Appbar />
      <div className="banner">
        <div className="container mt-2">
          <div
            className="row align-items-stretch justify-content-center"
            style={{ overflow: "hidden" }}
          >
            <div className="px-0 d-none d-md-block col-md-3 h-100 position-relative ">


{renderMenu()}
            </div>
            <div className="px-0 col-md-9 h-100">
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src={c1}
                      alt="slide"
                      style={{ height: "100%", objectFit: "cover" }}
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src={c2}
                      alt="slide"
                      style={{ height: "100%", objectFit: "cover" }}
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src={c3}
                      alt="slide"
                      style={{ height: "100%", objectFit: "cover" }}
                    />
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container products_section"
        style={{ margin: "80px auto 0px" }}
      >
        <div className="product_filter d-flex justify-content-md-end flex-wrap justify-content-center">
          <div className="p-2 d-flex align-items-center">
            <p className="mb-0" style={{ minWidth: "70px" }}>
              Sort By
            </p>
            <Form.Select
              id="plateform"
              className="form-select"
              style={{ color: "black" }}
            >
              <option selected disabled>
                Filter By Platform
              </option>
              <option value="Amazon">Amazon</option>
              <option value="eBay">eBay</option>
              <option value="Walmart">Walmart</option>
              <option value="Ali Express">Ali Express</option>
            </Form.Select>
            <div className="ms-3">
              {platformSortBy === "down" ? (
                <FontAwesomeIcon
                  icon={faDownLong}
                  onClick={() => {
                    onChangePlatformSortBy("up");
                  }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faUpLong}
                  onClick={() => {
                    onChangePlatformSortBy("down");
                  }}
                />
              )}
            </div>
          </div>
          <div className="p-2 d-flex align-items-center">
            <p className="mb-0" style={{ minWidth: "70px" }}>
              Sort By
            </p>
            <Form.Select
              id="plateform"
              className="form-select"
              style={{ color: "black" }}
            >
              <option selected>High to Low Price</option>
              <option>Low to High Price</option>
              <option value="Amazon">Rating</option>
              <option value="eBay">Reviews</option>
              <option value="Walmart">Shipping Time</option>
              <option value="Ali Express">Shipping Cost</option>
            </Form.Select>
            <div className="ms-3">
              {detailSortBy === "down" ? (
                <FontAwesomeIcon
                  icon={faDownLong}
                  onClick={() => {
                    onChangeDetailSortBy("up");
                  }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faUpLong}
                  onClick={() => {
                    onChangeDetailSortBy("down");
                  }}
                />
              )}
            </div>
          </div>
        </div>

        <div className="products">
          <div className="product_cover d-flex flex-lg-row flex-column justify-content-center align-items-center align-items-lg-start justify-content-md-start flex-wrap flex-md-nowrap">
            <div
              style={{ width: "300px", height: "300px", aspectRatio: "3/1" }}
            >
              <img
                src="https://m.media-amazon.com/images/I/51QOvWdS0FL._AC_SX679_.jpg"
                alt=""
                style={{
                  maxWidth: "100%",
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            

            <div className="col d-flex align-items-start flex-column flex-lg-row">
              <div className="my-4 my-md-0">
                <div style={{ fontSize: "22px" }}>
                  <a href="/IPHONE 14" className="product_name">
                    IPHONE 14
                  </a>
                </div>
                <div
                  className="mt-2 d-block"
                  style={{ fontSize: "18px", color: "GrayText" }}
                >
                  xixaomiro i14Pro Max Unlocked 5G Cellphone Android Smartphone
                  Mobile Phone, 8GB RAM, 512GB ROM 1TB Expandable, 6.8'' FHD
                  Screen, 6000mAh Battery, Dual Sim Card, 48+13MP Camera (Blue)
                </div>
                <div className="mt-3 d-flex flex-wrap flex-row" style={{ fontSize: "15px"}}>
                  <div className="d-flex align-items-center" style={{minWidth: "180px" , marginRight: "10px"}}><FontAwesomeIcon style={{marginRight: "10px"}} className="color_primary" icon={faTags} />
                  Discount: 0.00</div>
                  <div className="d-flex align-items-center" style={{minWidth: "180px" , marginRight: "10px"}}><FontAwesomeIcon style={{marginRight: "10px"}} className="color_primary" icon={faClock} />
                  Shipping Time: 2 Days</div>
                  <div className="d-flex align-items-center" style={{minWidth: "180px" , marginRight: "10px"}}><FontAwesomeIcon style={{marginRight: "10px"}} className="color_primary" icon={faComment} />
                  Reviews: 128</div>
                  <div className="d-flex align-items-center" style={{minWidth: "180px" , marginRight: "10px"}}><FontAwesomeIcon style={{marginRight: "10px"}} className="color_primary" icon={faTags} />
                  Offer: 0.00</div>
                  <div className="d-flex align-items-center" style={{minWidth: "180px" , marginRight: "10px"}}><FontAwesomeIcon style={{marginRight: "10px"}}  className="color_primary" icon={faCheckCircle} />
                  sold: 120</div>
                  <div className="d-flex align-items-center" style={{minWidth: "180px" , marginRight: "10px"}}><FontAwesomeIcon style={{marginRight: "10px"}} className="color_primary" icon={faStar} />
                  Rating: 4.5</div>
                </div>
              </div>

              <div className="text-end d-flex flex-row col-12 flex-lg-column justify-content-between align-items-center col-lg"
                style={{ minWidth: "200px" }}
              >
                <div className="brand_image">
                  <img
                    src={walmart}
                    alt="brand_image"
                    style={{
                      width: "150px",
                      height: "90px",
                      cursor: "pointer",
                    }}
                  />
                </div>

                <div className="d-flex flex-column justify-content-end">
                  <table style={{ margin: "0 0 0 auto" }}>
                    <tr>
                      <td
                        className="color_primary"
                        style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                      >
                        <FontAwesomeIcon
                          icon={faTruck}
                          className="color_primary"
                        />{" "}
                        9.80
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="color_primary"
                        style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                      >
                        <FontAwesomeIcon icon={faDollarSign} /> 90.00
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="color_primary"
                        style={{ fontWeight: "bold", fontSize: "2rem" }}
                      >
                        <FontAwesomeIcon
                          icon={faDollarSign}
                          className="color_primary"
                        />{" "}
                        99.80
                      </td>
                    </tr>
                  </table>
                  <hr />
                  <button className="btn btn-outline-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Container className="featured_products">
        <h2 className="mb-4 fw-bold" style={{ marginTop: "80px" }}>
          Featured Products
        </h2>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-xl-3 mt-4">
            <div className="product-container">
              <div className="product_image_cover">
                <img
                  className="product_image"
                  src={logo}
                  width="100%"
                  height="100%"
                  alt="Product Image"
                />
              </div>
              <div className="product_details">
                <h2 className="product-name">Title</h2>
                {/* <div
                  className="product-title"
                  style={{ fontSize: "18px", color: "GrayText" }}
                >
                  {" "}
                  xixaomiro i14Pro Max Unlocked 5G Cellphone Android Smartphone
                  Mobile Phone, 8GB RAM, 512GB ROM 1TB Expandable, 6.8'' FHD
                  Screen, 6000mAh Battery, Dual Sim Card, 48+13MP Camera (Blue)
                </div> */}
                <div
                  className="product-info d-flex align-items-center flex-row my-3"
                  style={{ justifyContent: "space-between" }}
                >
                  <div style={{ fontSize: "15px" }}>
                    <FontAwesomeIcon className="color_primary" icon={faStar} />{" "}
                    Rating: 4.5
                  </div>
                  <div style={{ fontSize: "15px" }}>
                    {" "}
                    <FontAwesomeIcon
                      className="color_primary"
                      icon={faComment}
                    />{" "}
                    Reviews: 128
                  </div>
                </div>
                <button
                  className="btn btn-primary mt-3"
                  style={{ borderRadius: "0px" }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xl-3 mt-4">
            <div className="product-container">
              <div className="product_image_cover">
                <img
                  className="product_image"
                  src="https://m.media-amazon.com/images/I/719oBAdAl7L._AC_UF1000,1000_QL80_FMwebp_.jpg"
                  width="100%"
                  height="100%"
                  alt="Product Image"
                />
              </div>
              <div className="product_details">
                <h2 className="product-name">Title</h2>
                {/* <div
                  className="product-title"
                  style={{ fontSize: "18px", color: "GrayText" }}
                >
                  {" "}
                  xixaomiro i14Pro Max Unlocked 5G Cellphone Android Smartphone
                  Mobile Phone, 8GB RAM, 512GB ROM 1TB Expandable, 6.8'' FHD
                  Screen, 6000mAh Battery, Dual Sim Card, 48+13MP Camera (Blue)
                </div> */}
                <div
                  className="product-info d-flex align-items-center flex-row my-3"
                  style={{ justifyContent: "space-between" }}
                >
                  <div style={{ fontSize: "15px" }}>
                    <FontAwesomeIcon className="color_primary" icon={faStar} />{" "}
                    Rating: 4.5
                  </div>
                  <div style={{ fontSize: "15px" }}>
                    {" "}
                    <FontAwesomeIcon
                      className="color_primary"
                      icon={faComment}
                    />{" "}
                    Reviews: 128
                  </div>
                </div>
                <button
                  className="btn btn-primary mt-3"
                  style={{ borderRadius: "0px" }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xl-3 mt-4">
            <div className="product-container">
              <div className="product_image_cover">
                <img
                  className="product_image"
                  src="https://i.ebayimg.com/images/g/yBQAAOSwz1hk78Cu/s-l1600.png"
                  width="100%"
                  height="100%"
                  alt="Product Image"
                />
              </div>
              <div className="product_details">
                <h2 className="product-name">Title</h2>
                {/* <div
                  className="product-title"
                  style={{ fontSize: "18px", color: "GrayText" }}
                >
                  {" "}
                  xixaomiro i14Pro Max Unlocked 5G Cellphone Android Smartphone
                  Mobile Phone, 8GB RAM, 512GB ROM 1TB Expandable, 6.8'' FHD
                  Screen, 6000mAh Battery, Dual Sim Card, 48+13MP Camera (Blue)
                </div> */}
                <div
                  className="product-info d-flex align-items-center flex-row my-3"
                  style={{ justifyContent: "space-between" }}
                >
                  <div style={{ fontSize: "15px" }}>
                    <FontAwesomeIcon className="color_primary" icon={faStar} />{" "}
                    Rating: 4.5
                  </div>
                  <div style={{ fontSize: "15px" }}>
                    {" "}
                    <FontAwesomeIcon
                      className="color_primary"
                      icon={faComment}
                    />{" "}
                    Reviews: 128
                  </div>
                </div>
                <button
                  className="btn btn-primary mt-3"
                  style={{ borderRadius: "0px" }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xl-3 mt-4">
            <div className="product-container">
              <div className="product_image_cover">
                <img
                  className="product_image"
                  src={logo}
                  width="100%"
                  height="100%"
                  alt="Product Image"
                />
              </div>
              <div className="product_details">
                <h2 className="product-name">Title</h2>
                {/* <div
                  className="product-title"
                  style={{ fontSize: "18px", color: "GrayText" }}
                >
                  {" "}
                  xixaomiro i14Pro Max Unlocked 5G Cellphone Android Smartphone
                  Mobile Phone, 8GB RAM, 512GB ROM 1TB Expandable, 6.8'' FHD
                  Screen, 6000mAh Battery, Dual Sim Card, 48+13MP Camera (Blue)
                </div> */}
                <div
                  className="product-info d-flex align-items-center flex-row my-3"
                  style={{ justifyContent: "space-between" }}
                >
                  <div style={{ fontSize: "15px" }}>
                    <FontAwesomeIcon className="color_primary" icon={faStar} />{" "}
                    Rating: 4.5
                  </div>
                  <div style={{ fontSize: "15px" }}>
                    {" "}
                    <FontAwesomeIcon
                      className="color_primary"
                      icon={faComment}
                    />{" "}
                    Reviews: 128
                  </div>
                </div>
                <button
                  className="btn btn-primary mt-3"
                  style={{ borderRadius: "0px" }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="blog_posts">
        <h2 className="mb-4 fw-bold" style={{ marginTop: "80px" }}>
          Latest Blog Posts
        </h2>

        <Slider {...settings} className="mt-4">
          <div className="col flex px-2">
            <div className="product-container p-3">
              <img className="product-image" src={logo} alt="Product Image" />
              <a
                href="/"
                className="d-block text-start color_primary product-name"
              >
                Unlocking E-commerce Success: Strategies for Maximizing Your
                Online Store's Potential
              </a>
              <button
                className="btn btn-primary mt-3"
                style={{ borderRadius: "0px" }}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="col flex px-2">
            <div className="product-container p-3">
              <img className="product-image" src={logo} alt="Product Image" />
              <a
                href="/"
                className="d-block text-start color_primary product-name"
              >
                Unlocking E-commerce Success: Strategies for Maximizing Your
                Online Store's Potential
              </a>
              <button
                className="btn btn-primary mt-3"
                style={{ borderRadius: "0px" }}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="col flex px-2">
            <div className="product-container p-3">
              <img className="product-image" src={logo} alt="Product Image" />
              <a
                href="/"
                className="d-block text-start color_primary product-name"
              >
                Unlocking E-commerce Success: Strategies for Maximizing Your
                Online Store's Potential
              </a>
              <button
                className="btn btn-primary mt-3"
                style={{ borderRadius: "0px" }}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="col flex px-2">
            <div className="product-container mx-auto p-3">
              <img className="product-image" src={logo} alt="Product Image" />
              <a
                href="/"
                className="d-block text-start color_primary product-name"
              >
                Unlocking E-commerce Success: Strategies for Maximizing Your
                Online Store's Potential
              </a>
              <button
                className="btn btn-primary mt-3"
                style={{ borderRadius: "0px" }}
              >
                Read More
              </button>
            </div>
          </div>
        </Slider>

        <center>
          <Button
            className="btn btn-primary"
            style={{ width: "30%", marginTop: "50px" }}
          >
            See ALL
          </Button>
        </center>
      </Container>

      <Container style={{ margin: "50px auto" }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-3 col-md-6">
            <Card
              style={{ maxWidth: "18rem", width: "100%", margin: "20px auto" }}
            >
              <BiSupport
                className="color_primary"
                style={{ margin: "20px auto", fontSize: "60px" }}
              />
              <Card.Body>
                <center>
                  <Card.Title>Easy Decision</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Get All products free
                  </Card.Subtitle>
                </center>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6">
            <Card
              style={{ maxWidth: "18rem", width: "100%", margin: "20px auto" }}
            >
              <FaMoneyBillAlt
                className="color_primary"
                style={{ margin: "20px auto", fontSize: "60px" }}
              />
              <Card.Body>
                <center>
                  <Card.Title>No Hidden Costs</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Get All products free
                  </Card.Subtitle>
                </center>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6">
            <Card
              style={{ maxWidth: "18rem", width: "100%", margin: "20px auto" }}
            >
              <CiWarning
                className="color_primary"
                style={{ margin: "20px auto", fontSize: "60px" }}
              />
              <Card.Body>
                <center>
                  <Card.Title>No Scams</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Get All products free
                  </Card.Subtitle>
                </center>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6">
            <Card
              style={{ maxWidth: "18rem", width: "100%", margin: "20px auto" }}
            >
              <BiFile
                className="color_primary"
                style={{ margin: "20px auto", fontSize: "60px" }}
              />
              <Card.Body>
                <center>
                  <Card.Title>No Fraud Best Quality</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Get All products free
                  </Card.Subtitle>
                </center>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}

export default App;
