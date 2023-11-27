import React from "react";
import "./ShowCareer.scss";

export default function ShowCareer({ peopleList }) {
  return (
    <div className="scroll-container-career">
      <table className="list-container-table">
        <thead className="list-container-thead">
          <tr className="list-container-tr">
            <th className="list-container-th">Nome</th>
            <th className="list-container-th">Gênero</th>
            <th className="list-container-th">Município</th>
            <th className="list-container-th">UF</th>
            <th className="list-container-th">Nascimento</th>
            <th className="list-container-th">CPF</th>
            <th className="list-container-th">SIAPE</th>
            <th className="list-container-th">CARGO</th>
            <th className="list-container-th">CARREIRA</th>
            <th className="list-container-th">CONCURSO</th>
            <th className="list-container-th">COORDENAÇÃO</th>
            <th className="list-container-th">FUNÇÃO</th>
            <th className="list-container-th">INGRESSO</th>
            <th className="list-container-th">NÚCLEO</th>
            <th className="list-container-th">SETOR</th>
          </tr>
        </thead>
        <tbody>
          {peopleList.map((career, index) => (
            <tr key={index} className="list-container-tr">
              <td className="list-container-td">{career.name}</td>
              <td className="list-container-td">{career.gender}</td>
              <td className="list-container-td">{career.municipality}</td>
              <td className="list-container-td">{career.UF}</td>
              <td className="list-container-td">{career.birthDate}</td>
              <td className="list-container-td">{career.cpf}</td>
              <td className="list-container-td">{career.siape}</td>
              <td className="list-container-td">{career.cargo}</td>
              <td className="list-container-td">{career.carreiraType}</td>
              <td className="list-container-td">{career.concurso}</td>
              <td className="list-container-td">{career.coordenacao}</td>
              <td className="list-container-td">{career.funcao}</td>
              <td className="list-container-td">{career.ingresso}</td>
              <td className="list-container-td">{career.nucleo}</td>
              <td className="list-container-td">{career.setor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
