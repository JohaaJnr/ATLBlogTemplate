import React from 'react'
import logo from '../../images/logo.svg'

const Header = () => {
  return (
    <div>
          <header className="header-/Classic">

              <div className="container-xl">
                  {/* header top */}
                  <div className="header-top">
                      <div className="row align-items-center">

                          <div className="col-md-4 col-xs-12">
                              {/* site logo */}
                              <a className="navbar-brand" href="/Classic"><img style={{ width: '180px', height: '80px'}} src={logo} alt="logo" /></a>
                          </div>

                          <div className="col-md-8 d-none d-md-block">
                              {/* social icons */}
                              <ul className="social-icons list-unstyled list-inline mb-0 float-end">
                                  <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                  <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                  <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
                                  <li className="list-inline-item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
                                  <li className="list-inline-item"><a href="#"><i className="fab fa-medium"></i></a></li>
                                  <li className="list-inline-item"><a href="#"><i className="fab fa-youtube"></i></a></li>
                              </ul>
                          </div>

                      </div>
                  </div>
              </div>

              <nav className="navbar navbar-expand-lg">
                  {/* header bottom */}
                  <div className="header-bottom  w-100">

                      <div className="container-xl">
                          <div className="d-flex align-items-center">
                              <div className="collapse navbar-collapse flex-grow-1">
                                  {/* menus */}
                                  <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown active">
                             <a className="nav-link dropdown-toggle" href="/">Home</a>
                                  <ul className="dropdown-menu">
                                      <li><a className="dropdown-item" href="/Category">Magazine</a></li>
                                      <li><a className="dropdown-item" href="/Personal">Personal</a></li>
                                      <li><a className="dropdown-item" href="/Personal-alt">Personal Alt</a></li>
                                      <li><a className="dropdown-item" href="/Minimal">Minimal</a></li>
                                      <li><a className="dropdown-item" href="/Classic">Classic</a></li>
                                  </ul>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="/Category">Lifestyle</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="/Category">Inspiration</a>
                              </li>
                              <li className="nav-item dropdown">
                                  <a className="nav-link dropdown-toggle" href="#">Pages</a>
                                  <ul className="dropdown-menu">
                                      <li><a className="dropdown-item" href="/Category">Category</a></li>
                                      <li><a className="dropdown-item" href="/Blog-single">Blog Single</a></li>
                                      <li><a className="dropdown-item" href="/Blogsingle-alt">Blog Single Alt</a></li>
                                      <li><a className="dropdown-item" href="/About">About</a></li>
                                      <li><a className="dropdown-item" href="/Contact">Contact</a></li>
                                  </ul>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="/Contact">Contact</a>
                              </li>
                          </ul>
                              </div>

                              {/* header buttons */}
                              <div className="header-buttons">
                                  <button className="search icon-button">
                                      <i className="icon-magnifier"></i>
                                  </button>
                                  <button className="burger-menu icon-button ms-2 float-end float-lg-none">
                                      <span className="burger-icon"></span>
                                  </button>
                              </div>
                          </div>
                      </div>

                  </div>
              </nav>

          </header>
    </div>
  )
}

export default Header