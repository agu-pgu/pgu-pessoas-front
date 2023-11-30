import React, { useState } from "react";
import "./ShowVacation.scss";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { deleteVacation } from "../../../../services/CallsPerson/callsShowAll";
import UpdateVacation from "../UpdateVacation/UpdateVacation";

export default function ShowVacation({ peopleList }) {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedPersonId, setSelectedPersonId] = useState(null);

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
        const response = await deleteVacation(id);
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

  const handleCloseUpdateModal = () => {
    setShowUpdateModal(false);
    setSelectedPersonId(null);
  };

  const handleUpdate = (id) => {
    setShowUpdateModal(true);
    setSelectedPersonId(id);
  };

  return (
    <div className="scroll-container">
      <table className="list-container-table">
        <thead className="list-container-thead">
          <tr className="list-container-tr">
            <th className="list-container-th">Férias Ano</th>
            <th className="list-container-th">Férias Fim</th>
            <th className="list-container-th">Férias Início</th>
            <th className="list-container-th">Pessoa Nome</th>
            <th className="list-container-th">Pessoa SIAPE</th>
            <th className="list-container-th">Motivo Descrição</th>
            <th className="list-container-th">Status Nome</th>
            <th className="list-container-th">Ações</th>
          </tr>
        </thead>
        <tbody>
          {peopleList.map((ferias, index) => (
            <tr key={index} className="list-container-tr">
              <td className="list-container-td">{ferias.feriasAno}</td>
              <td className="list-container-td">{ferias.feriasFim}</td>
              <td className="list-container-td">{ferias.feriasInicio}</td>
              <td className="list-container-td">{ferias.pessoaNome}</td>
              <td className="list-container-td">{ferias.pessoaSiape}</td>
              <td className="list-container-td">
                {ferias.feriasMotivoStatusDescricao}
              </td>
              <td className="list-container-td">{ferias.feriasStatusNome}</td>
              <td className="list-container-td list-container-td-button">
                <button onClick={() => handleDelete(ferias.id)}>
                  <FaTrash className="delete-icon" />
                </button>
                <button
                  className="uptdate-Button"
                  onClick={() => handleUpdate(ferias.id)}
                >
                  <FaPencilAlt className="update-icon" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        {showUpdateModal && (
          <UpdateVacation
            id={selectedPersonId}
            handleClose={handleCloseUpdateModal}
          />
        )}
    </div>
  );
}
