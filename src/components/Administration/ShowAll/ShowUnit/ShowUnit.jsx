import React from "react";
import "./ShowUnit.scss";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { deleteUnidade } from "../../../../services/callsAdministration/callsShowAll";

export default function ShowUnit({ peopleList }) {
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
        const response = await deleteUnidade(id);
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
    <div className="scroll-container-unit">
      <table className="list-container-table-unit">
        <thead className="list-container-thead-unit">
          <tr className="list-container-tr-unit">
            <th className="list-container-th-unit">Nome</th>
            <th className="list-container-th-unit">Sigla</th>
            <th className="list-container-th-unit">Descrição</th>
            <th className="list-container-th-unit">Ações</th>
          </tr>
        </thead>
        <tbody>
          {peopleList.map((unit, index) => (
            <tr key={index} className="list-container-tr-unit">
              <td className="list-container-td-unit">{unit.nome}</td>
              <td className="list-container-td-unit">{unit.sigla}</td>
              <td className="list-container-td-unit">{unit.descricao}</td>
              <td className="list-container-td-unit list-container-td-button-unit">
                <button onClick={() => handleDelete(unit.id)}>
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
