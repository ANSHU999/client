import React from 'react'
import { FaLaptopCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from './../Components/Header';
import projectsdata from './projectdata';

function Project() {

    function handleClick() {
        window.open("https://nextgpucards-purchase.herokuapp.com/")
    }
    return (

      
        <div>
            <Header />
            <div className="container projects-intro">  
                <div className="row flex-with-center mt-5">
                    <div className="col-md-6 n-box2 px-3 py-5" data-aos='fade-down'>
                        <div >
                            <h1 className='font-bold'>Projects</h1>
                            <p className='font-bold'>Good Ideas are not adopted automatically.They must be driven into practice with courageous patience</p>
                            <button className='primary-button projects-btn '><a href="#projects-list" className="white">Get Started</a></button>
                        </div>

                    </div>
                    <div className="col-md-6 position-relative">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#0F62FE" d="M44.8,-77.3C58.5,-69.6,70.6,-58.6,78.8,-45.2C87.1,-31.8,91.7,-15.9,92.3,0.4C92.9,16.6,89.7,33.3,81.7,47.2C73.7,61.1,61,72.4,46.6,78.8C32.2,85.2,16.1,86.9,0,86.8C-16.1,86.8,-32.1,85.2,-46,78.4C-59.8,71.6,-71.3,59.7,-79.5,45.8C-87.8,31.9,-92.7,15.9,-91.9,0.4C-91.2,-15.1,-84.9,-30.2,-76.7,-44.2C-68.5,-58.3,-58.5,-71.2,-45.5,-79.3C-32.4,-87.4,-16.2,-90.6,-0.3,-90C15.5,-89.4,31,-85,44.8,-77.3Z" transform="translate(100 100)" />
                        </svg>
                        <FaLaptopCode 
                    color='white'
                    size='180'
                    className = 'position-absolute top-50 start-50 translate-middle'/>
                    </div>
                   

                </div>
            </div>

            <div className="container projects-list" id='projects-list'>
                <h3 className='font-bold'> Projects</h3>
                <hr />

                <div className="row">
                    {projectsdata.map(project=>{
                        return <div className="col-md-4">

                            <div className="position-relative project">
                                <img src={project.image} alt="" />
                                <div className="project-content">
                                        <h3>{project.title}</h3>
                                        <hr />
                                        <p>{project.description}</p>
                                        <button className='primary-button' onClick={handleClick}>demo</button>
                                </div>
                            </div>
                        </div>
                    })}
                </div>

            </div>
        </div>
    )
}

export default Project
