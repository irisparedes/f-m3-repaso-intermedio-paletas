import React from 'react';
import Palettes from './components/Palettes';
import NoPalettes from './components/NoPalettes';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      palettes: []
    }
    this.getPalettes();
  }

  getPalettes() {
    fetch('https://raw.githubusercontent.com/Adalab/Easley-ejercicios-de-fin-de-semana/master/data/palettes.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          palettes: data.palettes
        });
      });
  }

  handleColorClick(event) {
    const color = event.currentTarget.innerHTML;
    console.log(`#${color}`);
  }
  
  render() {
    const {palettes} = this.state;
    const havePalettes = palettes.length < 1;
    return (
      <div className="app">
        { havePalettes === true ? <NoPalettes /> : <Palettes palettes={palettes} /> }
      </div>
    );
  }
}

export default App;
