import React from 'react'
import Header from './Header'
import Content from './Content'
import Feeds from './Feeds'
const Category = () => {
  return (
    <div>
        <Header />
          <section className="page-header">
              <div className="container-xl">
                  <div className="text-center">
                      <h1 className="mt-0 mb-2"> <img style={{ width: '100%', height: '200px'}} src={require('../../images/banner.jpg')} alt="" /> </h1>
                      <nav aria-label="breadcrumb">
                          <ol className="breadcrumb justify-content-center mb-0">
                              <li className="breadcrumb-item"><a href="#">Home</a></li>
                              <li className="breadcrumb-item active" aria-current="page">Categories</li>
                          </ol>
                      </nav>
                  </div>
              </div>
          </section>

          {/* section main content */}
          <Content />

          {/* instagram feed */}
          <Feeds />
    </div>
  )
}

export default Category