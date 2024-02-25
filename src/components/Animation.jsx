import React, { useState, useEffect } from 'react';

const Animation = () => {
    const [value, setValue] = useState(["0", "1"])
    const [number, setNumber] = useState(["0", "1", "2", "3", "4", "5"])

    useEffect(() => {
        const timeout1 = setTimeout(() => {
            setValue(["0", "2"])
        }, 200)
        const timeout2 = setTimeout(() => {
            setValue(["1", "3"])
        }, 400)
        const timeout3 = setTimeout(() => {
            setValue(["1", "8"])
        }, 600)

        // Clean up timeouts on component unmount
        return () => {
            clearTimeout(timeout1)
            clearTimeout(timeout2)
            clearTimeout(timeout3)
        }
    }, [])

    useEffect(() => {
        const timeout1 = setTimeout(() => {
            setNumber(["0", "1", "2", "4", "5", "6"])
        }, 200)

        const timeout2 = setTimeout(() => {
            setNumber(["0", "1", "2", "4", "5", "6"])
        }, 400)

        const timeout3 = setTimeout(() => {
            setNumber(["1", "2", "3", "5", "6", "6"])
        }, 800)

        const timeout4 = setTimeout(() => {
            setNumber(["1", "2", "3", "5", "6", "7"])
        }, 1000)

        const timeout5 = setTimeout(() => {
            setNumber(["1", "0", "0", "0", "0", "+"])
        }, 1200)

        // Clean up timeouts on component unmount
        return () => {
            clearTimeout(timeout1)
            clearTimeout(timeout2)
            clearTimeout(timeout3)
            clearTimeout(timeout4)
            clearTimeout(timeout5)
        }
    }, []);

    return (
        <div className="animation-div">
            <div className="wrapper">
                <p className="first-para">
                    <span className="n0">{value[0]}</span>
                    <span className="n1">{value[1]}</span>
                    <span className="months">Months</span>
                </p>
                <p className="second-para">Included Warranty</p>
            </div>
            <div className="wrapper">
                <p className="first-para">
                    <span className="n0">{number[0]}</span>
                    <span className="n1">{number[1]}</span>
                    <span className="n2">{number[2]}</span>
                    <span className="n3">{number[3]}</span>
                    <span className="n4">{number[4]}</span>
                    <span className="n5">{number[5]}</span>
                </p>
                <p className="second-para">Loyal customers</p>
            </div>
            <div className="wrapper">
                <div className="star-icon-div">
                    <img src="Assets/star-img.svg" alt="star icon" />
                    <img className="n0" src="Assets/star-img.svg" alt="star icon" />
                    <img className="n1" src="Assets/star-img.svg" alt="star icon" />
                    <img className="n2" src="Assets/star-img.svg" alt="star icon" />
                    <img className="n3" src="Assets/star-img.svg" alt="star icon" />
                </div>
                <p className="second-para">Stars</p>
            </div>
        </div>
    )
}

export default Animation