import React from "react";

function Startups(props) {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="startup-page-heading">IG Startups</h1>
            <h2 style={{ color: "white" }}>Some of our Well know startups</h2>
          </div>
          {props.startupcard.map((e) => {
            return (
              <div className="col-12 col-md-4 mb-5 mt-4 shadow">
                <div className="card h-100">
                  <img
                    src={`${e.startupImgUrl}`}
                    className="card-img-top start-up-card-img"
                    alt="..."
                  />
                  <div className="card-body startup-card">
                    <h5 className="card-title">{e.startupName}</h5>
                    <p className="card-text">{e.startupInfo}</p>
                    <a href={`${e.buttonUrl}`} className="custom-button btn-sm">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Startups;
