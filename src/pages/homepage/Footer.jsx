import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md mb-4 mb-md-0">
                        <h3>Store</h3>
                        <ul className='list-unstyled nav-links'>
                            <li>
                                <a href="#">Men</a>
                            </li>
                            <li>
                                <a href="#">Women</a>
                            </li>
                            <li>
                                <a href="#">Children</a>
                            </li>
                            <li>
                                <a href="#">New Arrivals</a>
                            </li>
                            <li>
                                <a href="#">Top Brands</a>
                            </li>
                            <li>
                                <a href="#">Special Offers</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md mb-4 mb-md-0">
                        <h3>About</h3>
                        <ul className='list-unstyled nav-links'>
                            <li>
                                <a href="#">About us</a>
                            </li>
                            <li>
                                <a href="#">Clients</a>
                            </li>
                            <li>
                                <a href="#">Services</a>
                            </li>
                            <li>
                                <a href="#">Best sellers</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md mb-4 mb-md-0">
                        <h3>Legal</h3>
                        <ul className='list-unstyled nav-links'>
                            <li>
                                <a href="#">Terms & Contitions</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Legality</a>
                            </li>
                            <li>
                                <a href="#">Author license</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h3>Subscribe</h3>
                        <p className='md-4'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum sint neque quisquam voluptas consectetur minima.
                        </p>
                        <form action="#" className='subscribe'>
                            <input type="text" className='form-control' placeholder='Enter your e-mail' />
                            <input type="submit" className='btn btn-submit' value={'send'} />
                        </form>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-12">
                        <div className="border-top my-5"></div>
                    </div>
                    <div className="col-md-6">
                        <p>
                            <small>
                                © 2023 All Rights Reserved.
                            </small>
                        </p>
                    </div>
                    <div className="col-md-6 text-md-right">
                        <ul className='social list-unstyled'>
                            <li>
                                <a href="#">
                                    <i className='bi bi-facebook'></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className='bi bi-twitter'></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className='bi bi-pinterest'></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className='bi bi-instagram'></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className='bi bi-behance'></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer