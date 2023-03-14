import axios from "axios"
import React, { useEffect, useState } from "react"
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle, CPlaceholder } from '@coreui/react'
import Box from "@mui/material/Box"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"

function Bestseller() {
    const [bestsel, setBestsel] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    async function getProducts() {
        await axios.get('https://fakestoreapi.com/products')
            .then(res => {
                console.log(res.data)
                setBestsel(res.data)
            })
            .catch(err => console.log(err))
    }

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
            <Box sx={{ width: 1/1 }} className="bestseller-products">
                <ImageList variant="masonry" cols={4} gap={15} className="bestseller-products-items">
                    {bestsel.length > 0 ? 
                        (
                            bestsel.map(data => {
                                return (
                                    <ImageListItem className="bestseller-products-items__item" key={data.id + data.title}>
                                        <div className="bestseller-products-items__item-img">
                                            <img src={data.image ? data.image : "https://www.fennelcos.com/images/nopic.png"} alt="product" />
                                        </div>
                                        <div className="bestseller-product-info">
                                            <a href="/">
                                                <h5>{data.title}</h5>
                                            </a>
                                            <p>{data.category}</p>
                                            <div className="bestseller-product-price">
                                                <span className="bestseller-product-price__price">${data.price}</span>
                                                <span className="bestseller-product-price__discount">${Math.floor(data.price / 3)}</span>
                                            </div>
                                            {/* <div className="bestseller-product__types">
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
                                            </div> */}
                                        </div>
                                    </ImageListItem>
                                )
                            })
                        ) : 
                        (
                            <>
                            <CCard style={{ width: '18rem' }}>
                                <CCardImage component="svg" orientation="top" width="100%" height="162" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                                <title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></CCardImage>
                                <CCardBody>
                                    <CPlaceholder component={CCardTitle} animation="glow" xs={7}>
                                        <CPlaceholder xs={6} />
                                    </CPlaceholder>
                                    <CPlaceholder component={CCardText} animation="glow">
                                        <CPlaceholder xs={7} />
                                        <CPlaceholder xs={4} />
                                        <CPlaceholder xs={4} />
                                        <CPlaceholder xs={6} />
                                        <CPlaceholder xs={8} />
                                    </CPlaceholder>
                                    <CPlaceholder component={CButton} disabled href="#" tabIndex={-1} xs={6}></CPlaceholder>
                                </CCardBody>
                            </CCard>
                            </>
                        )}
                </ImageList>
            </Box>
        </div>
    )
}

export default Bestseller