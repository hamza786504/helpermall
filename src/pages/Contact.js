import React from "react";
import Appbar from "../Components/Appbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPhone, faBell } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "../Components/Breadcrumb";
import Footer from "../Components/Footer";

export default function Contact() {
  library.add(faHome, faPhone, faBell);

  return (
    <>
      <Appbar />

      <Breadcrumb page="Contact" />

      <div className="forms">
        <nav className="d-block mt-5">
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="nav-link text-warning active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
              style={{width : "50%"}}
            >
              <FontAwesomeIcon icon={faPhone} className="me-2" /> Contact
            </button>

            <button
              class="nav-link text-danger"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
              style={{width : "50%"}}
            >
              <FontAwesomeIcon icon={faBell} className="me-2" /> Offer Alert
            </button>
          </div>
        </nav>

        <div class="tab-content mt-4  d-block"
          id="nav-tabContent"
        >
          <div class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
            style={{width : "100% !important"}}
          >
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Your Name"
              />
            </div>
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput2"
                placeholder="Email address"
              />
            </div>
            <div class="mb-3">
              <textarea
                class="form-control"
                placeholder="Enquiry"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="mb-3">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Product name"
              />
            </div>
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Your Email"
              />
            </div>
            <div class="mb-3">
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Phone Number (optional)"
              />
            </div>

            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Platform (optional)"
              />
            </div>
            <div class="mb-3">
              <textarea
                class="form-control"
                placeholder="How much discount You want"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="mb-3">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>



      <Footer />
    </>
  );
}
