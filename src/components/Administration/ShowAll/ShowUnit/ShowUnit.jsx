import React from 'react'
import "./ShowUnit.scss";

export default function ShowUnit({ peopleList }) {
    return (
        <div className="scroll-container-unit">
          <table className="list-container-table-unit">
            <thead className="list-container-thead-unit">
              <tr className="list-container-tr-unit">
                <th className="list-container-th-unit">Nome</th>
                <th className="list-container-th-unit">Sigla</th>
                <th className="list-container-th-unit">Descrição</th>
              </tr>
            </thead>
            <tbody>
              {peopleList.map((unit, index) => (
                <tr key={index} className="list-container-tr-unit">
                  <td className="list-container-td-unit">{unit.nome}</td>
                  <td className="list-container-td-unit">{unit.sigla}</td>
                  <td className="list-container-td-unit">{unit.descricao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}
