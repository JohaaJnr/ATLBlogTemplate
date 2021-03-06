import React from 'react'
import Header from './Header'
import Content from './Content'
import Feeds from './Feeds'
const About = () => {
  return (
    <div>
        <Header />
        <section class="page-header">
        <div class="container-xl">
            <div class="text-center">
                <h1 class="mt-0 mb-2">About</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center mb-0">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">About</li>
                    </ol>
                </nav>
            </div>
        </div>
    </section>
    <Content />
    <Feeds />
    </div>
  )
}

export default About