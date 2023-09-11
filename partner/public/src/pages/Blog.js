/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import React from 'react'
import Appbar from '../components/Appbar'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBlog } from '@fortawesome/free-solid-svg-icons';

export default function Blog() {

  library.add(faHome, faBlog);

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
                  <li class="breadcrumb-item text-light " aria-current="page"> <FontAwesomeIcon icon={faBlog} className="me-2" />Blog</li>
                </ol>
              </nav>
            </h4>
          </div>
        </div>
      </div>
      <h2 class="hr-lines"> Well Come To Helper Mart </h2>

      <div class="container">
        <div class="row">
          <div class="col-4">
            <img src="https://mdbcdn.b-cdn.net/img/new/fluid/nature/012.webp" width="500px" />
          </div>
          <div class="col-8">
          Lorem ipsum dolor sit amet. Et dolore quia non totam praesentium est optio enim qui nulla temporibus et error cupiditate sit sunt unde. Vel reprehenderit possimus et voluptas beatae et nihil illo et tenetur molestiae qui repellendus internos. Aut rerum vero in eveniet voluptas ut eius distinctio ea inventore quia. Nam internos consequatur qui quia ullam et sint eveniet et quaerat nostrum sed autem velit ab delectus optio et voluptate officiis.
          </div>
        </div>
      </div>



    </>
  )
}
