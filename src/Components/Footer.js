import React from 'react'

function Footer() {
  return (
    <div>
        <div className="contact-us-container d-flex flex-column justify-content-center" id="sectioncontactus">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12 text-center mt-3 mb-3">
                        <img className="ig-logo" src="https://nitw.ac.in/cii/static/media/IG-logo-WITHOUT-BG.97650f70.png" alt=''/>
                    </div>
                    <div className="col-12 col-md-4">
                        <h1 className="main-heading-1">Address</h1>
                        <div className="d-flex flex-row">
                            <i className="fa-solid fa-house icon-1"></i>
                            <p className="main-info ml-2"> CII HOD, NIT Warangal, Telangana</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <h1 className="main-heading-1">Phone No.</h1>
                        <div className="d-flex flex-row">
                            <i className="fa-solid fa-phone icon-1"></i>
                            <p className="main-info ml-2"> +91 94413 42324</p>
                        </div>
                        <div className="d-flex flex-row">
                            <i className="fa-solid fa-phone icon-1"></i>
                            <p className="main-info ml-2">+91 96184 11000</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <h1 className="main-heading-1">E-mail</h1>
                        <div className="d-flex flex-row">
                            <i className="fa-solid fa-envelope icon-1"></i>
                            <p className="main-info ml-2"> hod_cii@nitw.ac.in</p>
                        </div>
                        <div className="d-flex flex-row">
                            <i className="fa-solid fa-envelope icon-1"></i>
                            <p className="main-info ml-2">ig-nitw@student.nitw.ac.in</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-container">
            <div className="d-flex flex-row justify-content-center">
                <p className="main-info m-3"> <i className="fa-solid fa-copyright icon-1 "></i>2022 by Dinesh Chowdary. Created with Bootstrap.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer