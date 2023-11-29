import React from "react";
import "./ShowTraining.scss";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { deleteTraining } from "../../../../services/CallsPerson/callsShowAll";

export default function ShowTraining({ peopleList}) {
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
        const response = await deleteTraining(id);
        console.log(response);
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
    <div className="scroll-container-training">
      <table className="list-container-table">
        <thead className="list-container-thead">
          <tr className="list-container-tr">
            <th className="list-container-th">Capacitação</th>
            <th className="list-container-th">Descrição</th>
            <th className="list-container-th">Tipo</th>
            <th className="list-container-th">Pessoa</th>
            <th className="list-container-th">Siape</th>
          </tr>
        </thead>
        <tbody>
          {peopleList.map((training, index) => (
            <tr key={index} className="list-container-tr">
              <td className="list-container-td">{training.capacitacaoNome}</td>
              <td className="list-container-td">
                {training.capacitacaoDescricao}
              </td>
              <td className="list-container-td">
                {training.capacitacaoTipoNome}
              </td>
              <td className="list-container-td">{training.pessoaNome}</td>
              <td className="list-container-td">{training.pessoaSiape}</td>
              <td className="list-container-td list-container-td-button">
                <button onClick={() => handleDelete(training.id)}>
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
