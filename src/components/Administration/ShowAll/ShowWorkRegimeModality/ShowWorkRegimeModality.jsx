import React from "react";
import "./ShowWorkRegimeModality.scss";

export default function ShowWorkRegimeModality({ peopleList }) {
  return (
    <div className="scroll-container-workRegimeModality">
      <table className="list-container-table-workRegimeModality">
        <thead className="list-container-thead-workRegimeModality">
          <tr className="list-container-tr-workRegimeModality">
            <th className="list-container-th-workRegimeModality">Nome</th>
            <th className="list-container-th-workRegimeModality">Descrição</th>
          </tr>
        </thead>
        <tbody>
          {peopleList.map((workRegimeModality, index) => (
            <tr key={index} className="list-container-tr-workRegimeModality">
              <td className="list-container-td-workRegimeModality">{workRegimeModality.nome}</td>
              <td className="list-container-td-workRegimeModality">{workRegimeModality.descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
