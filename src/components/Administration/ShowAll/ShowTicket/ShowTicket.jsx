import React from "react";
import "./ShowTicket.scss";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { deleteIngresso } from "../../../../services/callsAdministration/callsShowAll";

export default function ShowTicket({ peopleList }) {
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
        const response = await deleteIngresso(id);
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
    <div className="scroll-container-ticket">
      <table className="list-container-table-ticket">
        <thead className="list-container-thead-ticket">
          <tr className="list-container-tr-ticket">
            <th className="list-container-th-ticket">Nome</th>
            <th className="list-container-th-ticket">Descrição</th>
            <th className="list-container-th-ticket">Ações</th>
          </tr>
        </thead>
        <tbody>
          {peopleList.map((ticket, index) => (
            <tr key={index} className="list-container-tr-ticket">
              <td className="list-container-td-ticket">{ticket.nome}</td>
              <td className="list-container-td-ticket">{ticket.descricao}</td>
              <td className="list-container-td-ticket list-container-td-button-ticket">
                <button onClick={() => handleDelete(ticket.id)}>
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
