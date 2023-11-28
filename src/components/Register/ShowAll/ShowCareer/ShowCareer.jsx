import React from "react";
import "./ShowCareer.scss";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { deleteCareer } from "../../../../services/CallsPerson/callsShowAll";

export default function ShowCareer({ peopleList }) {
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
        const response = await deleteCareer(id);
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
    <div className="scroll-container-career">
      <table className="list-container-table">
        <thead className="list-container-thead">
          <tr className="list-container-tr">
            <th className="list-container-th">Nome</th>
            <th className="list-container-th">Gênero</th>
            <th className="list-container-th">Município</th>
            <th className="list-container-th">UF</th>
            <th className="list-container-th">Nascimento</th>
            <th className="list-container-th">CPF</th>
            <th className="list-container-th">SIAPE</th>
            <th className="list-container-th">CARGO</th>
            <th className="list-container-th">CARREIRA</th>
            <th className="list-container-th">CONCURSO</th>
            <th className="list-container-th">COORDENAÇÃO</th>
            <th className="list-container-th">FUNÇÃO</th>
            <th className="list-container-th">INGRESSO</th>
            <th className="list-container-th">NÚCLEO</th>
            <th className="list-container-th">SETOR</th>
            <th className="list-container-th">Ações</th>
          </tr>
        </thead>
        <tbody>
          {peopleList.map((career, index) => (
            <tr key={index} className="list-container-tr">
              <td className="list-container-td">{career.name}</td>
              <td className="list-container-td">{career.gender}</td>
              <td className="list-container-td">{career.municipality}</td>
              <td className="list-container-td">{career.UF}</td>
              <td className="list-container-td">{career.birthDate}</td>
              <td className="list-container-td">{career.cpf}</td>
              <td className="list-container-td">{career.siape}</td>
              <td className="list-container-td">{career.cargo}</td>
              <td className="list-container-td">{career.carreiraType}</td>
              <td className="list-container-td">{career.concurso}</td>
              <td className="list-container-td">{career.coordenacao}</td>
              <td className="list-container-td">{career.funcao}</td>
              <td className="list-container-td">{career.ingresso}</td>
              <td className="list-container-td">{career.nucleo}</td>
              <td className="list-container-td">{career.setor}</td>
              <td className="list-container-td list-container-td-button">
                <button onClick={() => handleDelete(career.id)}>
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
