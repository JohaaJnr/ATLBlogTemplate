import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

import Feeds from './Feeds'
const Blogsingle = () => {
  return (
    <div>
        <Header />
        	{/* section main content */}
	<section className="main-content mt-3">
		<div className="container-xl">

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Inspiration</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                </ol>
            </nav>

			<div className="row gy-4">

				<div className="col-lg-8">
					{/* post single */}
                    <div className="post post-single">
						{/* post header */}
						<div className="post-header">
							<h1 className="title mt-0 mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h1>
							<ul className="meta list-inline mb-0">
								<li className="list-inline-item"><a href="#"><img src={require('../../images/other/author-sm.png')} className="author" alt="author"/>ATL</a></li>
								<li className="list-inline-item"><a href="#">Trending</a></li>
								<li className="list-inline-item">29 March 2021</li>
							</ul>
						</div>
						{/* featured image */}
						<div className="featured-image">
							<img src={require('../../images/posts/featured-lg.jpg')} alt="post-title" />
						</div>
						{/* post content */}
						<div className="post-content clearfix">
							<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source.</p>

							<p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested</p>

							<figure className="figure">
								<img src={require('../../images/posts/post-lg-2.jpg')} className="figure-img img-fluid rounded" alt="..." />
								<figcaption className="figure-caption text-center">A caption for the above image.</figcaption>
							</figure>

							<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old.</p> 
							
							<img src={require('../../images/posts/single-sm-1.jpg')} className="rounded alignleft" alt="..." />
							<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

							<p> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet</p>

							<p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>

							<h4>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</h4>

							<ul>
								<li>How about if I sleep a little bit</li>
								<li>A collection of textile samples lay spread out</li>
								<li>His many legs, pitifully thin compared with</li>
								<li>He lay on his armour-like back</li>
								<li> Gregor Samsa woke from troubled dreams</li>
							</ul>

							<p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
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
						
					</div>
					{/* post comments */}
					<div className="comments bordered padding-30 rounded">

						<ul className="comments">
							{/* comment item */}
							<li className="comment rounded">
								<div className="thumb">
									<img src={require('../../images/other/comment-1.png')} alt="ATL Doe" />
								</div>
								<div className="details">
									<h4 className="name"><a href="#">ATL Doe</a></h4>
									<span className="date">Jan 08, 2021 14:41 pm</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae odio ut tortor fringilla cursus sed quis odio.</p>
									<a href="#" className="btn btn-default btn-sm">Reply</a>
								</div>
							</li>
							{/* comment item */}
							<li className="comment child rounded">
								<div className="thumb">
									<img src={require('../../images/other/comment-2.png')} alt="ATL Doe" />
								</div>
								<div className="details">
									<h4 className="name"><a href="#">Helen Doe</a></h4>
									<span className="date">Jan 08, 2021 14:41 pm</span>
									<p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
									<a href="#" className="btn btn-default btn-sm">Reply</a>
								</div>
							</li>
							{/* comment item */}
							<li className="comment rounded">
								<div className="thumb">
									<img src={require('../../images/other/comment-3.png')} alt="ATL Doe" />
								</div>
								<div className="details">
									<h4 className="name"><a href="#">Anna Doe</a></h4>
									<span className="date">Jan 08, 2021 14:41 pm</span>
									<p>Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.</p>
									<a href="#" className="btn btn-default btn-sm">Reply</a>
								</div>
							</li>
						</ul>
					</div>

					<div className="spacer" data-height="50"></div>

					{/* section header */}
					<div className="section-header">
						<h3 className="section-title">Leave Comment</h3>
					
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

	{/* instagram feed */}
	<Feeds />
    </div>
  )
}

export default Blogsingle