import React, { useState } from "react";
import "./ShowGender.scss";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { deleteGenero } from "../../../../services/callsSettings/callsShowAll";
import "./ShowGender.scss";
import UpdateGender from "../UpdateGender/UpdateGender";

export default function ShowGender({ peopleList }) {
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
        const response = await deleteGenero(id);
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

  const handleUpdate = (id) => {
    setShowUpdateModal(true);
    setSelectedPersonId(id);
  };

  const handleCloseUpdateModal = () => {
    setShowUpdateModal(false);
    setSelectedPersonId(null);
  };

  return (
    <div className="scroll-container-gender">
      <table className="list-container-table-gender">
        <thead className="list-container-thead-gender">
          <tr className="list-container-tr-gender">
            <th className="list-container-th-gender">Nome</th>
            <th className="list-container-th-gender">Ações</th>
          </tr>
        </thead>
        <tbody>
          {peopleList.map((gender, index) => (
            <tr key={index} className="list-container-tr-gender">
              <td className="list-container-td-gender">{gender.nome}</td>
              <td className="list-container-td list-container-td-button-gender">
                <button onClick={() => handleDelete(gender.id)}>
                  <FaTrash className="delete-icon" />
                </button>
                <button
                  className="uptdate-Button"
                  onClick={() => handleUpdate(gender.id)}
                >
                  <FaPencilAlt className="update-icon" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showUpdateModal && (
        <UpdateGender
          id={selectedPersonId}
          handleClose={handleCloseUpdateModal}
        />
      )}
    </div>
  );
}
