import React from "react";
import "./ShowRegion.scss";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { deleteRegiao } from "../../../../services/callsAdministration/callsShowAll";

export default function ShowRegion({ peopleList }) {
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
        const response = await deleteRegiao(id);
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
    <div className="scroll-container-region">
      <table className="list-container-table-region">
        <thead className="list-container-thead-region">
          <tr className="list-container-tr-region">
            <th className="list-container-th-region">Nome</th>
            <th className="list-container-th-region">Sigla</th>
            <th className="list-container-th-region">Descrição</th>
            <th className="list-container-th-region">Ações</th>
          </tr>
        </thead>
        <tbody>
          {peopleList.map((region, index) => (
            <tr key={index} className="list-container-tr-region">
              <td className="list-container-td-region">{region.nome}</td>
              <td className="list-container-td-region">{region.sigla}</td>
              <td className="list-container-td-region">{region.descricao}</td>
              <td className="list-container-td list-container-td-button-region">
                <button onClick={() => handleDelete(region.id)}>
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
