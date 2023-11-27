import React from "react";
import "./ShowRemoval.scss";

export default function ShowRemoval({ peopleList }) {
  return (
    <div className="scroll-container">
      <table className="list-container-table">
        <thead className="list-container-thead">
          <tr className="list-container-tr">
            <th className="list-container-th">Afastamento Nome</th>
            <th className="list-container-th">Afastamento Tipo</th>
            <th className="list-container-th">CID Categoria</th>
            <th className="list-container-th">CID</th>
            <th className="list-container-th">CID Subcategoria</th>
            <th className="list-container-th">Nome</th>
            <th className="list-container-th">CPF</th>
          </tr>
        </thead>
        <tbody>
          {peopleList.map((afastamento, index) => (
            <tr key={index} className="list-container-tr">
              <td className="list-container-td">
                {afastamento.afastamentoNome}
              </td>
              <td className="list-container-td">
                {afastamento.afastamentoTipoNome}
              </td>
              <td className="list-container-td">
                {afastamento.cidCategoriaNome}
              </td>
              <td className="list-container-td">{afastamento.cidNome}</td>
              <td className="list-container-td">{afastamento.cidSubNome}</td>
              <td className="list-container-td">{afastamento.pessoaNome}</td>
              <td className="list-container-td">{afastamento.pessoaCpf}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
