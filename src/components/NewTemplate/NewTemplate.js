import React from "react";
import "../NewTemplate/newTemplate.css";
import boxImage from "../../assets/Frame 710.png";
import isccwoman from "../../assets/Frame 399.png";

function NewTemplate() {
  return (
    <>
      <div className="template-Bg">
        <div className="container">
          <div className="row">
            <div className="text-center mt-5">
              <p className="educational-text">Educational and Advocacy</p>
              <h3 className="some-text  text-center">
                Some long or short title goes up here: with some extra text
              </h3>
              <div className="prfio-imageBox mt-5 ">
              <img src={isccwoman} />
              <p className="">
             <span className="date-text">20th November 2023</span>
                <br />
              <span className="name-text">Lucinda Seyram Tokro</span>
                <br />
              <span className="info-text">Author</span>
              </p>
            
            </div>
            </div>
        
          </div>
          <div className="templateBox">
            <img src={boxImage} className="img-fluid w-75 box_image" />
          </div>
        </div>
      </div>
      {/* container */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            
          </div>
        </div>
      </div>
           {/* container */}
    </>
  );
}

export default NewTemplate;
