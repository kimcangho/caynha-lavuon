import React, { useState } from "react";

export default function Post(props) {
  return (
    <div className="post">
      <div>
        <div>{props.name} @ {props.timestamp}</div>
        <div>{props.image}</div>
        {/* <div>{props.postNumber}</div> */}
      </div>
      <div className="content">
        {/* <div className="image">Photo</div> */}
        <div>
          {props.content}
        </div>
      </div>
    </div>
  );
}
