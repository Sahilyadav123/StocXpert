import React from 'react'

function Pricing() {
    return (
        <div className='container '>
            <div className='row text-center'>
                <div className='col-4 mx-auto'>
                    <h1 className='mb-3'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.

                    </p>
                    <a href='/home' className='text-decoration-none'>See pricing <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col-4 p-3 border'>
                            <h1 className='mb-3'>₹0</h1>
                            <p>  Free account
                                opening</p>
                        </div>
                        <div className='col-4 p-3 border'>
                            <h1 className='mb-3'>₹0</h1>
                            <p> Free equity delivery
                                and direct mutual funds</p>
                        </div>
                        <div className='col-4 p-3 border'>
                            <h1 className='mb-3'>₹20</h1>
                            <p>  Intraday and
                                F&O</p>
                        </div>
                        {/* <div className='col-6'>col2</div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;