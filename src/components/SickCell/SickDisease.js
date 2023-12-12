import React, { useState } from "react";
import "../SickCell/sickcdisase.css";
import brainIcon from "../../assets/brain_Icon.png";
import noseIcon from "../../assets/nose_Icon.png";
import lungIcon from "../../assets/lungs_icon.png";
import liverIcon from "../../assets/liver_icon.png";
import digestiveIcon from "../../assets/digestive-systemIcon.png";
import reproductiveSystem from "../../assets/reproductive-system.png";

function SickDisease() {
  const [bodyPartInfo, setBodyPartInfo] = useState(
    <div>
      <h1 className="bodyPartHeader mt-5">General</h1>
      <p className="bodyPartPre mt-5">
        There are more than 1,400 possible mutations of the faulty gene that
        causes cystic fibrosis. Everyone living with the condition carries two
        of these mutated genes, meaning that the way it affects the body can
        vary wildly from person to person. When you add to this the huge range
        of other influencing factors, the one thing we can say for sure is that
        CF is as individual as you are!
      </p>
      <p className="bodyPartPre">
        There are more than 1,400 possible mutations of the faulty gene that
        causes cystic fibrosis. Everyone living with the condition carries two
        of these mutated genes, meaning that the way it affects the body can
        vary wildly from person to person. When you add to this the huge range
        of other influencing factors, the one thing we can say for sure is that
        CF is as individual as you are! Here you can explore some of the most
        common physical symptoms of cystic fibrosis and find out what may be
        going on below the surface.
      </p>
    </div>
  );

  const handleBodyPartClick = (bodyPart) => {
    let info = "";
    switch (bodyPart) {
      case "brain":
        info = (
          <div className="mt-5">
            <h1 className="bodyPartHeader mt-2">Brain</h1>
            <h2 className="bodyPartHeadertwo mt-4">Mental Health</h2>
            <p className="bodyPartPre">
              Living with cystic fibrosis means more than just a set of physical
              symptoms - it can have an impact on your mental and emotional
              wellbeing.
            </p>
            <p className="bodyPartPre">
              Problems with mental health can affect anyone at any time, and
              everyone with CF experiences their condition differently.
              Consequently, some people may go through particular periods of
              mental stress, especially if their physical health takes a turn
              for the worse, while others may find it affects them to a lesser
              degree.
            </p>
            <p className="bodyPartPre">
              If you are concerned that CF may be affecting your mental or
              emotional health, you can talk to your clinical team.
            </p>
            <h2 className="bodyPartHeadertwo mt-3">Tell me more</h2>
            <p className="bodyPartPre">
              While you're here, take a look at psychologist Dr Ann-Marie
              Golden's tips for mindfulness and try out some of the practices
              for yourself.
            </p>
          </div>
        );
        break;
      case "nose":
        info = (
          <div className="mt-5">
            <h1 className="bodyPartHeader mt-2">Nose</h1>
            <h2 className="bodyPartHeadertwo mt-4">Nasal polyps </h2>
            <p className="bodyPartPre">
              Nasal polyps are soft swellings that grow in the nose or sinuses.
              They can vary in size and may grow individually or in a bunch.
              People with nasal polyps may complain of congestion, sinus pain, a
              runny nose, or a loss of their sense of smell.
            </p>
            <p className="bodyPartPre">
              Many people with CF suffer from nasal polyps. This is thought to
              be due to the chronic congestion and infection that CF can cause.
              Polyps can often be treated with steroids or sometimes with a
              surgical procedure called a polypectomy. To reduce the chance that
              the polyps will return after treatment, steroids, antihistamines,
              antibiotics, or sinus flushes may be recommended.
            </p>
            <h2 className="bodyPartHeadertwo mt-3">Tell me more</h2>
            <p className="bodyPartPre">
              Sinus problems are very common in people with cystic fibrosis. The
              sinuses are air-filled spaces in the head; three pairs between the
              eyes and one pair above the eyes. They have a number of functions
              including warming and humidifying the air we breathe and trapping
              particles such as bacteria and dust. Cystic fibrosis can cause
              thick, sticky mucus to build up in the sinuses, resulting in a
              range of symptoms including facial pain, chronic congestion, loss
              of smell/taste, and a constant need to clear the throat.
            </p>
            <h2 className="bodyPartHeadertwo mt-3">Tell me more</h2>
            <p className="bodyPartPre">
              While you're here, take a look at psychologist Dr Ann-Marie
              Golden's tips for mindfulness and try out some of the practices
              for yourself.
            </p>
          </div>
        );
        break;
      case "lung":
        info = (
          <div className="mt-5">
            <h1 className="bodyPartHeader mt-2">Lungs</h1>
            {/* <h2 className="bodyPartHeadertwo mt-4">Mental Health</h2> */}
            <p className="bodyPartPre">
              Your lungs are responsible for inhaling air and passing the oxygen
              it contains into the bloodstream, where it is taken to cells that
              use it to produce energy. Creating energy in the cells produces
              carbon dioxide, which is transported back to the lungs in the
              blood stream and then expelled in the air you breathe out.
            </p>
            <p className="bodyPartPre">
              Air moves around your lungs through airways, which branch into
              smaller and smaller tubes. You have almost 15,000 miles of airways
              in your body – that’s like flying from London to New York and back
              again - twice! At the end of these tubes are tiny balloon-like
              structures called alveoli, which are surrounded by blood vessels
              that pick up the oxygen and drop off the carbon dioxide.
            </p>
            <h2 className="bodyPartHeadertwo mt-3">
              Sticky mucus in the lungs
            </h2>
            <p className="bodyPartPre">
              Inside your airways there’s a thin layer of mucus that catches
              anything you breathe in, like bacteria or dust. In people with CF,
              this mucus is stickier than it should be. This means bacteria can
              become trapped in the lungs, causing infections. Your airways are
              also covered in tiny finger-like structures that move backward and
              forward to push the mucus and everything it contains out of the
              lungs. These are called cilia, and because the mucus in the lungs
              of people with CF is stickier, the cilia don’t always work
              properly. Physiotherapy helps to loosen the mucus, which in turn
              helps the movement of air through the lungs.
            </p>
            <h2 className="bodyPartHeadertwo mt-3">Tell me more</h2>
            <p className="bodyPartPre">
              While you're here, take a look at psychologist Dr Ann-Marie
              Golden's tips for mindfulness and try out some of the practices
              for yourself.
            </p>
          </div>
        );
        break;
      case "liver":
        info = (
          <div className="mt-5">
            <h1 className="bodyPartHeader mt-2">Liver</h1>
            {/* <h2 className="bodyPartHeadertwo mt-4">Mental Health</h2> */}
            <p className="bodyPartPre">
              It is quite common for adults with cystic fibrosis (CF) to have
              some changes in their liver function, however, these changes will
              often not cause them any difficulties. It is thought that CF
              affects the normal secretion and function of bile, which is
              produced in the liver. The bile can become sticky, causing
              irritation and inflammation of the bile ducts in the liver. This
              can be a minor problem for most people with cystic fibrosis.
              However, occasionally the inflammation leads to permanent damage
              in the ducts that in turn leads to scarring and problems with the
              normal functioning of the liver. It is not known why some people
              develop CF-related liver damage and others do not.
            </p>
            <p className="bodyPartPre">
              Problems with mental health can affect anyone at any time, and
              everyone with CF experiences their condition differently.
              Consequently, some people may go through particular periods of
              mental stress, especially if their physical health takes a turn
              for the worse, while others may find it affects them to a lesser
              degree.
            </p>
            <h2 className="bodyPartHeadertwo mt-3">Liver transplant</h2>
            <p className="bodyPartPre">
              Some people with cystic fibrosis may require a liver transplant.
            </p>
            <h2 className="bodyPartHeadertwo mt-3">Tell me more</h2>
            <p className="bodyPartPre">
              While you're here, take a look at psychologist Dr Ann-Marie
              Golden's tips for mindfulness and try out some of the practices
              for yourself.
            </p>
          </div>
        );
        break;
      // digestive"reproductiveSystem
      case "digestive":
        info = (
          <div className="mt-5">
            <h1 className="bodyPartHeader mt-2">Digestive System</h1>
            <h2 className="bodyPartHeadertwo mt-4">Pancreas and digestion </h2>
            <p className="bodyPartPre">
              The pancreas creates enzymes, important chemicals that break down
              fats, proteins, and carbohydrates in your food. This is important
              for releasing the nutrients that your body uses to make energy. In
              digestion in people with CF, the small tubes that transport these
              enzymes out of the pancreas become blocked with mucus. The enzymes
              build up in the pancreas instead of reaching the digestive system,
              causing the pancreas to become inflamed. As a result, people with
              CF have to take supplements to replace these enzymes with their
              meals to help digest their food. A person whose pancreas is
              affected in this way is suffering from ‘pancreatic insufficiency
            </p>
            <p className="bodyPartPre">
              Problems with mental health can affect anyone at any time, and
              everyone with CF experiences their condition differently.
              Consequently, some people may go through particular periods of
              mental stress, especially if their physical health takes a turn
              for the worse, while others may find it affects them to a lesser
              degree.
            </p>
            <h2 className="bodyPartHeadertwo mt-3">Liver transplant</h2>
            <p className="bodyPartPre">
              Some people with cystic fibrosis may require a liver transplant.
            </p>
            <h2 className="bodyPartHeadertwo mt-3">Tell me more</h2>
            <p className="bodyPartPre">
              While you're here, take a look at psychologist Dr Ann-Marie
              Golden's tips for mindfulness and try out some of the practices
              for yourself.
            </p>
          </div>
        );
        break;
      case "reproductiveSystem":
        info = (
          <div className="mt-5">
            <h1 className=" mt-2">Male puberty and fertility</h1>
            <h2 className="bodyPartHeadertwo pt-4">Delayed puberty </h2>
            <p className="bodyPartPre">
              Young people with CF can experience a delay in the onset of
              puberty, usually of about 18 months to two years, but sometimes
              more. This can affect self-esteem and cause anxiety, but is only
              temporary and should not be cause for concern. Young people with
              CF will grow and develop the physical appearance of a healthy
              adult.
            </p>
            <h2 className="bodyPartHeadertwo mt-5">Fertility</h2>
            <p className="bodyPartPre">
              Most men with CF (around 98%) will not be able to father a child
              biologically without assistance from fertility specialists. This
              is because the tube that carries sperm from the testicles to the
              penis (called the vas deferens) is either missing or blocked. You
              may hear this referred to as ‘congenital bilateral absence of the
              vas deferens’ (CBAVD). The sperm is healthy, there is just no way
              for it to travel through the vas deferens to become semen. This is
              called obstructive azoospermia. It is possible for men with this
              CF-related problem to father biological children through fertility
              treatment. Find out more about fertility and family planning in
              cystic fibrosis.
            </p>
            <h2 className="bodyPartHeadertwo mt-5">Tell me more</h2>
            <p className="bodyPartPre">
              While you're here, take a look at psychologist Dr Ann-Marie
              Golden's tips for mindfulness and try out some of the practices
              for yourself.
            </p>
          </div>
        );
        break;
      default:
        info = "";
    }
    setBodyPartInfo(info);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="interactiv-BodyIMage">
              <div>
                <img
                  src={brainIcon}
                  className="brain-icons mt-2"
                  onClick={() => handleBodyPartClick("brain")}
                />
              </div>

              <div>
                <img
                  src={noseIcon}
                  className="nose-icons"
                  onClick={() => handleBodyPartClick("nose")}
                />
              </div>
              <img
                src={lungIcon}
                className="lung-icon"
                onClick={() => handleBodyPartClick("lung")}
              />

              <div className="row">
                <div className=" col-lg-6">
                  <img
                    src={liverIcon}
                    alt="liverIcon"
                    className="liver-icons"
                    onClick={() => handleBodyPartClick("liver")}
                  />
                </div>
                <div className="col-lg-6">
                  <img
                    src={digestiveIcon}
                    alt="liverIcon"
                    className="digestive-Icon"
                    onClick={() => handleBodyPartClick("digestive")}
                  />
                </div>
              </div>
              <div>
                <img
                  src={reproductiveSystem}
                  alt="reproductiveSystem"
                  className="reproductiveSystem"
                  onClick={() => handleBodyPartClick("reproductiveSystem")}
                />
              </div>
            </div>
          </div>

          <div className="col-md-6 interactiv-Text mt-5">
            <div className="row">
              <div className="col-lg-3">
                <div className="maleFemale-Box">
                  <div></div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="human body details">{bodyPartInfo}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SickDisease;
