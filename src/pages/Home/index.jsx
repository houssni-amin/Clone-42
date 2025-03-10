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
import resum1 from "../../assets/resum1.svg"
import resum2 from "../../assets/resum2.svg"
import resum3 from "../../assets/resum3.svg"
import resum4 from "../../assets/resum4.svg"
import resum5 from "../../assets/resum5.svg"
import resum6 from "../../assets/resum6.svg"

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

      <section className="resum">
        <h2>EN RÉSUMÉ, 42 C'EST:</h2>
        <div className="resumInformation">
          <div className="resumItem">
            <div className="resumIconContainer">
              <img src={resum1} alt="Icon" />
            </div>
            <h3>GRATUIT</h3>
            <p>Une formation en 3 ans sans frais cachés.</p>
          </div>
          <div className="resumItem">
            <div className="resumIconContainer">
              <img src={resum2} alt="Icon" />
            </div>
            <h3>POUR TOUTES, POUR TOUS</h3>
            <p>Sans condition de diplôme, dès la majorité.</p>
          </div>
          <div className="resumItem">
            <div className="resumIconContainer">
              <img src={resum3} alt="Icon" />
            </div>
            <h3>PLACE À L'ACTION</h3>
            <p>Pas de cours, pas de profs, mais de l'entraide.</p>
          </div>
          <div className="resumItem">
            <div className="resumIconContainer">
              <img src={resum4} alt="Icon" />
            </div>
            <h3>RÉSEAU INTERNATIONAL</h3>
            <p>
              Plus de 50 campus, plus de 30 <br />
              pays dans le monde.
            </p>
          </div>
          <div className="resumItem">
            <div className="resumIconContainer">
              <img src={resum5} alt="Icon" />
            </div>
            <h3>100% D'EMBAUCHE</h3>
            <p>Dans tous les domaines de l'informatique.</p>
          </div>
          <div className="resumItem">
            <div className="resumIconContainer">
              <img src={resum6} alt="Icon" />
            </div>
            <h3>
              PAS BESOIN DE DÉJÀ SAVOIR CODER OU <br />
              D'AIMER LES MATHS
            </h3>
            <p>La formation commence de zéro.</p>
          </div>
        </div>
        <button>Postuler dans un campus 42</button>
      </section>
    </div>
  )
}
