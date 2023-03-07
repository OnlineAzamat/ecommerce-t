import { CCarousel, CCarouselItem, CImage, CCarouselCaption } from "@coreui/react"
import shophero from "../../assets/images/homepage/shop-hero-2-png-picture-1.png"

function Summer() {
    return (
        <div className="summer">
            <CCarousel controls indicators transition="slide" interval={5000} pause={"hover"}>
                <CCarouselItem interval={5000}>
                    <img src={shophero} alt="shop" className="shophero" />
                    <CCarouselCaption>
                        <div className="home-title">
                            <h5>SUMMER 2023</h5>
                            <h1>Vita Classic Product</h1>
                            <p>We know how large objects will act, We know how are objects will act, We know</p>
                            <div className="contain">
                                <span>$16.48 </span>
                                <button className="btn-shop-now">Add to cart</button>
                            </div>
                        </div>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem interval={5000}>
                    <img src={shophero} alt="shop" className="shophero" />
                    <CCarouselCaption>
                        <div className="home-title">
                            <h5>SUMMER 2023</h5>
                            <h1>Vita Classic Product</h1>
                            <p>We know how large objects will act, We know how are objects will act, We know</p>
                            <div className="contain">
                                <span>$16.48 </span>
                                <button className="btn-shop-now">Add to cart</button>
                            </div>
                        </div>
                    </CCarouselCaption>
                </CCarouselItem>
                </CCarousel>
        </div>
    )
}

export default Summer