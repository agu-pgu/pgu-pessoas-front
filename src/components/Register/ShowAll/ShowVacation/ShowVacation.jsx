import React from "react";
import "./ShowVacation.scss";

export default function ShowVacation({ peopleList }) {
  return (
    <div className="scroll-container">
      <table className="list-container-table">
        <thead className="list-container-thead">
          <tr className="list-container-tr">
            <th className="list-container-th">Férias Ano</th>
            <th className="list-container-th">Férias Fim</th>
            <th className="list-container-th">Férias Início</th>
            <th className="list-container-th">Pessoa Nome</th>
            <th className="list-container-th">Pessoa SIAPE</th>
            <th className="list-container-th">Motivo Descrição</th>
            <th className="list-container-th">Status Nome</th>
          </tr>
        </thead>
        <tbody>
          {peopleList.map((ferias, index) => (
            <tr key={index} className="list-container-tr">
              <td className="list-container-td">{ferias.feriasAno}</td>
              <td className="list-container-td">{ferias.feriasFim}</td>
              <td className="list-container-td">{ferias.feriasInicio}</td>
              <td className="list-container-td">{ferias.pessoaNome}</td>
              <td className="list-container-td">{ferias.pessoaSiape}</td>
              <td className="list-container-td">
                {ferias.feriasMotivoStatusDescricao}
              </td>
              <td className="list-container-td">{ferias.feriasStatusNome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
