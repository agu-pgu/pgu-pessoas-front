import React from 'react'
import "./ShowTicket.scss";

export default function ShowTicket({ peopleList }) {
    return (
        <div className="scroll-container-ticket">
          <table className="list-container-table-ticket">
            <thead className="list-container-thead-ticket">
              <tr className="list-container-tr-ticket">
                <th className="list-container-th-ticket">Nome</th>
                <th className="list-container-th-ticket">Descrição</th>
              </tr>
            </thead>
            <tbody>
              {peopleList.map((ticket, index) => (
                <tr key={index} className="list-container-tr-ticket">
                  <td className="list-container-td-ticket">{ticket.nome}</td>
                  <td className="list-container-td-ticket">{ticket.descricao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}
