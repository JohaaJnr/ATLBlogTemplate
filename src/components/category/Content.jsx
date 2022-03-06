import React from 'react'
import logo from '../../images/logo.svg'
import wave from '../../images/wave.svg'
import Sidebar from './Sidebar'
const Content = () => {
  return (
    <div>
        <section className="main-content">
              <div className="container-xl">

                  <div className="row gy-4">

                      <div className="col-lg-8">

                          <div className="row gy-4">
                              <div className="col-sm-6">
                                  {/* post */}
                                  <div className="post post-grid rounded bordered">
                                      <div className="thumb top-rounded">
                                          <a href="/Category" className="category-badge position-absolute">Lifestyle</a>
                                          <span className="post-format">
                                              <i className="icon-picture"></i>
                                          </span>
                                          <a href="/Blogsingle-alt">
                                              <div className="inner">
                                                  <img src={require('../../images/posts/post-md-1.jpg')} alt="post-title" />
                                              </div>
                                          </a>
                                      </div>
                                      <div className="details">
                                          <ul className="meta list-inline mb-0">
                                              <li className="list-inline-item"><a href="#"><img src={require('../../images/other/author-sm.png')} className="author" alt="author" />ATL</a></li>
                                              <li className="list-inline-item">29 March 2021</li>
                                          </ul>
                                          <h5 className="post-title mb-3 mt-3"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h5>
                                          <p className="excerpt mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                                      </div>
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

                              <div className="col-sm-6">
                                  {/* post */}
                                  <div className="post post-grid rounded bordered">
                                      <div className="thumb top-rounded">
                                          <a href="/Category" className="category-badge position-absolute">Inspiration</a>
                                          <a href="/Blog-single">
                                              <div className="inner">
                                                  <img src={require('../../images/posts/post-md-2.jpg')} alt="post-title" />
                                              </div>
                                          </a>
                                      </div>
                                      <div className="details">
                                          <ul className="meta list-inline mb-0">
                                              <li className="list-inline-item"><a href="#"><img src={require('../../images/other/author-sm.png')} className="author" alt="author" />ATL</a></li>
                                              <li className="list-inline-item">29 March 2021</li>
                                          </ul>
                                          <h5 className="post-title mb-3 mt-3"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h5>
                                          <p className="excerpt mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                                      </div>
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

                              <div className="col-sm-6">
                                  {/* post */}
                                  <div className="post post-grid rounded bordered">
                                      <div className="thumb top-rounded">
                                          <a href="/Category" className="category-badge position-absolute">Fashion</a>
                                          <a href="/Blog-single">
                                              <div className="inner">
                                                  <img src={require('../../images/posts/post-md-3.jpg')} alt="post-title" />
                                              </div>
                                          </a>
                                      </div>
                                      <div className="details">
                                          <ul className="meta list-inline mb-0">
                                              <li className="list-inline-item"><a href="#"><img src={require('../../images/other/author-sm.png')} className="author" alt="author" />ATL</a></li>
                                              <li className="list-inline-item">29 March 2021</li>
                                          </ul>
                                          <h5 className="post-title mb-3 mt-3"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h5>
                                          <p className="excerpt mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                                      </div>
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

                              <div className="col-sm-6">
                                  {/* post */}
                                  <div className="post post-grid rounded bordered">
                                      <div className="thumb top-rounded">
                                          <a href="/Category" className="category-badge position-absolute">Lifestyle</a>
                                          <span className="post-format">
                                              <i className="icon-camrecorder"></i>
                                          </span>
                                          <a href="/Blog-single">
                                              <div className="inner">
                                                  <img src={require('../../images/posts/post-md-4.jpg')} alt="post-title" />
                                              </div>
                                          </a>
                                      </div>
                                      <div className="details">
                                          <ul className="meta list-inline mb-0">
                                              <li className="list-inline-item"><a href="#"><img src={require('../../images/other/author-sm.png')} className="author" alt="author" />ATL</a></li>
                                              <li className="list-inline-item">29 March 2021</li>
                                          </ul>
                                          <h5 className="post-title mb-3 mt-3"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h5>
                                          <p className="excerpt mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                                      </div>
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
                              <div className="col-sm-6">
                                  {/* post */}
                                  <div className="post post-grid rounded bordered">
                                      <div className="thumb top-rounded">
                                          <a href="/Category" className="category-badge position-absolute">Trending</a>
                                          <a href="/Blog-single">
                                              <div className="inner">
                                                  <img src={require('../../images/posts/post-md-5.jpg')} alt="post-title" />
                                              </div>
                                          </a>
                                      </div>
                                      <div className="details">
                                          <ul className="meta list-inline mb-0">
                                              <li className="list-inline-item"><a href="#"><img src={require('../../images/other/author-sm.png')} className="author" alt="author" />ATL</a></li>
                                              <li className="list-inline-item">29 March 2021</li>
                                          </ul>
                                          <h5 className="post-title mb-3 mt-3"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h5>
                                          <p className="excerpt mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                                      </div>
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

                              <div className="col-sm-6">
                                  {/* post */}
                                  <div className="post post-grid rounded bordered">
                                      <div className="thumb top-rounded">
                                          <a href="/Category" className="category-badge position-absolute">Fashion</a>
                                          <a href="/Blog-single">
                                              <div className="inner">
                                                  <img src={require('../../images/posts/post-md-6.jpg')} alt="post-title" />
                                              </div>
                                          </a>
                                      </div>
                                      <div className="details">
                                          <ul className="meta list-inline mb-0">
                                              <li className="list-inline-item"><a href="#"><img src={require('../../images/other/author-sm.png')} className="author" alt="author" />ATL</a></li>
                                              <li className="list-inline-item">29 March 2021</li>
                                          </ul>
                                          <h5 className="post-title mb-3 mt-3"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h5>
                                          <p className="excerpt mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                                      </div>
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

                              <div className="col-sm-6">
                                  {/* post */}
                                  <div className="post post-grid rounded bordered">
                                      <div className="thumb top-rounded">
                                          <a href="/Category" className="category-badge position-absolute">How To</a>
                                          <span className="post-format">
                                              <i className="icon-picture"></i>
                                          </span>
                                          <a href="/Blog-single">
                                              <div className="inner">
                                                  <img src={require('../../images/posts/post-md-7.jpg')} alt="post-title" />
                                              </div>
                                          </a>
                                      </div>
                                      <div className="details">
                                          <ul className="meta list-inline mb-0">
                                              <li className="list-inline-item"><a href="#"><img src={require('../../images/other/author-sm.png')} className="author" alt="author" />ATL</a></li>
                                              <li className="list-inline-item">29 March 2021</li>
                                          </ul>
                                          <h5 className="post-title mb-3 mt-3"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h5>
                                          <p className="excerpt mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                                      </div>
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

                              <div className="col-sm-6">
                                  {/* post */}
                                  <div className="post post-grid rounded bordered">
                                      <div className="thumb top-rounded">
                                          <a href="/Category" className="category-badge position-absolute">Culture</a>
                                          <a href="/Blog-single">
                                              <div className="inner">
                                                  <img src={require('../../images/posts/post-md-8.jpg')} alt="post-title" />
                                              </div>
                                          </a>
                                      </div>
                                      <div className="details">
                                          <ul className="meta list-inline mb-0">
                                              <li className="list-inline-item"><a href="#"><img src={require('../../images/other/author-sm.png')} className="author" alt="author" />ATL</a></li>
                                              <li className="list-inline-item">29 March 2021</li>
                                          </ul>
                                          <h5 className="post-title mb-3 mt-3"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h5>
                                          <p className="excerpt mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                                      </div>
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

                              <div className="col-sm-6">
                                  {/* post */}
                                  <div className="post post-grid rounded bordered">
                                      <div className="thumb top-rounded">
                                          <a href="/Category" className="category-badge position-absolute">Inspiration</a>
                                          <a href="/Blog-single">
                                              <div className="inner">
                                                  <img src={require('../../images/posts/post-md-9.jpg')} alt="post-title" />
                                              </div>
                                          </a>
                                      </div>
                                      <div className="details">
                                          <ul className="meta list-inline mb-0">
                                              <li className="list-inline-item"><a href="#"><img src={require('../../images/other/author-sm.png')} className="author" alt="author" />ATL</a></li>
                                              <li className="list-inline-item">29 March 2021</li>
                                          </ul>
                                          <h5 className="post-title mb-3 mt-3"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h5>
                                          <p className="excerpt mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                                      </div>
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

                              <div className="col-sm-6">
                                  {/* post */}
                                  <div className="post post-grid rounded bordered">
                                      <div className="thumb top-rounded">
                                          <a href="/Category" className="category-badge position-absolute">Lifestyle</a>
                                          <span className="post-format">
                                              <i className="icon-earphones"></i>
                                          </span>
                                          <a href="/Blog-single">
                                              <div className="inner">
                                                  <img src={require('../../images/posts/post-md-10.jpg')} alt="post-title" />
                                              </div>
                                          </a>
                                      </div>
                                      <div className="details">
                                          <ul className="meta list-inline mb-0">
                                              <li className="list-inline-item"><a href="#"><img src={require('../../images/other/author-sm.png')} className="author" alt="author" />ATL</a></li>
                                              <li className="list-inline-item">29 March 2021</li>
                                          </ul>
                                          <h5 className="post-title mb-3 mt-3"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h5>
                                          <p className="excerpt mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                                      </div>
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

                          <nav>
                              <ul className="pagination justify-content-center">
                                  <li className="page-item active" aria-current="page">
                                      <span className="page-link">1</span>
                                  </li>
                                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                              </ul>
                          </nav>

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