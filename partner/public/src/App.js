/* eslint-disable jsx-a11y/img-redundant-alt */
import logo from './logo-Image/logo.png';
import './App.css';
import { Container, Dropdown, Stack, Button, Card } from 'react-bootstrap'; // Import Nav and Dropdown from react-bootstrap
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faBell, faPhone, faBlog, faShippingFast } from '@fortawesome/free-solid-svg-icons';
import walmart from './logo-Image/walmart.png';
import eBay from './logo-Image/ebay.png';
import aliexpress from './logo-Image/aliexpress.png';
import amazon from './logo-Image/amazon.png';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import React, { useState } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import FontAwesome styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons'; // Import the search icon
import { faTags, faClock, faStar, faComment, faCheckCircle, faTruck, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import Appbar from './components/Appbar';
import c1 from './uploads/c1.jpg'
import c2 from './uploads/c2.jpg'
import c3 from './uploads/c3.jpg'
// import { MegaMenu } from 'primereact/megamenu';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';

function App() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  library.add(faHome, faBell, faPhone, faBlog);
  return (
    <>
      <Appbar />
      <Container>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center">
              <img src={c1} alt="Logo" style={{ maxWidth: '100%', height: '600px' }} />

            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center">
              <img src={c2} alt="Logo" style={{ maxWidth: '100%', height: '600px' }} />

            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center align-items-center">
              <img src={c3} alt="Logo" style={{ maxWidth: '100%', height: '600px' }} />

            </div>
          </Carousel.Item>
        </Carousel>
      </Container>



      <Stack gap={3} style={{ margin: '80px' }}>
        <div className="d-flex justify-content-end">
          <div className="p-2">
            <Dropdown>
              <Dropdown.Toggle variant="danger" id="dropdown-basic">
                Filter By Platform
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Amazon</Dropdown.Item>
                <Dropdown.Item href="#/action-2">eBay</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Walmart</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Ali Express</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="p-2">
            <Dropdown>
              <Dropdown.Toggle variant="danger" id="dropdown-basic">
                Filter By Desires
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Low to High Price</Dropdown.Item>
                <Dropdown.Item href="#/action-2">High to Low Price</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Rating</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Reviews</Dropdown.Item>
                <Dropdown.Item href="#/action-5">Shipping Time</Dropdown.Item>
                <Dropdown.Item href="#/action-6">Shipping Cost</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>





        <div className="p-2">

          <Stack className='justify-content-center' direction="horizontal" gap={3}>
            <div className="p-2">
              <div style={{ width: '170px', height: '200px' }}>
                <img src="https://m.media-amazon.com/images/I/51QOvWdS0FL._AC_SX679_.jpg" alt="" style={{ maxWidth: '100%', height: 'auto', objectFit: 'fill' }} />
              </div>
            </div>

            <div >
              <div style={{ fontSize: '22px' }}> <b> IPHONE 14 </b></div>
              <div className="d-none d-md-block" style={{ fontSize: '18px', color: 'GrayText' }}>
                xixaomiro i14Pro Max Unlocked 5G Cellphone Android Smartphone Mobile Phone, 8GB RAM, 512GB ROM 1TB Expandable, 6.8'' FHD Screen, 6000mAh Battery, Dual Sim Card, 48+13MP Camera (Blue)
              </div>
              <div style={{ fontSize: '15px' }}>
                <FontAwesomeIcon icon={faTags} /> Discount: 0.00
                <div className="vr " style={{ marginRight: '10px', marginLeft: '10px' }} />
                <FontAwesomeIcon icon={faClock} /> Shipping Time: 2 Days
                <div className="vr" style={{ marginRight: '10px', marginLeft: '10px' }} />
                <FontAwesomeIcon icon={faComment} /> Reviews: 128
                <div className="vr " style={{ marginRight: '10px', marginLeft: '10px' }} />
                <FontAwesomeIcon icon={faTags} /> Offer: 0.00
                <div className="vr " style={{ marginRight: '10px', marginLeft: '10px' }} />
                <FontAwesomeIcon icon={faCheckCircle} /> sold: 120
              </div>
              <div style={{ fontSize: '15px' }}><FontAwesomeIcon icon={faStar} /> Rating: 4.5</div>






            </div>




            <div className="ml-auto">
              <div style={{ fontSize: '22px' }}> <img src={walmart} alt="" style={{ width: '150px', height: '90px' }} /></div>

              <div style={{ fontSize: '18px' }}>   <FontAwesomeIcon icon={faTruck} />  9.80</div>
              <div style={{ fontSize: '18px' }}><b><FontAwesomeIcon icon={faDollarSign} /></b> 90.00</div>

              <div style={{ fontSize: '20px' }} ><b><FontAwesomeIcon icon={faDollarSign} style={{ fontSize: '25px' }} /></b> <strong>  99.80</strong></div>
              <hr />
              <Button variant="danger">Buy Now</Button>
            </div>
          </Stack>
        </div>






        <hr />



        <div className="p-2">

          <Stack className='justify-content-center' direction="horizontal" gap={3}>
            <div className="p-2">
              <div style={{ width: '170px', height: '200px' }}>
                <img src="https://m.media-amazon.com/images/I/51QOvWdS0FL._AC_SX679_.jpg" alt="" style={{ maxWidth: '100%', height: 'auto', objectFit: 'fill' }} />
              </div>
            </div>

            <div >
              <div style={{ fontSize: '22px' }}> <b> IPHONE 14 </b></div>
              <div className="d-none d-md-block" style={{ fontSize: '18px', color: 'GrayText' }}>
                xixaomiro i14Pro Max Unlocked 5G Cellphone Android Smartphone Mobile Phone, 8GB RAM, 512GB ROM 1TB Expandable, 6.8'' FHD Screen, 6000mAh Battery, Dual Sim Card, 48+13MP Camera (Blue)
              </div>
              <div style={{ fontSize: '15px' }}>
                <FontAwesomeIcon icon={faTags} /> Discount: 0.00
                <div className="vr " style={{ marginRight: '10px', marginLeft: '10px' }} />
                <FontAwesomeIcon icon={faClock} /> Shipping Time: 2 Days
                <div className="vr" style={{ marginRight: '10px', marginLeft: '10px' }} />
                <FontAwesomeIcon icon={faComment} /> Reviews: 128
                <div className="vr " style={{ marginRight: '10px', marginLeft: '10px' }} />
                <FontAwesomeIcon icon={faTags} /> Offer: 0.00
                <div className="vr " style={{ marginRight: '10px', marginLeft: '10px' }} />
                <FontAwesomeIcon icon={faCheckCircle} /> sold: 120
              </div>
              <div style={{ fontSize: '15px' }}><FontAwesomeIcon icon={faStar} /> Rating: 4.5</div>






            </div>




            <div className="ml-auto">
              <div style={{ fontSize: '22px' }}> <img src={eBay} alt="" style={{ width: '150px', height: '90px' }} /></div>

              <div style={{ fontSize: '18px' }}>   <FontAwesomeIcon icon={faTruck} />  9.80</div>
              <div style={{ fontSize: '18px' }}><b><FontAwesomeIcon icon={faDollarSign} /></b> 90.00</div>

              <div style={{ fontSize: '20px' }} ><b><FontAwesomeIcon icon={faDollarSign} style={{ fontSize: '25px' }} /></b> <strong>  99.80</strong></div>
              <hr />
              <Button variant="danger">Buy Now</Button>
            </div>
          </Stack>
        </div>




        <hr />



        <div className="p-2">

          <Stack className='justify-content-center' direction="horizontal" gap={3}>
            <div className="p-2">
              <div style={{ width: '170px', height: '200px' }}>
                <img src="https://m.media-amazon.com/images/I/51QOvWdS0FL._AC_SX679_.jpg" alt="" style={{ maxWidth: '100%', height: 'auto', objectFit: 'fill' }} />
              </div>
            </div>

            <div >
              <div style={{ fontSize: '22px' }}> <b> IPHONE 14 </b></div>
              <div className="d-none d-md-block" style={{ fontSize: '18px', color: 'GrayText' }}>
                xixaomiro i14Pro Max Unlocked 5G Cellphone Android Smartphone Mobile Phone, 8GB RAM, 512GB ROM 1TB Expandable, 6.8'' FHD Screen, 6000mAh Battery, Dual Sim Card, 48+13MP Camera (Blue)
              </div>
              <div style={{ fontSize: '15px' }}>
                <FontAwesomeIcon icon={faTags} /> Discount: 0.00
                <div className="vr " style={{ marginRight: '10px', marginLeft: '10px' }} />
                <FontAwesomeIcon icon={faClock} /> Shipping Time: 2 Days
                <div className="vr" style={{ marginRight: '10px', marginLeft: '10px' }} />
                <FontAwesomeIcon icon={faComment} /> Reviews: 128
                <div className="vr " style={{ marginRight: '10px', marginLeft: '10px' }} />
                <FontAwesomeIcon icon={faTags} /> Offer: 0.00
                <div className="vr " style={{ marginRight: '10px', marginLeft: '10px' }} />
                <FontAwesomeIcon icon={faCheckCircle} /> sold: 120
              </div>
              <div style={{ fontSize: '15px' }}><FontAwesomeIcon icon={faStar} /> Rating: 4.5</div>






            </div>




            <div className="ml-auto">
              <div style={{ fontSize: '22px' }}> <img src={amazon} alt="" style={{ width: '150px', height: '90px' }} /></div>

              <div style={{ fontSize: '18px' }}>   <FontAwesomeIcon icon={faTruck} />  9.80</div>
              <div style={{ fontSize: '18px' }}><b><FontAwesomeIcon icon={faDollarSign} /></b> 90.00</div>

              <div style={{ fontSize: '20px' }} ><b><FontAwesomeIcon icon={faDollarSign} style={{ fontSize: '25px' }} /></b> <strong>  99.80</strong></div>
              <hr />
              <Button variant="danger">Buy Now</Button>
            </div>
          </Stack>
        </div>




        <hr />



        <div className="p-2">

          <Stack className='justify-content-center' direction="horizontal" gap={3}>
            <div className="p-2">
              <div style={{ width: '170px', height: '200px' }}>
                <img src="https://m.media-amazon.com/images/I/51QOvWdS0FL._AC_SX679_.jpg" alt="" style={{ maxWidth: '100%', height: 'auto', objectFit: 'fill' }} />
              </div>
            </div>

            <div >
              <div style={{ fontSize: '22px' }}> <b> IPHONE 14 </b></div>
              <div className="d-none d-md-block" style={{ fontSize: '18px', color: 'GrayText' }}>
                xixaomiro i14Pro Max Unlocked 5G Cellphone Android Smartphone Mobile Phone, 8GB RAM, 512GB ROM 1TB Expandable, 6.8'' FHD Screen, 6000mAh Battery, Dual Sim Card, 48+13MP Camera (Blue)
              </div>
              <div style={{ fontSize: '15px' }}>
                <FontAwesomeIcon icon={faTags} /> Discount: 0.00
                <div className="vr " style={{ marginRight: '10px', marginLeft: '10px' }} />
                <FontAwesomeIcon icon={faClock} /> Shipping Time: 2 Days
                <div className="vr" style={{ marginRight: '10px', marginLeft: '10px' }} />
                <FontAwesomeIcon icon={faComment} /> Reviews: 128
                <div className="vr " style={{ marginRight: '10px', marginLeft: '10px' }} />
                <FontAwesomeIcon icon={faTags} /> Offer: 0.00
                <div className="vr " style={{ marginRight: '10px', marginLeft: '10px' }} />
                <FontAwesomeIcon icon={faCheckCircle} /> sold: 120
              </div>
              <div style={{ fontSize: '15px' }}><FontAwesomeIcon icon={faStar} /> Rating: 4.5</div>






            </div>




            <div className="ml-auto">
              <div style={{ fontSize: '22px' }}> <img src={aliexpress} alt="" style={{ width: '150px', height: '90px' }} /></div>

              <div style={{ fontSize: '18px' }}>   <FontAwesomeIcon icon={faTruck} />  9.80</div>
              <div style={{ fontSize: '18px' }}><b><FontAwesomeIcon icon={faDollarSign} /></b> 90.00</div>

              <div style={{ fontSize: '20px' }} ><b><FontAwesomeIcon icon={faDollarSign} style={{ fontSize: '25px' }} /></b> <strong>  99.80</strong></div>
              <hr />
              <Button variant="danger">Buy Now</Button>
            </div>
          </Stack>
        </div>

      </Stack>




      <Container>
        <h1 style={{ textAlign: 'center' }}>Featured Products</h1>







        <div className="row">

          <div className="col-12 col-md-6 col-lg-3">

            <div className="product-container" >
              <img className="product-image " src={logo} alt="Product Image" />
              <center>
                <div className="product-name">Title</div>
              </center>
              <div className="product-title" style={{ fontSize: '18px', color: 'GrayText' }}>  xixaomiro i14Pro Max Unlocked 5G Cellphone Android Smartphone Mobile Phone, 8GB RAM, 512GB ROM 1TB Expandable, 6.8'' FHD Screen, 6000mAh Battery, Dual Sim Card, 48+13MP Camera (Blue)
              </div>
              <center>
                <div className="product-info">
                  <div style={{ fontSize: '15px' }}><FontAwesomeIcon icon={faStar} /> Rating: 4.5</div>
                  <div style={{ fontSize: '15px' }}> <FontAwesomeIcon icon={faComment} /> Reviews: 128</div>
                  <div className="dual-color-button">
                    <button className="left-side btn btn-danger" variant="danger">Buy Now From</button>
                  </div>
                </div>

              </center>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">

            <div className="product-container" >
              <img className="product-image " src="https://m.media-amazon.com/images/I/719oBAdAl7L._AC_UF1000,1000_QL80_FMwebp_.jpg" alt="Product Image" />
              <center>
                <div className="product-name">Title</div>
              </center>
              <div className="product-title" style={{ fontSize: '18px', color: 'GrayText' }}>  xixaomiro i14Pro Max Unlocked 5G Cellphone Android Smartphone Mobile Phone, (Blue)
              </div>
              <center>
                <div className="product-info">
                  <div style={{ fontSize: '15px' }}><FontAwesomeIcon icon={faStar} /> Rating: 4.5</div>
                  <div style={{ fontSize: '15px' }}> <FontAwesomeIcon icon={faComment} /> Reviews: 128</div>
                  <div className="dual-color-button">
                    <button className="left-side  btn btn-danger">Buy Now From</button>
                  </div>
                </div>

              </center>
            </div>
          </div>



          <div className="col-12 col-md-6 col-lg-3">

            <div className="product-container" >
              <img className="product-image " src="https://i.ebayimg.com/images/g/yBQAAOSwz1hk78Cu/s-l1600.png" alt="Product Image" />
              <center>
                <div className="product-name">Title</div>
              </center>
              <div className="product-title" style={{ fontSize: '18px', color: 'GrayText' }}>  xixaomiro i14Pro Max Unlocked 5G Cellphone Android Smartphone Mobile Phone, 8GB RAM, 512GB ROM 1TB Expandable, 6.8'' FHD Screen, 6000mAh Battery, Dual Sim Card, 48+13MP Camera (Blue)
              </div>
              <center>
                <div className="product-info">
                  <div style={{ fontSize: '15px' }}><FontAwesomeIcon icon={faStar} /> Rating: 4.5</div>
                  <div style={{ fontSize: '15px' }}> <FontAwesomeIcon icon={faComment} /> Reviews: 128</div>
                  <div className="dual-color-button">
                    <button className="left-side btn btn-danger" variant="danger">Buy Now From</button>
                  </div>
                </div>

              </center>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3" >

            <div className="product-container" >
              <img className="product-image " src={logo} alt="Product Image" />
              <center>
                <div className="product-name">Title</div>
              </center>
              <div className="product-title" style={{ fontSize: '18px', color: 'GrayText' }}>  xixaomiro i14Pro Max Unlocked 5G Cellphone Android Smartphone Mobile Phone, 8GB RAM, 512GB ROM 1TB Expandable, 6.8'' FHD Screen, 6000mAh Battery, Dual Sim Card, 48+13MP Camera (Blue)
              </div>
              <center>
                <div className="product-info">
                  <div style={{ fontSize: '15px' }}><FontAwesomeIcon icon={faStar} /> Rating: 4.5</div>
                  <div style={{ fontSize: '15px' }}> <FontAwesomeIcon icon={faComment} /> Reviews: 128</div>
                  <div className="dual-color-button">
                    <button className="left-side btn btn-danger" variant="danger">Buy Now From</button>
                  </div>
                </div>

              </center>
            </div>
          </div>


        </div >






      </Container >











      <Container>
        <h1 style={{ textAlign: 'center', margin: '20px' }}>Latest Blog Posts</h1>

        <div className="row">

          <div className="col-12 col-md-8 col-lg-4" >

            <div className="product-container" >
              <img className="product-image " src={logo} alt="Product Image" />
              <center>
                <div className="product-name">Title</div>
                <div className="dual-color-button">
                  <button className="left-side btn btn-danger" variant="danger">Read more</button>
                </div>
              </center>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-4" >

            <div className="product-container" >
              <img className="product-image " src={logo} alt="Product Image" />
              <center>
                <div className="product-name">Title</div>
                <div className="dual-color-button">
                  <button className="left-side btn btn-danger" variant="danger">Read more</button>
                </div>
              </center>
            </div>
          </div>

          <div className="col-12 col-md-8 col-lg-4" >

            <div className="product-container" >
              <img className="product-image " src={logo} alt="Product Image" />
              <center>
                <div className="product-name">Title</div>
                <div className="dual-color-button">
                  <button className="left-side btn btn-danger" variant="danger">Read more</button>
                </div>
              </center>
            </div>
          </div>


        </div >
        <center>
          <Button variant="outline-success" style={{ width: '30%', marginTop: '50px' }}> See ALL</Button>
        </center>
      </Container>


      <Container style={{ marginTop: '50px' }}>
        <div className="row">
          <div className="col-md-3">
            <Card style={{ width: '18rem', margin: '20px' }}>
              <FontAwesomeIcon icon={faShippingFast} size="3x" style={{ margin: '15px' }} />
              <Card.Body>
                <center>
                  <Card.Title>Free Shipping</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Get All products free
                  </Card.Subtitle>
                </center>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card style={{ width: '18rem', margin: '20px' }}>
              <FontAwesomeIcon icon={faShippingFast} size="3x" style={{ margin: '15px' }} />
              <Card.Body>
                <center>
                  <Card.Title>Free Shipping</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Get All products free
                  </Card.Subtitle>
                </center>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card style={{ width: '18rem', margin: '20px' }}>
              <FontAwesomeIcon icon={faShippingFast} size="3x" style={{ margin: '15px' }} />
              <Card.Body>
                <center>
                  <Card.Title>Free Shipping</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Get All products free
                  </Card.Subtitle>
                </center>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card style={{ width: '18rem', margin: '20px' }}>
              <FontAwesomeIcon icon={faShippingFast} size="3x" style={{ margin: '15px' }} />
              <Card.Body>
                <center>
                  <Card.Title>Free Shipping</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Get All products free
                  </Card.Subtitle>
                </center>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>







      {/* <div className="footer" >
        <h4 className='text-center'>&copy; Helper Mall</h4>
        <p className='text-center mt-3 '>


          <Link to={'/about'}>About Us </Link>|
          <Link to={'/Contactus'}>Contact Us</Link>|
          <Link to={'/blog'}>Blogs</Link>|
          <Link to={'/PrivacyPolicy'}>Privacy Policy</Link>



        </p>
      </div> */}
    </>


  );
};


export default App;
