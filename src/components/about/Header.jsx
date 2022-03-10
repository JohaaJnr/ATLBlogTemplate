import React from 'react'
import logo from '../../images/logo.svg'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
        <header class="header-default">
		<nav class="navbar navbar-expand-lg">
			<div class="container-xl">
				{/* site logo */}
				<a class="navbar-brand" href="/"><img style={{ width: '180px', height: '80px'}} src={logo} alt="logo" /></a> 

				<div class="collapse navbar-collapse">
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

				{/* header right section */}
				<div class="header-right">
					{/* social icons */}
					<ul class="social-icons list-unstyled list-inline mb-0">
						<li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
						<li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
						<li class="list-inline-item"><a href="#"><i class="fab fa-instagram"></i></a></li>
						<li class="list-inline-item"><a href="#"><i class="fab fa-pinterest"></i></a></li>
						<li class="list-inline-item"><a href="#"><i class="fab fa-medium"></i></a></li>
						<li class="list-inline-item"><a href="#"><i class="fab fa-youtube"></i></a></li>
					</ul>
					{/* header buttons */}
					<div class="header-buttons">
						<button class="search icon-button">
							<i class="icon-magnifier"></i>
						</button>
						<button class="burger-menu icon-button">
							<span class="burger-icon"></span>
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