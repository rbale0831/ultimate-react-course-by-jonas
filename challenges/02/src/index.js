import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    id: 1,
    name: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    id: 2,
    name: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    id: 3,
    name: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    id: 4,
    name: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    id: 5,
    name: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    id: 6,
    name: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];
// "💪"
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
  const skillsObj = skills;
  console.log(skillsObj);
  return (
    <div className="skill-list">
      {skillsObj.map((skill) => (
        <Skill
          key={skill.id}
          skill={skill.name}
          level={skill.level}
          color={skill.color}
        />
      ))}
    </div>
  );
};

const Skill = ({ skill, level, color }) => {
  return (
    <>
      <p className="skill" style={{ backgroundColor: color }}>
        <span>{skill}</span>
        <span>
          {level === "beginner" && "👶"}
          {level === "intermediate" && "👍"}
          {level === "advanced" && "💪"}
        </span>
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
