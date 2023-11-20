import React, { useState } from 'react';
import { FaUser, FaAddressCard, FaCog, FaChartBar, FaClipboardList } from 'react-icons/fa';
import './Buttons.scss';

const buttons = [
  { icon: <FaUser />, label: 'Meus dados', content: 'Conteúdo Meus Dados' },
  { icon: <FaAddressCard />, label: 'Cadastro', content: 'Conteúdo Cadastro' },
  { icon: <FaCog />, label: 'Administração', content: 'Conteúdo Administração' },
  { icon: <FaChartBar />, label: 'Relatórios', content: 'Conteúdo Relatórios' },
  { icon: <FaClipboardList />, label: 'Auditoria', content: 'Conteúdo Auditoria' },
];

const Buttons = ({ setContent }) => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
    setContent(buttons[index].content);
  };

  return (
    <div className="buttons-container">
      <div className="buttons-wrapper">
        {buttons.map((button, index) => (
          <div
            className={`button ${index === activeButton ? 'active' : ''}`}
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