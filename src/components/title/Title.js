import React from 'react';
import './Title.scss';
import PropTypes from 'prop-types';



function Title(props) {
  const {greeting, name } = props;
  return (
    <div className='title'>
      <span className='subtitle greeting'>
        {greeting}
      </span>
      <span className='name'>
        {name}
      </span>
      <span className='subtitle'>
        I like _____
      </span>
      <div className='border'>
        <span class='helper'></span>
        <img alt='Portrait of Manuel' src={window.location.origin + '/manny450.png'} />
      </div>

    </div>
  );
}

Title.propTypes = { 
  greeting: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired

}
export default Title;
