import React from "react";

import PageContent from "./pageContent/pageContent";
import PageHeader from "./pageHeader/pageHeader";

export default function ResumeBuilder({
  avatar,
  name,
  roles,
  socialLinks,
  aboutMe,
  infoList,
  themeColor,
}) {
  return (
    <main className="pt-page pt-page-current">
      <div className="section-inner start-page-content">
        <PageHeader
          avatar={avatar}
          name={name}
          roles={roles}
          socialLinks={socialLinks}
          themeColor={themeColor}
        />
        <PageContent
          aboutMe={aboutMe}
          infoList={infoList}
          themeColor={themeColor}
        />
      </div>
    </main>
  );
}
