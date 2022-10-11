import React from "react";

function Home(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h1 className="homepage-heading">
                <span className="innovation-span-style">INNOVATION</span> GARAGE{" "}
              </h1>
              <p className="homepage-paragraph">
                {" "}
                An incubation center that strives{" "}
                <span className="innovation-span-style">
                  to promote innovations{" "}
                </span>
              </p>
            </div>
          </div>

          <div className="col-12">
            <div className="homepage-card mb-3">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 col-md-8 w-100 m-auto">
                    <h1 className="homepage-card-heading w-100">IDEATE</h1>
                    <h1 className="homepage-card-heading w-100">INNOVATE</h1>
                    <h1 className="homepage-card-heading w-100">INCUBATE</h1>
                    <p className="homepage-card-paragraph">
                      {props.cardContent.card1}
                    </p>
                    <button className="custom-button">
                      <a
                        href={`${props.videoUrl.card1}`}
                        rel="noopener noreferrer"
                        className="button-anchor"
                      >
                        Watch Video
                      </a>
                    </button>
                  </div>
                  <div className="col-12 col-md-4">
                    <img
                      className="innovation-garage-image w-100"
                      src="https://nitw.ac.in/cii/static/media/first+image.fd1a3a9c.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="homepage-card mb-3">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 col-md-8 order-md-1 w-100 m-auto">
                    <h1 className="homepage-card-heading">FIREFLY</h1>
                    <h1 className="homepage-card-heading">HACK</h1>
                    <p className="homepage-card-paragraph">
                      {props.cardContent.card2}
                    </p>
                    <button className="custom-button">
                      <a
                        href={`${props.videoUrl.card2}`}
                        rel="noopener noreferrer"
                        className="button-anchor"
                      >
                        Watch Video
                      </a>
                    </button>
                  </div>
                  <div className="col-12 col-md-4 order-md-2">
                    <img
                      className="innovation-garage-image w-100"
                      src="https://assets.devfolio.co/hackathons/82d4859929474e47812881dc7b8323dc/assets/logo/831.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="homepage-card mb-5">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 col-md-8 order-md-1 w-100 m-auto">
                  <h1 className="homepage-card-heading">AL, ML, ROBOTICS,</h1>
                <h1 className="homepage-card-heading">HACKING, DESIGN,</h1>
                <h1 className="homepage-card-heading">ETC.</h1>
                <h1 className="homepage-card-heading">YOU NAME IT.</h1>
                <h1 className="homepage-card-heading">WE HAVE AN EVENT</h1>
                    <button className="custom-button">
                      <a
                        href={`${props.videoUrl.card3}`}
                        rel="noopener noreferrer"
                        className="button-anchor"
                      >
                        Watch Video
                      </a>
                    </button>
                  </div>
                  <div className="col-12 col-md-4 order-md-2">
                    <img
                      className="innovation-garage-image w-100"
                      src="https://nitw.ac.in/cii/static/media/events+image.92dc468e.png"
                      alt=""
                    />
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

export default Home;
