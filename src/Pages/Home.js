import React from 'react'
import Courosel from '../Components/Courosel'
import Header from '../Components/Header'
function Home() {
    return (
        <div>
            <div className="introduction flex-with-center" style={{ backgroundImage: `url('./introbg.svg')` }}>
                <div>
                    <Header />
                    <h1 data-aos='fade-up'>ANSHU SILSWAL</h1>

                    <div className="intro-content d-flex justify-content-between">
                        <p>MERN Stack <br /> Developer <br /> Btech Final Year Cse Student</p>
                        <button className='primary-button font-bold'><a href='#courosel'>Get Started</a></button>
                    </div>


                </div>



            </div>
            <Courosel />

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#001220" fill-opacity="1" d="M0,224L9.2,213.3C18.5,203,37,181,55,154.7C73.8,128,92,96,111,101.3C129.2,107,148,149,166,144C184.6,139,203,85,222,69.3C240,53,258,75,277,106.7C295.4,139,314,181,332,202.7C350.8,224,369,224,388,192C406.2,160,425,96,443,96C461.5,96,480,160,498,170.7C516.9,181,535,139,554,106.7C572.3,75,591,53,609,85.3C627.7,117,646,203,665,218.7C683.1,235,702,181,720,138.7C738.5,96,757,64,775,74.7C793.8,85,812,139,831,138.7C849.2,139,868,85,886,85.3C904.6,85,923,139,942,154.7C960,171,978,149,997,128C1015.4,107,1034,85,1052,101.3C1070.8,117,1089,171,1108,181.3C1126.2,192,1145,160,1163,154.7C1181.5,149,1200,171,1218,176C1236.9,181,1255,171,1274,149.3C1292.3,128,1311,96,1329,90.7C1347.7,85,1366,107,1385,128C1403.1,149,1422,171,1431,181.3L1440,192L1440,0L1430.8,0C1421.5,0,1403,0,1385,0C1366.2,0,1348,0,1329,0C1310.8,0,1292,0,1274,0C1255.4,0,1237,0,1218,0C1200,0,1182,0,1163,0C1144.6,0,1126,0,1108,0C1089.2,0,1071,0,1052,0C1033.8,0,1015,0,997,0C978.5,0,960,0,942,0C923.1,0,905,0,886,0C867.7,0,849,0,831,0C812.3,0,794,0,775,0C756.9,0,738,0,720,0C701.5,0,683,0,665,0C646.2,0,628,0,609,0C590.8,0,572,0,554,0C535.4,0,517,0,498,0C480,0,462,0,443,0C424.6,0,406,0,388,0C369.2,0,351,0,332,0C313.8,0,295,0,277,0C258.5,0,240,0,222,0C203.1,0,185,0,166,0C147.7,0,129,0,111,0C92.3,0,74,0,55,0C36.9,0,18,0,9,0L0,0Z"></path>
                </svg>
            </div>

            <div className="container">
                <div className="row justify-content-start">
                    <div className="col-md-4">
                        <div className="n-box2 px-3 py-5"  data-aos='fade-right'>
                            <h1>Yes you are right...</h1>
                            <p>I am  a JavaScrpt Buff...</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row pt-5 justify-content-center">
                <div className="col-md-4">
                    <img src="./jsbuff.svg" alt="" height="200" className='w-100' data-aos='fade-up' />
                </div>
            </div>
            <div className="row pt-5 justify-content-end">
                <div className="col-md-4">
                    <div className="n-box2 px-3 py-4 font-bold" data-aos="fade-left">

                        <p>JavaScript is one of the most top-ranked programming language because of its ubiquitous use on all platforms and mass adoption.Main use Cases : Web Development</p>
                    </div>
                </div>
            </div>


            <div className="container">

            </div>

            <div className="Devstack container my-5 n-box2 py-5">
                <h3 className="font-bold text-center">My Development Stack</h3>

                <hr />

                <img src="./developer.svg" alt="" height='200' width='200' className='text-center' />
                <div className="row">
                    <div className="col-md-4">
                        <div className="font-bold">
                            <h3 className="font-bold">Front End</h3>
                            <hr />
                            <p>HTML/CSS</p>
                            <p>JavaScript</p>
                            <p>React</p>
                            <p>Redux</p>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="font-bold">
                            <h3 className="font-bold text-center">UI/styling</h3>
                            <hr />
                            <p>TailWind CSS</p>
                            <p>Bootstrap</p>
                            <p>Material UI</p>
                            <p>Ant Design</p>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="font-bold">
                            <h3 className="font-bold text-right">Back END/ DB</h3>
                            <hr />
                            <p>Node js</p>
                            <p>Express Js</p>
                            <p>MongoDB</p>
                            <p>SQL</p>
                        </div>

                    </div>
                </div>
            </div>

            <div>
                <h3 className="font-bold text-center">  Who is Anshu</h3>
                <div className="who-is-Anshu flex-with-center" style={{ backgroundImage: `url('./AnshuS3.svg')` }}>
                    <div>
                        <h3>Hi ,Hello ,Namaste</h3>

                        <p><pre>{JSON.stringify({
                            name: "Anshu Silswal",
                            from: "India",
                            age: "null",
                            gender: "Male"
                        }, null, 2)}</pre></p>

                    </div>
                </div>
            </div>




        </div>
    )
}
export default Home