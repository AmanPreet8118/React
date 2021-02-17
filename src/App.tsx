import React from 'react';
import './App.css';
import Header from './Components/Header';
import Subheader from './Components/Subheader';
import PageBanner from './Components/PageBanner';
import CourseDetails from './Components/CourseDetails';
function App() {
  return (
    <div className="App">
      <div className="Head">
       <Header/>
      </div>
      <div className="Subhead">
       <Subheader />
      </div>
      <div className="bottom">
        <div className="banner">
        <PageBanner/>
        </div>
        <div className="cdetails">
            <CourseDetails details="The Complete React Developer Course" />
            <CourseDetails details="React Course" />
            <CourseDetails details="React Course" /> 
        </div>
      </div>
      
    </div>
  );
}

export default App;
