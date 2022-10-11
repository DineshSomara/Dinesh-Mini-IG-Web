import React from "react";

function Projects(props) {
  return (
    <div>
      <div className="projects-page-container" id="sectionprojects">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="projects-main-heading text-center mt-5">
                <span className="innovation-span-style">Projects</span>
              </h1>
              <h1 className="project-description text-center">GBit Studios</h1>
              <p className="project-description text-center">
                GBit Studios(IG Startup) is a group which shares a common
                passion and love for making games. GBit Studios have created
                many games and some of them are listed below...
              </p>
            </div>

            {props.projectsInfo.map((element) => {
              return (
                <div className="col-12 startup-game-card p-0 m-3 shadow">
                  <img
                    className="game-image text-center"
                    src={`${element.imageUrl}`}
                    alt=""
                  />
                  <div className="p-3">
                    <h1 className="projects-heading">{element.heading}</h1>
                    <p className="project-description">{element.para}</p>
                    <p className="project-status">{element.status}</p>
                    <button className="custom-button">
                      <a
                        href={`${element.gameUrl}`}
                        rel="noopener noreferrer"
                        className="button-anchor"
                      >
                        Learn More
                      </a>
                    </button>
                  </div>
                </div>
              );
            })}
            <div className="col-12">
              <h1 className="projects-main-heading text-center mt-5">
                <span className="innovation-span-style">IG Robotics team</span>
              </h1>
              <p className="project-description text-center">
                We are a team of robotics enthusiasts consisting of members with various complimentary interdisciplinary expertise that converge at the bleeding edge of the field of robotics. We seek to design and actualize innovative and practical robotics solutions to various real world problems.
              </p>
            </div>
            {props.roboticProjects.map((element) => {
              return (
                <div className="col-12 startup-game-card p-0 m-3 shadow">
                  <div className="p-3">
                    <h1 className="projects-heading">{element.project_name}</h1>
                    <p className="project-description">{element.project_info}</p>
                    <p className="project-status">{element.project_status}</p>
                  </div>
                </div>
              );
            })}
            <div className="col-12">
              <h1 className="projects-main-heading text-center mt-5">
                <span className="innovation-span-style">Multimedia Design and Branding agency</span>
              </h1>
            </div>
            {props.MultimediaProjects.map((element) => {
              return (
                <div className="col-12 startup-game-card p-0 m-3 shadow">
                  <div className="p-3">
                    <h1 className="projects-heading">{element.project_name}</h1>
                    <p className="project-description">{element.project_info}</p>
                    <p className="project-status">{element.project_status}</p>
                  </div>
                </div>
              );
            })}
            <div className="col-12">
              <h1 className="projects-main-heading text-center mt-5">
                <span className="innovation-span-style">CybSec</span>
              </h1>
              <p className="project-description text-center">
              CybSecNITW is a group of information security enthusiasts from National Institute of Technology, Warangal. We are a bunch of self-motivated security enthusiasts who love learning and sharing their knowledge with everyone genuinely interested in information security.
              </p>
            </div>

            {props.cyberInfo.map((element) => {
              return (
                <div className="col-12 startup-game-card p-0 m-3 shadow">
                  <img
                    className="game-image text-center"
                    src={`${element.imageUrl}`}
                    alt=""
                  />
                  <div className="p-3">
                    <h1 className="projects-heading">{element.heading}</h1>
                    <p className="project-description">{element.para}</p>
                    <p className="project-status">{element.status}</p>
                    <button className="custom-button">
                      <a
                        href={`${!element.gameUrl ? "https://nitw.ac.in/cii/static/media/IG-logo-WITHOUT-BG.97650f70.png":element.gameUrl}`}
                        rel="noopener noreferrer"
                        className="button-anchor"
                      >
                        Learn More
                      </a>
                    </button>
                  </div>
                </div>
              );
            })}
            <div className="col-12">
              <h1 className="projects-main-heading text-center mt-5">
                <span className="innovation-span-style">Nevrónas</span>
              </h1>
              <p className="project-description text-center">
              Nevrónas is a machine Learning research group in National Institute of Technology, Warangal, India, which tries to spread and embrace Machine Learning research culture in the campus. Formed in the year of 2018 by Innovation Garage, NITW, Nevrónas includes a bunch of students experienced in machine learning, pursuing collaborative research on Computer Vision, Natural Language Processing, Speech Processing and Information Retrieval.
              </p>
            </div>

            {props.NevrónasInfo.map((element) => {
              return (
                <div className="col-12 startup-game-card p-0 m-3 shadow">
                  <img
                    className="game-image text-center"
                    src={`${element.imageUrl}`}
                    alt=""
                  />
                  <div className="p-3">
                    <h1 className="projects-heading">{element.heading}</h1>
                    <p className="project-description">{element.para}</p>
                    <p className="project-status">{element.status}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
