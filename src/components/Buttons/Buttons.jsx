import React from 'react'
import { FaUser, FaAddressCard, FaCog, FaChartBar, FaClipboardList, FaSearch } from 'react-icons/fa';
import "./Buttons.scss"


const buttons = [
    { icon: <FaUser />, label: 'Meus dados' },
    { icon: <FaAddressCard />, label: 'Cadastro' },
    { icon: <FaCog />, label: 'Administração' },
    { icon: <FaChartBar />, label: 'Relatórios' },
    { icon: <FaClipboardList />, label: 'Auditoria' },
  ];

export default function Buttons() {
  return (
    <div className="home-container">
      <div className="buttons-wrapper">
        {buttons.map((button, index) => (
          <div className="button" key={index}>
            <div className="button-inner">
              {button.icon}
              <span className="label">{button.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
