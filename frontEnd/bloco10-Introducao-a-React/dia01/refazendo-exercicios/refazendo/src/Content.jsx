import React, { Component } from "react";

const conteudos = [
  {
    conteudo: "High Order Functions",
    bloco: 8,
    status: "Aprendido",
  },
  {
    conteudo: "Composicao de Componentes",
    bloco: 11,
    status: "Aprendendo",
  },
  {
    conteudo: "Composicao de Estados",
    bloco: 12,
    status: "Aprenderei",
  },
  {
    conteudo: "Redux",
    bloco: 16,
    status: "Aprenderei",
  },
];

class Content extends Component {
  render() {
    return (
      <main>
        <ul>
          {conteudos.map(({ conteudo, bloco, status }, index) => {
            return (
              <li key={index} className='li'>
                <h4>Conteudo do bloco: {conteudo}</h4>
                Status: {status}, Bloco: {bloco}
              </li> 
            );
          })}
        </ul>
      </main>
    );
  }
}

export default Content;
