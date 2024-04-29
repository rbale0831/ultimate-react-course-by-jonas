import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const Skills = [
  {
    id: 1,
    name: "HTML+CSS",
    emoji: "💪",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}
const Avatar = () => {
  return (
    <>
      <img
        className="avatar"
        src="https://app.inimble.io/media/5b897a51-f168-4dbe-9402-fe47577fbc3b/1712850920310.png"
        alt="Rohit Bale"
      />
    </>
  );
};

const Intro = () => {
  return (
    <div>
      <h1>Rohit Bale</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or ot
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
};

const SkillList = () => {
  return (
    <div className="skill-list">
      <Skill skill="HTML+CSS" emoji="💪" color="blue" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Web Design" emoji="💪" color="lightgreen" />
      <Skill skill="Git and GitHub" emoji="👍" color="red" />
      <Skill skill="React" emoji="💪" color="cyan" />
      <Skill skill="Svelte" emoji="👶" color="orangered" />
    </div>
  );
};

const Skill = ({ skill, emoji, color }) => {
  return (
    <>
      <p className="skill" style={{ backgroundColor: color }}>
        {skill} {emoji}
      </p>
    </>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
