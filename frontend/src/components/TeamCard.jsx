export default function TeamCard({ team, onChange }) {
  const percent = (team.current / team.max) * 100

  return (
    <div className="card">
      <div className="team-country">
        {team.country} | {team.brand}
      </div>

      <div className="team-name">
        {team.name}
      </div>

      <div className="team-count">
        Team: {team.current} / {team.max}
      </div>

      <div className="progress">
        <div
          className="progress-fill"
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="counter">
        <button
          className="btn"
          onClick={() => onChange(team.id, -1)}
        >
          −
        </button>

        <div className="counter-value">
          {team.today}
        </div>

        <button
          className="btn"
          onClick={() => onChange(team.id, 1)}
        >
          +
        </button>
      </div>
    </div>
  )
}