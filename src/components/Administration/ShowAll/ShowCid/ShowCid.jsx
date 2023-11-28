import React from 'react'
import "./ShowCid.scss";

export default function ShowCid({ peopleList }) {
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}
