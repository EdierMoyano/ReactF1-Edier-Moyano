import { Titulo } from "../elements/titulos"
import Carousel from "./Carousel"

function Home() {
  return (
    <div className="home-page">
      <Titulo texto="Welcome to F1 App" />
      <div className="row justify-content-center">
        <div className="col-md-10">
          <Carousel />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title">Sobre la Formula 1   </h2>
              <p className="card-text">
              La Fórmula 1 es el pináculo del automovilismo, con los mejores pilotos del mundo compitiendo en los coches de carreras más rápidos.
               El campeonato consiste en una serie de carreras, conocidas como Grandes Premios, que se celebran en circuitos construidos a tal efecto y carreteras públicas
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">2024Season</h2>
              <p className="card-text">
              El Campeonato Mundial de Fórmula 1 de la FIA 2024es una temporada emocionante con equipos que compiten con nuevas regulaciones de seguridad getFullYear y tecnología avanzada.
              La temporada contará con una serie de carreras en circuitos icónicos y desafiantes, donde los mejores pilotos del mundo lucharán por la gloria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

