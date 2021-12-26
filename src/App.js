import logo from './logo.svg';
import './App.css';
import {Route , BrowserRouter  } from 'react-router-dom'
import Home from './Pages/Home';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import Courses from './Pages/Courses';
import './StyleSheets/Home.css'
import './StyleSheets/HeaderFooter.css'
import './StyleSheets/Courosel.css'
import './StyleSheets/Projectcourses.css'
import Footer from './Components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init(
  {
    duration:500
  }
);

function App() { 
  return (
    <div className="App">
      <BrowserRouter>
      
      <Route path ="/"   exact component = {Home}/>
      <Route path = "/projects" exact component = {Project}/>
      <Route path = "/contact"  exact component ={Contact}/>
      <Route path = "/courses"  exact component ={Courses}/>
    
      </BrowserRouter>

      <Footer/>

      


      </div>
  );
}

export default App;
