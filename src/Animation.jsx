import React from "react"

const Animation = () => {
    return (
        <div className="animation-div">
            <div className="wrapper">
                <p className="first-para">
                    <span className="n1">1</span>
                    <span className="n2">8</span>
                    <span className="months">Months</span>
                </p>
                <p className="second-para">Included Warranty</p>
            </div>
            <div className="wrapper">
                <p className="first-para">
                    <span className="n1">1</span>
                    <span className="n2">0</span>
                    <span className="n3">0</span>
                    <span className="n4">0</span>
                    <span className="n5">0</span>
                    <span className="n6">+</span>
                </p>
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