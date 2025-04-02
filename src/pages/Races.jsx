"use client"
import { useState } from "react"
import { Titulo } from "../elements/titulos"

function Races() {
  const [races] = useState([
    {
      id: 1,
      name: "Bahrain Grand Prix",
      date: "March 5, 2024",
      circuit: "Bahrain International Circuit",
      image:
        "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Bahrain_Circuit.png",
    },
    {
      id: 2,
      name: "Saudi Arabian Grand Prix",
      date: "March 19, 2024",
      circuit: "Jeddah Corniche Circuit",
      image:
        "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Saudi_Arabia_Circuit",
    },
    {
      id: 3,
      name: "Australian Grand Prix",
      date: "April 2, 2024",
      circuit: "Albert Park Circuit",
      image:
        "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Australia_Circuit.png",
    },
    {
      id: 4,
      name: "Miami Grand Prix",
      date: "May 7, 2024",
      circuit: "Miami International Autodrome",
      image:
        "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Miami_Circuit",
    },
  ])

  return (
    <div className="races-page">
      <Titulo texto="F1 Race Calendar" />
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {races.map((race) => (
          <div className="col" key={race.id}>
            <div className="card race-card h-100 shadow">
              <img
                src={race.image || "/placeholder.svg"}
                className="card-img-top"
                alt={race.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h2 className="card-title h4">{race.name}</h2>
                <p className="card-text">
                  <strong>Date:</strong> {race.date}
                </p>
                <p className="card-text mb-0">
                  <strong>Circuit:</strong> {race.circuit}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Races

