// Import statements corrected
import React, { useState } from "react";
import unnamed from "../components/unnamed.jpg";
import Navbar from "./Navbar"; // Use correct import path for Navbar component
import "./About.css";

const About = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [activeTab, setActiveTab] = useState("aboutMe"); // Default tab is "About Me"
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Harshavardhan Govindu",
    age: 21,
    gender: "Male",
    college: "vellore institute of technology",
    guide:"CHRISTY JACKSON J",
    // Add more profile data fields as needed
  });

  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleEditButtonClick = () => {
    setEditMode(!editMode);
  };

  const handleInputChange = (field, value) => {
    setProfileData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSaveButtonClick = () => {
    // Here you can handle saving the updated profile data
    setEditMode(false);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      {/* Use correct import path for Navbar component */}
      <Navbar active={navbarActive} toggleNavbar={toggleNavbar} />

      <div className="card bg-light text-dark">
        <div className="card-body">
          <div className="row">
            <div className="col-md-4 col-sm-12 mb-3">
              <img src={unnamed} alt="unnamed" className="img-fluid" />
            </div>
            <div className="col-md-8 col-sm-12 d-flex flex-column">
              <div className="profile-head text-center">
                {editMode ? (
                  <h5>Edit Profile</h5>
                ) : (
                  <>
                    <h5>{profileData.name}</h5>
                    <h6>Web Developer</h6>
                  </>
                )}
                <p className="profile-rating mt-3 mb-4">RANKINGS <span>1/10</span></p>
                <ul className="nav nav-tabs" role="tablist">
                  {/* Fix the class for the second tab link */}
                  <li className="nav-item">
                    <a
                      className={`nav-link ${activeTab === "aboutMe" ? "active" : ""}`}
                      id="aboutMe-tab"
                      onClick={() => handleTabClick("aboutMe")}
                    >
                      About Me
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${activeTab === "aboutProject" ? "active" : ""}`}
                      id="aboutProject-tab"
                      onClick={() => handleTabClick("aboutProject")}
                    >
                      About Project
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${activeTab === "editProfile" ? "active" : ""}`}
                      id="editProfile-tab"
                      onClick={() => handleTabClick("editProfile")}
                    >
                      Edit Profile
                    </a>
                  </li>
                </ul>
              </div>
              <div className="about-info">
                <div className="tab-content proile-tab" id="myTabContent">
                  {activeTab === "aboutMe" && (
                    <div className="tab-pane fade show active" id="aboutMe" role="tabpanel" aria-labelledby="aboutMe-tab">
                      <p>
                      "Hello, I'm Harshavardhan, a web developer currently pursuing my M.Tech in Software Engineering
                       at Vellore Institute of Technology. Looking forward to applying and expanding my skills in 
                       the dynamic field of web development."
                      </p>
                      {/* Add more information as needed */}
                    </div>
                  )}
                  {activeTab === "aboutProject" && (
                    <div
                      className="tab-pane fade show active"
                      id="aboutProject"
                      role="tabpanel"
                      aria-labelledby="aboutProject-tab"
                    >
                      <p>
                        The WaterMap project is an initiative aimed at mapping and monitoring water resources globally. Our mission is to
                        raise awareness about water scarcity, promote sustainable water management practices, and provide valuable insights into
                        water-related issues around the world.
                      </p>
                      <p>
                        Through WaterMap, we strive to leverage technology to address water challenges, facilitate data-driven decision-making,
                        and contribute to a more sustainable and water-secure future.
                      </p>
                      {/* Add more project-related information */}
                    </div>
                  )}
                  {activeTab === "editProfile" && (
                    <div
                      className="tab-pane fade show active"
                      id="editProfile"
                      role="tabpanel"
                      aria-labelledby="editProfile-tab"
                    >
                      {editMode ? (
                        <form>
                          <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              className="form-control"
                              placeholder="Your Name"
                              value={profileData.name}
                              onChange={(e) => handleInputChange("name", e.target.value)}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="age">Age:</label>
                            <input
                              type="number"
                              id="age"
                              name="age"
                              className="form-control"
                              placeholder="Your Age"
                              value={profileData.age}
                              onChange={(e) => handleInputChange("age", e.target.value)}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="gender">Gender:</label>
                            <select
                              id="gender"
                              name="gender"
                              className="form-control"
                              value={profileData.gender}
                              onChange={(e) => handleInputChange("gender", e.target.value)}
                            >
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              {/* Add more options as needed */}
                            </select>
                          </div>
                          <div className="form-group">
                            <label htmlFor="college">College:</label>
                            <input
                              type="text"
                              id="college"
                              name="college"
                              className="form-control"
                              placeholder="Your College"
                              value={profileData.college}
                              onChange={(e) => handleInputChange("college", e.target.value)}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="guide">Guide:</label>
                            <input
                              type="text"
                              id="guide"
                              name="guide"
                              className="form-control"
                              placeholder="Guide"
                              value={profileData.guide}
                              onChange={(e) => handleInputChange("guide", e.target.value)}
                            />
                          </div>
                          {/* Add more fields for editing profile details */}
                        </form>
                      ) : (
                        <>
                          <div className="row">
                            <div className="col-md-6">
                              <label htmlFor="User Id">User ID:</label>
                            </div>
                            <div className="col-md-6">
                              <p>123456789</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <label htmlFor="Name">Name:</label>
                            </div>
                            <div className="col-md-6">
                              <p>{profileData.name}</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <label htmlFor="Age">Age:</label>
                            </div>
                            <div className="col-md-6">
                              <p>{profileData.age}</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <label htmlFor="Gender">Gender:</label>
                            </div>
                            <div className="col-md-6">
                              <p>{profileData.gender}</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <label htmlFor="College">College:</label>
                            </div>
                            <div className="col-md-6">
                              <p>{profileData.college}</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <label htmlFor="guide">Guide:</label>
                            </div>
                            <div className="col-md-6">
                              <p>{profileData.guide}</p>
                            </div>
                          </div>
                          {/* Display other profile details */}
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-2 col-sm-12">
                {activeTab === "editProfile" && (
                  <>
                    {editMode ? (
                      <button type="button" className="btn btn-success" onClick={handleSaveButtonClick}>
                        Save Changes
                      </button>
                    ) : (
                      <button type="button" className="form-control profile-edit-btn" onClick={handleEditButtonClick}>
                        Edit Profile
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
