import React from 'react'
import logo from '../../images/logo.svg'
const Content = () => {
  return (
    <div>
        	<section class="main-content">
		<div class="container-xl">

			<div class="row gy-4">

				<div class="col-lg-8">

                    <div class="page-content bordered rounded padding-30">

                        <img src={ require('../../images/other/about.jpg' )} alt="ATL" class="rounded mb-4" />

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry</p>

                        <hr class="my-4" />
                        <ul class="social-icons list-unstyled list-inline mb-0">
                            <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fab fa-instagram"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fab fa-pinterest"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fab fa-medium"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fab fa-youtube"></i></a></li>
                        </ul>
                        
                    </div>

                </div>
				<div class="col-lg-4">

					{/* sidebar */}
					<div class="sidebar">
						{/* widget about */}
						<div class="widget rounded">
							<div class="widget-about data-bg-image text-center" data-bg-image="images/map-bg.png">
								<img src={logo} alt="logo" class="mb-4" />
								<p class="mb-4">Hello, We’re content writer who is fascinated by content fashion, celebrity and lifestyle. We helps clients bring the right content to the right people.</p>
								<ul class="social-icons list-unstyled list-inline mb-0">
									<li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fab fa-instagram"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fab fa-pinterest"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fab fa-medium"></i></a></li>
									<li class="list-inline-item"><a href="#"><i class="fab fa-youtube"></i></a></li>
								</ul>
							</div>
						</div>

						{/* widget popular posts */}
						<div class="widget rounded">
							<div class="widget-header text-center">
								<h3 class="widget-title">Popular Posts</h3>
							
							</div>
							<div class="widget-content">
								{/* post */}
								<div class="post post-list-sm circle">
									<div class="thumb circle">
										<span class="number">1</span>
										<a href="/Blog-single">
											<div class="inner">
												<img style={{ width: '60px', height: '60px'}} src={ require('../../images/posts/tabs-1.jpg')} alt="post-title" />
											</div>
										</a>
									</div>
									<div class="details clearfix">
										<h6 class="post-title my-0"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h6>
										<ul class="meta list-inline mt-1 mb-0">
											<li class="list-inline-item">29 March 2021</li>
										</ul>
									</div>
								</div>
								{/* post */}
								<div class="post post-list-sm circle">
									<div class="thumb circle">
										<span class="number">2</span>
										<a href="/Blog-single">
											<div class="inner">
												<img style={{ width: '60px', height: '60px'}} src={ require('../../images/posts/tabs-2.jpg')} alt="post-title" />
											</div>
										</a>
									</div>
									<div class="details clearfix">
										<h6 class="post-title my-0"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h6>
										<ul class="meta list-inline mt-1 mb-0">
											<li class="list-inline-item">29 March 2021</li>
										</ul>
									</div>
								</div>
								{/* post */}
								<div class="post post-list-sm circle">
									<div class="thumb circle">
										<span class="number">3</span>
										<a href="/Blog-single">
											<div class="inner">
												<img style={{ width: '60px', height: '60px'}} src={ require('../../images/posts/tabs-3.jpg')} alt="post-title" />
											</div>
										</a>
									</div>
									<div class="details clearfix">
										<h6 class="post-title my-0"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h6>
										<ul class="meta list-inline mt-1 mb-0">
											<li class="list-inline-item">29 March 2021</li>
										</ul>
									</div>
								</div>
							</div>		
						</div>

						{/* widget categories */}
						<div class="widget rounded">
							<div class="widget-header text-center">
								<h3 class="widget-title">Explore Topics</h3>
								
							</div>
							<div class="widget-content">
								<ul class="list">
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
						<div class="widget rounded">
							<div class="widget-header text-center">
								<h3 class="widget-title">Newsletter</h3>
								
							</div>
							<div class="widget-content">
								<span class="newsletter-headline text-center mb-3">Join 70,000 subscribers!</span>
								<form>
									<div class="mb-2">
										<input class="form-control w-100 text-center" placeholder="Email address…" type="email" />
									</div>
									<button class="btn btn-default btn-full" type="submit">Sign Up</button>
								</form>
								<span class="newsletter-privacy text-center mt-3">By signing up, you agree to our <a href="#">Privacy Policy</a></span>
							</div>		
						</div>

						{/* widget post carousel */}
						<div class="widget rounded">
							<div class="widget-header text-center">
								<h3 class="widget-title">Celebration</h3>
								
							</div>
							<div class="widget-content">
								<div class="post-carousel-widget">
									{/* post */}
									<div class="post post-carousel">
										<div class="thumb rounded">
											<a href="/Category" class="category-badge position-absolute">How to</a>
											<a href="/Blog-single">
												<div class="inner">
													<img src={require('../../images/widgets/widget-carousel-1.jpg')} alt="post-title" />
												</div>
											</a>
										</div>
										<h5 class="post-title mb-0 mt-4"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h5>
										<ul class="meta list-inline mt-2 mb-0">
											<li class="list-inline-item"><a href="#">ATL</a></li>
											<li class="list-inline-item">29 March 2021</li>
										</ul>
									</div>
									{/* post */}
									<div class="post post-carousel">
										<div class="thumb rounded">
											<a href="/Category" class="category-badge position-absolute">Trending</a>
											<a href="/Blog-single">
												<div class="inner">
													<img src={require('../../images/widgets/widget-carousel-2.jpg')} alt="post-title" />
												</div>
											</a>
										</div>
										<h5 class="post-title mb-0 mt-4"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h5>
										<ul class="meta list-inline mt-2 mb-0">
											<li class="list-inline-item"><a href="#">ATL</a></li>
											<li class="list-inline-item">29 March 2021</li>
										</ul>
									</div>
									{/* post */}
									<div class="post post-carousel">
										<div class="thumb rounded">
											<a href="/Category" class="category-badge position-absolute">How to</a>
											<a href="/Blog-single">
												<div class="inner">
													<img src={require('../../images/widgets/widget-carousel-1.jpg')} alt="post-title" />
												</div>
											</a>
										</div>
										<h5 class="post-title mb-0 mt-4"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h5>
										<ul class="meta list-inline mt-2 mb-0">
											<li class="list-inline-item"><a href="#">ATL</a></li>
											<li class="list-inline-item">29 March 2021</li>
										</ul>
									</div>
								</div>
								{/* carousel arrows */}
								<div class="slick-arrows-bot">
									<button type="button" data-role="none" class="carousel-botNav-prev slick-custom-buttons" aria-label="Previous"><i class="icon-arrow-left"></i></button>
									<button type="button" data-role="none" class="carousel-botNav-next slick-custom-buttons" aria-label="Next"><i class="icon-arrow-right"></i></button>
								</div>
							</div>		
						</div>

						{/* widget advertisement */}
						<div class="widget no-container rounded text-md-center">
							<span class="ads-title">- Sponsored Ad -</span>
							<a href="#" class="widget-ads">
								<img src={require('../../images/ads/ad-360.png')} alt="Advertisement" />	
							</a>
						</div>

						{/* widget tags */}
						<div class="widget rounded">
							<div class="widget-header text-center">
								<h3 class="widget-title">Tag Clouds</h3>
								
							</div>
							<div class="widget-content">
								<a href="#" class="tag">#Trending</a>
								<a href="#" class="tag">#Video</a>
								<a href="#" class="tag">#Featured</a>
								<a href="#" class="tag">#Gallery</a>
								<a href="#" class="tag">#Celebrities</a>
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

export default Content