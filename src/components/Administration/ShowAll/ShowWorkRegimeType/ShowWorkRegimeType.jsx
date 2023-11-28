import React from "react";
import "./ShowWorkRegimeType.scss";

export default function ShowWorkRegimeType({ peopleList }) {
  return (
    <div className="scroll-container-workRegimeType">
      <table className="list-container-table-workRegimeType">
        <thead className="list-container-thead-workRegimeType">
          <tr className="list-container-tr-workRegimeType">
            <th className="list-container-th-workRegimeType">Nome</th>
            <th className="list-container-th-workRegimeType">Descrição</th>
          </tr>
        </thead>
        <tbody>
          {peopleList.map((workRegimeType, index) => (
            <tr key={index} className="list-container-tr-workRegimeType">
              <td className="list-container-td-workRegimeType">
                {workRegimeType.nome}
              </td>
              <td className="list-container-td-workRegimeType">
                {workRegimeType.descricao}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
