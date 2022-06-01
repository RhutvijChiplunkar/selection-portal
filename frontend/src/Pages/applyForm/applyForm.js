import "./applyForm.css";
import React from "react";

const details = [
  {
    label: "Name",
    value: "Vedant Daigavane",
  },
  {
    label: "Roll No.",
    value: "33328",
  },
  {
    label: "Enrollment id",
    value: "I2K19102726",
  },
  {
    label: "PRN",
    value: "72016756G",
  },
  {
    label: "Last CGPA",
    value: "9.82",
  },
  {
    label: "Domain",
    value: "Full-Stack Developer",
  },
];

const ApplyForm = () => {
  return (
    <div className="apply">
      <div className="apply-title">Apply Form</div>

      <div className="details">
        <div className="original-details">
          <div className="head mb-3 text-start">Details</div>
          <div className="row align-items-start">
            <div className="col col-md-6">
              {details.map((detail, index) => {
                return (
                  index < 4 && (
                    <div className="row">
                      <div className="col-4 text-start ps-3 fw-bolder">
                        {detail.label}
                      </div>
                      <div className="col text-start pe-5">
                        {": "}
                        {detail.value}
                      </div>
                    </div>
                  )
                );
              })}
            </div>
            <div className="col col-md-6">
              {details.map((detail, index) => {
                return (
                  index >= 4 && (
                    <div className="row">
                      <div className="col-4 text-start ps-3 fw-bolder">
                        {detail.label}
                      </div>
                      <div className="col text-start pe-5">
                        {": "}
                        {detail.value}
                      </div>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="questions">
        <h4>Question</h4>
        <div className="question">Write a message to the HR ?</div>
        <textarea></textarea>
        <div className="question">What makes you suitable for this job ?</div>
        <textarea></textarea>
        <div className="question">Why do you want to join this company ?</div>
        <textarea></textarea>
      </div>

      <div className="button">
        <button>Submit</button>
      </div>
    </div>
  );
};

export default ApplyForm;
