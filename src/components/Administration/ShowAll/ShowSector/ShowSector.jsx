import React from "react";
import "./ShowSector.scss";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { deleteSetor } from "../../../../services/callsAdministration/callsShowAll";

export default function ShowSector({ peopleList }) {
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
        const response = await deleteSetor(id);
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
    <div className="scroll-container-sector">
      <table className="list-container-table-sector">
        <thead className="list-container-thead-sector">
          <tr className="list-container-tr-sector">
            <th className="list-container-th-sector">Sigla</th>
            <th className="list-container-th-sector">Nome</th>
            <th className="list-container-th-sector">Descrição</th>
            <th className="list-container-th-sector">Ações</th>
          </tr>
        </thead>
        <tbody>
          {peopleList.map((setor, index) => (
            <tr key={index} className="list-container-tr-sector">
              <td className="list-container-td-sector">{setor.sigla}</td>
              <td className="list-container-td-sector">{setor.nome}</td>
              <td className="list-container-td-sector">{setor.descricao}</td>
              <td className="list-container-td list-container-td-button-sector">
                <button onClick={() => handleDelete(setor.id)}>
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
