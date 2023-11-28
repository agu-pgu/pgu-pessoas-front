import React from 'react'
import "./ShowModule.scss";

export default function ShowModule({ peopleList }) {
    return (
        <div className="scroll-container-module">
          <table className="list-container-table-module">
            <thead className="list-container-thead-module">
              <tr className="list-container-tr-module">
                <th className="list-container-th-module">Nome</th>
                <th className="list-container-th-module">Descrição</th>
              </tr>
            </thead>
            <tbody>
              {peopleList.map((module, index) => (
                <tr key={index} className="list-container-tr-module">
                  <td className="list-container-td-module">{module.nome}</td>
                  <td className="list-container-td-module">{module.descricao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}
