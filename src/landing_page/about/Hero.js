import React from 'react'

function Hero() {
    return (
        <div className='container'>
            <div className='row p-5 mt-5 mb-5'>

                <h1 className='fs-3 text-center'>We pioneered the discount broking model in India.
                    <br />
                    Now, we are breaking ground with our technology</h1>

            </div>

            {/* <hr/> */}
            <div className='row p-5 mt-5 border-top text-muted '>
                <div className='col-md-2'></div>
                <div className='col-md-4'><p>
                    We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company StocXpert, a combination of Stock and "Xpert", the English word for master.
                    <br />
                    <br />
                    Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                    <br />
                    <br />
                    Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                </p></div>
                <div className='col-md-4'>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                    <br />
                    <br />
                    <a href="" className='text-decoration-none'>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                    <br />
                    <br />
                    And yet, we are always up to something new every day. Catch up on the latest updates on our <a href="" className='text-decoration-none'>blog </a>or see what the media is <a href="" className='text-decoration-none'>saying about us</a>.</div>
                <div className='col-md-2'></div>


            </div>
        </div>
    );
}

export default Hero;