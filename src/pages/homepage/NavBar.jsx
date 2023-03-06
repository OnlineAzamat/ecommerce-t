
export default function NavBar() {
    return(
        <main className="main-nav">
            <header className="top-nav">
                <div className="inner-top-nov d-flex justify-content-between w-100 align-items-center">
                    <div className="contact d-flex">
                        <div className="phone">
                            <i className="bi bi-telephone"></i>
                            <span className="phone-num ms-1">(225) 555-0118</span>
                        </div>
                        <div className="email">
                            <i className="bi bi-envelope"></i>
                            <span className="email__email ms-1">yakubbaev.azamat@mail.ru</span>
                        </div>
                    </div>
                    <div className="get">
                        <span>Follow Us and get a chance to <a href="/"> win 80% off </a></span>
                    </div>
                    <div className="following d-flex align-items-center">
                        <span>Follow Us :</span>
                        <div className="following__mes d-flex">
                            <a href="https://instagram.com">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="https://youtube.com">
                                <i className="bi bi-youtube"></i>
                            </a>
                            <a href="https://facebook.com">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="https://twitter.com">
                                <i className="bi bi-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <nav className="d-flex justify-content-between">
                <div className="logo">
                    Brand Logo
                </div>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item">
                        <a href="/" className="navbar-brand">
                            Home
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a class="nav-link dropdown-hover d-flex" href="#">
                            Shop
                            <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                            <i className="bi bi-chevron-down ms-1"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            Blog
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            Contact
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            Pages
                        </a>
                    </li>
                </ul>
                <div className="search">
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <span class="search-icon">
                            <i className="bi bi-search"></i>
                        </span>
                    </form>
                </div>
                <div className="d-flex align-items-center">
                    <div className="register d-flex align-items-center">
                            <a href="/signin">
                                <i className="bi bi-person"></i>
                                Login
                            </a>
                            <span>/</span>
                            <a href="/signup">Register</a>
                    </div>
                    <div className="cart">
                        <a href="/cart">
                            <i className="bi bi-cart"></i>
                            <span>1</span>
                        </a>
                    </div>
                    <div className="favourite">
                        <a href="/favourite">
                            <i className="bi bi-heart"></i>
                            <span>1</span>
                        </a>
                    </div>
                </div>
            </nav>
        </main>
    )
}