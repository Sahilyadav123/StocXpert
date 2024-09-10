import React from 'react'

function Hero() {
    return (
        <section className='container-fluid py-5 ' id='support'>
            <div id='head' className='mb-5 '>
                <h5 className='fs-4'>Support Portal</h5>
                <a href='' className='text-decoration-none text-white border-bottom '>Track Tickets</a>
            </div>

            <div className='row  mb-5'>
                <div className='col-md-6'>
                    <p className='fs-4'>
                        Search for an answer or browse help topics to create a ticket
                    </p>

                    <input className='search-box ' placeholder='Eg: how do i activate F&O, why is my order getting rejected ...'></input>
                    <div className='my-3'>
                    <a href='' className='text-white text-decoration-none border-bottom me-4'>Track account opening</a>
                    <a href='' className='text-white text-decoration-none border-bottom me-4'> Track segment activation</a>
                    <a href='' className='text-white text-decoration-none border-bottom me-2'>Intraday margins</a>
                    </div>
                    <a href='' className='text-white text-decoration-none border-bottom '> StocXpert user manual</a>
                </div>
                <div className='col-md-6 px-5 pb-1'>
                    <p className='fs-4 px-5'>Featured</p>
                    <p className='px-5'>The mandate request for your IPO application(s) may be delayed to be sent by the sponsor bank and the exchange due to high volumes. This is across brokers. If you have not received the mandate request for a few hours, please delete your bid and apply again. <a href='' className=' text-white'>Read more.</a> </p>
                </div>
            </div>
        </section>
    );
}

export default Hero;