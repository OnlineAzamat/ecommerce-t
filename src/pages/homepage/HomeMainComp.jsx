import { CCarousel, CCarouselItem, CImage, CCarouselCaption } from "@coreui/react"
import shopHero1 from "../../assets/images/homepage/shop-hero-1-product-slide-1.jpg"

export default function HomeMainComp() {
    return(
        <main className="desktop-main">
            <CCarousel controls indicators transition="slide" interval={5000} pause={"hover"}>
                <CCarouselItem interval={5000}>
                    <CImage className="d-block w-100 home-title-image" src={shopHero1} alt="slide 1" />
                    <CCarouselCaption>
                        <div className="home-title">
                            <h5>SUMMER 2023</h5>
                            <h1>NEW COLLECTION</h1>
                            <p>We know how large objects will act, but things on a small scale.</p>
                            <button className="btn-shop-now">SHOP NOW</button>
                        </div>
                    </CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem interval={5000}>
                    <CImage className="d-block w-100 home-title-image" src="https://i.pinimg.com/originals/70/8b/01/708b0100b14c48e6728e156bd9be4e37.jpg" alt="slide 2" />
                    <CCarouselCaption>
                        <h1>Main 2</h1>
                    </CCarouselCaption>
                </CCarouselItem>
            </CCarousel>
        </main>
    )
}