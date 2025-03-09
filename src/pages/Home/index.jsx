import "./home.css"
import YouTubeVideo from "../../components/YoutubeVideo"
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

export default function Home() {
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
    </div>
  )
}
