import { useState, useEffect } from 'react'
import TeamCard from './components/TeamCard'

export default function App() {
  const [teams, setTeams] = useState([
    {
      id: 1,
      country: 'RU',
      brand: '1XBET',
      name: 'Alpha Team',
      current: 44,
      max: 65,
      today: 20
    },
    {
      id: 2,
      country: 'KZ',
      brand: 'MELBET',
      name: 'Beta Team',
      current: 28,
      max: 50,
      today: 11
    }
  ])

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready()
      window.Telegram.WebApp.expand()
    }
  }, [])

  const updateCounter = (id, value) => {
    setTeams(prev =>
      prev.map(team =>
        team.id === id
          ? { ...team, today: Math.max(0, team.today + value) }
          : team
      )
    )
  }

  return (
    <div className="app">
      <h1 className="title">RegTracker</h1>

      <div className="grid">
        {teams.map(team => (
          <TeamCard
            key={team.id}
            team={team}
            onChange={updateCounter}
          />
        ))}
      </div>
    </div>
  )
}