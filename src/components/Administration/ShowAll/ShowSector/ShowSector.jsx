import React from "react";
import "./ShowSector.scss";

export default function ShowSector({ peopleList }) {
  return (
    <div className="scroll-container-sector">
      <table className="list-container-table-sector">
        <thead className="list-container-thead-sector">
          <tr className="list-container-tr-sector">
            <th className="list-container-th-sector">Sigla</th>
            <th className="list-container-th-sector">Nome</th>
            <th className="list-container-th-sector">Descrição</th>
          </tr>
        </thead>
        <tbody>
          {peopleList.map((setor, index) => (
            <tr key={index} className="list-container-tr-sector">
              <td className="list-container-td-sector">{setor.sigla}</td>
              <td className="list-container-td-sector">{setor.nome}</td>
              <td className="list-container-td-sector">{setor.descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
