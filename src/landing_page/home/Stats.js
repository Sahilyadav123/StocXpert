import React from 'react'

function Stats() {
    return (  
        <div className='container p-3'>
            <div className='row p-5 ' >
                <div className='col-5 mx-auto p-5'>
                <h1 className='mb-5 fs-2'>Trust with confidence</h1>
                <h5>Customer-first always</h5>
                <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                <h5>No spam or gimmicks</h5>
                {/* <h4>Customer-first always</h4> */}
                <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                {/* <h1>Trust with confidence</h1> */}
                <h5>The StockXpert universe</h5>
                <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                {/* <h1>Trust with confidence</h1> */}
                <h5>Do better with money</h5>
                <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-7 p-5'>
                <img src='media/images/ecosystem.png' alt='ecosystem' style={{width:"85%"}}/>
                <div className='text-center me-5 mt-1 '>
                            <a href='/home' className='mx-5 text-decoration-none '>Explore our products <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                            <a href='/home' className='text-decoration-none ms-5'>Try Kite demo <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></a>
                        </div>
                </div>

            </div>
        </div>
    );
}

export default Stats;