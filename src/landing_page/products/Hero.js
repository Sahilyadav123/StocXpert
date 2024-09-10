import React from 'react'
import { Link } from 'react-router-dom';  

function Hero() {
    return (
        <>
        <div className='container border-bottom mb-5 pb-5'>
            <div className='row text-center mt-5 pt-5 text-muted '>
                <h1 className='mb-3'>Technology</h1>
                <h5 className='pb-3'>Sleek, modern, and intuitive trading platforms</h5>
                <p>Check out our <Link className='text-decoration-none'
                to={"/"}>investment offerings →</Link></p>
            </div>

        </div>
        </>
    );
}

export default Hero;