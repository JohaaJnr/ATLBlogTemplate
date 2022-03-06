import React from 'react'

const Carousel = () => {
  return (
    <div>
         <section className="hero-carousel">
        <div className="row post-carousel-featured post-carousel">
            {/* post */}
            <div className="post featured-post-md">
                <div className="details clearfix">
                    <a href="/Category" className="category-badge">Lifestyle</a>
                    <h4 className="post-title"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h4>
                    <ul className="meta list-inline mb-0">
                        <li className="list-inline-item"><a href="#">ATL</a></li>
                        <li className="list-inline-item">29 March 2021</li>
                    </ul>
                </div>
                <a href="/Blog-single">
                    <div className="thumb rounded">
                        <div className="inner data-bg-image" data-bg-image={require('../../images/posts/featured-md-4.jpg')}></div>
                    </div>
                </a>
            </div>
            {/* post */}
            <div className="post featured-post-md">
                <div className="details clearfix">
                    <a href="/Category" className="category-badge">Fashion</a>
                    <h4 className="post-title"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h4>
                    <ul className="meta list-inline mb-0">
                        <li className="list-inline-item"><a href="#">ATL</a></li>
                        <li className="list-inline-item">29 March 2021</li>
                    </ul>
                </div>
                <a href="/Blog-single">
                    <div className="thumb rounded">
                        <div className="inner data-bg-image" data-bg-image={require('../../images/posts/inspiration-3.jpg')}></div>
                    </div>
                </a>
            </div>
            {/* post */}
            <div className="post featured-post-md">
                <div className="details clearfix">
                    <a href="/Category" className="category-badge">Inspiration</a>
                    <h4 className="post-title"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h4>
                    <ul className="meta list-inline mb-0">
                        <li className="list-inline-item"><a href="#">ATL</a></li>
                        <li className="list-inline-item">29 March 2021</li>
                    </ul>
                </div>
                <a href="/Blog-single">
                    <div className="thumb rounded">
                        <div className="inner data-bg-image" data-bg-image={require('../../images/posts/featured-md-1.jpg')}></div>
                    </div>
                </a>
            </div>
            {/* post */}
            <div className="post featured-post-md">
                <div className="details clearfix">
                    <a href="/Category" className="category-badge">Trending</a>
                    <h4 className="post-title"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h4>
                    <ul className="meta list-inline mb-0">
                        <li className="list-inline-item"><a href="#">ATL</a></li>
                        <li className="list-inline-item">29 March 2021</li>
                    </ul>
                </div>
                <a href="/Blog-single">
                    <div className="thumb rounded">
                        <div className="inner data-bg-image" data-bg-image={require('../../images/posts/featured-md-2.jpg')}></div>
                    </div>
                </a>
            </div>
            {/* post */}
            <div className="post featured-post-md">
                <div className="details clearfix">
                    <a href="/Category" className="category-badge">Politic</a>
                    <h4 className="post-title"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h4>
                    <ul className="meta list-inline mb-0">
                        <li className="list-inline-item"><a href="#">ATL</a></li>
                        <li className="list-inline-item">29 March 2021</li>
                    </ul>
                </div>
                <a href="/Blog-single">
                    <div className="thumb rounded">
                        <div className="inner data-bg-image" data-bg-image={require('../../images/posts/featured-md-3.jpg')}></div>
                    </div>
                </a>
            </div>
            {/* post */}
            <div className="post featured-post-md">
                <div className="details clearfix">
                    <a href="/Category" className="category-badge">Culture</a>
                    <h4 className="post-title"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h4>
                    <ul className="meta list-inline mb-0">
                        <li className="list-inline-item"><a href="#">ATL</a></li>
                        <li className="list-inline-item">29 March 2021</li>
                    </ul>
                </div>
                <a href="/Blog-single">
                    <div className="thumb rounded">
                        <div className="inner data-bg-image" data-bg-image={require('../../images/posts/inspiration-3.jpg')}></div>
                    </div>
                </a>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Carousel