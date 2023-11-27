import React from 'react'
import "./ShowCoordination.scss";

export default function ShowCoordination({ peopleList }) {
    return (
        <div className="scroll-container-coordination">
          <table className="list-container-table-coordination">
            <thead className="list-container-thead-coordination">
              <tr className="list-container-tr-coordination">
                <th className="list-container-th-coordination">Sigla</th>
                <th className="list-container-th-coordination">Nome</th>
                <th className="list-container-th-coordination">Descrição</th>
              </tr>
            </thead>
            <tbody>
              {peopleList.map((coordenacao, index) => (
                <tr key={index} className="list-container-tr-coordination">
                  <td className="list-container-td-coordination">{coordenacao.sigla}</td>
                  <td className="list-container-td-coordination">{coordenacao.nome}</td>
                  <td className="list-container-td-coordination">{coordenacao.descricao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}
