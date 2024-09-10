import React from 'react'

import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className='container  mb-5 pb-5'>
            <div className='row text-center mt-5 pt-5 mb-5   pb-5 text-muted border-bottom'>
                <h1 className='mb-3'>Pricing</h1>
                <h5 className='pb-5'>Free equity investments and flat ₹20 intraday and F&O trades</h5>
            </div>
            <div className='container mt-3 pt-3 text-center '>
            <div className='row mt-2 '>
                <div className='col-1'></div>
                <div className='col-md-3 text-center text-muted ms-4'>
                    <img src='media/images/pricing0.svg' alt='
                    nithin' className=' mb-3' style={{ width: "60%" }}></img>
                    {/* <div className='ms-4 ps-2  mt-2'> */}
                    <h6 className='fs-5 '>Free direct MF</h6>
                    <p className='fs-6'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                    </p>
                    {/* </div> */}
                </div>
                <div className='col-md-3 text-center text-muted ms-4'>
                    <img src='media/images/pricing-2.svg' alt='
                    nithin' className=' mb-3' style={{ width: "60%" }}></img>
                    {/* <div className='ms-4 ps-2  mt-2'> */}
                    <h6 className='fs-5 '>Intraday and F&O trades</h6>
                    <p className='fs-6'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                    </p>
                    {/* </div> */}
                </div>
                <div className='col-md-3 text-center text-muted ms-4'>
                    <img src='media/images/pricing0.svg' alt='
                    nithin' className=' mb-3' style={{ width: "60%" }}></img>
                    {/* <div className='ms-4 ps-2  mt-2'> */}
                    <h6 className='fs-5 '>Free equity delivery</h6>
                    <p className='fs-6'>
                    All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    {/* </div> */}
                </div>
                <div className='col-1'></div>
            </div>
            
        </div>
        </div>
        

    );
}

export default Hero;