import React from "react";
import ReactDOM from "react-dom";

import ResumeBuilder from "./components/resumeBuilder";
import avatarImage from "./images/myPhoto.png";

// social links input
const socialLinks = [
  {
    iconClassName: "fa-facebook",
    url: "https://facebook.com",
  },
  {
    iconClassName: "fa-instagram",
    url: "https://instagram.com",
  },
  {
    iconClassName: "fa-twitter",
    url: "https://twitter.com",
  },
  {
    iconClassName: "fa-youtube",
    url: "https://youtube.com",
  },
];

// favorites roles input
const roles = ["Web Developer", "BootCamper"];

// about section input
const aboutMe = (
  <p>
    Hello! I’m Alex Smith. Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac. Duis
    nulla enim, condimentum nec ultricies.
  </p>
);

// theme color input
const themeColor = "tomato";

// information input
const infoList = [
  {
    title: "Age",
    value: "26",
  },
  {
    title: "Residence",
    value: "Tehran",
  },
  {
    title: "Address",
    value: "Tehran, Iran",
  },
  {
    title: "e-mail",
    value: (
      <a href="mailto:m.khalili7310@gmail.com" style={{color:themeColor}}>
        m.khalili7310@gmail.com
      </a>
    ),
  },
  {
    title: "Phone",
    value: "+98 921 202 4273",
  },
  {
    title: "Freelance",
    value: "Available",
  },
];

function App() {
  return (
      <ResumeBuilder
        avatar={avatarImage}
        name="Mohammad Khalili"
        roles={roles}
        socialLinks={socialLinks}
        aboutMe={aboutMe}
        infoList={infoList}
        themeColor={themeColor}
      />
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
