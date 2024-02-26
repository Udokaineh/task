import React, { useState, useEffect } from 'react'


const Button = () => {
    const [showSpan, setShowSpan] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSpan(true)
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div>
            <button>buy now
                {showSpan && <span>(Risk free 30 day trials)</span>}
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
    )
}

export default Button;