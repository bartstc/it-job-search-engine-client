import {Technology} from "../types/Technology";

export type TechnologyItem = {
  name: string;
  value: Technology;
  iconClass: string;
  color: string;
};

type TechnologyItems = {
  [key in Technology]: TechnologyItem;
};

export const technologyItems: TechnologyItems = {
  all: {
    name: "All",
    value: Technology.All,
    iconClass: "fas fa-code",
    color: "#8403fc"
  },
  javascript: {
    name: "JavaScript",
    value: Technology.Javascript,
    iconClass: "devicon-javascript-plain",
    color: "#F0DB4F"
  },
  nodejs: {
    name: "Node.js",
    value: Technology.Nodejs,
    iconClass: "devicon-nodejs-plain",
    color: "#90C53F"
  },
  html5: {
    name: "HTML5",
    value: Technology.Html5,
    iconClass: "devicon-html5-plain",
    color: "#E54D26"
  },
  ruby: {
    name: "Ruby",
    value: Technology.Ruby,
    iconClass: "devicon-ruby-plain",
    color: "#D91404"
  },
  python: {
    name: "Python",
    value: Technology.Python,
    iconClass: "devicon-python-plain",
    color: "#FFD845"
  },
  dotnet: {
    name: ".Net",
    value: Technology.Dotnet,
    iconClass: "devicon-dot-net-plain",
    color: "#1384C8"
  },
  c: {
    name: "C",
    value: Technology.C,
    iconClass: "devicon-c-plain",
    color: "#00599C"
  },
  mobile: {
    name: "Mobile",
    value: Technology.Mobile,
    iconClass: "fas fa-mobile-alt",
    color: "#8403fc"
  },
  testing: {
    name: "Testing",
    value: Technology.Testing,
    iconClass: "fas fa-search",
    color: "#70ff86"
  },
  devops: {
    name: "DevOps",
    value: Technology.Devops,
    iconClass: "fas fa-network-wired",
    color: "#7869ff"
  },
  game: {
    name: "Game",
    value: Technology.Game,
    iconClass: "fas fa-gamepad",
    color: "#ff4df3"
  },
  security: {
    name: "Security",
    value: Technology.Security,
    iconClass: "fas fa-shield-alt",
    color: "#0036b3"
  },
  data: {
    name: "Data",
    value: Technology.Data,
    iconClass: "fas fa-database",
    color: "#00ba2b"
  },
  other: {
    name: "Other",
    value: Technology.Other,
    iconClass: "fas fa-laptop",
    color: "#8400ff"
  }
};
