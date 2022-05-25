import {
  SiJavascript,
  SiAzuredevops,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { FaGithubSquare, FaMobileAlt } from "react-icons/fa";

function Skills() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#C7C5ED] to-[#EFC8CD] flex content-center">
      <div className="bg-glass w-8/12 h-[27.5rem] rounded-3xl m-auto drop-shadow-2xl grid grid-cols-3  justify-center">
        <div className="skill-box">
          <SiJavascript className="skill-icon" />
          <h1>JavaScript</h1>
          <p>BlaBlablvalblablalviausnyuba</p>
        </div>
        <div className="skill-box">
          <SiReact className="skill-icon" />
          <h1>React</h1>
          <p>BlaBlablvalblablalviausnyuba</p>
        </div>
        <div className="skill-box">
          <SiTailwindcss className="skill-icon" />
          <h1>TailwindCSS</h1>
          <p>BlaBlablvalblablalviausnyuba</p>
        </div>
        <div className="skill-box">
          <FaMobileAlt className="skill-icon" />
          <h1>Responsive</h1>
          <p>BlaBlablvalblablalviausnyuba</p>
        </div>
        <div className="skill-box">
          <FaGithubSquare className="skill-icon" />
          <h1>Github</h1>
          <p>BlaBlablvalblablalviausnyuba</p>
        </div>
        <div className="skill-box">
          <SiAzuredevops className="skill-icon" />
          <h1>Azure Devops</h1>
          <p>BlaBlablvalblablalviausnyuba</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
