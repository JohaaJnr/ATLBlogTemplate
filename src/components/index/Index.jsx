import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Content from './Content'
import Feeds from './Feeds'
const Index = () => {
  return (
    <div>
        <Header />
        <Hero />

        <Content />

          {/* instagram feed */}
          <Feeds />
    </div>
  )
}

export default Index