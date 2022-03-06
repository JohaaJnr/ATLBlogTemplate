import React from 'react'

const Carousel = () => {
  return (
    <div>
        <section className="hero-carousel mt-5">
        <div className="container-xl">
            <div className="post-carousel-lg">
                {/* post */}
                <div className="post featured-post-xl">
                    <div className="details clearfix">
                        <a href="/Category" className="category-badge lg">Lifestyle</a>
                        <h4 className="post-title"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h4>
                        <ul className="meta list-inline mb-0">
                            <li className="list-inline-item"><a href="#">ATL</a></li>
                            <li className="list-inline-item">29 March 2021</li>
                        </ul>
                    </div>
                    <a href="/Blog-single">
                        <div className="thumb rounded">
                            <div className="inner data-bg-image" data-bg-image={require('../../images/posts/featured-xl-1.jpg')}></div>
                        </div>
                    </a>
                </div>
                {/* post */}
                <div className="post featured-post-xl">
                    <div className="details clearfix">
                        <a href="/Category" className="category-badge lg">Culture</a>
                        <h4 className="post-title"><a href="/Blog-single">Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h4>
                        <ul className="meta list-inline mb-0">
                            <li className="list-inline-item"><a href="#">ATL</a></li>
                            <li className="list-inline-item">29 March 2021</li>
                        </ul>
                    </div>
                    <a href="/Blog-single">
                        <div className="thumb rounded">
                            <div className="inner data-bg-image" data-bg-image={require('../../images/posts/featured-xl-2.jpg')}></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Carousel