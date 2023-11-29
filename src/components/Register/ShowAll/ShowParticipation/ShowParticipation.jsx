import React from 'react'
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import "./ShowParticipation.scss";
import { deleteParticipation } from '../../../../services/CallsPerson/callsShowAll';

export default function ShowParticipation({ peopleList}) {
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
            const response = await deleteParticipation(id);
            console.log(response)
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
        <div className="scroll-container-participation">
          <table className="list-container-table">
            <thead className="list-container-thead">
              <tr className="list-container-tr">
                <th className="list-container-th">Participação</th>
                <th className="list-container-th">Descrição</th>
                <th className="list-container-th">Tipo</th>
                <th className="list-container-th">Pessoa</th>
                <th className="list-container-th">Siape</th>
                <th className="list-container-th">Ações</th>
              </tr>
            </thead>
            <tbody>
              {peopleList.map((participation, index) => (
                <tr key={index} className="list-container-tr">
                  <td className="list-container-td">{participation.participacaoNome}</td>
                  <td className="list-container-td">{participation.participacaoDescricao}</td>
                  <td className="list-container-td">{participation.participacaoTipoNome}</td>
                  <td className="list-container-td">{participation.pessoaNome}</td>
                  <td className="list-container-td">{participation.pessoaSiape}</td>
                  <td className="list-container-td list-container-td-button">
                    <button onClick={() => handleDelete(participation.id)}>
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
