import React from "react";
import "./ShowPositions.scss";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { deleteCargo } from "../../../../services/callsAdministration/callsShowAll";

export default function ShowPositions({ peopleList }) {
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
        const response = await deleteCargo(id);
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
    <div className="scroll-container-positions">
      <table className="list-container-table-positions">
        <thead className="list-container-thead-positions">
          <tr className="list-container-tr-positions">
            <th className="list-container-th-positions">Nome</th>
            <th className="list-container-th-positions">Descrição</th>
            <th className="list-container-th-positions">Ações</th>
          </tr>
        </thead>
        <tbody>
          {peopleList.map((positions, index) => (
            <tr key={index} className="list-container-tr-positions">
              <td className="list-container-td-positions">{positions.nome}</td>
              <td className="list-container-td-positions">
                {positions.descricao}
              </td>
              <td className="list-container-td list-container-td-button-positions">
                <button onClick={() => handleDelete(positions.id)}>
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
