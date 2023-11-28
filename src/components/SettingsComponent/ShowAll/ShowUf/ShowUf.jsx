import React from "react";
import "./ShowUf.scss";

export default function ShowUf({ peopleList }) {
  return (
    <div className="scroll-container-uf">
      <table className="list-container-table-uf">
        <thead className="list-container-thead-uf">
          <tr className="list-container-tr-uf">
            <th className="list-container-th-uf">Nome</th>
            <th className="list-container-th-uf">Região</th>
            <th className="list-container-th-uf">Sigla</th>
          </tr>
        </thead>
        <tbody>
          {peopleList.map((uf, index) => (
            <tr key={index} className="list-container-tr-uf">
              <td className="list-container-td-uf">{uf.nome}</td>
              <td className="list-container-td-uf">{uf.regiao}</td>
              <td className="list-container-td-uf">{uf.sigla}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
