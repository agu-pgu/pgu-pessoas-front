import React from "react";
import "./ContentBox.scss";
import Register from "../Register/Register";
import MyData from "../MyData/MyData";
import Reports from "../Reports/Reports";
import Administration from "../Administration/Administration";
import Audit from "../Audit/Audit";

export default function ContentBox({ content }) {
  let component = null;

  if (content == "Register") {
    component = <Register />;
  } else if (content == "MyData") {
    component = <MyData />;
  } else if (content == "Administration") {
    component = <Administration />;
  } else if (content == "Reports") {
    component = <Reports />;
  } else if (content == "Audit") {
    component = <Audit />;
  }

  return (
    <div className="content-box">
      <div
        className={
          content === "Seja bem vindo!!" || content === "" ? "div-contentBox" : ""
        }
      >
        {content ? component : <p className="p-contentBox">Seja bem vindo!</p>}
      </div>
    </div>
  );
}
