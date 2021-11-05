import React from "react";
import { dataSlider } from "./dataSlider";
import { BtnSlider } from "./BtnSlider";
import "./Slider.css";

export function Slider() {
    const [slideIndex, setSlideIndex] = React.useState(1);

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1);
        }
        else if (slideIndex === dataSlider.length) {
            setSlideIndex(1);
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length);
        }
    }

    const moveDot = (index) => {
        setSlideIndex(index);
    }

    return (
        <section className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                        className={slideIndex === index + 1 ? "image active-image" : "image"}
                        key={obj.id}
                    >
                        <img
                            src={process.env.PUBLIC_URL + "/images/img" + (index + 1) + ".jpg"}
                            alt={obj.alt}
                        />
                    </div>
                )
            })}
            <BtnSlider
                direction={"next"}
                moveSlide={nextSlide}
            />
            <BtnSlider
                direction={"prev"}
                moveSlide={prevSlide}
            />
            <div className="dot-container">
                {Array.from({length: 5}).map((item, index) => {
                    return (
                        <div
                        key={index}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                        onClick={() => moveDot(index + 1)} />
                    )
                })}
            </div>
        </section>
    )
}