import React from "react";
import './footer.css'

export default function Foooter() {
  return (
    <div>
      <div className="footer">
        <h1>Pune Institute of Computer Technology</h1>
        <h3>Platform Developed by PICT Web Team</h3>
        <table>
          <thead>
            <tr>
              <th>About</th>
              <th>Useful Links</th>
              <th>Contact Us</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                This platform is built to automate the campus selection process
                in the college which will help to reduce the time and effort of
                Training and Placement cell to maintain the records of students such as resume,
                projects and experience. Students will be able to apply to
                multiple companies visiting the college directly by just
                uploading the basic documents once.
              </td>
              <td>
                <div>
                  <a
                    href="/Home/Home.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Home
                  </a>
                </div>
                <div>
                  <a
                    href="/Home/Home.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Jobs
                  </a>
                </div>
                <div>
                  <a
                    href="/Home/Home.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Notice
                  </a>
                </div>
                <div>
                  <a
                    href="/Home/Home.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Profile
                  </a>
                </div>
              </td>
              <td>
                <div>
                  <b>Email : </b>placements@pict.edu
                </div>
                <div>
                  <b>Contact : </b>248911
                </div>
                <div>
                  <b>Address: </b>Survey No. 27, Near, Trimurti Chowk, Bharati
                  Vidyapeeth Campus, Dhankawadi, Pune, Maharashtra 411043
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
