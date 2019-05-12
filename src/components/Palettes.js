import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Palettes extends React.Component {
  render() {
    const {palettes} = this.props;
    return (
      <ul className="palettes">
        {palettes.map((item, index) => {
          return (
            <li className="pallete" key={`p${index}`}>
              <Card 
                name={item.name} 
                colors={item.colors} 
                colorAction={this.handleColorClick} 
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

Palettes.propTypes = {
  palettes: PropTypes.arrayOf(PropTypes.object)
}

export default Palettes;