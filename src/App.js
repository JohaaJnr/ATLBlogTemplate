import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './components/index/Index'
import Footer from './components/Footer'
import './App.css';
import Blogsingle from './components/blogSingle/Blogsingle';
import Category from './components/category/Category';
import Classic from './components/classic/Classic';
import Contact from './components/contact/Contact'
import Minimal from './components/minimal/Minimal';
import Personal from './components/personal/Personal';
import PersonalAlt from './components/personal-alt/PersonalAlt';
import BlogsingleAlt from './components/blogsingle-alt/BlogsingleAlt';
import About from './components/about/About'

function App() {
  return (
    <Router>
    <React.Fragment>
       <div>
         <Routes>
            <Route exact path='/' element={<Index />} />
            <Route exact path='/Blog-single' element={<Blogsingle />} />
            <Route exact path='/Category' element={<Category />} />
            <Route exact path='/Classic' element={<Classic />} />
            <Route exact path='/Contact' element={<Contact />} />
            <Route exact path='/Minimal' element={<Minimal />} />
            <Route exact path='/Personal' element={<Personal />} />
            <Route exact path='/Personal-alt' element={<PersonalAlt />} />
            <Route exact path='/Blogsingle-alt' element={<BlogsingleAlt />} />
            <Route exact path='/About' element={<About />} />
         </Routes>
       </div>
       <Footer />
    </React.Fragment>
    </Router>
  );
}

export default App;
