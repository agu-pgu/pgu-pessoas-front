import React from "react";
import "./ShowContest.scss";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { deleteConcurso } from "../../../../services/callsAdministration/callsShowAll";

export default function ShowContest({ peopleList }) {
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
        const response = await deleteConcurso(id);
        if (response.data.SUCESSO == true) {
          Swal.fire(
            "Desativado!",
            "O registro foi desativado.",
            "success"
          ).then(() => {
            window.location.reload();
          });
        } else {
          Swal.fire("Erro", "Falha ao desativar o registro.", "error").then(
            () => {
              window.location.reload();
            }
          );
        }
      }
    } catch (error) {
      console.error("Erro ao desativar o registro:", error);
      Swal.fire("Erro", "Falha ao desativar o registro.", "error");
    }
  };

  return (
    <div className="scroll-container-contest">
      <table className="list-container-table-contest">
        <thead className="list-container-thead-contest">
          <tr className="list-container-tr-contest">
            <th className="list-container-th-contest">Nome</th>
            <th className="list-container-th-contest">Descrição</th>
            <th className="list-container-th-contest">Edital</th>
            <th className="list-container-th-contest">Ano</th>
            <th className="list-container-th-contest">Ações</th>
          </tr>
        </thead>
        <tbody>
          {peopleList.map((contest, index) => (
            <tr key={index} className="list-container-tr-contest">
              <td className="list-container-td-contest">{contest.nome}</td>
              <td className="list-container-td-contest">{contest.descricao}</td>
              <td className="list-container-td-contest">{contest.edital}</td>
              <td className="list-container-td-contest">{contest.ano}</td>
              <td className="list-container-td list-container-td-button-contest">
                <button onClick={() => handleDelete(contest.id)}>
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
