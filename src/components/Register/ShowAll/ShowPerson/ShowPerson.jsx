import React from "react";
import "./ShowPerson.scss";

export default function ShowPerson({ peopleList }) {
  return (
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
        </tr>
      </thead>
      <tbody>
        {peopleList.map((person, index) => (
          <tr key={index} className="list-container-tr">
            <td className="list-container-td">{person.name}</td>
            <td className="list-container-td">{person.gender}</td>
            <td className="list-container-td">{person.municipality}</td>
            <td className="list-container-td">{person.UF}</td>
            <td className="list-container-td">{person.birthDate}</td>
            <td className="list-container-td">{person.cpf}</td>
            <td className="list-container-td">{person.siape}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
