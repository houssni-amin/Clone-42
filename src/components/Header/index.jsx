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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header>
      <div className="headerTop">
        <div className="linksTop">
          <a href="/" className="headerLinkTop">
            Alumni
          </a>
          <a href="/" className="headerLinkTop">
            Entreprises
          </a>
          <a href="/" className="headerLinkTop">
            Taxe d'apprentissage
          </a>
          <a href="/" className="headerLinkTop">
            Presse
          </a>
        </div>
        <div className="socialNetworks">
          <p>FR⏷</p>
          <a href="/">
            <img
              src={twitter}
              alt="logo de twitter"
              className="logoSocialNetworks"
            />
          </a>
          <a href="/">
            <img
              src={facebook}
              alt="logo de facebook"
              className="logoSocialNetworks"
            />
          </a>
          <a href="/">
            <img
              src={linkedin}
              alt="logo de linkedin"
              className="logoSocialNetworks"
            />
          </a>
          <a href="/">
            <img
              src={instagram}
              alt="logo de instagram"
              className="logoSocialNetworks"
            />
          </a>
          <a href="/">
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
        <img src={isScrolled ? blackLogo : whiteLogo} alt="logo" />
        <div>
          <a
            href="/"
            className={`headerLinkBottom ${
              isScrolled ? "headerLinkBottomScrolled" : ""
            }`}
          >
            LE CAMPUS DE PARIS
          </a>
          <a
            href="/"
            className={`headerLinkBottom ${
              isScrolled ? "headerLinkBottomScrolled" : ""
            }`}
          >
            42 C'EST QUOI ?
          </a>
          <a
            href="/"
            className={`headerLinkBottom ${
              isScrolled ? "headerLinkBottomScrolled" : ""
            }`}
          >
            LE PROGRAMME
          </a>
          <a
            href="/"
            className={`headerLinkBottom ${
              isScrolled ? "headerLinkBottomScrolled" : ""
            }`}
          >
            LE RÉSEAU MONDIAL
          </a>
          <a
            href="/"
            className={`headerLinkBottom ${
              isScrolled ? "headerLinkBottomScrolled" : ""
            }`}
          >
            ADMISSION
          </a>
          <a
            href="/"
            className={`headerLinkBottom ${
              isScrolled ? "headerLinkBottomScrolled" : ""
            }`}
          >
            APRÈS 42
          </a>
          <a
            href="/"
            className={`headerLinkBottom ${
              isScrolled ? "headerLinkBottomScrolled" : ""
            }`}
          >
            FAQ
          </a>
          <a
            href="/"
            className={`headerLinkBottom ${
              isScrolled ? "headerLinkBottomScrolled" : ""
            }`}
          >
            CONTACT
          </a>
        </div>
        <button>POSTULER À PARIS</button>
      </div>
    </header>
  )
}
