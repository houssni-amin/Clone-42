import "./footer.css"
import logo from "../../assets/logo-white.svg"
import twitter from "../../assets/logo-twitter.png"
import facebook from "../../assets/logo-facebook.png"
import linkedin from "../../assets/logo-linkedin.png"
import instagram from "../../assets/logo-instagram.png"
import medium from "../../assets/logo-medium.png"

export default function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div className="footerTop">
          <div className="footerTopLeft">
            <a href="/">
              <img src={logo} alt="logo de 42" />
            </a>
            <p>96 boulevard Bessières - 75017 Paris</p>
            <p>Établissement d'enseignement supérieur privé technique </p>
            <p>Organisme à but non lucratif</p>
            <p>42 est labellisée GEN</p>
            <p>42 est certifiée Qualiopi</p>
            <div className="socialNetworks">
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
          <div className="footerTopRight">
            <div className="column leCampusDeParis">
              <h4>Le campus de Paris</h4>
              <p>NOC 42 : Tout, sauf un campus</p>
              <p>Forty2 : le campus délocalisé</p>
              <p>Vie étudiante</p>
              <p>Formation proposée</p>
              <p>42 Start-Up Club</p>
            </div>
            <div className="column cestquoi">
              <h4>42 c'est quoi ?</h4>
              <p>Un concept unique</p>
              <p>La méthode 42</p>
              <p>L'équipe</p>
            </div>
            <div className="column leProgramme">
              <h4>Le programme</h4>
              <p>Le code source</p>
              <p>L'exécution</p>
              <p>Stages et expériences professionnelles</p>
            </div>
            <div className="column leReseauMondial">
              <h4>Le réseau mondial</h4>
            </div>
            <div className="column admissions">
              <h4>Admissions</h4>
              <p>Le processus</p>
              <p>Sélectionner un campus</p>
              <p>La piscine de 42</p>
            </div>
            <div className="column apres">
              <h4>Après 42</h4>
            </div>
            <div className="column toutSavoirSur">
              <h4>Tout savoir sur...</h4>
            </div>
            <div className="column alumni">
              <h4>Alumni</h4>
            </div>
            <div className="column entreprises">
              <h4>Entreprise</h4>
              <p>Actions de recrutement et de formation</p>
              <p>Taxes d'apprentissage et dons</p>
            </div>
            <div className="column presse">
              <h4>Presse</h4>
            </div>
            <div className="column nosEngagements">
              <h4>Nos engagements</h4>
              <p>Démarche qualité</p>
              <p>Diversité, inclusion et égalité des chances</p>
              <p>Qualiopi</p>
            </div>
            <div className="column contact">
              <h4>Contact</h4>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <p>© 2024 Association 42 - Tous droits réservés</p>
          <p>
            Mentions légales | CGU | CGS | Politique de confidentialité | Plan
            du site | Emploi : 42 recrute !
          </p>
        </div>
      </div>
    </footer>
  )
}
