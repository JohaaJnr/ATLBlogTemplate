import React from 'react'

const Hero = () => {
  return (
    <div>
          {/* hero section */}
          <section id="hero">

              <div className="container-xl">

                  <div className="row gy-4">

                      <div className="col-lg-8">

                          {/* featured post large */}
                          <div className="post featured-post-lg">
                              <div className="details clearfix">
                                  <a href="/Category" className="category-badge">What is Lorem Ipsum?</a>
                                  <h2 className="post-title"><a href="/Blog-single">Where does it come from?</a></h2>
                                  <ul className="meta list-inline mb-0">
                                      <li className="list-inline-item"><a href="#">ATL</a></li>
                                      <li className="list-inline-item">31 January 2022</li>
                                  </ul>
                              </div>
                              <a href="/Blog-single">
                                  <div className="thumb rounded">
                                      <div className="inner data-bg-image" data-bg-image={ require('../../images/posts/featured-lg.jpg') }></div>
                                  </div>
                              </a>
                          </div>

                      </div>

                      <div className="col-lg-4">

                          {/* post tabs */}
                          <div className="post-tabs rounded bordered">
                              {/* tab navs */}
                              <ul className="nav nav-tabs nav-pills nav-fill" id="postsTab" role="tablist">
                                  <li className="nav-item" role="presentation"><button aria-controls="popular" aria-selected="true" className="nav-link active" data-bs-target="#popular" data-bs-toggle="tab" id="popular-tab" role="tab" type="button">Popular</button></li>
                                  <li className="nav-item" role="presentation"><button aria-controls="recent" aria-selected="false" className="nav-link" data-bs-target="#recent" data-bs-toggle="tab" id="recent-tab" role="tab" type="button">Recent</button></li>
                              </ul>
                              {/* tab contents */}
                              <div className="tab-content" id="postsTabContent">
                                  {/* loader */}
                                  <div className="lds-dual-ring"></div>
                                  {/* popular posts */}
                                  <div aria-labelledby="popular-tab" className="tab-pane fade show active" id="popular" role="tabpanel">
                                      {/* post */}
                                      <div className="post post-list-sm circle">
                                          <div className="thumb circle">
                                              <a href="/Blog-single">
                                                  <div className="inner">
                                                      <img style={{ width: '60px', height: '60px'}} src={ require('../../images/posts/tabs-1.jpg')} alt="post-title" />
                                                  </div>
                                              </a>
                                          </div>
                                          <div className="details clearfix">
                                              <h6 className="post-title my-0"><a href="/Blog-single">What is Lorem Ipsum?</a></h6>
                                              <ul className="meta list-inline mt-1 mb-0">
                                                  <li className="list-inline-item">31 January 2022</li>
                                              </ul>
                                          </div>
                                      </div>
                                      {/* post */}
                                      <div className="post post-list-sm circle">
                                          <div className="thumb circle">
                                              <a href="/Blog-single">
                                                  <div className="inner">
                                                      <img style={{ width: '60px', height: '60px'}} src={ require('../../images/posts/tabs-2.jpg') } alt="post-title" />
                                                  </div>
                                              </a>
                                          </div>
                                          <div className="details clearfix">
                                              <h6 className="post-title my-0"><a href="/Blog-single">Where does it come from?</a></h6>
                                              <ul className="meta list-inline mt-1 mb-0">
                                                  <li className="list-inline-item">31 January 2022</li>
                                              </ul>
                                          </div>
                                      </div>
                                      {/* post */}
                                      <div className="post post-list-sm circle">
                                          <div className="thumb circle">
                                              <a href="/Blog-single">
                                                  <div className="inner">
                                                      <img  style={{ width: '60px', height: '60px'}} src={ require('../../images/posts/tabs-3.jpg') } alt="post-title" />
                                                  </div>
                                              </a>
                                          </div>
                                          <div className="details clearfix">
                                              <h6 className="post-title my-0"><a href="/Blog-single">Where does it come from?</a></h6>
                                              <ul className="meta list-inline mt-1 mb-0">
                                                  <li className="list-inline-item">31 January 2022</li>
                                              </ul>
                                          </div>
                                      </div>
                                      {/* post */}
                                      <div className="post post-list-sm circle">
                                          <div className="thumb circle">
                                              <a href="/Blog-single">
                                                  <div className="inner">
                                                      <img style={{ width: '60px', height: '60px'}} src={ require('../../images/posts/tabs-4.jpg') } alt="post-title" />
                                                  </div>
                                              </a>
                                          </div>
                                          <div className="details clearfix">
                                              <h6 className="post-title my-0"><a href="/Blog-single">Why do we use it?</a></h6>
                                              <ul className="meta list-inline mt-1 mb-0">
                                                  <li className="list-inline-item">31 January 2022</li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                                  {/* recent posts */}
                                  <div aria-labelledby="recent-tab" className="tab-pane fade" id="recent" role="tabpanel">
                                      {/* post */}
                                      <div className="post post-list-sm circle">
                                          <div className="thumb circle">
                                              <a href="/Blog-single">
                                                  <div className="inner">
                                                      <img style={{ width: '60px', height: '60px'}} src={ require('../../images/posts/tabs-2.jpg') } alt="post-title" />
                                                  </div>
                                              </a>
                                          </div>
                                          <div className="details clearfix">
                                              <h6 className="post-title my-0"><a href="/Blog-single">Where can I get some?</a></h6>
                                              <ul className="meta list-inline mt-1 mb-0">
                                                  <li className="list-inline-item">31 January 2022</li>
                                              </ul>
                                          </div>
                                      </div>
                                      {/* post */}
                                      <div className="post post-list-sm circle">
                                          <div className="thumb circle">
                                              <a href="/Blog-single">
                                                  <div className="inner">
                                                      <img style={{ width: '60px', height: '60px'}} src={ require('../../images/posts/tabs-1.jpg') } alt="post-title" />
                                                  </div>
                                              </a>
                                          </div>
                                          <div className="details clearfix">
                                              <h6 className="post-title my-0"><a href="/Blog-single">Where can I get some?</a></h6>
                                              <ul className="meta list-inline mt-1 mb-0">
                                                  <li className="list-inline-item">31 January 2022</li>
                                              </ul>
                                          </div>
                                      </div>
                                      {/* post */}
                                      <div className="post post-list-sm circle">
                                          <div className="thumb circle">
                                              <a href="/Blog-single">
                                                  <div className="inner">
                                                      <img style={{ width: '60px', height: '60px'}} src={ require('../../images/posts/tabs-4.jpg') } alt="post-title" />
                                                  </div>
                                              </a>
                                          </div>
                                          <div className="details clearfix">
                                              <h6 className="post-title my-0"><a href="/Blog-single">Where can I get some?</a></h6>
                                              <ul className="meta list-inline mt-1 mb-0">
                                                  <li className="list-inline-item">31 January 2022</li>
                                              </ul>
                                          </div>
                                      </div>
                                      {/* post */}
                                      <div className="post post-list-sm circle">
                                          <div className="thumb circle">
                                              <a href="/Blog-single">
                                                  <div className="inner">
                                                      <img style={{ width: '60px', height: '60px'}} src={ require('../../images/posts/tabs-3.jpg') } alt="post-title" />
                                                  </div>
                                              </a>
                                          </div>
                                          <div className="details clearfix">
                                              <h6 className="post-title my-0"><a href="/Blog-single">Where does it come from?</a></h6>
                                              <ul className="meta list-inline mt-1 mb-0">
                                                  <li className="list-inline-item">31 January 2022</li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>

              </div>

          </section>
    </div>
  )
}

export default Hero