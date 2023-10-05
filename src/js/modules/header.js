import createElement from "../util/utils";
import "../../style/header.css";
import profilePicture from "../../assets/imgs/jurik_1.jpeg";
import profilePictureSmall from "../../assets/imgs/jurik_small.jpg";
import profilePictureDefault from "../../assets/imgs/jurik.jpeg";

const createProfilePicture = () => {
  const profilePictureContainer = createElement("div", ["profile-picture-container"]);
  
  const profilePictureImg = new Image();
  profilePictureImg.srcset = `${profilePictureSmall} 640w, ${profilePicture} 700w`;
  profilePictureImg.sizes = `(max-width: 500px) 200px, 400px`;
  profilePictureImg.src = `${profilePictureDefault}`;
  profilePictureImg.alt = "jurik";
  profilePictureContainer.appendChild(profilePictureImg);

  return profilePictureContainer;
}

const createAboutSection = () => {
  const aboutContainer = createElement("div", ["about-container"]);

  const name = createElement("p", ["about-name"]);
  name.textContent = "Valery Sokolan";

  const aboutSummery = createElement("p", ["about-summery"]);
  aboutSummery.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  aboutContainer.appendChild(name);
  aboutContainer.appendChild(aboutSummery);

  return aboutContainer;
}

const createHeader = () => {
  const header = createElement("header");

  header.appendChild(createProfilePicture());
  header.appendChild(createAboutSection());

  return header;
}

export default createHeader;