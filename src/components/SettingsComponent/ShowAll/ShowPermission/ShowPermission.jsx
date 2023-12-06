import React, { useState } from "react";
import "./ShowPermission.scss";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { deletePermissao } from "../../../../services/callsSettings/callsShowAll";
import UpdatePermission from "../UpdatePermission/UpdatePermission";

export default function ShowPermission({ peopleList }) {
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
        const response = await deletePermissao(id);
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
    <div className="scroll-container-permission">
      <table className="list-container-table-permission">
        <thead className="list-container-thead-permission">
          <tr className="list-container-tr-permission">
            <th className="list-container-th-permission">Cargo Nome</th>
            <th className="list-container-th-permission">Carreira Tipo Nome</th>
            <th className="list-container-th-permission">Concurso Nome</th>
            <th className="list-container-th-permission">Coordenacao Nome</th>
            <th className="list-container-th-permission">Funcao Nome</th>
            <th className="list-container-th-permission">Ingresso Nome</th>
            <th className="list-container-th-permission">Modulo Nome</th>
            <th className="list-container-th-permission">Municipio Nome</th>
            <th className="list-container-th-permission">UF Nome</th>
            <th className="list-container-th-permission">Nucleo Nome</th>
            <th className="list-container-th-permission">Pessoa Nome</th>
            <th className="list-container-th-permission">Pessoa SIAPE</th>
            <th className="list-container-th-permission">Regiao Nome</th>
            <th className="list-container-th-permission">Setor Nome</th>
            <th className="list-container-th-permission">Unidade Nome</th>
            <th className="list-container-th-permission">Ações</th>
          </tr>
        </thead>
        <tbody>
          {peopleList.map((permissao, index) => (
            <tr key={index} className="list-container-tr-permission">
              <td className="list-container-td-permission">
                {permissao.cargoNome}
              </td>
              <td className="list-container-td-permission">
                {permissao.carreiraTipoNome}
              </td>
              <td className="list-container-td-permission">
                {permissao.concursoNome}
              </td>
              <td className="list-container-td-permission">
                {permissao.coordenacaoNome}
              </td>
              <td className="list-container-td-permission">
                {permissao.funcaoNome}
              </td>
              <td className="list-container-td-permission">
                {permissao.ingressoNome}
              </td>
              <td className="list-container-td-permission">
                {permissao.moduloNome}
              </td>
              <td className="list-container-td-permission">
                {permissao.municipioNome}
              </td>
              <td className="list-container-td-permission">
                {permissao.ufNome}
              </td>
              <td className="list-container-td-permission">
                {permissao.nucleoNome}
              </td>
              <td className="list-container-td-permission">
                {permissao.pessoaNome}
              </td>
              <td className="list-container-td-permission">
                {permissao.pessoaSiape}
              </td>
              <td className="list-container-td-permission">
                {permissao.regiaoNome}
              </td>
              <td className="list-container-td-permission">
                {permissao.setorNome}
              </td>
              <td className="list-container-td-permission">
                {permissao.unidadeNome}
              </td>
              <td className="list-container-td-permission list-container-td-button-permission">
                <button onClick={() => handleDelete(permissao.id)}>
                  <FaTrash className="delete-icon" />
                </button>
                <button
                  className="uptdate-Button"
                  onClick={() => handleUpdate(permissao.id)}
                >
                  <FaPencilAlt className="update-icon" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showUpdateModal && (
        <UpdatePermission
          id={selectedPersonId}
          handleClose={handleCloseUpdateModal}
        />
      )}
    </div>
  );
}
