import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaQuora } from 'react-icons/fa'

export default function Footer() {
    return (
        <div>
            <div className="footer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#001220"
                     fill-opacity="1"
                       d="M0,32L80,69.3C160,107,320,181,480,197.3C640,213,800,171,960,154.7C1120,139,1280,149,1360,154.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
                    </path>
                </svg>

                <div className="row justify-content-center footer-content">
                    <div className="col-md-6">

                        <div className="div">
                            <p>Designed and Developed by</p>
                            <hr />

                            <div className="d-flex justify-content-between px-2">
                                <FaFacebook className='footer-icons' />
                                <FaLinkedin className='footer-icons'/>
                                <FaInstagram className='footer-icons'/>
                                <FaGithub className='footer-icons'/>
                                <FaQuora className='footer-icons' />
                            </div>

                            <hr />
                            
                            <br/>

                            <p>Anshu Silswal</p>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
