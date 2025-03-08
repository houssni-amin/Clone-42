import "./home.css"
import backgroundProgram from "../../assets/background-program.png"
import iconMan from "../../assets/iconMan.svg"
import iconProjects from "../../assets/iconProjects.svg"
import iconPeer from "../../assets/iconPeer.svg"
import iconGame from "../../assets/iconGame.svg"

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
    </div>
  )
}
