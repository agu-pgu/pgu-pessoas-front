import React from "react";
import "./ShowMunicipio.scss";

export default function ShowMunicipio({ peopleList }) {
  return (
    <div className="scroll-container-municipio">
      <table className="list-container-table-municipio">
        <thead className="list-container-thead-municipio">
          <tr className="list-container-tr-municipio">
            <th className="list-container-th-municipio">Nome</th>
          </tr>
        </thead>
        <tbody>
          {peopleList.map((municipio, index) => (
            <tr key={index} className="list-container-tr-municipio">
              <td className="list-container-td-municipio">{municipio.nome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
