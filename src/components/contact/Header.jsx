import React from 'react'
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
        <header className="header-default">
		<nav className="navbar navbar-expand-lg">
			<div className="container-xl">
				
				<a className="navbar-brand" href="/Contact"><img style={{ width: '180px', height: '80px'}} src={logo} alt="logo" /></a> 

				<div className="collapse navbar-collapse">
					
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

				
				<div className="header-right">
					
					<ul className="social-icons list-unstyled list-inline mb-0">
						<li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
						<li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
						<li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
						<li className="list-inline-item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
						<li className="list-inline-item"><a href="#"><i className="fab fa-medium"></i></a></li>
						<li className="list-inline-item"><a href="#"><i className="fab fa-youtube"></i></a></li>
					</ul>
					
					<div className="header-buttons">
						<button className="search icon-button">
							<i className="icon-magnifier"></i>
						</button>
						<button className="burger-menu icon-button">
							<span className="burger-icon"></span>
						</button>
					</div>
				</div>
			</div>
		</nav>
	</header>

    </div>
  )
}

export default Header