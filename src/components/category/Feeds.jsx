import React from 'react'

const Feeds = () => {
  return (
    <div>
        <div className="instagram">
              <div className="container-xl">
                  {/* button */}
                 
                  {/* images */}
                  <div className="instagram-feed d-flex flex-wrap">
                      <div className="insta-item col-sm-2 col-6 col-md-2">
                          <a href="#">
                              <img src={require('../../images/insta/insta-1.jpg')} alt="insta-title" />
                          </a>
                      </div>
                      <div className="insta-item col-sm-2 col-6 col-md-2">
                          <a href="#">
                              <img src={require('../../images/insta/insta-2.jpg')} alt="insta-title" />
                          </a>
                      </div>
                      <div className="insta-item col-sm-2 col-6 col-md-2">
                          <a href="#">
                              <img src={require('../../images/insta/insta-3.jpg')} alt="insta-title" />
                          </a>
                      </div>
                      <div className="insta-item col-sm-2 col-6 col-md-2">
                          <a href="#">
                              <img src={require('../../images/insta/insta-4.jpg')} alt="insta-title" />
                          </a>
                      </div>
                      <div className="insta-item col-sm-2 col-6 col-md-2">
                          <a href="#">
                              <img src={require('../../images/insta/insta-5.jpg')} alt="insta-title" />
                          </a>
                      </div>
                      <div className="insta-item col-sm-2 col-6 col-md-2">
                          <a href="#">
                              <img src={require('../../images/insta/insta-6.jpg')} alt="insta-title" />
                          </a>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Feeds