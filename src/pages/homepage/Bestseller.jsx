import axios from "axios"
import React, { useState } from "react"


class Bestseller extends React.Component {
    
    componentWillUnmount() {

        const [bestsel, setBestsel] = useState([])
        
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                console.log(res)
                setBestsel(res)
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className='bestseller'>
                <div className="cluster">
                    <h4>
                        Featured Products
                    </h4>
                    <h1>
                        Bestseller products
                    </h1>
                    <p>
                        Problems trying to resolve the conflict between
                    </p>
                </div>
                <div className="bestseller-products">
                    <div className="bestseller-products-items d-grid">
                        <div className="bestseller-products-items__item">
                            <div className="bestseller-products-items__item-img">
                                <img src="https://ae01.alicdn.com/kf/HTB1XVZhPpXXXXbRapXXq6xXFXXXz/Plus-Size-M-4XL-spring-summer-men-s-Oxford-cotton-long-sleeved-shirt-Slim-fit-military.jpg" alt="product" />
                            </div>
                            <div className="bestseller-product-info">
                                <a href="/">
                                    <h5>Graphic design</h5>
                                </a>
                                <p>English department</p>
                                <div className="bestseller-product-price">
                                    <span className="bestseller-product-price__price">$16.48</span>
                                    <span className="bestseller-product-price__discount">$8.31</span>
                                </div>
                                <div className="bestseller-product__types">
                                    <div className="bestseller-product__type">
                                        <span className="product__blue"></span>
                                        <div className="product-type__hover">
                                        </div>
                                    </div>
                                    <div className="bestseller-product__type">
                                        <span className="product__green"></span>
                                        <div className="product-type__hover"></div>
                                    </div>
                                    <div className="bestseller-product__type">
                                        <span className="product__coral"></span>
                                        <div className="product-type__hover"></div>
                                    </div>
                                    <div className="bestseller-product__type">
                                        <span className="product__invert"></span>
                                        <div className="product-type__hover"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bestseller-products-items__item">
                            <div className="bestseller-products-items__item-img">
                                <img src="https://ae01.alicdn.com/kf/HTB1XVZhPpXXXXbRapXXq6xXFXXXz/Plus-Size-M-4XL-spring-summer-men-s-Oxford-cotton-long-sleeved-shirt-Slim-fit-military.jpg" alt="product" />
                            </div>
                            <div className="bestseller-product-info">
                                <h4>Graphic design</h4>
                                <p>English department</p>
                                <div className="bestseller-product-price">
                                    <span className="bestseller-product-price__price">$16.48</span>
                                    <span className="bestseller-product-price__discount">$8.31</span>
                                </div>
                                <div className="bestseller-product__types">
                                    <div className="bestseller-product__type">
                                        <span className="product__blue"></span>
                                        <div className="product-type__hover">
                                            
                                        </div>
                                    </div>
                                    <div className="bestseller-product__type">
                                        <span className="product__green"></span>
                                        <div className="product-type__hover">
                                            
                                        </div>
                                    </div>
                                    <div className="bestseller-product__type">
                                        <span className="product__coral"></span>
                                        <div className="product-type__hover">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bestseller-products-items__item">
                            <div className="bestseller-products-items__item-img">
                                <img src="https://ae01.alicdn.com/kf/HTB1XVZhPpXXXXbRapXXq6xXFXXXz/Plus-Size-M-4XL-spring-summer-men-s-Oxford-cotton-long-sleeved-shirt-Slim-fit-military.jpg" alt="product" />
                            </div>
                            <div className="bestseller-product-info">
                                <h4>Graphic design</h4>
                                <p>English department</p>
                                <div className="bestseller-product-price">
                                    <span className="bestseller-product-price__price">$16.48</span>
                                    <span className="bestseller-product-price__discount">$8.31</span>
                                </div>
                                <div className="bestseller-product__types">
                                    <div className="bestseller-product__type">
                                        <span className="product__blue"></span>
                                        <div className="product-type__hover">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bestseller-products-items__item">
                            <div className="bestseller-products-items__item-img">
                                <img src="https://ae01.alicdn.com/kf/HTB1XVZhPpXXXXbRapXXq6xXFXXXz/Plus-Size-M-4XL-spring-summer-men-s-Oxford-cotton-long-sleeved-shirt-Slim-fit-military.jpg" alt="product" />
                            </div>
                            <div className="bestseller-product-info">
                                <h4>Graphic design</h4>
                                <p>English department</p>
                                <div className="bestseller-product-price">
                                    <span className="bestseller-product-price__price">$16.48</span>
                                    <span className="bestseller-product-price__discount">$8.31</span>
                                </div>
                                <div className="bestseller-product__types">
                                    <div className="bestseller-product__type">
                                        <span className="product__blue"></span>
                                        <div className="product-type__hover">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bestseller-products-items__item">
                            <div className="bestseller-products-items__item-img">
                                <img src="https://ae01.alicdn.com/kf/HTB1XVZhPpXXXXbRapXXq6xXFXXXz/Plus-Size-M-4XL-spring-summer-men-s-Oxford-cotton-long-sleeved-shirt-Slim-fit-military.jpg" alt="product" />
                            </div>
                            <div className="bestseller-product-info">
                                <h4>Graphic design</h4>
                                <p>English department</p>
                                <div className="bestseller-product-price">
                                    <span className="bestseller-product-price__price">$16.48</span>
                                    <span className="bestseller-product-price__discount">$8.31</span>
                                </div>
                                <div className="bestseller-product__types">
                                    <div className="bestseller-product__type">
                                        <span className="product__blue"></span>
                                        <div className="product-type__hover">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Bestseller