import React from 'react'

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                    <img src='media/images/homeHero.png' alt='Hero' className='mb-5'/> 
            
            <h1 className='mt-5 mb-3'>
            Invest in everything
            </h1>
            <h6>
            Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
            </h6>
            <button className='p-2 btn btn-primary fs-4 mb-5 mt-3' style={{width:"23%", margin:"0 auto "}}>
                Sign up for free
            </button>
            </div>
        </div>
     );
}

export default Hero;