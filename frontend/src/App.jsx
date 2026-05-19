import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(25);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;

      tg.ready();
      tg.expand();

      document.body.style.background = tg.themeParams.bg_color || "#0b0f19";
    }
  }, []);

  const minus = () => {
    setCount((prev) => prev - 1);
  };

  const plus = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b0f19",
        color: "white",
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "30px",
            fontWeight: "700",
          }}
        >
          RegTracker
        </h1>

        <div
          style={{
            background: "#151b2c",
            borderRadius: "24px",
            padding: "24px",
          }}
        >
          <div
            style={{
              fontSize: "18px",
              marginBottom: "6px",
            }}
          >
            RU | 1XBET
          </div>

          <div
            style={{
              fontSize: "18px",
              marginBottom: "30px",
            }}
          >
            Team: 44 / 65
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <button
              onClick={minus}
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "18px",
                border: "none",
                background: "#20283b",
                color: "white",
                fontSize: "26px",
                cursor: "pointer",
              }}
            >
              ←
            </button>

            <div
              style={{
                fontSize: "34px",
                fontWeight: "700",
              }}
            >
              {count}
            </div>

            <button
              onClick={plus}
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "18px",
                border: "none",
                background: "#20283b",
                color: "white",
                fontSize: "26px",
                cursor: "pointer",
              }}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
