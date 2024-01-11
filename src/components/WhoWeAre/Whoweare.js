import { useState } from "react";
import "../WhoWeAre/whoweare.css";
import Modal from "react-bootstrap/Modal";
import groupImage from "../../assets/groupImage.png";
import meetingImage from "../../assets/meetingImage.png";
import lineImg from "../../assets/Line 56.png";
import vissionImage from "../../assets/vissionImage (1).png";
import missionImg from "../../assets/missionImage.png";
import ourStoryImage from "../../assets/OurStoryImage.png";
import redarrow from "../../assets/Redrounded button.png";
import womanimage from "../../assets/womanImage.png";
import { Button } from "react-bootstrap";
function Whoweare() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="">
        <div className="AboutPagText-Box">
          <div className="About-text ">
            <h1 className="About-text">
              About <span className="us-Text">Us</span>
            </h1>
          </div>
        </div>
        <div className="image-Box">
          <img src={groupImage} className="groupImage" />
        </div>
      </div>

      <div className="">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="meetingBox mt-5">
                <img
                  src={meetingImage}
                  alt="meetingimage"
                  className="meeting_imag"
                />
              </div>
              <div className="lineBox">
                <img src={lineImg} />
              </div>
              <div className="vissionBox mt-">
                <img
                  src={vissionImage}
                  alt="meetingimage"
                  className="meeting_imag"
                />
              </div>
              <div className="missionBox mb-1">
                <img
                  src={missionImg}
                  alt="meetingimage"
                  className="meeting_imag"
                />
              </div>
            </div>
            <div className="col-lg-6 mission-vission">
              <div className="mt-5">
                <p className="missionTopTeaxt">Who We Are</p>
                <h6 className="misstext">
                  WE ARE THE ISCC AND TOGETHER,
                  <span style={{ color: "red" }}>WE WILL BEAT</span>
                  <br /> SICKLE CELL DISEASE
                </h6>
                <p className="V-text m-text">
                  Founded in 2021, the International Sickle Cell Centre (ISCC)
                  is a registered non-profit organization in Ghana. At the ISCC,
                  we strongly believe no one should live in pain, die, or
                  experience stigmatization from Sickle Cell Disease (SCD). Our
                  initiatives, therefore, prioritize an improved quality of life
                  and longevity for people living with SCD, especially those in
                  deprived communities.{" "}
                  <span style={{ color: "red" }}>Read More.</span>
                </p>
              </div>
              <div className="">
                <p className="missionTopTeaxt">Our Vision</p>
                <p className="V-text misson-text">
                  To increase global awareness and support for people living
                  with sickle cell disease or sickle cell trait with zero
                  stigmatization and a remarkable reduction in its global
                  incidence, morbidity, mortality, economic, and psychosocial
                  burden.
                </p>
              </div>
              <div className="missionText">
                <p className="missionTopTeaxt">Our Mission</p>
                <p className="V-text misson-text">
                  To increase sickle cell awareness and support across the globe
                  through entertaining, informative, and inspirational content,
                  provide early diagnosis, genetic counselling, low-cost
                  preventive, and comprehensive healthcare, conduct
                  translational research, and provide a universally accessible,
                  cost-effective, and safe cure for people living with sickle
                  cell disease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ourObjectives">
        <div className="container">
          <div className="row">
            <div className=" mt-5">
              <p className="objec-head">
                Our <br /> <span style={{ color: "red" }}>Objectives.</span>
              </p>
              <p className="objec-pre">
                Our objectives include but are not limited to the following:
              </p>
            </div>
            <div className="col-md-3">
              <div className="card-Box">
                <p className="pre-Box">
                  <span style={{ color: "red" }}> Education</span>
                  <br />
                  End Advocacy
                </p>
                <p className="words-Box">
                  To increase public awareness and support of both SCD and
                  sickle cell trait and empower affected individuals to live
                  full and healthy lives with a consequent reduction in disease
                  burden and stigmatization.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-Box">
                <p className="pre-Box">
                  <span style={{ color: "red" }}> Education</span>
                  <br />
                  End Advocacy
                </p>
                <p className="words-Box">
                  To increase public awareness and support of both SCD and
                  sickle cell trait and empower affected individuals to live
                  full and healthy lives with a consequent reduction in disease
                  burden and stigmatization.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-Box">
                <p className="pre-Box">
                  <span style={{ color: "red" }}> Education</span>
                  <br />
                  End Advocacy
                </p>
                <p className="words-Box">
                  To increase public awareness and support of both SCD and
                  sickle cell trait and empower affected individuals to live
                  full and healthy lives with a consequent reduction in disease
                  burden and stigmatization.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-Box">
                <p className="pre-Box">
                  <span style={{ color: "red" }}> Education</span>
                  <br />
                  End Advocacy
                </p>
                <p className="words-Box">
                  To increase public awareness and support of both SCD and
                  sickle cell trait and empower affected individuals to live
                  full and healthy lives with a consequent reduction in disease
                  burden and stigmatization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="coreValues-Box">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 coreText-Box">
              <p className="core-Text">
                Core <br /> <span style={{ color: "red" }}> Values.</span>
              </p>
              <p className="core-PreText">
                These are the values that guide our mission and serve as the
                foundation of our work
              </p>
            </div>

            <div className="col-lg-10">
              <div className="row gap-3 RowCore ">
                <div className="col-lg-4 coreValu-TextBox ">
                  <div className="num-Text">
                    <p style={{ color: "red" }} className="numText">
                      01 <br /> <span className="coreword">Integrity</span>{" "}
                    </p>
                  </div>
                  <div className="coreBox-Text">
                    <p className="boxtext ms-4">
                      We are honest and transparent in our dealings with all
                      partners and stakeholders.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 coreValu-TextBox ">
                  <div className="num-Text">
                    <p style={{ color: "red" }} className="numText">
                      01 <br /> <span className="coreword">Integrity</span>{" "}
                    </p>
                  </div>
                  <div className="coreBox-Text">
                    <p className="boxtext ms-4">
                      We are honest and transparent in our dealings with all
                      partners and stakeholders.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 coreValu-TextBox coreMs-5">
                  <div className="num-Text">
                    <p style={{ color: "red" }} className="numText">
                      01 <br /> <span className="coreword">Integrity</span>{" "}
                    </p>
                  </div>
                  <div className="coreBox-Text">
                    <p className="boxtext ms-4">
                      We are honest and transparent in our dealings with all
                      partners and stakeholders.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 coreValu-TextBox coreMs">
                  <div className="num-Text">
                    <p style={{ color: "red" }} className="numText">
                      01 <br /> <span className="coreword">Integrity</span>{" "}
                    </p>
                  </div>
                  <div className="coreBox-Text">
                    <p className="boxtext ms-4">
                      We are honest and transparent in our dealings with all
                      partners and stakeholders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6 ourStoryImage ">
            <img
              src={ourStoryImage}
              className="img-fluid w-10  0 story-Image"
            />
          </div>
          <div className="col-lg-6 ourStoryText">
            <p className="our-pre">
              <span style={{ color: "red" }}>Our</span> Story
            </p>
            <p className="OurTop-Text">
              Our founders, Dr Mary Ansong and Martha Wiafe (Pharm) were not
              aware of their sickle cell genotype, until a mandatory test was
              <span style={{ color: "red" }}> organized</span> in 2009 at the
              University of Cape Coast.
            </p>
            <p className="preOurStory">
              “We were having a mandatory health check as freshers in the
              University. That was when I found out I was sickling positive. I
              was shocked and scared at the same time because back then, I had
              little knowledge about Sickle Cell Disease (SCD). I immediately
              called my sister, Mary, on phone, crying because I thought I had
              been diagnosed with SCD. The laboratory technician informed me I
              needed to run another test to confirm my diagnosis. I later
              discovered I was a sickle cell carrier (AS genotype) and did not
              have SCD. What I did not know was how this information would go on
              to affect my relationships”. – Martha Wiafe (Pharm)
            </p>
            <p className="preOurStory">
              “I remember standing by the door of the laboratory, afraid to go
              in. I needed to know my sickle cell genotype and I had so many
              questions running through my mind. What if unlike my twin, I test
              positive for SCD? I realised all I knew about SCD were the scary
              myths about the condition. I too discovered I was a carrier of the
              sickle cell trait. This led us to ask our other siblings to also
              get tested. We found out four of us were carriers of the sickle
              cell trait.
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-4">
            <div className="woman-TextBox ">
              <div className="">
                <p className="womanText">
                  Dame Elish Angiolini <br />
                  <span style={{ color: "red" }}>OUR PATRON</span>{" "}
                </p>
              </div>
              <p className="pre-lady">
                Lady Elish Frances Angiolini LT DBE PC QC FRSA FRSE is a
                Scottish lawyer. She was the Lord Advocate of Scotland from 2006
                until 2011, having previously been Solicitor General since 2001.
                She was the first woman, the first Procurator Fiscal, and the
                first solicitor to hold either post..
              </p>
              <div className="readMore-Box">
                <p className="womanText mt-3">Read More</p>
                <img
                  src={redarrow}
                  className="RedarrowImage"
                  onClick={handleShow}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="womanImage-Box">
              <img src={womanimage} className="womanImg" />
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Whoweare;
