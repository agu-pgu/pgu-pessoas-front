import React from "react";
import "./ShowPermission.scss";

export default function ShowPermission({ peopleList }) {
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
