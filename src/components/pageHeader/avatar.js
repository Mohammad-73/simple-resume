import React from "react";

export default function Avatar({avatar}){
    return(
        <div className="photo">
            <img src={avatar} alt="" />
          </div>
    );
}