import React, { Component } from "react";
// import { render } from "react-dom";
// import Hello from "./Hello";
// import "./style.css";
import "./Slider.css";

const Slider = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const checkNext = () => {
    const labels = document.querySelectorAll('#slider label');
    const nextIndex = selectedIndex === (labels.length - 1) ? 0 : selectedIndex + 1;
    setSelectedIndex(nextIndex);
  }

  const check = index => setSelectedIndex(index);

  return (
    <div className="slider-main">

      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">

        <div className="md:w-2/4 md:mb-0 mb-6 flex flex-col text-center items-center">
          <section
            id="slider"
            className="w-16 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0"
          >
            <input
              type="radio"
              name="slider"
              id="s1"
              checked={selectedIndex === 0}
              onClick={() => check(0)}
            />
            <input
              type="radio"
              name="slider"
              id="s2"
              checked={selectedIndex === 1}
              onClick={() => check(1)}
            />
            <input
              type="radio"
              name="slider"
              id="s3"
              checked={selectedIndex === 2}
              onClick={() => check(2)}
            />
            <label htmlFor="s1" id="slide1">
              {/* <img className="fea" src="https://picsum.photos/200/200" height="100%" width="100%" /> */}
              <div className="user-image">
                <img src="https://i.imgur.com/PKHvlRS.jpg" className="rounded-circle" width="80"
                />
              </div>
              <br />
              <div className="user-content">

                <h5 className="mb-0">John Doe</h5>
                <span>BE IT 2019</span>
                <hr></hr>
                <p>At PICT, knowledge is not a restricted term. Students have the freedom to explore different domains of their choice. 
                  Students get the opportunity to work on real-time industrial projects under the guidance of highly qualified and experienced professors.</p>

              </div>
            </label>

            <label htmlFor="s2" id="slide2">
              <div className="user-image">

                <img src="https://i.imgur.com/w2CKRB9.jpg" className="rounded-circle" width="80"
                />

              </div>
              <br />
              <div className="user-content">

                <h5 className="mb-0">John Doe</h5>
                <span>BE CSE 2021</span>
                <hr></hr>
                <p>It was a great pleasure to have spent 4 years of my college life in PICT. The entire faculty and department is there to support you in every walk of your professional 
                  life.I am also grateful to Training and Placement Cell to provide students ample opportunities. It was wonderful experience of learning with prolific exposure to outside.</p>

              </div>
              {/* <img className="fea" src="https://picsum.photos/200/300" height="100%" width="100%" /> */}
            </label>

            <label htmlFor="s3" id="slide3">
              {/* <img className="fea" src="https://picsum.photos/300/300" height="100%" width="100%" /> */}
              <div className="user-image">

                <img src="https://i.imgur.com/ACeArwY.jpg" className="rounded-circle" width="80"
                />

              </div>
              <br />
              <div className="user-content">

                <h5 className="mb-0">Jachie Done</h5>
                <span>BE ENTC 2022</span>
                <hr></hr>
                <p>
                  The 4 years in college were absolutely amazing. Working for many clubs, partaking in the college events, both technical and cultural.
                  The support from teachers and staff, timely help regarding anything as well as a streamlined processing, made the experience even better.</p>
              </div>
            </label>
          </section>
        </div>
      </div>
    </div>

  );
}

export default Slider;