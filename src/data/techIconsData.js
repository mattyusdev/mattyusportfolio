import React from "react";
import {
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaJs,
  FaSass,
  FaAngular,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDigitalOcean,
} from "react-icons/fa";
import {
  DiMysql,
  DiJqueryLogo,
  DiMongodb,
  DiHeroku,
  DiPhotoshop,
  DiIllustrator,
} from "react-icons/di";

export const html5Data = {
  id: 1,
  IconComponent: FaHtml5,
  customColor: "#e55328",
  title: "HTML5",
};

export const sassData = {
  id: 2,
  IconComponent: FaSass,
  customColor: "#cc6699",
  title: "SASS",
};

export const reactData = {
  id: 3,
  IconComponent: FaReact,
  customColor: "#31b7d2",
  title: "React",
};

export const reduxData = {
  id: 4,
  IconComponent: () => <span className="custom-icon" />,
  content: "\\e901",
  customColor: "#764abc",
  title: "Redux",
};

export const nodeJsData = {
  id: 5,
  IconComponent: FaNodeJs,
  customColor: "#77ab43",
  title: "NodeJS",
};

export const mySqlData = {
  id: 6,
  IconComponent: DiMysql,
  customColor: "#26557c",
  title: "SQL",
};

export const javaScriptData = {
  id: 7,
  IconComponent: FaJs,
  customColor: "#f0db4f",
  title: "JavaScript",
};

export const jQueryData = {
  id: 8,
  IconComponent: DiJqueryLogo,
  customColor: "#0769ad",
  title: "jQuery",
};

export const angularData = {
  id: 9,
  IconComponent: FaAngular,
  customColor: "#dd0330",
  title: "Angular",
};

export const mongoData = {
  id: 10,
  IconComponent: DiMongodb,
  customColor: "#48ab4c",
  title: "MongoDB",
};

export const cssData = {
  id: 11,
  IconComponent: FaCss3Alt,
  customColor: "#0067b3",
  title: "CSS3",
};

export const typeScriptData = {
  id: 12,
  IconComponent: () => <span className="custom-icon" />,
  content: "\\e902",
  customColor: "#0077c6",
  title: "TypeScript",
};

export const socketIoData = {
  id: 13,
  IconComponent: () => <span className="custom-icon" />,
  content: "\\e900",
  customColor: "#7a7a7a",
  title: "Socket.IO",
};

export const gitIconData = {
  id: 14,
  IconComponent: FaGitAlt,
  customColor: "#f05033",
  title: "GIT",
};

export const gitHubData = {
  id: 15,
  IconComponent: FaGithub,
  customColor: "#bfbfbf",
  title: "GitHub",
};

export const herokuData = {
  id: 16,
  IconComponent: DiHeroku,
  customColor: "#8062a7",
  title: "Heroku",
};

export const digitalOceanData = {
  id: 17,
  IconComponent: FaDigitalOcean,
  customColor: "#0080ff",
  title: "DigitalOcean",
};

export const photoshopData = {
  id: 18,
  IconComponent: DiPhotoshop,
  customColor: "#5aa4c5",
  title: "Photoshop",
};

export const illustratorData = {
  id: 19,
  IconComponent: DiIllustrator,
  customColor: "#ffaf42",
  title: "Illustrator",
};
