import React, { useState } from "react";
import Buttons from "../../components/Buttons/Buttons";
import Footer from "../../components/Footer/Footer";
import NavbarHome from "../../components/NavbarHome/NavbarHome";
import ContentBox from "../../components/ContentBox/ContentBox";
import "./Home.scss";

export default function Home() {
  const [content, setContent] = useState("");
  return (
    <div>
      <NavbarHome />
      <div className="Content-Buttons">
        <Buttons setContent={setContent} />
        <ContentBox content={content} />
      </div>
      <Footer />
    </div>
  );
}
