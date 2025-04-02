"use client"
import { useState } from "react"
import { Titulo } from "../elements/titulos"
import DriverModal from "./DriverModal"

function Drivers() {
  const [drivers] = useState([
    {
      id: 1,
      name: "Max Verstappen",
      team: "Red Bull Racing",
      country: "Netherlands",
      points: 299,
      image:
        "https://www.formula1.com/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png",
    },
    {
      id: 2,
      name: "Sergio Perez",
      team: "Red Bull Racing",
      country: "Mexico",
      points: 192,
      image:
        "https://www.formula1.com/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/2col/image.png",
    },
    {
      id: 3,
      name: "Charles Leclerc",
      team: "Ferrari",
      country: "Monaco",
      points: 234,
      image:
        "https://www.formula1.com/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png",
    },
    {
      id: 4,
      name: "Carlos Sainz",
      team: "Ferrari",
      country: "Spain",
      points: 198,
      image:
        "https://www.formula1.com/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/2col/image.png",
    },
    {
      id: 5,
      name: "Lewis Hamilton",
      team: "Mercedes",
      country: "United Kingdom",
      points: 190,
      image:
        "https://www.formula1.com/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col/image.png",
    },
    {
      id: 6,
      name: "George Russell",
      team: "Mercedes",
      country: "United Kingdom",
      points: 182,
      image:
        "https://www.formula1.com/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/2col/image.png",
    },
    {
      id: 7,
      name: "Lando Norris",
      team: "McLaren",
      country: "United Kingdom",
      points: 245,
      image:
        "https://www.formula1.com/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/2col/image.png",
    },
    {
      id: 8,
      name: "Oscar Piastri",
      team: "McLaren",
      country: "Australia",
      points: 156,
      image:
        "https://www.formula1.com/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png.transform/2col/image.png",
    },
  ])

  const [selectedDriver, setSelectedDriver] = useState(null)

  return (
    <div className="drivers-page">
      <Titulo texto="F1 Drivers Championship 2024" />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {drivers.map((driver) => (
          <div className="col" key={driver.id}>
            <div className="card driver-card h-100 shadow">
              <div className="text-center pt-3">
                <img
                  src={driver.image || "/placeholder.svg"}
                  alt={driver.name}
                  className="driver-image"
                  style={{ height: "180px", objectFit: "contain" }}
                />
              </div>
              <div className="card-body">
                <h3 className="card-title h5">{driver.name}</h3>
                <p className="card-text mb-1">
                  <strong>Team:</strong> {driver.team}
                </p>
                <p className="card-text mb-1">
                  <strong>Country:</strong> {driver.country}
                </p>
                <p className="card-text mb-3">
                  <strong>Points:</strong> {driver.points}
                </p>
                <button className="btn btn-primary w-100" onClick={() => setSelectedDriver(driver)}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedDriver && <DriverModal driver={selectedDriver} onClose={() => setSelectedDriver(null)} />}
    </div>
  )
}

export default Drivers

