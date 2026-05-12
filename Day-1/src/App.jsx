import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Header from "../components/header.jsx";
import SkillList from "../components/SkillList";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [stamina, setStamina] = useState(100);
  const [clickcount, setClickcount] = useState(0);

  const skills = [
    { name: "JS", level: 95 },
    { name: "react", level: 80 },
    { name: "python", level: 97 },
  ];

  function clickhandle() {
    const newclick = clickcount + 1;
    setClickcount(newclick);

    let damage = 2;
    if (newclick % 5 === 0) {
      damage = 15;
    }

    let newstamina = stamina - damage;

    if (newstamina < 0) {
      stamina = 0;
    }

    setStamina(newstamina);
  }

  return (
    <>
    {/* Task - 1 */}
      <div>
        <h1>{import.meta.env.VITE_INTERN_NAME}</h1>
      </div>

    {/* Task - 2 */}

      <div>
        <Header />
      </div>

    {/* Task - 3 */}

      <SkillList skills={skills} />

    {/* Task - 4 */}

      <div>
        <h2>stamina : {stamina}</h2>
        <button onClick={clickhandle} disabled={stamina <= 0}>
          {stamina <= 0 ? "Burnout! Rest Required" : "Write Code"}
        </button>
      </div>
    </>
  );
}

export default App;
