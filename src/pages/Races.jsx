"use client"
import DriverModal from "./DriverModal"
import { useState } from "react"
import { Titulo } from "../elements/titulos"

function Races() {
  const [races] = useState([
    {
      id: 1,
      name: "Bahrain Grand Prix",
      date: "March 5, 2024",
      circuit: "Bahrain International Circuit",
      image: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Bahrain_Circuit.png", 
    },
    {
      id: 2,
      name: "Saudi Arabian Grand Prix",
      date: "March 19, 2024",
      circuit: "Jeddah Corniche Circuit",
      image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Saudi_Arabia_Circuit",
    },
    {
      id: 3,
      name: "Australian Grand Prix",
      date: "April 2, 2024",
      circuit: "Albert Park Circuit",
      image: "data:image/png;base64,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",
    },
    {
      id: 4,
      name: "Miami Grand Prix",
      date: "May 7, 2024",
      circuit: "Miami International Autodrome",
      image: "https://media.formula1.com/image/upload/f_auto,c_limit,q_auto,w_1320/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Miami_Circuit",
    },
  ])

  const [selectedDriver, setSelectedDriver] = useState(null)

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

      {selectedDriver && <DriverModal driver={selectedDriver} onClose={() => setSelectedDriver(null)} />}
    </div>
  )
}

export default Races

