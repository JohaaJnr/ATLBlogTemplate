import React from 'react'
import logo from '../../images/logo.svg'
const Minimal = () => {
  return (
    <div>
          <div className="container-xl">
       
        <header className="header-minimal">
            
            <div className="row align-items-center">

                <div className="col-4">
                    <button className="burger-menu icon-button">
                        <span className="burger-icon"></span>
                    </button>
                </div>

                <div className="col-4 text-center">
                   
                    <a className="navbar-brand" href="/Minimal"><img style={{ width: '120px', height: '80px'}} src={logo} alt="logo" /></a> 
                </div>

                <div className="col-4">
                    <button className="search icon-button float-end">
                        <i className="icon-magnifier"></i>
                    </button>
                </div>

            </div>

        </header>
    </div>

	
	<section className="main-content-lg">
        <div className="container-minimal">
            
            <div className="post post-xl">
               
                <div className="post-top">
                    <ul className="meta list-inline mb-0">
                        <li className="list-inline-item"><a href="#"><img src={require('../../images/other/author-sm.png')} className="author" alt="author"/>ATL</a></li>
                        <li className="list-inline-item">29 March 2021</li>
                        <li className="list-inline-item"><i className="icon-bubble"></i> (0)</li>
                    </ul>
                    <h5 className="post-title mb-0 mt-4"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h5>
                </div>
               
                <div className="thumb rounded">
                    <a href="/Category" className="category-badge lg position-absolute">Lifestyle</a>
                    <span className="post-format">
                        <i className="icon-picture"></i>
                    </span>
                    <a href="/Blog-single">
                        <div className="inner">
                            <img src={require('../../images/posts/post-xl-1.jpg')} alt="post-title" />
                        </div>
                    </a>
                </div>
               
                <div className="details">
                    <p className="excerpt mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
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
                    <div className="float-end d-none d-md-block">
                        <a href="/Blog-single" className="more-link">Continue reading<i className="icon-arrow-right"></i></a>
                    </div>
                    <div className="more-button d-block d-md-none float-end">
                        <a href="/Blog-single"><span className="icon-options"></span></a>
                    </div>
                </div>
            </div>

           
            <div className="post post-xl">
               
                <div className="post-top">
                    <ul className="meta list-inline mb-0">
                        <li className="list-inline-item"><a href="#"><img src={require('../../images/other/author-sm.png')} className="author" alt="author"/>ATL</a></li>
                        <li className="list-inline-item">29 March 2021</li>
                        <li className="list-inline-item"><i className="icon-bubble"></i> (0)</li>
                    </ul>
                    <h5 className="post-title mb-0 mt-4"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h5>
                </div>
                
                <div className="thumb rounded">
                    <a href="/Category" className="category-badge lg position-absolute">Inspiration</a>
                    <a href="/Blog-single">
                        <div className="inner">
                            <img src={require('../../images/posts/post-xl-2.jpg')} alt="post-title" />
                        </div>
                    </a>
                </div>
               
                <div className="details">
                    <p className="excerpt mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
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
                    <div className="float-end d-none d-md-block">
                        <a href="/Blog-single" className="more-link">Continue reading<i className="icon-arrow-right"></i></a>
                    </div>
                    <div className="more-button d-block d-md-none float-end">
                        <a href="/Blog-single"><span className="icon-options"></span></a>
                    </div>
                </div>
            </div>

            
            <div className="post post-xl">
               
                <div className="post-top">
                    <ul className="meta list-inline mb-0">
                        <li className="list-inline-item"><a href="#"><img src={require('../../images/other/author-sm.png')} className="author" alt="author"/>ATL</a></li>
                        <li className="list-inline-item">29 March 2021</li>
                        <li className="list-inline-item"><i className="icon-bubble"></i> (0)</li>
                    </ul>
                    <h5 className="post-title mb-0 mt-4"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h5>
                </div>
              
                <div className="thumb rounded">
                    <a href="/Category" className="category-badge lg position-absolute">Culture</a>
                    <span className="post-format">
                        <i className="icon-camrecorder"></i>
                    </span>
                    <a href="/Blog-single">
                        <div className="inner">
                            <img src={require('../../images/posts/post-xl-3.jpg')} alt="post-title" />
                        </div>
                    </a>
                </div>
            
                <div className="details">
                    <p className="excerpt mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
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
                    <div className="float-end d-none d-md-block">
                        <a href="/Blog-single" className="more-link">Continue reading<i className="icon-arrow-right"></i></a>
                    </div>
                    <div className="more-button d-block d-md-none float-end">
                        <a href="/Blog-single"><span className="icon-options"></span></a>
                    </div>
                </div>
            </div>

            
            <div className="post post-xl">
               
                <div className="post-top">
                    <ul className="meta list-inline mb-0">
                        <li className="list-inline-item"><a href="#"><img src={require('../../images/other/author-sm.png')} className="author" alt="author"/>ATL</a></li>
                        <li className="list-inline-item">29 March 2021</li>
                        <li className="list-inline-item"><i className="icon-bubble"></i> (0)</li>
                    </ul>
                    <h5 className="post-title mb-0 mt-4"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h5>
                </div>
              
                <div className="thumb rounded">
                    <a href="/Category" className="category-badge lg position-absolute">Trending</a>
                    <a href="/Blog-single">
                        <div className="inner">
                            <img src={require('../../images/posts/post-xl-4.jpg')} alt="post-title" />
                        </div>
                    </a>
                </div>
               
                <div className="details">
                    <p className="excerpt mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
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
                    <div className="float-end d-none d-md-block">
                        <a href="/Blog-single" className="more-link">Continue reading<i className="icon-arrow-right"></i></a>
                    </div>
                    <div className="more-button d-block d-md-none float-end">
                        <a href="/Blog-single"><span className="icon-options"></span></a>
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
	</section>
    </div>
  )
}

export default Minimal