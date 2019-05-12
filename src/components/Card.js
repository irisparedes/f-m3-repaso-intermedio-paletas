import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

class Card extends React.Component {
  render() {
    const {name, colors, colorAction} = this.props;
    return (
      <div className="card">
        <h2 className="card__name">{name}</h2>
        <ul className="card__colors">
          {colors.map((color,colorIndex) => {
            return (
              <Color 
                key={colorIndex}
                color={color}
                colorAction={colorAction}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
  colorAction: PropTypes.func
}

export default Card;