import React from 'react';

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
];

class Component extends React.Component {
  remder() {
    return (
      <div>
          {conteudos.map(({ conteudo, bloco, status }) => {
              <div>
                  <h4>{`O conteúdo é: ${conteudo}`}</h4>
                  <p>{`Status: ${status}`}</p>
                  <p>{`Bloco: ${bloco}`}</p>
              </div>
          })}
      </div>
    )
  }
}

export default Component;