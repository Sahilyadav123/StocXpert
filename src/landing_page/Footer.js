import React from 'react'

function Footer() {
    return (
        <div className=' border-top ' style={{ backgroundColor: "rgb(254 253 249)" }}>
            <div className='row ms-5 me-5 mt-5 ps-5 pe-5'>
                <div className='col'>
                    <a class="navbar-brand " href="#">
                        Stoc<b>X</b>pert
                    </a>
                    <p className=' text-muted' style={{ fontSize: "13px" }}>© 2010 - 2024, StockXpert Broking Ltd.

                        All rights reserved.</p>
                    <ul className='navbar-brand list-unstyled d-flex justify-content-between border-bottom pb-3'>
                    <li><a href="#" className='text-muted'><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#" className='text-muted'><i class="fa fa-facebook-official" aria-hidden="true"></i></a></li>
                    <li><a href="#" className='text-muted'><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li><a href="#" className='text-muted'><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>

                    </ul>
                </div>
                <div className='col'>
                    <b>Company</b>
                    <br />
                    <a class="navbar-brand text-muted " href='#' > About</a><br />
                    <a class="navbar-brand text-muted " href=''>Products</a><br />
                    <a class="navbar-brand text-muted " href=''>Pricing</a><br />
                    <a class="navbar-brand text-muted " href=''>Referral programme</a><br />
                    <a class="navbar-brand text-muted " href=''>Careers</a><br />
                    <a class="navbar-brand text-muted " href=''>StockXpert.tech</a><br />
                    <a class="navbar-brand text-muted " href=''>Press & media</a><br />
                    <a class="navbar-brand text-muted " href=''>StocXpert Cares (CSR)</a>
                </div>
                <div className='col'><b>Support</b>
                    <br />
                    <a class="navbar-brand" href='#'> Contact us</a><br />
                    <a class="navbar-brand text-muted" href=''>Support portal</a><br />
                    <a class="navbar-brand text-muted" href=''>Z-Connect blog</a><br />
                    <a class="navbar-brand text-muted" href=''> List of charges</a><br />
                    <a class="navbar-brand text-muted" href=''>Downloads & resources</a><br />
                    <a class="navbar-brand text-muted" href=''>Videos</a><br />
                    <a class="navbar-brand text-muted" href=''>Market overview</a><br />
                    <a class="navbar-brand text-muted" href=''>How to file a complaint?</a><br />
                </div>
                <div className='col'><b>Account</b>
                    <br />
                    <a class="navbar-brand" href='#'>Open an account</a><br />
                    <a class="navbar-brand" href='#'>Fund transfer</a><br />


                </div>


            </div>
            <div className=' ms-5 me-5 mt-5 ps-5 pe-5' style={{ fontSize: "11px", }}>
                StocXpert Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through StocXpert Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through StocXpert Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: StocXpert Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="">complaints@StocXpert.com</a>, for DP related to dp@StocXpert.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF

                <br />
                <br />

                Procedure to file a complaint on <a href="">SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                <br />
                <br />

                <a href=""> Smart Online Dispute Resolution</a> | <a href="">Grievances Redressal Mechanism </a>


                <br />
                <br />

                Investments in securities market are subject to market risks; read all the related documents carefully before investing.

                <br />
                <br />

                Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                <br />
                <br />

                "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of StocXpert and offering such services,<a href=''> please create a ticket here.</a>
            </div>
            <div className='container mt-3'>
                <ul  className='list-unstyled text-muted d-flex ms-5 ps-5 '>

                <a href="" className='navbar-brand'><li className='ms-5 '>NSE</li></a>
                <a href="" className='navbar-brand'><li className='ms-3'>BSE </li></a>
                <a href="" className='navbar-brand'><li className='ms-3'>MCX </li></a>
                <a href="" className='navbar-brand'><li className='ms-3 text-muted'>Terms & conditions </li></a>
                <a href="" className='navbar-brand'><li className='text-muted ms-2'>Policies & procedures </li></a>
                <a href="" className='navbar-brand'><li className='ms-3'>Privacy policy </li></a>
                <a href="" className='navbar-brand'><li className='ms-3'>Disclosure </li></a>
                <a href="" className='navbar-brand'><li className='ms-3'>For investor's attention </li></a>
                <a href="" className='navbar-brand'><li className='ms-3'>Investor charter</li></a>
                </ul>
            </div>
        </div>
    );
}

export default Footer;