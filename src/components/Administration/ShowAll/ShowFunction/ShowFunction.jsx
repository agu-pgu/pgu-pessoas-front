import React from "react";
import "./ShowFunction.scss";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { deleteFuncao } from "../../../../services/callsAdministration/callsShowAll";

export default function ShowFunction({ peopleList }) {
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
        const response = await deleteFuncao(id);
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
    <div className="scroll-container-function">
      <table className="list-container-table-function">
        <thead className="list-container-thead-function">
          <tr className="list-container-tr-function">
            <th className="list-container-th-function">Nome</th>
            <th className="list-container-th-function">Descrição</th>
            <th className="list-container-th-function">Ações</th>
          </tr>
        </thead>
        <tbody>
          {peopleList.map((funcao, index) => (
            <tr key={index} className="list-container-tr-function">
              <td className="list-container-td-function">{funcao.nome}</td>
              <td className="list-container-td-function">{funcao.descricao}</td>
              <td className="list-container-td list-container-td-button-function">
                <button onClick={() => handleDelete(funcao.id)}>
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
