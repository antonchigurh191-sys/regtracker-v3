export default function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h1>RegTracker</h1>
      </aside>

      <main className="content">
        <div className="card">
          <div className="title">RU | 1XBET</div>

          <div className="progress">
            Team: 44 / 65
          </div>

          <div className="counter">
            <button>⬅️</button>
            <span>25</span>
            <button>➡️</button>
          </div>
        </div>
      </main>
    </div>
  );
}