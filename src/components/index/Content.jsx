import React from 'react'
import wave from '../../images/wave.svg'
import logo from '../../images/logo.svg'
import Sidebar from './Sidebar'
const Content = () => {
  return (
    <div>
         {/* section main content */}
         <section className="main-content">
              <div className="container-xl">

                  <div className="row gy-4">

                      <div className="col-lg-8">

                          {/* section header */}
                          <div className="section-header">
                              <h3 className="section-title">Editor’s Pick</h3>
                             
                          </div>

                          <div className="padding-30 rounded bordered">
                              <div className="row gy-5">
                                  <div className="col-sm-6">
                                      {/* post */}
                                      <div className="post">
                                          <div className="thumb rounded">
                                              <a href="/Category" className="category-badge position-absolute">Lifestyle</a>
                                              <span className="post-format">
                                                  <i className="icon-picture"></i>
                                              </span>
                                              <a href="/Blog-single">
                                                  <div className="inner">
                                                      <img src={ require('../../images/posts/editor-lg.jpg') } alt="post-title" />
                                                  </div>
                                              </a>
                                          </div>
                                          <ul className="meta list-inline mt-4 mb-0">
                                              <li className="list-inline-item"><a href="#"><img src={ require('../../images/other/author-sm.png') } className="author" alt="author" />ATL</a></li>
                                              <li className="list-inline-item">29 March 2021</li>
                                          </ul>
                                          <h5 className="post-title mb-3 mt-3"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h5>
                                          <p className="excerpt mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                      </div>
                                  </div>
                                  <div className="col-sm-6">
                                      {/* post */}
                                      <div className="post post-list-sm square">
                                          <div className="thumb rounded">
                                              <a href="/Blog-single">
                                                  <div className="inner">
                                                      <img src={ require('../../images/posts/editor-sm-1.jpg') } alt="post-title" />
                                                  </div>
                                              </a>
                                          </div>
                                          <div className="details clearfix">
                                              <h6 className="post-title my-0"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h6>
                                              <ul className="meta list-inline mt-1 mb-0">
                                                  <li className="list-inline-item">29 March 2021</li>
                                              </ul>
                                          </div>
                                      </div>
                                      {/* post */}
                                      <div className="post post-list-sm square">
                                          <div className="thumb rounded">
                                              <a href="/Blog-single">
                                                  <div className="inner">
                                                      <img src={ require('../../images/posts/editor-sm-2.jpg') } alt="post-title" />
                                                  </div>
                                              </a>
                                          </div>
                                          <div className="details clearfix">
                                              <h6 className="post-title my-0"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h6>
                                              <ul className="meta list-inline mt-1 mb-0">
                                                  <li className="list-inline-item">29 March 2021</li>
                                              </ul>
                                          </div>
                                      </div>
                                      {/* post */}
                                      <div className="post post-list-sm square">
                                          <div className="thumb rounded">
                                              <a href="/Blog-single">
                                                  <div className="inner">
                                                      <img src={ require('../../images/posts/editor-sm-3.jpg') } alt="post-title" />
                                                  </div>
                                              </a>
                                          </div>
                                          <div className="details clearfix">
                                              <h6 className="post-title my-0"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h6>
                                              <ul className="meta list-inline mt-1 mb-0">
                                                  <li className="list-inline-item">29 March 2021</li>
                                              </ul>
                                          </div>
                                      </div>
                                      {/* post */}
                                      <div className="post post-list-sm square">
                                          <div className="thumb rounded">
                                              <a href="/Blog-single">
                                                  <div className="inner">
                                                      <img src={ require('../../images/posts/editor-sm-4.jpg') } alt="post-title" />
                                                  </div>
                                              </a>
                                          </div>
                                          <div className="details clearfix">
                                              <h6 className="post-title my-0"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h6>
                                              <ul className="meta list-inline mt-1 mb-0">
                                                  <li className="list-inline-item">29 March 2021</li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="spacer" data-height="50"></div>

                          {/* horizontal ads */}
                          <div className="ads-horizontal text-md-center">
                              <span className="ads-title">- Sponsored Ad -</span>
                              <a href="#">
                                  <img src={ require('../../images/ads/ad-750.png') } alt="Advertisement" />
                              </a>
                          </div>

                          <div className="spacer" data-height="50"></div>

                          {/* section header */}
                          <div className="section-header">
                              <h3 className="section-title">Trending</h3>
                              <img src={wave} className="wave" alt="wave" />
                          </div>

                          <div className="padding-30 rounded bordered">
                              <div className="row gy-5">
                                  <div className="col-sm-6">
                                      {/* post large */}
                                      <div className="post">
                                          <div className="thumb rounded">
                                              <a href="/Category" className="category-badge position-absolute">Culture</a>
                                              <span className="post-format">
                                                  <i className="icon-picture"></i>
                                              </span>
                                              <a href="/Blog-single">
                                                  <div className="inner">
                                                      <img src={ require('../../images/posts/trending-lg-1.jpg') } alt="post-title" />
                                                  </div>
                                              </a>
                                          </div>
                                          <ul className="meta list-inline mt-4 mb-0">
                                              <li className="list-inline-item"><a href="#"><img src={ require('../../images/other/author-sm.png') } className="author" alt="author" />ATL</a></li>
                                              <li className="list-inline-item">29 March 2021</li>
                                          </ul>
                                          <h5 className="post-title mb-3 mt-3"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h5>
                                          <p className="excerpt mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                      </div>
                                      {/* post */}
                                      <div className="post post-list-sm square before-seperator">
                                          <div className="thumb rounded">
                                              <a href="/Blog-single">
                                                  <div className="inner">
                                                      <img src={ require('../../images/posts/trending-sm-1.jpg') } alt="post-title" />
                                                  </div>
                                              </a>
                                          </div>
                                          <div className="details clearfix">
                                              <h6 className="post-title my-0"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h6>
                                              <ul className="meta list-inline mt-1 mb-0">
                                                  <li className="list-inline-item">29 March 2021</li>
                                              </ul>
                                          </div>
                                      </div>
                                      {/* post */}
                                      <div className="post post-list-sm square before-seperator">
                                          <div className="thumb rounded">
                                              <a href="/Blog-single">
                                                  <div className="inner">
                                                      <img src={require('../../images/posts/trending-sm-2.jpg')} alt="post-title" />
                                                  </div>
                                              </a>
                                          </div>
                                          <div className="details clearfix">
                                              <h6 className="post-title my-0"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h6>
                                              <ul className="meta list-inline mt-1 mb-0">
                                                  <li className="list-inline-item">29 March 2021</li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-sm-6">
                                      {/* post large */}
                                      <div className="post">
                                          <div className="thumb rounded">
                                              <a href="/Category" className="category-badge position-absolute">Inspiration</a>
                                              <span className="post-format">
                                                  <i className="icon-earphones"></i>
                                              </span>
                                              <a href="/Blog-single">
                                                  <div className="inner">
                                                      <img src={require('../../images/posts/trending-lg-2.jpg')} alt="post-title" />
                                                  </div>
                                              </a>
                                          </div>
                                          <ul className="meta list-inline mt-4 mb-0">
                                              <li className="list-inline-item"><a href="#"><img src={ require('../../images/other/author-sm.png') } className="author" alt="author" />ATL</a></li>
                                              <li className="list-inline-item">29 March 2021</li>
                                          </ul>
                                          <h5 className="post-title mb-3 mt-3"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h5>
                                          <p className="excerpt mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                      </div>
                                      {/* post */}
                                      <div className="post post-list-sm square before-seperator">
                                          <div className="thumb rounded">
                                              <a href="/Blog-single">
                                                  <div className="inner">
                                                      <img src={require('../../images/posts/trending-sm-3.jpg')} alt="post-title" />
                                                  </div>
                                              </a>
                                          </div>
                                          <div className="details clearfix">
                                              <h6 className="post-title my-0"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h6>
                                              <ul className="meta list-inline mt-1 mb-0">
                                                  <li className="list-inline-item">29 March 2021</li>
                                              </ul>
                                          </div>
                                      </div>
                                      {/* post */}
                                      <div className="post post-list-sm square before-seperator">
                                          <div className="thumb rounded">
                                              <a href="/Blog-single">
                                                  <div className="inner">
                                                      <img src={require('../../images/posts/trending-sm-4.jpg')} alt="post-title" />
                                                  </div>
                                              </a>
                                          </div>
                                          <div className="details clearfix">
                                              <h6 className="post-title my-0"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h6>
                                              <ul className="meta list-inline mt-1 mb-0">
                                                  <li className="list-inline-item">29 March 2021</li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="spacer" data-height="50"></div>

                          {/* section header */}
                          <div className="section-header">
                              <h3 className="section-title">Inspiration</h3>
                              
                              <div className="slick-arrows-top">
                                  <button type="button" data-role="none" className="carousel-topNav-prev slick-custom-buttons" aria-label="Previous"><i className="icon-arrow-left"></i></button>
                                  <button type="button" data-role="none" className="carousel-topNav-next slick-custom-buttons" aria-label="Next"><i className="icon-arrow-right"></i></button>
                              </div>
                          </div>

                          <div className="row post-carousel-twoCol post-carousel">
                              {/* post */}
                              <div className="post post-over-content col-md-6">
                                  <div className="details clearfix">
                                      <a href="/Category" className="category-badge">Inspiration</a>
                                      <h4 className="post-title"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h4>
                                      <ul className="meta list-inline mb-0">
                                          <li className="list-inline-item"><a href="#">ATL</a></li>
                                          <li className="list-inline-item">29 March 2021</li>
                                      </ul>
                                  </div>
                                  <a href="/Blog-single">
                                      <div className="thumb rounded">
                                          <div className="inner">
                                              <img src={require('../../images/posts/inspiration-1.jpg')} alt="thumb" />
                                          </div>
                                      </div>
                                  </a>
                              </div>
                              {/* post */}
                              <div className="post post-over-content col-md-6">
                                  <div className="details clearfix">
                                      <a href="/Category" className="category-badge">Inspiration</a>
                                      <h4 className="post-title"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h4>
                                      <ul className="meta list-inline mb-0">
                                          <li className="list-inline-item"><a href="#">ATL</a></li>
                                          <li className="list-inline-item">29 March 2021</li>
                                      </ul>
                                  </div>
                                  <a href="/Blog-single">
                                      <div className="thumb rounded">
                                          <div className="inner">
                                              <img src={require('../../images/posts/inspiration-2.jpg')} alt="thumb" />
                                          </div>
                                      </div>
                                  </a>
                              </div>
                              {/* post */}
                              <div className="post post-over-content col-md-6">
                                  <div className="details clearfix">
                                      <a href="/Category" className="category-badge">Inspiration</a>
                                      <h4 className="post-title"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h4>
                                      <ul className="meta list-inline mb-0">
                                          <li className="list-inline-item"><a href="#">ATL</a></li>
                                          <li className="list-inline-item">29 March 2021</li>
                                      </ul>
                                  </div>
                                  <a href="/Blog-single">
                                      <div className="thumb rounded">
                                          <div className="inner">
                                              <img src={ require('../../images/posts/inspiration-3.jpg')} alt="thumb" />
                                          </div>
                                      </div>
                                  </a>
                              </div>
                          </div>

                          <div className="spacer" data-height="50"></div>

                          {/* section header */}
                          <div className="section-header">
                              <h3 className="section-title">Latest Posts</h3>
                             
                          </div>

                          <div className="padding-30 rounded bordered">

                              <div className="row">

                                  <div className="col-md-12 col-sm-6">
                                      {/* post */}
                                      <div className="post post-list clearfix">
                                          <div className="thumb rounded">
                                              <span className="post-format-sm">
                                                  <i className="icon-picture"></i>
                                              </span>
                                              <a href="/Blog-single">
                                                  <div className="inner">
                                                      <img src={ require('../../images/posts/latest-sm-1.jpg')} alt="post-title" />
                                                  </div>
                                              </a>
                                          </div>
                                          <div className="details">
                                              <ul className="meta list-inline mb-3">
                                                  <li className="list-inline-item"><a href="#"><img src={ require('../../images/other/author-sm.png')} className="author" alt="author" />ATL</a></li>
                                                  <li className="list-inline-item"><a href="#">Trending</a></li>
                                                  <li className="list-inline-item">29 March 2021</li>
                                              </ul>
                                              <h5 className="post-title"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h5>
                                              <p className="excerpt mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                              <div className="post-bottom clearfix d-flex align-items-center">
                                                  <div className="social-share me-auto">
                                                      <button className="toggle-button icon-share"></button>
                                                      <ul className="icons list-unstyled list-inline mb-0">
                                                          <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                          <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                          <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                                          <li className="list-inline-item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
                                                          <li className="list-inline-item"><a href="#"><i className="fab fa-telegram-plane"></i></a></li>
                                                          <li className="list-inline-item"><a href="#"><i className="far fa-envelope"></i></a></li>
                                                      </ul>
                                                  </div>
                                                  <div className="more-button float-end">
                                                      <a href="/Blog-single"><span className="icon-options"></span></a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="col-md-12 col-sm-6">
                                      {/* post */}
                                      <div className="post post-list clearfix">
                                          <div className="thumb rounded">
                                              <a href="/Blog-single">
                                                  <div className="inner">
                                                      <img src={require('../../images/posts/latest-sm-2.jpg')} alt="post-title" />
                                                  </div>
                                              </a>
                                          </div>
                                          <div className="details">
                                              <ul className="meta list-inline mb-3">
                                                  <li className="list-inline-item"><a href="#"><img src={require('../../images/other/author-sm.png')} className="author" alt="author" />ATL</a></li>
                                                  <li className="list-inline-item"><a href="#">Lifestyle</a></li>
                                                  <li className="list-inline-item">29 March 2021</li>
                                              </ul>
                                              <h5 className="post-title"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h5>
                                              <p className="excerpt mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                              <div className="post-bottom clearfix d-flex align-items-center">
                                                  <div className="social-share me-auto">
                                                      <button className="toggle-button icon-share"></button>
                                                      <ul className="icons list-unstyled list-inline mb-0">
                                                          <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                          <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                          <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                                          <li className="list-inline-item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
                                                          <li className="list-inline-item"><a href="#"><i className="fab fa-telegram-plane"></i></a></li>
                                                          <li className="list-inline-item"><a href="#"><i className="far fa-envelope"></i></a></li>
                                                      </ul>
                                                  </div>
                                                  <div className="more-button float-end">
                                                      <a href="/Blog-single"><span className="icon-options"></span></a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="col-md-12 col-sm-6">
                                      {/* post */}
                                      <div className="post post-list clearfix">
                                          <div className="thumb rounded">
                                              <span className="post-format-sm">
                                                  <i className="icon-camrecorder"></i>
                                              </span>
                                              <a href="/Blog-single">
                                                  <div className="inner">
                                                      <img src={require('../../images/posts/latest-sm-3.jpg')} alt="post-title" />
                                                  </div>
                                              </a>
                                          </div>
                                          <div className="details">
                                              <ul className="meta list-inline mb-3">
                                                  <li className="list-inline-item"><a href="#"><img src={require('../../images/other/author-sm.png')} className="author" alt="author" />ATL</a></li>
                                                  <li className="list-inline-item"><a href="#">Fashion</a></li>
                                                  <li className="list-inline-item">29 March 2021</li>
                                              </ul>
                                              <h5 className="post-title"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h5>
                                              <p className="excerpt mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                              <div className="post-bottom clearfix d-flex align-items-center">
                                                  <div className="social-share me-auto">
                                                      <button className="toggle-button icon-share"></button>
                                                      <ul className="icons list-unstyled list-inline mb-0">
                                                          <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                          <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                          <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                                          <li className="list-inline-item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
                                                          <li className="list-inline-item"><a href="#"><i className="fab fa-telegram-plane"></i></a></li>
                                                          <li className="list-inline-item"><a href="#"><i className="far fa-envelope"></i></a></li>
                                                      </ul>
                                                  </div>
                                                  <div className="more-button float-end">
                                                      <a href="/Blog-single"><span className="icon-options"></span></a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="col-md-12 col-sm-6">
                                      {/* post */}
                                      <div className="post post-list clearfix">
                                          <div className="thumb rounded">
                                              <a href="/Blog-single">
                                                  <div className="inner">
                                                      <img src={require('../../images/posts/latest-sm-4.jpg')} alt="post-title" />
                                                  </div>
                                              </a>
                                          </div>
                                          <div className="details">
                                              <ul className="meta list-inline mb-3">
                                                  <li className="list-inline-item"><a href="#"><img src={require('../../images/other/author-sm.png')} className="author" alt="author" />ATL</a></li>
                                                  <li className="list-inline-item"><a href="#">Politic</a></li>
                                                  <li className="list-inline-item">29 March 2021</li>
                                              </ul>
                                              <h5 className="post-title"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h5>
                                              <p className="excerpt mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                              <div className="post-bottom clearfix d-flex align-items-center">
                                                  <div className="social-share me-auto">
                                                      <button className="toggle-button icon-share"></button>
                                                      <ul className="icons list-unstyled list-inline mb-0">
                                                          <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                          <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                          <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                                          <li className="list-inline-item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
                                                          <li className="list-inline-item"><a href="#"><i className="fab fa-telegram-plane"></i></a></li>
                                                          <li className="list-inline-item"><a href="#"><i className="far fa-envelope"></i></a></li>
                                                      </ul>
                                                  </div>
                                                  <div className="more-button float-end">
                                                      <a href="/Blog-single"><span className="icon-options"></span></a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>

                              </div
                              >
                              {/* load more button */}
                              <div className="text-center">
                                  <button className="btn btn-simple">Load More</button>
                              </div>

                          </div>

                      </div>
                      <div className="col-lg-4">

                          {/* sidebar */}
                          <Sidebar />

                      </div>

                  </div>

              </div>
          </section>
    </div>
  )
}

export default Content