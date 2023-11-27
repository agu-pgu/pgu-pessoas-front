import React from "react";
import "./ShowSector.scss";

export default function ShowSector({ peopleList }) {
  return (
    <div className="scroll-container">
      <table className="list-container-table">
        <thead className="list-container-thead">
          <tr className="list-container-tr">
            <th className="list-container-th">Sigla</th>
            <th className="list-container-th">Nome</th>
            <th className="list-container-th">Descrição</th>
          </tr>
        </thead>
        <tbody>
          {peopleList.map((setor, index) => (
            <tr key={index} className="list-container-tr">
              <td className="list-container-td">{setor.sigla}</td>
              <td className="list-container-td">{setor.nome}</td>
              <td className="list-container-td">{setor.descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
