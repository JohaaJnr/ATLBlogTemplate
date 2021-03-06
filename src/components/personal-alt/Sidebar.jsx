import React from 'react'
import logo from '../../images/logo.svg'

const Sidebar = () => {
  return (
    <div>
        <div className="sidebar">
						{/* widget about */}
						<div className="widget rounded">
							<div className="widget-about data-bg-image text-center" data-bg-image={require('../../images/map-bg.png')}>
								<img src={logo} alt="logo" className="mb-4" />
								<p className="mb-4">Hello, We’re content writer who is fascinated by content fashion, celebrity and lifestyle. We helps clients bring the right content to the right people.</p>
								<ul className="social-icons list-unstyled list-inline mb-0">
									<li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fab fa-medium"></i></a></li>
									<li className="list-inline-item"><a href="#"><i className="fab fa-youtube"></i></a></li>
								</ul>
							</div>
						</div>

						{/* widget popular posts */}
						<div className="widget rounded">
							<div className="widget-header text-center">
								<h3 className="widget-title">Popular Posts</h3>
							
							</div>
							<div className="widget-content">
								{/* post */}
								<div className="post post-list-sm circle">
									<div className="thumb circle">
										<span className="number">1</span>
										<a href="/Blog-single">
											<div className="inner">
												<img style={{ width: '60px', height: '60px'}} src={require('../../images/posts/tabs-1.jpg')} alt="post-title" />
											</div>
										</a>
									</div>
									<div className="details clearfix">
										<h6 className="post-title my-0"><a href="/Blog-single">3 Easy Ways To Make Your iPhone Faster</a></h6>
										<ul className="meta list-inline mt-1 mb-0">
											<li className="list-inline-item">29 March 2021</li>
										</ul>
									</div>
								</div>
								{/* post */}
								<div className="post post-list-sm circle">
									<div className="thumb circle">
										<span className="number">2</span>
										<a href="/Blog-single">
											<div className="inner">
												<img style={{ width: '60px', height: '60px'}} src={require('../../images/posts/tabs-2.jpg')} alt="post-title" />
											</div>
										</a>
									</div>
									<div className="details clearfix">
										<h6 className="post-title my-0"><a href="/Blog-single">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, autem!</a></h6>
										<ul className="meta list-inline mt-1 mb-0">
											<li className="list-inline-item">29 March 2021</li>
										</ul>
									</div>
								</div>
								{/* post */}
								<div className="post post-list-sm circle">
									<div className="thumb circle">
										<span className="number">3</span>
										<a href="/Blog-single">
											<div className="inner">
												<img style={{ width: '60px', height: '60px'}} src={require('../../images/posts/tabs-3.jpg')} alt="post-title" />
											</div>
										</a>
									</div>
									<div className="details clearfix">
										<h6 className="post-title my-0"><a href="/Blog-single">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, veritatis.</a></h6>
										<ul className="meta list-inline mt-1 mb-0">
											<li className="list-inline-item">29 March 2021</li>
										</ul>
									</div>
								</div>
							</div>		
						</div>

						{/* widget categories */}
						<div className="widget rounded">
							<div className="widget-header text-center">
								<h3 className="widget-title">Explore Topics</h3>
								
							</div>
							<div className="widget-content">
								<ul className="list">
									<li><a href="#">Lifestyle</a><span>(5)</span></li>
									<li><a href="#">Inspiration</a><span>(2)</span></li>
									<li><a href="#">Fashion</a><span>(4)</span></li>
									<li><a href="#">Politic</a><span>(1)</span></li>
									<li><a href="#">Trending</a><span>(7)</span></li>
									<li><a href="#">Culture</a><span>(3)</span></li>
								</ul>
							</div>
							
						</div>

						{/* widget newsletter */}
						<div className="widget rounded">
							<div className="widget-header text-center">
								<h3 className="widget-title">Newsletter</h3>
								
							</div>
							<div className="widget-content">
								<span className="newsletter-headline text-center mb-3">Join 70,000 subscribers!</span>
								<form>
									<div className="mb-2">
										<input className="form-control w-100 text-center" placeholder="Email address…" type="email" />
									</div>
									<button className="btn btn-default btn-full" type="submit">Sign Up</button>
								</form>
								<span className="newsletter-privacy text-center mt-3">By signing up, you agree to our <a href="#">Privacy Policy</a></span>
							</div>		
						</div>

						{/* widget post carousel */}
						<div className="widget rounded">
							<div className="widget-header text-center">
								<h3 className="widget-title">Celebration</h3>
								
							</div>
							<div className="widget-content">
								<div className="post-carousel-widget">
									{/* post */}
									<div className="post post-carousel">
										<div className="thumb rounded">
											<a href="/Category" className="category-badge position-absolute">How to</a>
											<a href="/Blog-single">
												<div className="inner">
													<img style={{ width: '60px', height: '60px'}} src={require('../../images/widgets/widget-carousel-1.jpg')} alt="post-title" />
												</div>
											</a>
										</div>
										<h5 className="post-title mb-0 mt-4"><a href="/Blog-single">5 Easy Ways You Can Turn Future Into Success</a></h5>
										<ul className="meta list-inline mt-2 mb-0">
											<li className="list-inline-item"><a href="#">ATL</a></li>
											<li className="list-inline-item">29 March 2021</li>
										</ul>
									</div>
									{/* post */}
									<div className="post post-carousel">
										<div className="thumb rounded">
											<a href="/Category" className="category-badge position-absolute">Trending</a>
											<a href="/Blog-single">
												<div className="inner">
													<img src={require('../../images/widgets/widget-carousel-2.jpg')} alt="post-title" />
												</div>
											</a>
										</div>
										<h5 className="post-title mb-0 mt-4"><a href="/Blog-single">Master The Art Of Nature With These 7 Tips</a></h5>
										<ul className="meta list-inline mt-2 mb-0">
											<li className="list-inline-item"><a href="#">ATL</a></li>
											<li className="list-inline-item">29 March 2021</li>
										</ul>
									</div>
									{/* post */}
									<div className="post post-carousel">
										<div className="thumb rounded">
											<a href="/Category" className="category-badge position-absolute">How to</a>
											<a href="/Blog-single">
												<div className="inner">
													<img style={{ width: '60px', height: '60px'}} src={require('../../images/widgets/widget-carousel-1.jpg')} alt="post-title" />
												</div>
											</a>
										</div>
										<h5 className="post-title mb-0 mt-4"><a href="/Blog-single">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nisi.</a></h5>
										<ul className="meta list-inline mt-2 mb-0">
											<li className="list-inline-item"><a href="#">ATL</a></li>
											<li className="list-inline-item">29 March 2021</li>
										</ul>
									</div>
								</div>
								{/* carousel arrows */}
								<div className="slick-arrows-bot">
									<button type="button" data-role="none" className="carousel-botNav-prev slick-custom-buttons" aria-label="Previous"><i className="icon-arrow-left"></i></button>
									<button type="button" data-role="none" className="carousel-botNav-next slick-custom-buttons" aria-label="Next"><i className="icon-arrow-right"></i></button>
								</div>
							</div>		
						</div>

					

						{/* widget tags */}
						<div className="widget rounded">
							<div className="widget-header text-center">
								<h3 className="widget-title">Tag Clouds</h3>
								
							</div>
							<div className="widget-content">
								<a href="#" className="tag">#Trending</a>
								<a href="#" className="tag">#Video</a>
								<a href="#" className="tag">#Featured</a>
								<a href="#" className="tag">#Gallery</a>
								<a href="#" className="tag">#Celebrities</a>
							</div>		
						</div>

					</div>
    </div>
  )
}

export default Sidebar