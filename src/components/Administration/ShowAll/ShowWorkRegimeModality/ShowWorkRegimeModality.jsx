import React from "react";
import "./ShowWorkRegimeModality.scss";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { deleteRegimeTrabalhoModalidade } from "../../../../services/callsAdministration/callsShowAll";

export default function ShowWorkRegimeModality({ peopleList }) {
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
        const response = await deleteRegimeTrabalhoModalidade(id);
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
    <div className="scroll-container-workRegimeModality">
      <table className="list-container-table-workRegimeModality">
        <thead className="list-container-thead-workRegimeModality">
          <tr className="list-container-tr-workRegimeModality">
            <th className="list-container-th-workRegimeModality">Nome</th>
            <th className="list-container-th-workRegimeModality">Descrição</th>
            <th className="list-container-th-workRegimeModality">Ações</th>
          </tr>
        </thead>
        <tbody>
          {peopleList.map((workRegimeModality, index) => (
            <tr key={index} className="list-container-tr-workRegimeModality">
              <td className="list-container-td-workRegimeModality">
                {workRegimeModality.nome}
              </td>
              <td className="list-container-td-workRegimeModality">
                {workRegimeModality.descricao}
              </td>
              <td className="list-container-td-workRegimeModality list-container-td-button-workRegimeModality">
                <button onClick={() => handleDelete(workRegimeModality.id)}>
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
