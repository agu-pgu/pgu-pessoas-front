import React from 'react'
import "./ShowFunction.scss";

export default function ShowFunction({ peopleList }) {
    return (
        <div className="scroll-container-function">
          <table className="list-container-table-function">
            <thead className="list-container-thead-function">
              <tr className="list-container-tr-function">
                <th className="list-container-th-function">Nome</th>
                <th className="list-container-th-function">Descrição</th>
              </tr>
            </thead>
            <tbody>
              {peopleList.map((funcao, index) => (
                <tr key={index} className="list-container-tr-function">
                  <td className="list-container-td-function">{funcao.nome}</td>
                  <td className="list-container-td-function">{funcao.descricao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}
