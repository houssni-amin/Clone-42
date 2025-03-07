import React, { useState, useEffect } from "react"
import "./header.css"
import blackLogo from "../../assets/logo-black.svg"
import whiteLogo from "../../assets/logo-white.svg"
import twitter from "../../assets/logo-twitter.png"
import facebook from "../../assets/logo-facebook.png"
import linkedin from "../../assets/logo-linkedin.png"
import instagram from "../../assets/logo-instagram.png"
import medium from "../../assets/logo-medium.png"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 1) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      if (currentScrollY > lastScrollY && currentScrollY > 400) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header className={`${isHidden ? "hidden" : ""}`}>
      <div className="headerTop">
        <div className="linksTop">
          <a
            href="/"
            className="headerLinkTop"
            onClick={(e) => e.preventDefault()}
          >
            Alumni
          </a>
          <a
            href="/"
            className="headerLinkTop"
            onClick={(e) => e.preventDefault()}
          >
            Entreprises
          </a>
          <a
            href="/"
            className="headerLinkTop"
            onClick={(e) => e.preventDefault()}
          >
            Taxe d'apprentissage
          </a>
          <a
            href="/"
            className="headerLinkTop"
            onClick={(e) => e.preventDefault()}
          >
            Presse
          </a>
        </div>
        <div className="socialNetworks">
          <p>FR⏷</p>
          <a href="/" onClick={(e) => e.preventDefault()}>
            <img
              src={twitter}
              alt="logo de twitter"
              className="logoSocialNetworks"
            />
          </a>
          <a href="/" onClick={(e) => e.preventDefault()}>
            <img
              src={facebook}
              alt="logo de facebook"
              className="logoSocialNetworks"
            />
          </a>
          <a href="/" onClick={(e) => e.preventDefault()}>
            <img
              src={linkedin}
              alt="logo de linkedin"
              className="logoSocialNetworks"
            />
          </a>
          <a href="/" onClick={(e) => e.preventDefault()}>
            <img
              src={instagram}
              alt="logo de instagram"
              className="logoSocialNetworks"
            />
          </a>
          <a href="/" onClick={(e) => e.preventDefault()}>
            <img
              src={medium}
              alt="logo de medium"
              className="logoSocialNetworks"
            />
          </a>
        </div>
      </div>

      <div
        className={`headerBottom ${isScrolled ? "headerBottomScrolled" : ""}`}
      >
        <a href="/">
          <img src={isScrolled ? blackLogo : whiteLogo} alt="logo de 42" />
        </a>

        <div>
          <a
            href="/"
            className={`headerLinkBottom ${
              isScrolled ? "headerLinkBottomScrolled" : ""
            }`}
            onClick={(e) => e.preventDefault()}
          >
            LE CAMPUS DE PARIS
          </a>
          <a
            href="/"
            className={`headerLinkBottom ${
              isScrolled ? "headerLinkBottomScrolled" : ""
            }`}
            onClick={(e) => e.preventDefault()}
          >
            42 C'EST QUOI ?
          </a>
          <a
            href="/"
            className={`headerLinkBottom ${
              isScrolled ? "headerLinkBottomScrolled" : ""
            }`}
            onClick={(e) => e.preventDefault()}
          >
            LE PROGRAMME
          </a>
          <a
            href="/"
            className={`headerLinkBottom ${
              isScrolled ? "headerLinkBottomScrolled" : ""
            }`}
            onClick={(e) => e.preventDefault()}
          >
            LE RÉSEAU MONDIAL
          </a>
          <a
            href="/"
            className={`headerLinkBottom ${
              isScrolled ? "headerLinkBottomScrolled" : ""
            }`}
            onClick={(e) => e.preventDefault()}
          >
            ADMISSION
          </a>
          <a
            href="/"
            className={`headerLinkBottom ${
              isScrolled ? "headerLinkBottomScrolled" : ""
            }`}
            onClick={(e) => e.preventDefault()}
          >
            APRÈS 42
          </a>
          <a
            href="/"
            className={`headerLinkBottom ${
              isScrolled ? "headerLinkBottomScrolled" : ""
            }`}
            onClick={(e) => e.preventDefault()}
          >
            FAQ
          </a>
          <a
            href="/"
            className={`headerLinkBottom ${
              isScrolled ? "headerLinkBottomScrolled" : ""
            }`}
            onClick={(e) => e.preventDefault()}
          >
            CONTACT
          </a>
        </div>
        <button>POSTULER À PARIS</button>
      </div>
    </header>
  )
}
