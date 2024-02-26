import React from 'react';
import SlotCounter from 'react-slot-counter';

function Animationn() {
    return (
        <div className="slot-container animate__animated animate__fadeInUp">
            <div>
                <div className="first-div">
                    <SlotCounter value={18} animateUnchanged={true} autoAnimationStart={true}  duration={1}  />
                    <span className="months">Months</span>
                </div>
                <p className="second-para">Included Warranty</p>
            </div>
            <div>
                <div className="first-div">
                    <SlotCounter value={10000} animateUnchanged={true} autoAnimationStart={true}  duration={1}  />
                    <SlotCounter value={"+"}  duration={1} />
                </div>
                <p className="second-para">Loyal customers</p>
            </div>
            <div>
                <div className="first-div">
                    <SlotCounter
                        value={[
                            <img src="Assets/star-img.svg" alt="star icon" />,
                            <img src="Assets/star-img.svg" alt="star icon" />,
                            <img src="Assets/star-img.svg" alt="star icon" />,
                            <img src="Assets/star-img.svg" alt="star icon" />,
                            <img src="Assets/star-img.svg" alt="star icon" />
                        ]}
                        dummyCharacters={[
                            <img src="Assets/star-img.svg" alt="star icon" />,
                            <img src="Assets/star-img.svg" alt="star icon" />,
                            <img src="Assets/star-img.svg" alt="star icon" />,
                            <img src="Assets/star-img.svg" alt="star icon" />,
                            <img src="Assets/star-img.svg" alt="star icon" />
                        ]}
                        animateUnchanged={true}
                        autoAnimationStart={true} 
                        duration={1}
                    />
                </div>
                <p className="second-para">Stars</p>
            </div>
        </div>
    );
}


export default Animationn;
