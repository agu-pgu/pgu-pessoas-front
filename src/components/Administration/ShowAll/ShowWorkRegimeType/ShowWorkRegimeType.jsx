import React from "react";
import "./ShowWorkRegimeType.scss";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { deleteRegimeTrabalhoTipo } from "../../../../services/callsAdministration/callsShowAll";

export default function ShowWorkRegimeType({ peopleList }) {
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
        const response = await deleteRegimeTrabalhoTipo(id);
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
    <div className="scroll-container-workRegimeType">
      <table className="list-container-table-workRegimeType">
        <thead className="list-container-thead-workRegimeType">
          <tr className="list-container-tr-workRegimeType">
            <th className="list-container-th-workRegimeType">Nome</th>
            <th className="list-container-th-workRegimeType">Descrição</th>
            <th className="list-container-th-workRegimeType">Ações</th>
          </tr>
        </thead>
        <tbody>
          {peopleList.map((workRegimeType, index) => (
            <tr key={index} className="list-container-tr-workRegimeType">
              <td className="list-container-td-workRegimeType">
                {workRegimeType.nome}
              </td>
              <td className="list-container-td-workRegimeType">
                {workRegimeType.descricao}
              </td>
              <td className="list-container-td-workRegimeType list-container-td-button-workRegimeType">
                <button onClick={() => handleDelete(workRegimeType.id)}>
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
