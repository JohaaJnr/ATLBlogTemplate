import React from 'react'
import Header from './Header'
import Carousel from './Carousel'
import Content from './Content'
import Feeds from './Feeds'
const classNameic = () => {

  return (
    <div>
        <Header />
      <Carousel />

	{/* section main content */}
	<Content />

	{/* instagram feed */}
	<div className="instagram">
              <div className="container-xl">
                  {/* button */}
                 
                  {/* images */}
                  <Feeds />
              </div>
          </div>
    </div>
  )
}

export default classNameic