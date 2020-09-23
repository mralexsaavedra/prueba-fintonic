import React from 'react';

import './Table.css';

const cabeceras = [
  'ID',
  'Category',
  'Type',
  'Difficulty',
  'Question/Statement',
  'Created By',
];

const autores = [
  'Karen',
  'Noctithra',
  'Coldflame',
  'Avalica',
  'Codex',
  'IronsFinest',
  'KazuhiraMewtwo',
  'Muhjk',
  'Death2121',
];

const getAutorRandom = () => {
  const random = Math.floor(Math.random() * autores.length);
  return autores[random];
};

export default function Table({ data }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {cabeceras.map((item, index) => {
              return <th key={index}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{item.category}</td>
                <td>{item.type}</td>
                <td>{item.difficulty}</td>
                <td>{item.question}</td>
                <td>{getAutorRandom()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
