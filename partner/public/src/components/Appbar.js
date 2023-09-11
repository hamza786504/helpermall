/* eslint-disable jsx-a11y/anchor-is-valid */
import  {React, useState,} from 'react'
import logo from '../logo-Image/logo.png';
import { Navbar, Container, Nav, Form, NavDropdown } from 'react-bootstrap'; // Import Nav and Dropdown from react-bootstrap
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faBell, faPhone, faBlog } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; // Import the search icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MegaMenu } from 'primereact/megamenu';

export default function Appbar() {

  // const [index, setIndex] = useState(0);ss
    library.add(faHome, faBell, faPhone, faBlog);

    const categories = [
        "Categories", // Add 'All' as the default selected option
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
          label: 'Electronics', icon: 'pi pi-fw pi-electric',
          items: [
            [
              {
                label: 'Camera & Photo',
                items: [
                  { label: 'DSLR Cameras' },
                  { label: 'Mirrorless Cameras' },
                  { label: 'Point & Shoot Cameras' },
                ],
              },
              {
                label: 'Headphones',
                items: [
                  { label: 'Over-Ear Headphones' },
                  { label: 'In-Ear Headphones' },
                  { label: 'Noise-Canceling Headphones' },
                ],
              },
            ],
            [
              {
                label: 'Wearable Technology',
                items: [
                  { label: 'Smartwatches' },
                  { label: 'Fitness Trackers' },
                  { label: 'Virtual Reality Headsets' },
                ],
              },
              {
                label: 'Home Audio & Theater',
                items: [
                  { label: 'Soundbars' },
                  { label: 'Home Theater Systems' },
                  { label: 'Wireless & Bluetooth Speakers' },
                ],
              },
            ],
            [
              {
                label: 'Car Electronics',
                items: [
                  { label: 'Car Stereos' },
                  { label: 'Car Speakers' },
                  { label: 'Car GPS Units' },
                ],
              },
              {
                label: 'Musical Instruments',
                items: [
                  { label: 'Guitars' },
                  { label: 'Keyboards' },
                  { label: 'Drums & Percussion' },
                ],
              },
            ],
            [
              {
                label: 'GPS & Navigation',
                items: [
                  { label: 'Handheld GPS' },
                  { label: 'Car GPS' },
                  { label: 'Marine GPS' },
                ],
              },
    
            ],
          ],
        },
    
    
    
        {
          label: 'Books', icon: 'pi pi-fw pi-book',
          items: [
            [
              {
                label: 'Literature & Fiction',
                items: [
                  { label: 'Contemporary Fiction' },
                  { label: 'Classic Literature' },
                  { label: 'Historical Fiction' },
                ],
              },
              {
                label: 'Mystery, Thriller & Suspense',
                items: [
                  { label: 'Police Procedurals' },
                  { label: 'Psychological Thrillers' },
                  { label: 'Legal Thrillers' },
                ],
              },
            ],
            [
              {
                label: 'Science Fiction & Fantasy',
                items: [
                  { label: 'Space Opera' },
                  { label: 'Epic Fantasy' },
                  { label: 'Urban Fantasy' },
                ],
              },
              {
                label: 'Romance',
                items: [
                  { label: 'Historical Romance' },
                  { label: 'Paranormal Romance' },
                  { label: 'Contemporary Romance' },
                ],
              },
            ],
            [
              {
                label: 'Biographies & Memoirs',
                items: [
                  { label: 'Autobiographies' },
                  { label: 'Memoirs of Public Figures' },
                  { label: 'Personal Journals' },
                ],
              },
              {
                label: 'History',
                items: [
                  { label: 'Ancient History' },
                  { label: 'World War II History' },
                  { label: 'Cultural History' },
                ],
              },
            ],
            [
              {
                label: 'Self-Help',
                items: [
                  { label: 'Personal Development' },
                  { label: 'Motivational' },
                  { label: 'Time Management' },
                ],
              },
              {
                label: 'Cookbooks, Food & Wine',
                items: [
                  { label: 'Quick & Easy Cooking' },
                  { label: 'Baking' },
                  { label: 'International Cuisine' },
                ],
              },
    
            ],
          ],
        },
    
    
        {
          label: 'Clothing, Shoes & Jewelry', icon: 'pi pi-fw pi-book',
          items: [
            [
              {
                label: 'Women',
                items: [
                  { label: 'Dresses' },
                  { label: 'Tops' },
                  { label: 'Bottoms' },
                ]
              },
              {
                label: 'Men',
                items: [
                  { label: 'Shirts' },
                  { label: 'Pants' },
                  { label: 'Outerwear' },
                ],
              },
              {
                label: 'Handbags & Accessories',
                items: [
                  { label: 'Tote Bags' },
                  { label: 'Wallets' },
                  { label: 'Sunglasses' },
                ],
              },
            ],
            [
              {
                label: 'Girls',
                items: [
                  { label: 'Dresses' },
                  { label: 'Tops' },
                  { label: 'Shoes' },
                ],
              },
              {
                label: 'Boys',
                items: [
                  { label: 'T-Shirts' },
                  { label: 'Jeans' },
                  { label: 'Activewear' },
                ],
              },
            ],
            [
              {
                label: 'Baby',
                items: [
                  { label: 'Bodysuits' },
                  { label: 'Sleepwear' },
                  { label: 'Accessories' },
                ],
              },
              {
                label: 'Shoes',
                items: [
                  { label: 'Sneakers' },
                  { label: 'Sandals' },
                  { label: 'Sandals' },
                ],
              },
            ],
            [
              {
                label: 'Jewelry',
                items: [
                  { label: 'Necklaces' },
                  { label: 'Earrings' },
                  { label: 'Bracelets' },
                ],
              },
              {
                label: 'Watches',
                items: [
                  { label: 'Analog Watches' },
                  { label: 'BakingDigital Watches' },
                  { label: 'Smartwatches' },
                ],
              },
    
    
            ],
          ],
        },
    
    
    
      ];

    const [selectedCategory, setSelectedCategory] = useState('All'); // Default selected category

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
  
  

  return (
    <>
    
    
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="Logo" width="150" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto" style={{ width: '800px' }}> {/* Use mx-auto to center-align content horizontally */}
              <div className="input-group"  >

                <Form.Select
                  id="categories"
                  className="form-select"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  style={{ width: `${getCategoryDropdownWidth(selectedCategory)}px` }}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </Form.Select>
                <input
                  type="text"
                  style={{ width: `${getCategoryDropdownWidth(selectedCategory)}px` }}
                  className="form-control"
                  placeholder="Search Your Product"
                />

                <button className="btn btn-secondary searchbtn" type="button">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <nav class="navbar navbar-expand-lg text-white bg-danger ">
        <div class="container">
          <NavDropdown title="Categories" id="basic-nav-dropdown" className="custom-dropdown">
            <MegaMenu model={items} orientation="vertical" breakpoint="767px" />

          </NavDropdown>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse d-flex justify-content-center align-item-center navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/"> 
                <FontAwesomeIcon icon={faHome} className="me-2" /> Home
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <FontAwesomeIcon icon={faBell} className="me-2" /> Alert
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Offer</a></li>
                  <li><a class="dropdown-item" href="#">Discount</a></li>

                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">  <FontAwesomeIcon icon={faPhone} className="me-2" />Contact Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/blog"> <FontAwesomeIcon icon={faBlog} className="me-2" />Blogs</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
    </>
  )
}
