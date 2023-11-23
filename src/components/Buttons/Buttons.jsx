import React, { useState } from "react";
import {
  FaUser,
  FaAddressCard,
  FaCog,
  FaChartBar,
  FaClipboardList,
  FaTools,
} from "react-icons/fa";
import "./Buttons.scss";

const buttons = [
  // { icon: <FaUser />, label: "Meus dados", content: "MyData" },
  { icon: <FaAddressCard />, label: "Cadastro", content: "Register" },
  { icon: <FaCog />, label: "Administração", content: "Administration" },
  // { icon: <FaChartBar />, label: "Relatórios", content: "Reports" },
  // { icon: <FaClipboardList />, label: "Auditoria", content: "Audit" },
  { icon: <FaTools />, label: "Configurações", content: "Settings" },
];

const Buttons = ({ setContent }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (index) => {
    setActiveButton(activeButton === index ? null : index);
    setContent(buttons[index].content);
  };

  return (
    <div className="buttons-container">
      <div className="buttons-wrapper">
        {buttons.map((button, index) => (
          <div
            className={`button ${index === activeButton ? "active" : ""}`}
            key={index}
            onClick={() => handleButtonClick(index)}
          >
            <div className="button-inner">
              {button.icon}
              <span className="label">{button.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buttons;
