import { Doc } from "./components/Doc";
import General from "./components/General";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { Education } from "./components/Education";
import data from "./assets/data";
import "./style.css";
import { useState } from "react";
import Logo from "./assets/logo.png";

function App() {
  let local_data;
  if (localStorage.getItem("local_data")) {
    local_data = JSON.parse(localStorage.getItem("local_data"));
  } else {
    local_data = data;
  }
  const [resumeData, setData] = useState(local_data);
  function handleChange(newData) {
    setData(newData);
    localStorage.setItem("local_data", JSON.stringify(resumeData));
  }

  return (
    <>
      <header>
        <img src={Logo}></img>
        <h1>CV Maker</h1>
      </header>
      <div className="container">
        <div className="cards">
          <General data={resumeData} onChange={handleChange}></General>
          <Summary data={resumeData} onChange={handleChange}></Summary>
          <Skills data={resumeData} onChange={handleChange}></Skills>
          <Work data={resumeData} onChange={handleChange}></Work>
          <Education data={resumeData} onChange={handleChange}></Education>
        </div>
        <div className="doc-cont">
          <Doc
            name={resumeData.name}
            email={resumeData.email}
            phone={resumeData.phone}
            link={resumeData.linkedin}
            summary={resumeData.summary}
            skills={resumeData.skills}
            workExp={resumeData.workExperience}
            edu={resumeData.education}
          ></Doc>
          <button
            onClick={() => window.print()}
            style={{ marginBottom: "2rem" }}
          >
            Print
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
