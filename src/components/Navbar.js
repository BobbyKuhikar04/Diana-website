import React, { useState } from "react";

function Navbar() {
  return (
    <>
      {/* navbar section */}

      <nav className="Navbar">
        <div className="navbar-container">
          <span className="nav-icon">
            <img src="./icons/menuhamburger.png" alt="menu" />
          </span>

          <span className="nav-right-icons">
            <span>
              <img src="./icons/shopping-cart.png" alt="cart" />
            </span>
            <span className="nav-icon">
              <img src="./icons/bell.png" alt="bell" />
            </span>
          </span>
        </div>
      </nav>

      {/* 1st-section */}

      <div className="starter">
        {/* starter is composed of first and second section */}

        <div className="first">
          <div className="first__about">About Diana</div>

          <div className="first__platform">
            A platform that looks out for you
          </div>

          <div className="first__para">
            <p>
              Diana empowers you to understand how your body works so you can
              look and feel your best.
            </p>
          </div>
        </div>

        <hr className="hrline" />

        {/* <!-- second section --> */}

        <div className="second">
          <div className="second__philosophy">Our Philosophy</div>

          <div className="second__wellness">
            Sustainable wellness is a big-picture, inside out approach
          </div>

          <div className="second__para">
            Diana is on a mission to create thoughtful, science-backed solutions
            for women who want to make informed decisions about their health and
            wellness.
            <br />
            <br />
            That’s why we’ve created an integrated ecosystem of:
          </div>

          <div className="second--container">
            <div className="second__img--flask">
              <img src="./icons/Group.png" alt="Flask" />
            </div>
            <div className="second__img__div">
              Consciously formulated products that deliver feel-good results
              fast
              <div className="second__img--sparkle">
                <img src="./icons/Vector.png" alt="sparkles" />
              </div>
              <br />
              <p>
                In-app mood and period tracking options that help you cultivate
                a deeper connection with your mind and body
              </p>
              <br />
              <img src="./icons/phone-call.png" alt="phone-call" />
              <br />
              <br />
              <p>
                In-app consultation portals that connect you with compassionate
                wellness experts
              </p>
            </div>
          </div>
          <div className="second__container--two">
            Consider us your nerdy ally who spends their time perfecting
            products that work because they want you to feel your best everyday.
          </div>
        </div>
      </div>

      {/* <!-- third-section --> */}

      <div className="third">
        <div className="third__ques">What makes us different?</div>

        <div className="third__head">Reimagining and rewiring self-care</div>

        <div className="third__para">
          <p>You care about conscious consumption, and so do we.</p>
          <br />
          <p>
            When it comes to your health, “good enough” is not good enough.
            We’re here to flip the script on that narrative because you deserve
            the best
          </p>
          <br />
          <p>We collaborate with researchers and doctors to</p>
          <br />
          <ul>
            <li>
              Help you get granular about your health and self-care with
              personalized insights, and
            </li>
            <br />
            <li>
              Equip you with simple, sustainable products that get the job done
            </li>
          </ul>
          <br />
          <p>No to-the-moon-and-back claims in this neck of the woods.</p>
          <br />
          <p>We’re just solving real problems for real people here.</p>
        </div>
      </div>

      {/* <!-- fourth-section --> */}

      <div className="fourth">
        <div className="fourth__liberate">Liberate your everyday wellness</div>

        <div className="fourth__head">Shop our self-care products</div>

        <div className="fourth__para">
          Gentle formulations thoughtfully engineered by specialist researchers
          and doctors to simplify your self-care and get results fast. And, we
          always list our ingredients - so what you see is what you get.
        </div>
      </div>

      <div className="fourth__second">
        <div className="fourth__btn">
          <button className="fourth__btn__modify">
            <span className="fourth__btn__txt">Upgrade your self-care</span>
          </button>
        </div>
        <div className="fourth__second__slogan">#NoNasties, we promise!</div>
      </div>

      {/* <!-- fifth-section --> */}

      <div className="fifth">
        <div className="fifth__head">Track your mood</div>

        <div className="fifth__para">
          All days and all moods are not made equal. But we can only improve
          what we measure. Track your mood and vitals (including skin and hair
          health) so you can take better care of yourself every day.
        </div>
        <div className="fifth__btn">
          <button className="fifth__btn__modify">
            <span className="fifth__btn__txt">Track your mood on the app</span>
          </button>
        </div>
        <br />
        <div className="fifth__img">
          <img
            src="./icons/Rectangle 194.png"
            alt="women"
            className="fifth__img"
          />
          <img
            src="./icons/Rectangle 197.png"
            alt="women"
            className="fifth__img__second"
          />
        </div>
        <div className="fifth__img">
          <img
            src="./icons/Rectangle 198.png"
            alt="women"
            className="fifth__img"
          />
          <img
            src="./icons/Rectangle 193.png"
            alt="women"
            className="fifth__img__second"
          />
        </div>
      </div>

      {/* <!-- 6th section --> */}

      <div className="sixth">
        <div className="sixth__head">Track your period</div>
        <div className="sixth__para">
          Stay in the know with reliable AI-based and science-backed period,
          ovulation, and PMS predictions. The intuitive design makes tracking
          your cycle effortless and helps you stay on top of your monthly data.
        </div>

        <div className="sixth__btn">
          <button className="sixth__btn__modify">
            <span className="sixth__btn__txt">
              Track your period on the app
            </span>
          </button>
        </div>
        <div className="sixth__img"></div>
      </div>

      {/* <!-- 7th section --> */}

      <div className="seventh">
        <div className="seventh__head">Consult with wellness experts</div>

        <div className="seventh__para">
          Set up health consultations with experienced doctors and therapists on
          our app. Simply select a service, answer a few questions, and we’ll
          connect you to someone who is the right-fit for you.
        </div>

        <div className="seventh__btn">
          <button className="seventh__btn__modify">
            <span className="seventh__btn__txt">Get a consultation</span>
          </button>
        </div>
        {/* <img src="./icons/doctor.png" alt="doctor" /> */}
        <div className="seventh__img"></div>
      </div>

      {/* <!-- 8th section --> */}

      <div className="eigth">
        <div className="eigth__head">Get your personalized period box</div>

        <div className="eigth__img"></div>
        <div className="eigth__para">
          Tailor your monthly box of organic period products without the organic
          price tag (no pink taxing here). Get it delivered to your doorstep in
          sustainable packaging and track your subscription on our app.
        </div>
        <div className="eigth__btn">
          <button className="eigth__btn__modify">
            <span className="eigth__btn__txt">Create your box on the app</span>
            <span className="eigth__btn__arrow">
              <img src="./icons/chevron-right.png" alt="right-arrow" />
            </span>
          </button>
        </div>
      </div>

      {/* <!-- 9th section --> */}

      <div className="nineth">
        <div className="nineth__gradient">ok</div>
        <div className="nineth__head">
          With Diana, you’re in control of your health, your every day, and your
          story.
        </div>
      </div>

      {/* 10th section */}

      <div className="tenth">
        <div className="tenth__social">
          <img
            src="./icons/facebook.png"
            alt="facebook"
            className="tenth__social__img"
          />
          <img
            src="./icons/twitter.png"
            alt="twitter"
            className="tenth__social__img"
          />
        </div>
        <div className="tenth__list">
          <div>
            Products
            <span className="tenth__list__arrow">
              <img src="./icons/chevron-right.png" alt="right-arrow" />
            </span>
          </div>

          <p>
            Our Science
            <span className="tenth__list__arrow">
              <img src="./icons/chevron-right.png" alt="right-arrow" />
            </span>
          </p>

          <p>
            Visions & Mission
            <span className="tenth__list__arrow">
              <img src="./icons/chevron-right.png" alt="right-arrow" />
            </span>
          </p>

          <p>
            About Us
            <span className="tenth__list__arrow">
              <img src="./icons/chevron-right.png" alt="right-arrow" />
            </span>
          </p>
          <br />
          <hr className="tenth__hr" />

          <div className="tenth__txt">Subscribe to our Newsletter</div>
          <input type="text" placeholder="Enter your email..." />

          <span className="tenth__btn">
            <button type="submit" className="tenth__btn__modify">
              <span className="tenth__btn__icon">
                <img src="./icons/mail.png" alt="mail" />
              </span>
              <span className="tenth__btn__txt">Activate</span>
            </button>
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
