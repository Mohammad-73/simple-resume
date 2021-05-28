import React from "react";
import AboutMe from "./aboutMe";
import InfoList from "./infoList";

export default function PageContent({ aboutMe, infoList, themeColor }) {
  return (
    <div className="page-content">
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-6">
          <div className="about-me">
            <div className="block-title">
              <h3>
                About <span style={{color:themeColor}}>Me</span>
              </h3>
            </div>
            <AboutMe aboutMe={aboutMe} />
          </div>
        </div>

        <div className="col-sm-6 col-md-6 col-lg-6">
          <InfoList infoList={infoList} />
        </div>
      </div>
    </div>
  );
}
