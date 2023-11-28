import React from 'react'
import "./ShowRegion.scss";

export default function ShowRegion({ peopleList }) {
    return (
        <div className="scroll-container-region">
          <table className="list-container-table-region">
            <thead className="list-container-thead-region">
              <tr className="list-container-tr-region">
                <th className="list-container-th-region">Nome</th>
                <th className="list-container-th-region">Sigla</th>
                <th className="list-container-th-region">Descrição</th>
              </tr>
            </thead>
            <tbody>
              {peopleList.map((region, index) => (
                <tr key={index} className="list-container-tr-region">
                  <td className="list-container-td-region">{region.nome}</td>
                  <td className="list-container-td-region">{region.sigla}</td>
                  <td className="list-container-td-region">{region.descricao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}
