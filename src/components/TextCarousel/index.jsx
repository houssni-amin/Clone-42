import React, { useState } from "react"
import "./textCarousel.css"

export default function TextCarousel({ items, color }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleItems = 3

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= items.length - visibleItems ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? items.length - visibleItems : prevIndex - 1
    )
  }

  return (
    <div className="textCarouselContainer">
      <div className="textCarousel">
        <div
          className="textCarouselTrack"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
          }}
        >
          {items.map((item, index) => (
            <div key={index} className="textCarouselItem">
              <h3 style={{ color: `${color}` }}>{item.title}</h3>
              <p style={{ color: `${color}` }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="buttons">
        <button
          className="prev"
          onClick={prevSlide}
          style={{ border: `1px solid ${color}`, color: `${color}` }}
        >
          &#10094;
        </button>
        <button
          className="next"
          onClick={nextSlide}
          style={{ border: `1px solid ${color}`, color: `${color}` }}
        >
          &#10095;
        </button>
      </div>
    </div>
  )
}
