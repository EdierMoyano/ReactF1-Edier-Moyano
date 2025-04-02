function TeamCard({ team }) {
  return (
    <div className="card team-card h-100 shadow">
      <div className="card-body text-center">
        <img src={team.logo || "/placeholder.svg"} alt={`${team.name} logo`} className="team-logo mb-3" />
        <h3 className="card-title">{team.name}</h3>
        <div className="drivers">
          <h4 className="h5">Drivers:</h4>
          <ul className="list-unstyled">
            {team.drivers.map((driver, index) => (
              <li key={index} className="mb-1">
                {driver}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TeamCard

