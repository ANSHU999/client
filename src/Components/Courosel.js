import React from 'react'
import {FaReact ,FaJava, FaNodeJs, FaJsSquare, FaBootstrap, FaHtml5, FaCss3 } from 'react-icons/fa'
function Courosel() {
    return (
        <div>
            <div className ='courosel-parent position-relative' id='courosel'>
            <h1 className='position-absolute top-0 start-0 end-0 text-center'><i><strong>Technologies I use</strong></i></h1>
            <div className='gallery'>

                <span style = {{'--i' : 1}}>
                    <FaReact color =  'cyan'/>
                </span>
                <span style = {{'--i' : 2}}>
                    <FaJava color = 'orangered'/>
                </span>
                <span style = {{'--i' : 3}}>
                    <FaNodeJs color = 'green' />
                </span>
                <span style = {{'--i' : 4}}>
                    <FaJsSquare color = 'yellow'/>
                </span>
                <span style = {{'--i' : 5}}>
                    <FaBootstrap color ='Blue'/>
                </span>
                <span style = {{'--i' : 6}}>
                    <FaHtml5 color = 'purple'/>
                </span>
                <span style = {{'--i' : 7}}>
                    <FaCss3 color = 'voilet'/>
                </span>
                

            </div>
            </div>
        </div>
    )
}

export default Courosel
