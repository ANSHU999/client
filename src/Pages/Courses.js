import React from 'react'
import Header from './../Components/Header';

function Courses() {
    return (
        <div>
            <Header/>
            <div className="courses-intro" style={{backgroundImage:`url(./course.svg)`}}>

                <div className="courses-intro-content">
                    <h1><i><strong>Bachelor Of Technology Computer Science</strong></i></h1>
                        <div>
                        <strong><p>I have  knowledge  of  Game Development and Web Development </p></strong>
                    <button className='primary-button'>Get Started</button>
                        </div>
                </div>

            </div>
        </div>
    )
}

export default Courses
