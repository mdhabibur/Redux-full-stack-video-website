import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Home from './components/pages/Home';
import Video from './components/pages/Video';
import Add from './components/pages/Add';
import Edit from './components/pages/Edit';
import Header from './components/navigation/Header';
import Footer from './components/navigation/Footer';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos/:videoId' element={<Video />} />
        <Route path='/videos/add' element={<Add />} />
        <Route path='/videos/edit/:videoId' element={<Edit />} />
      </Routes>
      <Footer />
    </Router>
    
    </>


  );
}

export default App;
