import "./home.css"
import YouTubeVideo from "../../components/YoutubeVideo"
import TextCarousel from "../../components/TextCarousel"
import backgroundProgram from "../../assets/background-program.png"
import iconMan from "../../assets/iconMan.svg"
import iconProjects from "../../assets/iconProjects.svg"
import iconPeer from "../../assets/iconPeer.svg"
import iconGame from "../../assets/iconGame.svg"
import valueOne from "../../assets/valueOne.svg"
import valueTwo from "../../assets/valueTwo.svg"
import valueThree from "../../assets/valueThree.svg"
import valueFour from "../../assets/valueFour.svg"
import valuePicture from "../../assets/valuePicture.jpg"
import backgroundLeftParis from "../../assets/background-left-paris.jpg"
import backgroundRightParis from "../../assets/background-right-paris.png"

export default function Home() {
  const statisticsItems = [
    { title: "PLUS DE 4000", text: "ÉTUDIANTS ET ÉTUDIANTES" },
    { title: "35%", text: "SANS DIPLÔME" },
    { title: "40%", text: "NE SAVAIENT PAS CODER" },
    { title: "24 ANS", text: "MOYENNE D'ÂGE" },
    { title: "100%", text: "EMBAUCHE APRÈS LE TRONC COMMUN" },
    { title: "47 000€", text: "SALAIRE MOYEN EN SORTIE" },
    { title: "10%", text: "INTERNATIONAUX" },
    { title: "0€", text: "COÛT DES ÉTUDES" },
  ]
  const internationalItems = [
    { title: "54", text: "CAMPUS" },
    { title: "31", text: "PAYS" },
    { title: "+21 000", text: "ÉTUDIANTES ET ÉTUDIANTS" },
    { title: "0€", text: "COÛT DES ÉTUDES" },
    { title: "26", text: "ÂGE MOYEN SUR L'ENSEMBLE DES CAMPUS" },
  ]
  return (
    <div className="homeContainer">
      <section className="titleContainer">
        <div className="shadowTitle">
          <h1>42 : APPRENDRE LE CODE.</h1>
          <p>Casser les codes.</p>
        </div>
      </section>

      <section className="program">
        <div className="programContent">
          <img
            src={backgroundProgram}
            alt="backgroud program"
            className="backgroundProgram"
          />
          <div className="borderTopProgramme"></div>
          <h2>LE PROGRAMME</h2>
          <p>
            42, c'est une formation en informatique d'excellence pour tous et
            toutes. Au programme de cette école différente et innovante : une
            approche par projets pour progresser et développer des compétences
            techniques et humaines recherchées sur le marché du travail.
          </p>
          <ul>
            <li>
              <img src={iconMan} alt="icon" />
              <p>
                PAS DE COURS. PAS DE
                <br />
                PROFS. PAS DE CLASSES.
              </p>
            </li>
            <li>
              <img src={iconProjects} alt="icon" />
              <p>UNE PÉDAGOGIE PAR PROJETS </p>
            </li>
            <li>
              <img src={iconPeer} alt="icon" />
              <p>UN APPRENTISSAGE PEER-TO-PEER</p>
            </li>
            <li>
              <img src={iconGame} alt="icon" />
              <p>GAMIFICATION</p>
            </li>
          </ul>
          <button>Le code source</button>
        </div>
      </section>

      <section className="values">
        <div className="valuesContent">
          <div className="valuesTop">
            <img src={valuePicture} alt="Un homme devant un ordinateur" />
            <div className="valuesRight">
              <div className="borderTopValues"></div>
              <h2>NOS VALEURS</h2>
              <p>
                La position de 42 est unique dans le monde de l'enseignement
                supérieur : elle repose sur des valeurs fortes pour une
                insertion professionnelle durable sur le marché de l'emploi.
              </p>
              <h4>Pourquoi 42 est-elle si différente ?</h4>
              <button>Un concept unique</button>
            </div>
          </div>
          <ul>
            <li>
              <img
                src={valueOne}
                className="valueIcon"
                alt="Logo argent barré"
              />
              <p>GRATUITÉ</p>
            </li>
            <li>
              <img src={valueTwo} className="valueIcon" alt="Logo diplôme " />
              <p>POUR TOUS, POUR TOUTES</p>
            </li>
            <li>
              <img
                src={valueThree}
                className="valueIcon"
                alt="Logo diplôme barré"
              />
              <p>AUCUN DIPLÔME REQUIS</p>
            </li>
            <li>
              <img
                src={valueFour}
                className="valueIcon"
                alt="Logo ordinateur"
              />
              <p>
                PAS BESOIN DE SAVOIR <br />
                DÉJÀ CODER OU D'AIMER
                <br /> LES MATHS
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="discover">
        <div className="discoverContent">
          <div className="discoverTop">
            <div className="borderTopDiscover"></div>
            <h2>DÉCOUVREZ 42</h2>
          </div>
          <div className="discoverBottom">
            <YouTubeVideo videoId1="PpCQCgqOt7U" videoId2="fqDiuSE97PM" />
          </div>
        </div>
      </section>

      <section className="statistics">
        <div className="borderTopDiscover"></div>
        <h2>STATISTIQUES 2023 DE 42 À PARIS </h2>
        <TextCarousel items={statisticsItems} color={"white"} />
      </section>

      <section className="after">
        <div className="afterContent">
          <div className="borderTopAfter"></div>
          <h2>APRÈS 42</h2>
          <p>
            Sur un marché du travail en très forte demande de talents
            numériques,
            <br /> 42 guide ses étudiantes et ses étudiants vers des carrières à
            succès et pérennes.
          </p>
          <h4>Quels métiers et carrières après ?</h4>
          <button>Après 42</button>
        </div>
      </section>

      <section className="paris">
        <div className="parisContent">
          <img
            src={backgroundLeftParis}
            alt="Campus 42 de Paris"
            className="backgroundLeftParis"
          />
          <img
            src={backgroundRightParis}
            alt="Un dégradé"
            className="backgroundRightParis"
          />
          <div className="borderTopParis"></div>
          <h2>PARIS</h2>
          <p>
            C'est à Paris que 42 a lancé son premier campus pour offrir
            <br />
            le meilleur environnement possible pour apprendre.
          </p>
          <h4>Découvrir le campus 42 à Paris</h4>
          <button>Le campus</button>
        </div>
      </section>

      <section className="international">
        <div className="internationalContent">
          <div className="borderTopInternational"></div>
          <h2>UN RÉSEAU INTERNATIONAL</h2>
          <p>
            42 a créé le plus grand réseau d4écoles d4informatique au monde
            gratuites, innovantes et ouvertes à tous et à toutes.
          </p>
          <h4>Où se trouvent les campus 42 dans le monde?</h4>
          <button>Le réseau mondial</button>

          <TextCarousel items={internationalItems} color={"#04809f"} />
        </div>
      </section>
    </div>
  )
}
