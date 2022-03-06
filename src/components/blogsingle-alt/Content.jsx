import React from 'react'
import Sidebar from './Sidebar'
import wave from '../../images/wave.svg'
const Content = () => {
  return (
    <div>
        <section className="main-content">
		<div className="container-xl">

			<div className="row gy-4">

				<div className="col-lg-8">
					{/* post single */}
                    <div className="post post-single">
						{/* post content */}
						<div className="post-content clearfix">
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>

							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

							<figure className="figure">
								<img src={require('../../images/posts/post-lg-2.jpg')} className="figure-img img-fluid rounded" alt="..." />
								<figcaption className="figure-caption text-center">A caption for the above image.</figcaption>
							</figure>

							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> 
							
							<img src={require('../../images/posts/single-sm-1.jpg')} className="rounded alignleft" alt="..." />
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

							<h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4>

							<ul>
								<li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
								<li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
								<li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
								<li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
								<li>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
							</ul>

							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
						</div>
						{/* post bottom section */}
						<div className="post-bottom">
							<div className="row d-flex align-items-center">
								<div className="col-md-6 col-12 text-center text-md-start">
									{/* tags */}
									<a href="#" className="tag">#Trending</a>
									<a href="#" className="tag">#Video</a>
									<a href="#" className="tag">#Featured</a>
								</div>
								<div className="col-md-6 col-12">
									{/* social icons */}
									<ul className="social-icons list-unstyled list-inline mb-0 float-md-end">
										<li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
										<li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
										<li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
										<li className="list-inline-item"><a href="#"><i className="fab fa-pinterest"></i></a></li>
										<li className="list-inline-item"><a href="#"><i className="fab fa-telegram-plane"></i></a></li>
										<li className="list-inline-item"><a href="#"><i className="far fa-envelope"></i></a></li>
									</ul>
								</div>
							</div>
						</div>

                    </div>

					<div className="spacer" data-height="50"></div>

					<div className="about-author padding-30 rounded">
						<div className="thumb">
							<img src={require('../../images/other/avatar-about.png')} alt="ATL" />
						</div>
						<div className="details">
							<h4 className="name"><a href="#">ATL</a></h4>
							<p>Hello, I’m a content writer who is fascinated by content fashion, celebrity and lifestyle. She helps clients bring the right content to the right people.</p>
							{/* social icons */}
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

					<div className="spacer" data-height="50"></div>

					{/* section header */}
					<div className="section-header">
						<h3 className="section-title">Comments (3)</h3>
						<img src={wave} className="wave" alt="wave" />
					</div>
					{/* post comments */}
					<div className="comments bordered padding-30 rounded">

						<ul className="comments">
							{/* comment item */}
							<li className="comment rounded">
								<div className="thumb">
									<img src={require('../../images/other/comment-1.png')} alt="John Doe" />
								</div>
								<div className="details">
									<h4 className="name"><a href="#">John Doe</a></h4>
									<span className="date">Jan 08, 2021 14:41 pm</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae odio ut tortor fringilla cursus sed quis odio.</p>
									<a href="#" className="btn btn-default btn-sm">Reply</a>
								</div>
							</li>
							{/* comment item */}
							<li className="comment child rounded">
								<div className="thumb">
									<img src={require('../../images/other/comment-2.png')} alt="John Doe" />
								</div>
								<div className="details">
									<h4 className="name"><a href="#">Helen Doe</a></h4>
									<span className="date">Jan 08, 2021 14:41 pm</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae odio ut tortor fringilla cursus sed quis odio.</p>
									<a href="#" className="btn btn-default btn-sm">Reply</a>
								</div>
							</li>
							{/* comment item */}
							<li className="comment rounded">
								<div className="thumb">
									<img src={require('../../images/other/comment-3.png')} alt="John Doe" />
								</div>
								<div className="details">
									<h4 className="name"><a href="#">Anna Doe</a></h4>
									<span className="date">Jan 08, 2021 14:41 pm</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae odio ut tortor fringilla cursus sed quis odio</p>
									<a href="#" className="btn btn-default btn-sm">Reply</a>
								</div>
							</li>
						</ul>
					</div>

					<div className="spacer" data-height="50"></div>

					{/* section header */}
					<div className="section-header">
						<h3 className="section-title">Leave Comment</h3>
						<img src={wave} className="wave" alt="wave" />
					</div>
					{/* comment form */}
					<div className="comment-form rounded bordered padding-30">

						<form id="comment-form" className="comment-form" method="post">
				
							<div className="messages"></div>
							
							<div className="row">

								<div className="column col-md-12">
									{/* Comment textarea */}
									<div className="form-group">
										<textarea name="InputComment" id="InputComment" className="form-control" rows="4" placeholder="Your comment here..." required="required"></textarea>
									</div>
								</div>

								<div className="column col-md-6">
									{/* Email input */}
									<div className="form-group">
										<input type="email" className="form-control" id="InputEmail" name="InputEmail" placeholder="Email address" required="required" />
									</div>
								</div>

								<div className="column col-md-6">
									{/* Name input */}
									<div className="form-group">
										<input type="text" className="form-control" name="InputWeb" id="InputWeb" placeholder="Website" required="required" />
									</div>
								</div>
	
								<div className="column col-md-12">
									{/* Email input */}
									<div className="form-group">
										<input type="text" className="form-control" id="InputName" name="InputName" placeholder="Your name" required="required" />
									</div>
								</div>
						
							</div>
	
							<button type="submit" name="submit" id="submit" value="Submit" className="btn btn-default">Submit</button>{/* Submit Button */}
	
						</form>
					</div>
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