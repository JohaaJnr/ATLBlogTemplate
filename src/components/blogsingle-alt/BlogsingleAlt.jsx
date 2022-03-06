import React from 'react'
import Header from './Header'
import Content from './Content'
import Feeds from './Feeds'
const BlogsingleAlt = () => {
  return (
    <div>
        <Header />
        <section className="single-cover data-bg-image" data-bg-image={require('../../images/posts/single-cover.jpg')}>

        <div className="container-xl">

            <div className="cover-content post">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Inspiration</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                    </ol>
                </nav>

                
                <div className="post-header">
                    <h1 className="title mt-0 mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h1>
                    <ul className="meta list-inline mb-0">
                        <li className="list-inline-item"><a href="#"><img src={require('../../images/other/author-sm.png')} className="author" alt="author"/>ATL</a></li>
                        <li className="list-inline-item"><a href="#">Trending</a></li>
                        <li className="list-inline-item">29 March 2021</li>
                    </ul>
                </div>
            </div>

        </div>

    </section>
    <Content />

    <Feeds />

    </div>
  )
}

export default BlogsingleAlt