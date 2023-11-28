import React from "react";
import "./ShowCoordination.scss";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { deleteCoordenacao } from "../../../../services/callsAdministration/callsShowAll";

export default function ShowCoordination({ peopleList }) {
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
        const response = await deleteCoordenacao(id);
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
    <div className="scroll-container-coordination">
      <table className="list-container-table-coordination">
        <thead className="list-container-thead-coordination">
          <tr className="list-container-tr-coordination">
            <th className="list-container-th-coordination">Sigla</th>
            <th className="list-container-th-coordination">Nome</th>
            <th className="list-container-th-coordination">Descrição</th>
            <th className="list-container-th-coordination">Ações</th>
          </tr>
        </thead>
        <tbody>
          {peopleList.map((coordenacao, index) => (
            <tr key={index} className="list-container-tr-coordination">
              <td className="list-container-td-coordination">
                {coordenacao.sigla}
              </td>
              <td className="list-container-td-coordination">
                {coordenacao.nome}
              </td>
              <td className="list-container-td-coordination">
                {coordenacao.descricao}
              </td>
              <td className="list-container-td list-container-td-button-coordination">
                <button onClick={() => handleDelete(coordenacao.id)}>
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
