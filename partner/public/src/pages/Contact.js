import React from 'react'
import Appbar from '../components/Appbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faHome, faPhone, faBell } from '@fortawesome/free-solid-svg-icons';

export default function Contact(){

    library.add(faHome, faPhone, faBell)

    return (
        <>
            <Appbar />

            <div class="bg-image">
                <div class="mask">
                    <div className='container d-flex justify-content-end align-items-center h-100'>
                        <h4 class="text-white mb-0">
                            <nav aria-label="breadcrumb ">
                                <ol class="breadcrumb ">
                                    <li class="breadcrumb-item "><a href="/"> <FontAwesomeIcon icon={faHome} className="me-2" />Home</a></li>
                                    <li class="breadcrumb-item text-light " aria-current="page"> <FontAwesomeIcon icon={faPhone} className="me-2" />Contact</li>
                                </ol>
                            </nav>
                        </h4>
                    </div>
                </div>
            </div>


            <nav className='d-flex justify-content-center align-item-center mt-5' >
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link text-warning active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                        <FontAwesomeIcon icon={faPhone} className="me-2" />   Contact us
                    </button>

                    <button class="nav-link text-danger" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                        <FontAwesomeIcon icon={faBell} className="me-2" />   Alert offer
                    </button>
                </div>
            </nav>






            <div class="tab-content mt-4  d-flex justify-content-center align-item-center" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <div class="mb-3">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="Email address" />
                    </div>
                    <div class="mb-3">
                        <textarea class="form-control" placeholder="Enquiry" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                        <button className='btn btn-info'>Submit</button>
                    </div>
                </div>
                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">

                    <div class="mb-3">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Product name" />
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Email" />
                    </div>
                    <div class="mb-3">
                        <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Phone Number (optional)" />
                    </div>

                    <div class="mb-3">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Platform (optional)" />
                    </div>

                    <div class="mb-3">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="How much discount You want" />
                    </div>

                    <div class="mb-3">
                        <textarea class="form-control" placeholder="Description" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                        <button className='btn btn-info'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    );
}
