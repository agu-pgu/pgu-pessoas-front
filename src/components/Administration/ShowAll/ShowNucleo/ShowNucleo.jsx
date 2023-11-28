import React from "react";
import "./ShowNucleo.scss";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { deleteNucleo } from "../../../../services/callsAdministration/callsShowAll";

export default function ShowNucleo({ peopleList }) {
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
        const response = await deleteNucleo(id);
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
    <div className="scroll-container-nucleo">
      <table className="list-container-table-nucleo">
        <thead className="list-container-thead-nucleo">
          <tr className="list-container-tr-nucleo">
            <th className="list-container-th-nucleo">Nome</th>
            <th className="list-container-th-nucleo">Descrição</th>
            <th className="list-container-th-nucleo">Ações</th>
          </tr>
        </thead>
        <tbody>
          {peopleList.map((nucleo, index) => (
            <tr key={index} className="list-container-tr-nucleo">
              <td className="list-container-td-nucleo">{nucleo.nome}</td>
              <td className="list-container-td-nucleo">{nucleo.descricao}</td>
              <td className="list-container-td list-container-td-button-nucleo">
                <button onClick={() => handleDelete(nucleo.id)}>
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
