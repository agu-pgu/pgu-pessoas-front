import React from "react";
import "./ShowMunicipio.scss";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { deleteMunicipio } from "../../../../services/callsSettings/callsShowAll";

export default function ShowMunicipio({ peopleList }) {
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
        const response = await deleteMunicipio(id);
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
    <div className="scroll-container-municipio">
      <table className="list-container-table-municipio">
        <thead className="list-container-thead-municipio">
          <tr className="list-container-tr-municipio">
            <th className="list-container-th-municipio">Nome</th>
            <th className="list-container-th-municipio">Ações</th>
          </tr>
        </thead>
        <tbody>
          {peopleList.map((municipio, index) => (
            <tr key={index} className="list-container-tr-municipio">
              <td className="list-container-td-municipio">{municipio.nome}</td>
              <td className="list-container-td list-container-td-button-municipio">
                <button onClick={() => handleDelete(municipio.id)}>
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
