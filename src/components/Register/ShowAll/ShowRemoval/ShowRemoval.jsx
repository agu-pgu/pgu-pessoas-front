import React from "react";
import "./ShowRemoval.scss";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

export default function ShowRemoval({ peopleList }) {
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
        const response = await deletePerson(id);
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
    <div className="scroll-container">
      <table className="list-container-table">
        <thead className="list-container-thead">
          <tr className="list-container-tr">
            <th className="list-container-th">Afastamento Nome</th>
            <th className="list-container-th">Afastamento Tipo</th>
            <th className="list-container-th">CID Categoria</th>
            <th className="list-container-th">CID</th>
            <th className="list-container-th">CID Subcategoria</th>
            <th className="list-container-th">Nome</th>
            <th className="list-container-th">CPF</th>
          </tr>
        </thead>
        <tbody>
          {peopleList.map((afastamento, index) => (
            <tr key={index} className="list-container-tr">
              <td className="list-container-td">
                {afastamento.afastamentoNome}
              </td>
              <td className="list-container-td">
                {afastamento.afastamentoTipoNome}
              </td>
              <td className="list-container-td">
                {afastamento.cidCategoriaNome}
              </td>
              <td className="list-container-td">{afastamento.cidNome}</td>
              <td className="list-container-td">{afastamento.cidSubNome}</td>
              <td className="list-container-td">{afastamento.pessoaNome}</td>
              <td className="list-container-td">{afastamento.pessoaCpf}</td>
              <td className="list-container-td list-container-td-button">
                <button onClick={() => handleDelete(afastamento.id)}>
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
