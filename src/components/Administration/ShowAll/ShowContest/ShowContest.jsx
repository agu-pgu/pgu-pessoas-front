import React from 'react'
import "./ShowContest.scss";

export default function ShowContest({ peopleList }) {
    return (
        <div className="scroll-container-contest">
          <table className="list-container-table-contest">
            <thead className="list-container-thead-contest">
              <tr className="list-container-tr-contest">
                <th className="list-container-th-contest">Nome</th>
                <th className="list-container-th-contest">Descrição</th>
                <th className="list-container-th-contest">Edital</th>
                <th className="list-container-th-contest">Ano</th>
              </tr>
            </thead>
            <tbody>
              {peopleList.map((contest, index) => (
                <tr key={index} className="list-container-tr-contest">
                  <td className="list-container-td-contest">{contest.nome}</td>
                  <td className="list-container-td-contest">{contest.descricao}</td>
                  <td className="list-container-td-contest">{contest.edital}</td>
                  <td className="list-container-td-contest">{contest.ano}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}
