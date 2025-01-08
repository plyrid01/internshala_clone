// File: ValidateCodePage.jsx
import React, { useState } from 'react';
import './Styles/App.css';

const dummyData = {
  'c8ioabyvfnq': { Name: 'Mr. Ansh Sharma', Training_Name: 'Core Java', College_Name: "Arya College of Engineering", Final_Test_Score:"78%", Date_of_Certification: "2024-09-11" },
  'c8ioabyvfab': { Name: 'Mr. Ansh Sharma', Training_Name: 'Web Development', College_Name: "Arya College of Engineering", Final_Test_Score:"81%", Date_of_Certification: "2024-09-15" },
  'd1ioabyvfnq': { Name: 'Mr. Prateek Rao Naik', Training_Name: 'Core Java', College_Name: "Arya College of Engineering", Final_Test_Score:"92%", Date_of_Certification: "2024-09-11" },
  'e2ioabyvfbd': { Name: 'Mr. Ravi Raj Singh Tanwar', Training_Name: 'Core Java', College_Name: "Arya College of Engineering", Final_Test_Score:"69%", Date_of_Certification: "2024-09-11" },
};

const App = () => {
  const [code, setCode] = useState('');
  const [userData, setUserData] = useState(null);
  const [isValid, setIsValid] = useState(null);

  const handleValidation = () => {
    if (dummyData[code]) {
      document.getElementById("footer").style.position="relative"
      setIsValid(true);
      setUserData(dummyData[code]);
    } else {
      if(!window.matchMedia("(max-width: 500px)").matches){
        document.getElementById("footer").style.position="absolute"
      }
      setIsValid(false);
      setUserData(null);
    }
  };

  return (
    <div id="outermost-div">
      <nav className="navbar">
        <div className="logo"></div>
      </nav>
      <div className="validate-code-container">
        <h1>Certificate Verification</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter certificate number"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="code-input"
          />
          <button onClick={handleValidation} className="validate-button">Verify</button>
        </div>

        {isValid === true && userData && (
          <div className="user-details">
            <h5>Certificate number is valid</h5>
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>{userData.Name}</td>
                </tr>
                <tr>
                  <td>Training Name</td>
                  <td>{userData.Training_Name}</td>
                </tr>
                <tr>
                  <td>College Name</td>
                  <td>{userData.College_Name}</td>
                </tr>
                <tr>
                  <td>Final Test Score</td>
                  <td>{userData.Final_Test_Score}</td>
                </tr>
                <tr>
                  <td>Date of Certification</td>
                  <td>{userData.Date_of_Certification}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {isValid === false && (
          <div className="error-message">Certificate number is not valid</div>
        )}
      </div>
      <div id='footer'>
        <div className='footer-contents'>
          <a href='https://internshala.com/refund_cancellation_policy'>Refund Policy</a>
          <a href='https://trainings.internshala.com/ist-scholarship/?utm_source=ist_footer&sds_tracking_source=ist_footer'>IST Scolarship</a>
          <a href='https://trainings.internshala.com/sitemap/?tracking_source=footer'>Sitemap</a>
        </div>
        <div className='footer-contents'>
          <a href='https://trainings.internshala.com/help_center/?tracking_source=footer'>Help Center</a>
          <a href='https://internshala.com/terms#student'>Terms & Conditions</a>
          <a href='https://internshala.com/privacy'>Privacy Policy</a>
        </div>
        <div className='footer-contents'>
          <a href='https://trainings.internshala.com/blog/?utm_source=trainings-footer'>Blog</a>
          <a href='https://internshala.com/'>Internshala</a>
        </div>
      </div>
    </div>
  );
};

export default App;
