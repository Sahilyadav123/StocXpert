import React from 'react'

function Education() {
    return ( 
        <div className='container border-bottom pb-5 '>
            <div className='row  mt-5'>
            <div className='col-5 ms-5 '>
                    <img src='media/images/education.svg' alt='education' style={{width:"70%"}}/>
                </div>
                <div className='col-6 mx-auto ' style={{width:"45%"}}>
                    <h1 className='mb-3 mt-3 fs-3'>Free and open market education</h1>
                    <p className='text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.

                    </p>
                    <a href='/home' className='text-decoration-none'>Varsity  <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                    <p className='mt-4 text-muted'>TradingQ&A, the most active trading and investment community in India for all your market related queries.

                    </p>
                    <a href='/home' className='text-decoration-none'>TradingQ&A  <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                </div>
                
            </div>
        </div>
     );
}

export default Education;