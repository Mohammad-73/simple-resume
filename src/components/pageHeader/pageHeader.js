import React from "react";
import Avatar from "./avatar";
import Name from "./name";
import Roles from "./roles";
import SocialLinks from "./socialLinks";

export default function PageHeader({
  avatar,
  name,
  roles,
  socialLinks,
  themeColor,
}) {
  return (
    <div className="page-header" style={{backgroundColor:themeColor}}>
      <div className="row">
        <div className="col-sm-4 col-md-4 col-lg-4">
          <Avatar avatar={avatar} />
        </div>

        <div className="col-sm-8 col-md-8 col-lg-8">
          <div className="title-block">
            <Name name={name} />
            <Roles roles={roles} />
          </div>
          <SocialLinks socialLinks={socialLinks} />
        </div>
      </div>
    </div>
  );
}
