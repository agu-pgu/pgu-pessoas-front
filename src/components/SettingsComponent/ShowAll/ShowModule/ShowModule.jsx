import React, { useState } from "react";
import "./ShowModule.scss";
import { FaTrash,FaPencilAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { deleteModulo } from "../../../../services/callsSettings/callsShowAll";
import UpdateModule from "../UpdateModule/UpdateModule";

export default function ShowModule({ peopleList }) {
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
        const response = await deleteModulo(id);
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
    <div className="scroll-container-module">
      <table className="list-container-table-module">
        <thead className="list-container-thead-module">
          <tr className="list-container-tr-module">
            <th className="list-container-th-module">Nome</th>
            <th className="list-container-th-module">Descrição</th>
            <th className="list-container-th-module">Ações</th>
          </tr>
        </thead>
        <tbody>
          {peopleList.map((module, index) => (
            <tr key={index} className="list-container-tr-module">
              <td className="list-container-td-module">{module.nome}</td>
              <td className="list-container-td-module">{module.descricao}</td>
              <td className="list-container-td list-container-td-button-module">
                <button onClick={() => handleDelete(module.id)}>
                  <FaTrash className="delete-icon" />
                </button>
                <button
                  className="uptdate-Button"
                  onClick={() => handleUpdate(module.id)}
                >
                  <FaPencilAlt className="update-icon" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showUpdateModal && (
        <UpdateModule
          id={selectedPersonId}
          handleClose={handleCloseUpdateModal}
        />
      )}
    </div>
  );
}
