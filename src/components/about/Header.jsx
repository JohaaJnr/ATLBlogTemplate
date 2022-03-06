import React from 'react'
import logo from '../../images/logo.svg'
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
                                      <li><a className="dropdown-item" href="/Blog-single-alt">Blog Single Alt</a></li>
                                      <li><a className="dropdown-item" href="/About">About</a></li>
                                      <li><a className="dropdown-item" href="/Contact">Contact</a></li>
                                  </ul>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="/Contact">Contact</a>
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