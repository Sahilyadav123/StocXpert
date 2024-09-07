import React from 'react'

import { Link } from 'react-router-dom';    

function Navbar() {
    return (
        //    <div className='container bg-white'>
        <nav class="navbar navbar-expand-lg navbar-light bg-body bg-white border-bottom">
            {/* <!-- Container wrapper --> */}
            <div class="container-fluid d-flex space-between">
                {/* <!-- Toggle button --> * /}
           <button
             data-mdb-collapse-init
             class="navbar-toggler"
             type="button"
             data-mdb-target="#navbarSupportedContent"
             aria-controls="navbarSupportedContent"
             aria-expanded="false"
             aria-label="Toggle navigation"
           >
             <i class="fas fa-bars"></i>
           </button>
       
           {/* <!-- Collapsible wrapper --> */}
                <div class="collapse navbar-collapse ms-5 ps-5" id="navbarSupportedContent">

                    <Link class="navbar-brand mt-2 mt-lg-0 ms-5 ps-5" to={"/"}>
                        Stoc<b>X</b>pert
                    </Link>



                </div>
                <div class="d-flex align-items-center " style={{ marginRight: "100px" }}>
                    <ul class="navbar-nav me-5 mb-2 mb-lg-0">
                        <li class="nav-item me-3">
                            <Link class="nav-link active text-muted " to="/signup">Signup</Link>
                        </li>
                        <li class="nav-item me-3">
                            <Link class="nav-link active text-muted" to="/about">About</Link>
                        </li>
                        <li class="nav-item me-3">
                            <Link class="nav-link active text-muted" to="/products">Products</Link>
                        </li>
                        <li class="nav-item me-3">
                            <Link class="nav-link active text-muted" to="/pricing">Pricing</Link>
                        </li>
                        <li class="nav-item me-3 ">
                            <Link class="nav-link active text-muted" to="/support">Support</Link>
                        </li>
                        <li class='nav-item me-3 mt-2 ms-2'>
                            <Link href=''><i class="fa fa-bars" aria-hidden="true">
                            </i>
                            </Link>
                        </li>

                    </ul>
                </div>

            </div>

        </nav>
        //    </div>



    );
}

export default Navbar;