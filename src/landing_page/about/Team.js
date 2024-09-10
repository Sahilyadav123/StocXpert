import React from 'react'

function Team() {
    return (
        <div className='container'>
            <div className='row p-5 mt-3  mb-5'>
                <h2 className='text-center pb-5 mb-3 text-muted'>People</h2>
                <div className='col-md-2'></div>
                <div className='col-md-4 text-center text-muted'>
                    <img src='media/images/sahil.jpg' alt='
                    nithin' className='rounded-circle mb-3' style={{width:"60%" }}></img>
                    {/* <div className='ms-4 ps-2  mt-2'> */}
                    <h6 className='fs-5 '>Sahil Yadav</h6>
                    <p className='fs-6'>Founder,CEO</p>
                    {/* </div> */}
                </div>
                <div className='col-md-4 text-muted pt-3'>
                    <p>Sahil bootstrapped and founded StocXpert in 2023 to overcome the hurdles he faced during his decade long stint as a trader. Today, StocXpert has changed the landscape of the Indian broking industry.
                        <br />
                        <br />
                        Playing basketball is his zen.
                        <br />
                        <br />
                        Connect on <a href="" className='text-decoration-none'>Homepage</a> / <a href="" className='text-decoration-none'>TradingQnA </a>/ <a href="" className='text-decoration-none'>Twitter</a></p>
                </div>
                <div className='col-md-2'></div>
            </div>
            <div className='row  mt-3 '>
                <div className='col-md-1'></div>
                <div className='col-md-3 text-center mx-4'>
                    <img src='media/images/nerd.jpg' alt='
                    nithin' className='rounded-circle mb-3' style={{width:"70%"}}></img>

                    <h6 className='fs-5 '>Prateek </h6>
                    <p className='fs-6'>COO</p>

                </div>
                <div className='col-md-3 text-center mx-4'>
                    <img src='media/images/humanoid.jpeg' alt='
                    nithin' className='rounded-circle mb-3'></img>

                    <h6 className='fs-5 '>Santosh</h6>
                    <p className='fs-6'>Chief of Education</p>

                </div>
                <div className='col-md-3 text-center'>
                    <img src='media/images/vinnu.jpg' alt='
                    nithin' className='rounded-circle mb-3 ' style={{width:"70%" }}></img>

                    <h6 className='fs-5 '>Vinayak</h6>
                    <p className='fs-6'>Director Strategy</p>

                </div>
                <div className='col-md-1'></div>
            </div>
            <div className='row  mt-3 pt-4'>
                <div className='col-md-1'></div>
                <div className='col-md-3 text-center mx-4'>
                    <img src='media/images/humanoid.jpeg' alt='
                    nithin' className='rounded-circle mb-3'></img>

                    <h6 className='fs-5 '>Vishal</h6>
                    <p className='fs-6'>CTO</p>

                </div>
                <div className='col-md-3 text-center mx-4'>
                    <img src='media/images/krishna.jpg' alt='
                    nithin' className='rounded-circle mb-3' style={{width:"75%"}}></img>

                    <h6 className='fs-5 '>Krishna</h6>
                    <p className='fs-6'>Finance Manager</p>

                </div>
                <div className='col-md-3 text-center'>
                    <img src='media/images/humanoid.jpeg' alt='
                    nithin' className='rounded-circle mb-3'></img>

                    <h6 className='fs-5 '>Vineet</h6>
                    <p className='fs-6'>Director</p>

                </div>
                <div className='col-md-1'></div>
            </div>
        </div>
    );
}

export default Team;