import React from "react"
import Animation from "./Animation"
import Button from "./Button"

const HeroPage = () => {
    return (
        <div className="heropage-div">
            <div className="logo-div">
                <img src="Assets/logo.svg" alt="logo" />
            </div>
            <div className="hero-wrapper">
                <div className="left-section">
                    <div>
                        <h1 class="animate__animated animate__fadeInUp">Trusted by Athletes</h1>
                        <p className="sub-title animate__animated  animate__fadeInUp">Integrated with A.I to ensure your massage pressure is never compromised</p>
                    </div>
                    <Animation />
                    <Button />
                </div>

                <div className="booster-img-div animate__animated animate__fadeInUp">
                    <img src="Assets/booster-img.svg" alt="booster" />
                </div>
            </div>
        </div>
    )
}


export default HeroPage