import React from 'react'
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'
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
                             <Link className="nav-link dropdown-toggle" to="/">Home</Link>
                                  <ul className="dropdown-menu">
                                      <li><Link className="dropdown-item" to="/Category">Magazine</Link></li>
                                      <li><Link className="dropdown-item" to="/Personal">Personal</Link></li>
                                      <li><Link className="dropdown-item" to="/Personal-alt">Personal Alt</Link></li>
                                      <li><Link className="dropdown-item" to="/Minimal">Minimal</Link></li>
                                      <li><Link className="dropdown-item" to="/Classic">Classic</Link></li>
                                  </ul>
                              </li>
                              <li className="nav-item">
                                  <Link className="nav-link" to="/Category">Lifestyle</Link>
                              </li>
                              <li className="nav-item">
                                  <Link className="nav-link" to="/Category">Inspiration</Link>
                              </li>
                              <li className="nav-item dropdown">
                                  <Link className="nav-link dropdown-toggle" to="#">Pages</Link>
                                  <ul className="dropdown-menu">
                                      <li><Link className="dropdown-item" to="/Category">Category</Link></li>
                                      <li><Link className="dropdown-item" to="/Blog-single">Blog Single</Link></li>
                                      <li><Link className="dropdown-item" to="/Blog-single-alt">Blog Single Alt</Link></li>
                                      <li><Link className="dropdown-item" to="/About">About</Link></li>
                                      <li><Link className="dropdown-item" to="/Contact">Contact</Link></li>
                                  </ul>
                              </li>
                              <li className="nav-item">
                                  <Link className="nav-link" to="/Contact">Contact</Link>
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