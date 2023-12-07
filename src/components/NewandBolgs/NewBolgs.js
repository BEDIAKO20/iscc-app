import React from "react";
import "../NewandBolgs/newbolgs.css";
import blogsone from "../../assets/blogs3.png";
import blogstwo from "../../assets/blogs2.png";
import blogsthree from "../../assets/blogs1.png";
import imagearrow from "../../assets/Rounded button.png";
import redBlood from "../../assets/redB;loodd 2.png";
import logo from "../../assets/ISSC LOGO kk.png";
import logoTwo from "../../assets/ISSC LOGO 2.png";
import imageArrowtwo from "../../assets/BlackRoundedbutton.png";
import redbloodImage from "../../assets/Bloodd 2.png";
import redRounded from "../../assets/Redrounded button.png";
import redBloodThree from "../../assets/Blodd 3.png";
import  SendIcon from "../../assets/fa_send-o.png";
import linsImage from "../../assets/Vector 3.png";
function NewBolgs() {
  const inputStyles = {
    fontSize: "13px", // Adjust the font size as needed
  };
  return (
    <>
      <div className="container mt-5  ">
        <div className="newBlogs-Title row">
          <div className="col-lg-3">
            <div className="newbolgs-text ms-5 mt-5">
              <h6 className="newBlogs">
                <span className="newSpan">News,</span> Blogs <br /> & More.
              </h6>
            </div>
            <div class="input-box mt-4 ms-5" style={{ width: "340px" }}>
              <input
                type="text"
                class="text_input"
                placeholder="Enter email to subscribe to newsletter"
                style={inputStyles}
              />
              <button value="Save" class="btnInput">
                <span>
                  <img src={imagearrow} />
                </span>
              </button>
            </div>
          </div>
          <div className="col-lg-9 d-flex ">
            <div className="image-Box gap-4  d-flex">
              <div>
                <img src={blogsone} alt="blogImage" />
              </div>
              <div>
                <img src={blogstwo} alt="blogImage" />
              </div>
              <div>
                <img src={blogsthree} alt="blogImage" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid  CardBox mt-5">
        <div className="row moreNew-Bg pt-5 ">
          <div className="newbox-text d-flex justify-content-center  justify-content-between ">
            <h1 className="ms-5 moreNew-text">
              More <span className="newSpan">News</span>{" "}
            </h1>
            <p className="me-5 newSpan">See More</p>
          </div>

          <div className="row  card-new pt-5">
            <div className="col-md-2">
              <div class="card " style={{ width: "18rem" }}>
                <div className="New-ImageBox1">
                  <span></span>
                  <img src={redBlood} class="card-img-top1 w-50 " alt="..." />
                </div>
                <div class="card-body newCard-boxred h-100">
                  <p class="card-text ms-1 pt-2  w-">
                    We tested <br></br> 8,000 people in the <br></br> eastern
                    part of Africa.
                  </p>
                  <div className=" d-flex justify-content-between">
                    <p className="data-text"> 21 october 2023</p>
                    <img src={imagearrow} className="arrowImage" />
                  </div>
                  <div>
                    <img src={logo} style={{ width: "35px" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div class="card " style={{ width: "18rem" }}>
                <div className="New-ImageBox2">
                  <img
                    src={redBlood}
                    class="card-img-top w-50 ms-5"
                    alt="..."
                  />
                </div>
                <div class="card-body  newCard-boxwhiter h-100">
                  <p class="card-text ms-1 pt-2  " style={{ color: "#595959" }}>
                    We tested <br></br> 8,000 people in the <br></br> eastern
                    part of Africa.
                  </p>
                  <div className=" d-flex justify-content-between">
                    <p className="data-text" style={{ color: "#595959" }}>
                      {" "}
                      21 october 2023
                    </p>
                    <img src={imageArrowtwo} className="arrowImage" />
                  </div>
                  <div>
                    <img src={logoTwo} style={{ width: "35px" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div class="card" style={{ width: "18rem" }}>
                <div className="New-ImageBox3">
                  <img
                    src={redBlood}
                    class="card-img-top w-50 ms-5"
                    alt="..."
                  />
                </div>
                <div class="card-body newCard-boxred h-100">
                  <p class="card-text ms-1 pt-2  w-">
                    We tested <br></br> 8,000 people in the <br></br> eastern
                    part of Africa.
                  </p>
                  <div className=" d-flex justify-content-between">
                    <p className="data-text"> 21 october 2023</p>
                    <img src={imagearrow} className="arrowImage" />
                  </div>
                  <div>
                    <img src={logo} style={{ width: "35px" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div class="card" style={{ width: "18rem" }}>
                <div className="New-ImageBox4">
                  <img
                    src={redBlood}
                    class="card-img-top w-50 ms-5"
                    alt="..."
                  />
                </div>
                <div class="card-body  newCard-boxwhiter h-100">
                  <p class="card-text ms-1 pt-2 " style={{ color: "#595959" }}>
                    We tested <br></br> 8,000 people in the <br></br> eastern
                    part of Africa.
                  </p>
                  <div className=" d-flex justify-content-between">
                    <p className="data-text" style={{ color: "#595959" }}>
                      {" "}
                      21 october 2023
                    </p>
                    <img src={imageArrowtwo} className="arrowImage" />
                  </div>
                  <div>
                    <img src={logoTwo} style={{ width: "35px" }} />
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          <div className="BlooddthreeBox   ">
            <img src={redbloodImage} className=" bloodImage" />
          </div>
        </div>
      </div>




      <div className="container mt-5">
        <div className="NewThreeContainer">
         
          <div className="tellYouStories    justify-content-center d-flex text-center">
            <h6 className="telling-text ">
              Telling our stories <span className="newSpan">unfiltered</span>{" "}
              <br /> No story is the same and we tell
              <br />
              it, as it is.
            </h6>
          </div>
        </div>
        <div className="row  mt-5 ">
          <div className="col-md-6 mt-4">
            <div className="featured">
              <h6 className="featured-text">
                Featured <br />
                <span className="newSpan">Stories</span>
              </h6>
              <p className="featured-pre">
                Uncover the raw, authentic truths of people living with SCD,
                sickle cell trait, caregivers, healthcare professionals and
                society at large. Their stories tell the situation on the
                ground, gaps in our healthcare systems, what we are doing right
                and what we can do better to change the sickle cell narrative
                across the globe.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="featuredImage1  ">
              <p className="number_text mt-4 ms-3">01</p>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <h6 className="titleogesHere ms-3">Some title goes here</h6>
              <img src={redRounded} className=" redrounded-btn" />
            </div>
          </div>
        </div>
        <div className="row gap- ">
          <div className="col-md-6">
            <div className=" featuredImage2   ">
              <p className="number_text mt-4 ms-3">02</p>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <h6 className="titleogesHere ms-3">Some title goes here</h6>
              <img src={redRounded} className=" redrounded-btn" />
            </div>
          </div>
          <div className="col-md-6">
            <div className=" featuredImage3   ">
              <p className="number_text mt-4 ms-3">03</p>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <h6 className="titleogesHere ms-3">Some title goes here</h6>
              <img src={redRounded} className=" redrounded-btn" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5  input-bloodBox">
        <div className="input-blood">
          <div className="row">
            <div className="col-md-2 ">
              <img src={redBloodThree} />
            </div>
            <div className="col-md-10 mt-5">
              <div className="row ms-5 gap3 ">
                <div className="col-md-3 ms-5">
                  <div class="form__group field">
                    <input
                      type="input"
                      class="form__field"
                      placeholder="Tell us your story"
                      required=""
                    />
                    <label for="name" class="form__label">
                      Tell us your story
                    </label>
                  </div>
                </div>
                <div className="col-md-3  name-input">
                  <div class="form__group field">
                    <input
                      type="input"
                      class="form__field"
                      placeholder="Name"
                      required=""
                    />
                    <label for="name" class="form__label">
                      Name
                    </label>
                  </div>
                </div>
              </div>
              <div className="row mt-3  ms-5">
                <div className="col-md-3 ms-5">
                  <div class="form__group field">
                    <input
                      type="input"
                      class="form__field"
                      placeholder="Email Address"
                      required=""
                    />
                    <label for="name" class="form__label">
                      Email Address
                    </label>
                  </div>
                </div>
                <div className="col-md-3  name-input">
                  <div class="form__group field">
                    <input
                      type="input"
                      class="form__field"
                      placeholder="Location"
                      required=""
                    />
                    <label for="name" class="form__label">
                      Location
                    </label>
                  </div>
                </div>
              </div>
              <div className="row mt-3  ms-5">
                <div className="col-md-3 ms-5">
                  <div class="form__group field">
                    <input
                      type="input"
                      class="form__field"
                      placeholder="Phone Number"
                      required=""
                    />
                    <label for="name" class="form__label">
                      Phone Number
                    </label>
                  </div>
                </div>
                <div className="col-md-3  name-input">
                  <p className="story-text">
                    Would you like to share your story on camera
                  </p>
                  <div className="checkingBox">
                    <div class="check_container  d-flex">
                      <input id="checkbox" class="hidden" type="checkbox" />
                      <label class="checkbox" for="checkbox"></label>
                      <p className="check-text ms-2">Yes</p>
                    </div>
                    <div class="check_container   d-flex ">
                      <input id="checkbox" class="hidden" type="checkbox" />
                      <label class="checkbox  " for="checkbox"></label>
                      <p className="check-text ms-2">No</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="storyText-Box my-4">
                <h6 className="Story-Text">
                  We value your unique experiences and stories and are excited
                  to hear from you! Before sharing your story, please take a
                  moment to review our Terms of Use. These terms outline your
                  rights and responsibilities as a contributor, including
                  content ownership, usage, permissions, and privacy. By sharing
                  your story, you agree that it may be used, published, and
                  distributed by ISCC, its affiliates, and licensees worldwide
                  across all media and platforms. If you have any questions or
                  concerns, please don't hesitate to Contact Us. Thank you for
                  being a part of our community and sharing your experiences
                  with us! By clicking "Submit," you confirm that you have read
                  and agree to our{" "}
                  <span className="termsSpan">Terms of Use.</span>
                </h6>
                <div className="d-flex gap-3  sendBox">
                  <p className="text-send  text-c">Send</p>
                  <img src={redRounded} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid  input-bloodBox">
        <div className="row pt-5">
          <div className="col-md-3 textInput-box mt-5">
            <h2 className="Hone-News">Newsletter</h2>
            <p className="pre-News">
              Stay Informed. Stay Empowered. Subscribe to our Newsletter, to
              receive monthly updates on the latest news in Sickle Cell Disease,
              Research, Stories From the Field and how we are changing the
              sickle cell narrative at ISCC. Join our community and be
              part of the change.
            </p>
            <div className="Image-Items">
           
            </div>
          </div>
          <div className="col-md-5 ">
            <div className="formBox ">
            <form className="gap-3" >
    <input type="text" id="fname" name="firstname" placeholder="First Name* " className="inputForm"/>
    <input type="text" id="lname" name="lastname" placeholder="Last Name*" className="inputForm" />
    <input type="text" id="lname" name="lastname" placeholder="Email Address*" className="inputForm"/>
  </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
          <div className="sendImage">
                <img src={SendIcon} alt="sendImas" className="send-image mt-5"/>
                <img src={linsImage} className="line-image"/>
              </div>
          </div>
        </div>
      </div>
      <div className="">

      </div>
    </>
  );
}

export default NewBolgs;
