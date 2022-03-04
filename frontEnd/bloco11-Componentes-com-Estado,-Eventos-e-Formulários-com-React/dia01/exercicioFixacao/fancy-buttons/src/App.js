import React from 'react';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }

    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  } 
  
    handleClick1() {
    // console.log('Clicou no botão1!')
    // console.log(this);
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1
    }))
  }

  handleClick2() {
    // console.log('Clicou no botão2!')
    // console.log(this);
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
    }))
  }

  handleClick3() {
    // console.log('Clicou no botão3!')
    // console.log(this);
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1
    }))
  }

  color(numero) {
    return numero % 2 === 0 ? 'green' : 'white'
  }

  render() {
    console.log(this);
    return(
      <div>
        <button onClick={this.handleClick1} style={{ backgroundColor: this.color(this.state.numeroDeCliques1) }}>{ this.state.numeroDeCliques1 }</button>
        <button onClick={this.handleClick2} style={{ backgroundColor: this.color(this.state.numeroDeCliques2) }}>{ this.state.numeroDeCliques2 }</button>
        <button onClick={this.handleClick3} style={{ backgroundColor: this.color(this.state.numeroDeCliques3) }} >{ this.state.numeroDeCliques3 }</button>
      </div>
    )
  }
}

export default App;