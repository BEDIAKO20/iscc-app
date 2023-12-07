import React from "react";
import "../NewTemplate/newTemplate.css";
import boxImage from "../../assets/Frame 710.png";
import redroundedButton from "../../assets/Redrounded button.png"
import isccwoman from "../../assets/Frame 399.png";
import ads from "../../assets/adsimage.png";
import BoxColor from "../../assets/boxColor.png";
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
      <div className="container  text-Box">
        <div className="row">
          <div className="col-md-12">
            <div className="">
              <p className="pre-text">
                Some Sub heading goes here should ne very long
              </p>
              <div className="textsBox ">
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Volutpat consequat mauris nunc congue nisi vitae suscipit
                  tellus mauris. Dictum at tempor commodo ullamcorper a. Proin
                  nibh nisl condimentum id venenatis a condimentum vitae sapien.
                  Mi eget mauris pharetra et ultrices neque ornare aenean
                  euismod. Eget nullam non nisi est sit amet facilisis.
                  Adipiscing bibendum est ultricies integer quis auctor elit. Eu
                  ultrices vitae auctor eu augue ut lectus arcu bibendum. Non
                  pulvinar neque laoreet suspendisse interdum consectetur.
                  Tristique magna sit amet purus gravida. Quisque egestas diam
                  in arcu cursus euismod. Purus semper eget duis at. Etiam erat
                  velit scelerisque in dictum non consectetur a erat. Pulvinar
                  elementum integer enim neque volutpat ac tincidunt
                </p>
                <p className="">
                  Pharetra massa massa ultricies mi quis hendrerit dolor magna
                  eget. Sed arcu non odio euismod. Leo integer malesuada nunc
                  vel risus commodo. Felis donec et odio pellentesque diam
                  volutpat commodo. A pellentesque sit amet porttitor eget dolor
                  morbi. Eu consequat ac felis donec et. Nisl rhoncus mattis
                  rhoncus urna neque viverra. Bibendum at varius vel pharetra.
                  Habitant morbi tristique senectus et netus et. Semper risus in
                  hendrerit gravida rutrum. Justo eget magna fermentum iaculis
                  eu non diam. In massa tempor nec feugiat. Amet porttitor eget
                  dolor morbi non arcu risus. Sodales ut etiam sit amet nisl
                  purus in mollis nunc. Urna duis convallis convallis tellus id
                  interdum velit. Tortor id aliquet lectus proin nibh. Nunc sed
                  blandit libero volutpat sed. Pellentesque habitant morbi
                  tristique senectus et. Vel eros donec ac odio tempor orci
                  dapibus ultrices in. Vel pharetra vel turpis nunc. Sit amet
                  commodo nulla facilisi nullam vehicula ipsum a. Augue neque
                  gravida in fermentum et sollicitudin ac orci. Sem fringilla ut
                  morbi tincidunt augue interdum velit euismod. Purus non enim
                  praesent elementum facilisis leo.
                </p>
                <p className="">
                  Pharetra et ultrices neque ornare aenean euismod elementum
                  nisi quis. Condimentum lacinia quis vel eros donec. Enim ut
                  sem viverra aliquet eget sit. Eu tincidunt tortor aliquam
                  nulla facilisi cras fermentum odio. In tellus integer feugiat
                  scelerisque varius morbi. Ipsum dolor sit amet consectetur.
                  Vitae congue eu consequat ac felis donec et odio pellentesque.
                  Amet purus gravida quis blandit turpis cursus in. Leo integer
                  malesuada nunc vel risus. Ornare aenean euismod elementum
                  nisi. Luctus accumsan tortor posuere ac. Massa tincidunt nunc
                  pulvinar sapien et ligula ullamcorper malesuada proin. Id
                  venenatis a condimentum vitae sapien pellentesque habitant.
                  Nec feugiat nisl pretium fusce id. Platea dictumst quisque
                  sagittis purus sit amet volutpat. Sed viverra tellus in hac
                  habitasse platea dictumst. Est sit amet facilisis magna. Mi
                  eget mauris pharetra et ultrices neque ornare aenean euismod.
                  Felis donec et odio pellentesque diam volutpat commodo sed
                  egestas. Purus non enim praesent elementum facilisis leo vel.
                  Ut consequat semper viverra nam libero.
                </p>
                <p className="">
                  Nisl rhoncus mattis rhoncus urna neque viverra justo. Morbi
                  leo urna molestie at. Vitae congue mauris rhoncus aenean vel
                  elit scelerisque mauris pellentesque. Tellus id interdum velit
                  laoreet id donec ultrices tincidunt. Mauris a diam maecenas
                  sed enim ut sem. Nisl vel pretium lectus quam. Dictumst
                  vestibulum rhoncus est pellentesque elit ullamcorper. Nullam
                  eget felis eget nunc lobortis mattis. Aliquam sem fringilla ut
                  morbi. Quam elementum pulvinar etiam non quam lacus
                  suspendisse faucibus interdum. Sit amet consectetur adipiscing
                  elit pellentesque. Aliquam sem et tortor consequat. Amet justo
                  donec enim diam vulputate ut pharetra. Arcu ac tortor
                  dignissim convallis aenean et tortor at. Adipiscing tristique
                  risus nec feugiat
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-box mt-3">
          <button className="btn-give">Give</button>
        </div>
      </div>
      {/* container */}
      <div className="container mt-5">
        <div className="row ads-box">
          <div className="col-md-12 adsImageBox">
            <img src={ads} />
          </div>
          <div className="textsBox adstext-box mt-5">
            <p className="">
              Pharetra massa massa ultricies mi quis hendrerit dolor magna eget.
              Sed arcu non odio euismod. Leo integer malesuada nunc vel risus
              commodo. Felis donec et odio pellentesque diam volutpat commodo. A
              pellentesque sit amet porttitor eget dolor morbi. Eu consequat ac
              felis donec et. Nisl rhoncus mattis rhoncus urna neque viverra.
              Bibendum at varius vel pharetra. Habitant morbi tristique senectus
              et netus et. Semper risus in hendrerit gravida rutrum. Justo eget
              magna fermentum iaculis eu non diam. In massa tempor nec feugiat.
              Amet porttitor eget dolor morbi non arcu risus. <br />
              Sodales ut etiam sit amet nisl purus in mollis nunc. Urna duis
              convallis convallis tellus id interdum velit. Tortor id aliquet
              lectus proin nibh. Nunc sed blandit libero volutpat sed.
              Pellentesque habitant morbi tristique senectus et. Vel eros donec
              ac odio tempor orci dapibus ultrices in. Vel pharetra vel turpis
              nunc. Sit amet commodo nulla facilisi nullam vehicula ipsum a.
              Augue neque gravida in fermentum et sollicitudin ac orci. Sem
              fringilla ut morbi tincidunt augue interdum velit euismod. Purus
              non enim praesent elementum facilisis leo.
            </p>
            <p className="">
              Pharetra et ultrices neque ornare aenean euismod elementum nisi
              quis. Condimentum lacinia quis vel eros donec. Enim ut sem viverra
              aliquet eget sit. Eu tincidunt tortor aliquam nulla facilisi cras
              fermentum odio. In tellus integer feugiat scelerisque varius
              morbi. Ipsum dolor sit amet consectetur. Vitae congue eu consequat
              ac felis donec et odio pellentesque. Amet purus gravida quis
              blandit turpis cursus in.
              <br />
              Leo integer malesuada nunc vel risus. Ornare aenean euismod
              elementum nisi. Luctus accumsan tortor posuere ac. Massa tincidunt
              nunc pulvinar sapien et ligula ullamcorper malesuada proin. Id
              venenatis a condimentum vitae sapien pellentesque habitant. Nec
              feugiat nisl pretium fusce id. Platea dictumst quisque sagittis
              purus sit amet volutpat. Sed viverra tellus in hac habitasse
              platea dictumst. Est sit amet facilisis magna. Mi eget mauris
              pharetra et ultrices neque ornare aenean euismod. Felis donec et
              odio pellentesque diam volutpat commodo sed egestas. Purus non
              enim praesent elementum facilisis leo vel. Ut consequat semper
              viverra nam libero
            </p>
          </div>
          <div className="btn-box mt-3">
            <button className="btn-give">Give</button>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3">
            <div className="recommeded-text">
              <h4 className="recommeded-forYou">Recommended for you</h4>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="card-recommeded mt-5">
              <div className="d-flex gap-3">
                <div class="card recommededCard" style={{ width: "18rem" }}>
                  <img src={BoxColor} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <div className="d-flex">
                      <div className="mt-3">
                        <img
                          src={isccwoman}
                          alt="womanImage"
                          className="iscc-Woman"
                        />
                      </div>
                      <div className="me-2 pt-3">
                        <h6 className="luinda-Name   ">Lucinda Seyram Tokr </h6>
                        <span className="name-span pb-3"> Author</span>
                      </div>
                    </div>
                    <p class="card-text">Some blog title here more text</p>
                    <p className="cardText">
                      Some description of picture goes here with some more text
                      and extra text. just adding more text here to fill the
                      text box.Some description of picture goes here with some
                      more text and extra text. just adding more text here to
                      fill the text box.
                    </p>
                    <div className="d-flex gap-2  read-box">
                 <div><p className="read_text">Read Post</p></div>
                 <div><img src={redroundedButton} alt=""/></div>
                    </div>
                  </div>
                </div>
                <div class="card recommededCard" style={{ width: "18rem" }}>
                  <img src={BoxColor} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <div className="d-flex">
                      <div className="mt-3">
                        <img
                          src={isccwoman}
                          alt="womanImage"
                          className="iscc-Woman"
                        />
                      </div>
                      <div className="me-2 pt-3">
                        <h6 className="luinda-Name   ">Lucinda Seyram Tokr </h6>
                        <span className="name-span pb-3"> Author</span>
                      </div>
                    </div>
                    <p class="card-text">Some blog title here more text</p>
                    <p className="cardText">
                      Some description of picture goes here with some more text
                      and extra text. just adding more text here to fill the
                      text box.Some description of picture goes here with some
                      more text and extra text. just adding more text here to
                      fill the text box.
                    </p>
                    <div className="d-flex gap-2  read-box">
                 <div><p className="read_text">Read Post</p></div>
                 <div><img src={redroundedButton} alt=""/></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewTemplate;
