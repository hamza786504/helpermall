import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBlog } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

function Breadcrumb(props) {

    
  library.add(faHome, faBlog);

  return (
    <div class="bg-image">
      <div class="mask">
        <div className="container d-flex justify-content-center align-items-center h-100">
          <h4 class="text-white mb-0">
            <nav aria-label="breadcrumb ">
              <ol class="breadcrumb">
                <li class="breadcrumb-item color_primary">
                  <a href="/">
                    <FontAwesomeIcon icon={faHome} className="me-2 color_primary" style={{fontSize : "18px"}} />
                  </a>
                </li>
                <li class="breadcrumb-item  color_primary" aria-current="page">
                  { props.page }
                </li>
              </ol>
            </nav>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
