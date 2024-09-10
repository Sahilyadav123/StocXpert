import React from 'react'

import { Link } from 'react-router-dom';

function Brokerage() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-md-1'></div>
                <div className='col-md-6 pt-5'>
                    <div className='text-center'>
                    <Link to={"/calc"} className="text-decoration-none fs-5 ">Brokerage calculator</Link>
                    </div>
                    <div className='pt-4'>
                        <ul className='text-muted ' style={{fontSize:"13px"}}>
                            <li className='mb-1'>
                            Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.
                            </li>
                            <li className='mb-1'>
                            Digital contract notes will be sent via e-mail.
                            </li>
                            <li className='mb-1'>
                            Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
                            </li>
                            <li className='mb-1'>
                            For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).
                            </li>
                            <li className='mb-1'>
                            If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
                            </li>
                        </ul>
                    </div>

                </div>
                <div className='col-md-2 text-decoration-none pt-5 ps-5 ms-5'> <div className='text-center'>
                    <Link to={"/calc"} className="text-decoration-none fs-5 ">List of charges</Link>
                    </div></div>
                <div className='col-md-2'></div>
            </div>
        </div>
     );
}

export default Brokerage;