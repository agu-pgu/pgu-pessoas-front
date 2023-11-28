import React from 'react'
import "./ShowCid.scss";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { deleteCid } from '../../../../services/callsAdministration/callsShowAll';

export default function ShowCid({ peopleList }) {
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
        const response = await deleteCid(id);
        if (response.data.SUCESSO == true) {
          Swal.fire(
            "Desativado!",
            "O registro foi desativado.",
            "success"
          ).then(() => {
            window.location.reload();
          });
        } else {
          Swal.fire("Erro", "Falha ao desativar o registro.", "error")
          .then(() => {
            window.location.reload();
          });
        }
      }
    } catch (error) {
      console.error("Erro ao desativar o registro:", error);
      Swal.fire("Erro", "Falha ao desativar o registro.", "error");
    }
  };

    return (
        <div className="scroll-container-cid">
          <table className="list-container-table-cid">
            <thead className="list-container-thead-cid">
              <tr className="list-container-tr-cid">
                <th className="list-container-th-cid">Nome</th>
                <th className="list-container-th-cid">Descrição</th>
                <th className="list-container-th-cid">Classe</th>
                <th className="list-container-th-cid">Categoria</th>
                <th className="list-container-th-cid">Categoria Descrição</th>
                <th className="list-container-th-cid">Ações</th>
              </tr>
            </thead>
            <tbody>
              {peopleList.map((cid, index) => (
                <tr key={index} className="list-container-tr-cid">
                  <td className="list-container-td-cid">{cid.nome}</td>
                  <td className="list-container-td-cid">{cid.descricao}</td>
                  <td className="list-container-td-cid">{cid.classe}</td>
                  <td className="list-container-td-cid">{cid.cidCategoriaNome}</td>
                  <td className="list-container-td-cid">{cid.cidCategoriaDescricao}</td>
                  <td className="list-container-td list-container-td-button-cid">
                <button onClick={() => handleDelete(cid.id)}>
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
