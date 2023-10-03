import createHeader  from "./header";
import createSkillsSection from "./skills";
import createProjectsSection from "./projects";
import createFooter from "./footer";

const createDisplay = () => {
  const content = document.querySelector('#content');
  content.appendChild(createHeader());
  content.appendChild(createSkillsSection());
  content.appendChild(createProjectsSection());
  content.appendChild(createFooter());

  return content;
}

export default createDisplay;