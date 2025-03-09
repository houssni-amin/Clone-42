import React, { useState } from "react"
import "./youtubeVideo.css"

export default function YouTubeVideo({ videoId1, videoId2 }) {
  const videoUrl1 = `https://www.youtube.com/embed/${videoId1}`
  const videoUrl2 = `https://www.youtube.com/embed/${videoId2}`

  const [currentSlide, setCurrentSlide] = useState(0)

  const videos = [
    {
      id: 1,
      url: videoUrl1,
      descriptionTitle: "DÉCOUVREZ 42 EN DEUX MINUTES - 2022",
      descriptionText:
        "Découvrez 42, l'école d'informatique faite pour vous. 42 a été créée pour s'assurer que le monde de l'informatique est accessible à tous et à toutes. Depuis 2013, 42 propose un cursus d'excellence ouvert et gratuit, avec à la clé un emploi durable pour créer le monde numérique de demain.",
    },
    {
      id: 2,
      url: videoUrl2,
      descriptionTitle: "BIENVENUE ! - 2021",
      descriptionText:
        "Welcome to our network - we've been expecting you! From us all over the world to you: it's a pleasure finally meeting you. You're already part of the family.",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % videos.length)
  }

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + videos.length) % videos.length
    )
  }

  return (
    <div className="carouselContainer">
      <div
        className="carousel"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {videos.map((video) => (
          <div key={video.id} className="carouselItem">
            <iframe
              width="100%"
              height="100%"
              src={video.url}
              title={video.title}
              allowFullScreen
            />
            <h3>{video.descriptionTitle}</h3>
            <p>{video.descriptionText}</p>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  )
}
