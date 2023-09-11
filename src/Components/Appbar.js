/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useState } from "react";
import logo from "../logo-Image/helper mall.png";
import { Navbar, Container, Nav, Form, NavDropdown } from "react-bootstrap"; // Import Nav and Dropdown from react-bootstrap
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faBell,
  faPhone,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // Import the search icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordion from "./Accordion";

export default function Appbar() {
  const [showSidebar, setShowSidebar] = useState(false);
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

  const [selectedCategory, setSelectedCategory] = useState("All"); // Default selected category

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const getCategoryDropdownWidth = (text) => {
    const textLength = text.length;
    const minWidth = 100; // Minimum width
    const maxWidth = 300; // Maximum width
    const width = Math.min(maxWidth, Math.max(minWidth, textLength * 12)); // Adjust the multiplication factor as needed
    return width;
  };

  const onChangeSidebarToggler = function () {
    setShowSidebar(!showSidebar);
  };





    

  return (
    <>
      <Navbar expand="lg">
        <Container style={{ padding: "10px" }}>
          <Navbar.Brand href="#">
            <img src={logo} alt="Logo" width="150" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="mx-auto"
              style={{ maxWidth: "800px", width: "100%" }}
            >
              <div className="input-group">
                <Form.Select
                  id="categories"
                  className="form-select"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </Form.Select>
                <input
                  type="text"
                  className="form-control"
                  style={{ width: "50%" }}
                  placeholder="Search Your Product"
                />

                <button className="btn btn-secondary searchbtn" type="button">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </Nav>
          </Navbar.Collapse>

          <div className="d-none d-lg-block navbar-brand"></div>
        </Container>
      </Navbar>

      <div className="menu_bar">
        <div className="container">
          <div className="row flex-row align-items-center align-items-md-stretch justify-content-center">
            <div className="px-0 d-none d-md-block col-md-3">
              <div
                className="h-100 text-white category_text d-flex align-items-center ps-3"
                style={{ cursor: "pointer" }}
              >
                Categories
              </div>
            </div>
            <div className="p-2 d-inline-flex d-md-none col">
              <div
                className="hamburger"
                onClick={() => {
                  onChangeSidebarToggler();
                }}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="px-0 col-9">
              <Nav className="mx-auto justify-content-start">
                <Nav.Link
                  href="/"
                  style={{
                    color: "white",
                    borderBottom: "2px solid white",
                    margin: "3px",
                  }}
                >
                  {/* <FontAwesomeIcon icon={faHome} className="me-2" />  */}
                  Home
                </Nav.Link>

                <NavDropdown
                  title="Alert"
                  id="nav-dropdown"
                  style={{ color: "white" }}
                >
                  <NavDropdown.Item eventKey="4.1">
                    Offer/Discount
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link
                  href="/contact"
                  style={{
                    color: "white",
                    borderBottom: "2px solid white",
                    margin: "3px",
                  }}
                >
                  {/* <FontAwesomeIcon icon={faPhone} className="me-2" /> */}
                  Contact Us
                </Nav.Link>
                <Nav.Link
                  href="blog"
                  style={{
                    color: "white",
                    borderBottom: "2px solid white",
                    margin: "3px",
                  }}
                >
                  {/* <FontAwesomeIcon icon={faBlog} className="me-2" />  */}
                  Blogs
                </Nav.Link>
              </Nav>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`sidebar_bg ${
          showSidebar ? "show_sidebar" : "hide_sidebar"
        }`}
      >
        <div className="sidebar position-relative">
          <button
            className="btn position-absolute"
            style={{ top: "10px", right: "10px" }}
            onClick={() => onChangeSidebarToggler()}
          >
            X
          </button>

          <div
            className="h-100 category_text pt-5 p-3"
            style={{ cursor: "pointer", overflow: "scroll" }}
          >
            <h2>Categories</h2>

            <Accordion />
          </div>
        </div>
      </div>
    </>
  );
}
