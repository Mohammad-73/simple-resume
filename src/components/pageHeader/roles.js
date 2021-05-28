import React from "react";

export default function Roles({roles}){
    return(
        <div className="owl-carousel text-rotation">
        {roles.map((role) => (
            <div className="item" key={role}>
              <div className="sp-subtitle">{role}</div>
            </div>
          ))}
          </div>
    )
}