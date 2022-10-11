import React from 'react'

function Podcasts() {
  return (
    <div>
         <div className="podcasts-page-container " id="sectionpodcasts">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center mt-5">
                    <h1 className="podcast-main-heading mt-5 mb-3"><span className="innovation-span-style">Podcasts by Innovation Garage</span></h1>
                </div>
                <div className="col-12 col-md-6 text-center">
                    <div className="startup-ig-card">
                        <h4 className="text-white">Striking The Balance</h4>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/ci_cLaXMDdc" title="Striking The Balance" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="col-12 col-md-6 text-center">
                    <div className="startup-ig-card">
                        <h4 className="text-white">The beauty lies in the details</h4>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/A0i0XyGwWss" title="The Beauty lies in the details" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="col-12 col-md-6 text-center">
                    <div className="startup-ig-card">
                        <h4 className="text-white">Journey through college a glimpse into life</h4>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/5M5WRmTISv4" title="The Beauty lies in the details" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Podcasts