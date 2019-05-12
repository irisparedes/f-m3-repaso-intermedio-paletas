import React from 'react';
import PropTypes from 'prop-types';

class Color extends React.Component {
  render() {
    const {color, colorAction} = this.props;
    return (
      <li 
        className="card__color" 
        style={{backgroundColor: `#${color}`}}
        onClick={colorAction}
      >
        {color}
      </li>
    );
  }
}

Color.propTypes = {
  color: PropTypes.string,
  colorAction: PropTypes.func
}

export default Color;