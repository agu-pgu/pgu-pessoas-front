import React from "react";
import "./ShowPerson.scss";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { deletePerson } from "../../../../services/CallsPerson/callsShowAll";

export default function ShowPerson({ peopleList }) {
  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Você tem certeza?",
        text: "Deseja desativar o registro?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#1351b4",
        confirmButtonText: "Sim, Desativar!",
        cancelButtonText: "Cancelar",
      });

      if (result.isConfirmed) {
        const response = await deletePerson(id);
        if (response.data.SUCESSO == true) {
          Swal.fire(
            "Desativado!",
            "O registro foi desativado.",
            "success"
          ).then(() => {
            window.location.reload();
          });
        } else {
          Swal.fire("Erro", "Falha ao desativar o registro.", "error")
          .then(() => {
            window.location.reload();
          });
        }
      }
    } catch (error) {
      console.error("Erro ao desativar o registro:", error);
      Swal.fire("Erro", "Falha ao desativar o registro.", "error");
    }
  };

  return (
    <div className="scroll-container">
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
            <th className="list-container-th">Ações</th>
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
              <td className="list-container-td list-container-td-button">
                <button onClick={() => handleDelete(person.id)}>
                  <FaTrash className="delete-icon" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
