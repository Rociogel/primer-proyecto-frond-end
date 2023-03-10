import React, { Component } from 'react';

class CicloVidaComponentes extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            nombre:'Alberto',
            evento:null
        }
    }
    cambiarNombre(){
          this.setState({nombre:'Carlos'})
      }  
    render() { 
        return ( 
            <>          
          <h1>{this.state.nombre}</h1>
      <button onClick={this.cambiarNombre.bind(this)}>CambiarNombre</button>
            </>
         );
    }
}
 
export default CicloVidaComponentes;