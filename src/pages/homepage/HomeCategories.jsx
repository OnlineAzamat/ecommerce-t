import React from 'react'
import filter_1 from "../../assets/images/homepage/filter-1.png"
import filter_2 from "../../assets/images/homepage/filter-2.png"
import filter_3 from "../../assets/images/homepage/filter-3.png"
import filter_4 from "../../assets/images/homepage/filter-4.png"

function HomeCategories() {
    return (
        <div className='homeCategories'>
            <div className="cluster">
                <h3>EDITOR'S PICK</h3>
                <p>Problems trying to resolve the conflict between </p>
            </div>
            <div className="collage">
                <div className="collage-item">
                    <img src={filter_1} alt="filterimg" className="collage-item-img" />
                    <button className='collage-item__btn'>MEN</button>
                </div>
                <div className="collage-item">
                    <img src={filter_2} alt="filterimg" className="collage-item-img" />
                    <button className="collage-item__btn">WOMEN</button>
                </div>
                <div className="collage-item">
                    <img src={filter_3} alt="filterimg" className="collage-item-img" />
                    <button className="collage-item__btn">ACCESSORIES</button>
                </div>
                <div className="collage-item">
                    <img src={filter_4} alt="filterimg" className="collage-item-img" />
                    <button className="collage-item__btn">KIDS</button>
                </div>
            </div>
        </div>
    )
}

export default HomeCategories