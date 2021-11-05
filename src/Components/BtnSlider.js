import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export function BtnSlider({direction, moveSlide}) {
    return (
        <button
            onClick={moveSlide}
            className={direction === "next" ? "icon next" : "icon prev" }
        >
            <FontAwesomeIcon
                className="icon"
                icon={direction === "next" ? faArrowRight : faArrowLeft}
            />
        </button>
    )
}