import React from "react"

const Animation = () => {
    return (
        <div className="animation-div">
            <div className="wrapper">
                <p className="first-para">18 <span>Months</span></p>
                <p className="second-para">Included Warranty</p>
            </div>
            <div className="wrapper">
                <p className="first-para">10000+</p>
                <p className="second-para">Loyal customers</p>
            </div>
            <div className="wrapper">
                <div className="star-icon-div">
                    <img src="Assets/star-img.svg" alt="star icon" />
                    <img src="Assets/star-img.svg" alt="star icon" />
                    <img src="Assets/star-img.svg" alt="star icon" />
                    <img src="Assets/star-img.svg" alt="star icon" />
                    <img src="Assets/star-img.svg" alt="star icon" />
                </div>
                <p className="second-para">Stars</p>
            </div>
        </div>
    )
}

export default Animation