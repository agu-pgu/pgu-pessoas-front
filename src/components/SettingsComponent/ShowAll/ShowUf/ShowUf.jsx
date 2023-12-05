import React, { useState } from "react";
import "./ShowUf.scss";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { deleteUf } from "../../../../services/callsSettings/callsShowAll";
import UpdateUf from "../UpdateUf/UpdateUf";

export default function ShowUf({ peopleList }) {
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
        const response = await deleteUf(id);
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
    <div className="scroll-container-uf">
      <table className="list-container-table-uf">
        <thead className="list-container-thead-uf">
          <tr className="list-container-tr-uf">
            <th className="list-container-th-uf">Nome</th>
            <th className="list-container-th-uf">Região</th>
            <th className="list-container-th-uf">Sigla</th>
            <th className="list-container-th-uf">Ações</th>
          </tr>
        </thead>
        <tbody>
          {peopleList.map((uf, index) => (
            <tr key={index} className="list-container-tr-uf">
              <td className="list-container-td-uf">{uf.nome}</td>
              <td className="list-container-td-uf">{uf.regiao}</td>
              <td className="list-container-td-uf">{uf.sigla}</td>
              <td className="list-container-td-uf list-container-td-button-uf">
                <button onClick={() => handleDelete(uf.id)}>
                  <FaTrash className="delete-icon" />
                </button>
                <button
                  className="uptdate-Button"
                  onClick={() => handleUpdate(uf.id)}
                >
                  <FaPencilAlt className="update-icon" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showUpdateModal && (
        <UpdateUf
          id={selectedPersonId}
          handleClose={handleCloseUpdateModal}
        />
      )}
    </div>
  );
}
