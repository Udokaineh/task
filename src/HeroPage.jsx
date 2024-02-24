import React from "react"
import Animation from "./Animation"

const HeroPage = () => {
    return (
        <div className="heropage-div">
            <div className="logo-div">
                <img src="Assets/logo.svg" alt="logo" />
            </div>
            <div className="hero-wrapper">
                <div className="left-section">
                    <div>
                        <h1>Trusted by Athletes</h1>
                        <p className="sub-title">Integrated with A.I to ensure your massage pressure is never compromised</p>
                    </div>
                    <Animation />
                    <button>buy now
                        {/* <span>(Risk free 30 day trials)</span> */}
                    </button>
                    <div className="buy-now-div">
                        <p>Buy now, pay later option available</p>
                        <p className="free">Free Worldwide Express Delivery</p>
                    </div>
                    <div class="afterpay-and-zip-logo-div">
                        <img className="afterpay-logo" src="Assets/after-pay-logo.svg" alt="afterpay logo" />
                        <img className="zip-logo" src="Assets/zip-logo.svg" alt="zip logo" />
                    </div>
                </div>

                <div className="booster-img-div">
                    <img src="Assets/booster-img.svg" alt="booster" />
                </div>
            </div>
        </div>
    )
}


export default HeroPage