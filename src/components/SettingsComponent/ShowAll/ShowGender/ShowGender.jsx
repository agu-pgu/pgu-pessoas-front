import React from 'react'
import "./ShowGender.scss";

export default function ShowGender({ peopleList }) {
    return (
        <div className="scroll-container-gender">
          <table className="list-container-table-gender">
            <thead className="list-container-thead-gender">
              <tr className="list-container-tr-gender">
                <th className="list-container-th-gender">Nome</th>
              </tr>
            </thead>
            <tbody>
              {peopleList.map((gender, index) => (
                <tr key={index} className="list-container-tr-gender">
                  <td className="list-container-td-gender">{gender.nome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}
