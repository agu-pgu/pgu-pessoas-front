import React from 'react'
import "./ShowNucleo.scss";

export default function ShowNucleo({ peopleList }) {
    return (
        <div className="scroll-container-nucleo">
          <table className="list-container-table-nucleo">
            <thead className="list-container-thead-nucleo">
              <tr className="list-container-tr-nucleo">
                <th className="list-container-th-nucleo">Nome</th>
                <th className="list-container-th-nucleo">Descrição</th>
              </tr>
            </thead>
            <tbody>
              {peopleList.map((nucleo, index) => (
                <tr key={index} className="list-container-tr-nucleo">
                  <td className="list-container-td-nucleo">{nucleo.nome}</td>
                  <td className="list-container-td-nucleo">{nucleo.descricao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}
