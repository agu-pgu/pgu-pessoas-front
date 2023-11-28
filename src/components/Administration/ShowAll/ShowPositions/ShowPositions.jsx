import React from 'react'
import "./ShowPositions.scss";

export default function ShowPositions({ peopleList }) {
    return (
        <div className="scroll-container-positions">
          <table className="list-container-table-positions">
            <thead className="list-container-thead-positions">
              <tr className="list-container-tr-positions">
                <th className="list-container-th-positions">Nome</th>
                <th className="list-container-th-positions">Descrição</th>
              </tr>
            </thead>
            <tbody>
              {peopleList.map((positions, index) => (
                <tr key={index} className="list-container-tr-positions">
                  <td className="list-container-td-positions">{positions.nome}</td>
                  <td className="list-container-td-positions">{positions.descricao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}
